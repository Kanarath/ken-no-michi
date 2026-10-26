/* Ken no Michi — aplicación (sin dependencias, sin servidor) */
(function () {
  'use strict';
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const ico = (n, c) => KArt.icon(n, c);

  /* ---------- Datos derivados ---------- */
  const LESSONS = {}, ORDER = [];
  KD.modules.forEach(m => m.lessons.forEach((l, i) => { l.mod = m; l.n = i; LESSONS[l.id] = l; ORDER.push(l); }));

  /* ---------- Estado (localStorage, con fallback en memoria) ---------- */
  const KEY = 'ken-no-michi-v1';
  const def = () => ({ done: {}, q: {}, cards: {}, log: [], theme: 'auto', last: null });
  function load() {
    try { const j = JSON.parse(localStorage.getItem(KEY)); return Object.assign(def(), j && typeof j === 'object' ? j : {}); } catch (e) { return def(); }
  }
  let S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* sin almacenamiento */ } }

  function xpParts() {
    const lessons = Object.keys(S.done).filter(id => LESSONS[id]).length;
    const quiz = Object.values(S.q).filter(x => x && x.ok > 0).length;
    const cards = Object.values(S.cards).filter(v => v >= 1).length;
    const mods = KD.modules.filter(m => m.lessons.every(l => S.done[l.id])).length;
    const logs = S.log.length;
    return { lessons, quiz, cards, mods, logs, total: lessons * KD.XP.lesson + quiz * KD.XP.quiz + cards * KD.XP.card + mods * KD.XP.module + logs * KD.XP.log };
  }
  function levelOf(xp) {
    let i = 0;
    KD.levels.forEach((l, k) => { if (xp >= l.xp) i = k; });
    const cur = KD.levels[i], next = KD.levels[i + 1] || null;
    return { i, cur, next, pct: next ? Math.round(100 * (xp - cur.xp) / (next.xp - cur.xp)) : 100 };
  }
  function gain(before, msg) {
    const after = xpParts().total, d = after - before;
    const lb = levelOf(before).i, la = levelOf(after).i;
    if (la > lb) toast('🎌 ¡Nuevo nivel de estudio: ' + KD.levels[la].n + '!');
    else if (d > 0) toast((msg ? msg + ' · ' : '') + '+' + d + ' XP');
    else if (msg) toast(msg);
    paintTop();
  }
  let toastT;
  function toast(t) {
    const el = $('#toast'); el.textContent = t; el.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), 2600);
  }

  /* ---------- Cabecera y navegación ---------- */
  const NAV = [['inicio', 'Inicio', 'home'], ['ruta', 'Ruta', 'book'], ['quiz', 'Quiz', 'quiz'], ['entrenar', 'Entrenar', 'drum'], ['glosario', 'Glosario', 'torii'], ['atlas', 'Atlas', 'men'], ['progreso', 'Progreso', 'chart']];
  function paintTop() {
    const lv = levelOf(xpParts().total);
    $('#top').innerHTML = `<div class="in"><a class="brand" href="#/inicio" aria-label="Ken no Michi, inicio">${KArt.logo(38, true)}<span><b>Ken no Michi</b><small>剣の道 · KENDŌ</small></span></a>` +
      `<nav class="nav" aria-label="Secciones">${NAV.map(n => `<a href="#/${n[0]}" data-nav="${n[0]}">${n[1]}</a>`).join('')}</nav>` +
      `<a class="lvl" href="#/progreso" title="Tu nivel de estudio">${esc(lv.cur.n)} · <b>${xpParts().total}</b> XP</a></div>`;
    markNav();
  }
  function paintBottom() {
    const main = NAV.slice(0, 4).map(n => `<a href="#/${n[0]}" data-nav="${n[0]}">${ico(n[2])}<span>${n[1]}</span></a>`).join('');
    $('#bottom').innerHTML = main + `<button type="button" id="moreBtn" aria-expanded="false" aria-controls="more">${ico('gear')}<span>Más</span></button>` +
      `<div class="more" id="more">${NAV.slice(4).map(n => `<a href="#/${n[0]}">${n[1]}</a>`).join('')}</div>`;
  }
  function markNav() {
    const v = route().v;
    $$('[data-nav]').forEach(a => a.classList.toggle('on', a.dataset.nav === v || (v === 'leccion' && a.dataset.nav === 'ruta') || (v === 'tarjetas' && a.dataset.nav === 'glosario')));
  }

  /* ---------- Router ---------- */
  function route() {
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    const parts = h.split('/');
    return { v: parts[0] || 'inicio', a: parts.slice(1).join('/') };
  }
  const VIEWS = { inicio: viewHome, ruta: viewPath, leccion: viewLesson, quiz: viewQuiz, tarjetas: viewCards, glosario: viewGlossary, entrenar: viewTrain, atlas: viewAtlas, progreso: viewProgress };
  function render() {
    const r = route();
    const fn = VIEWS[r.v] || viewHome;
    const app = $('#app');
    app.innerHTML = fn(r.a);
    const after = app.__after; app.__after = null;
    wireInteractive(app);
    if (after) after();
    markNav();
    window.scrollTo(0, 0);
    document.title = (app.dataset.title ? app.dataset.title + ' · ' : '') + 'Ken no Michi';
    $('#more') && $('#more').classList.remove('open');
  }
  function setTitle(t) { $('#app').dataset.title = t; }
  window.addEventListener('hashchange', () => { Z = null; F = null; render(); });

  /* ---------- Bloques de contenido ---------- */
  function blocks(bs) {
    return bs.map(b => {
      let h = '';
      if (b.h) h += `<h3>${b.h}</h3>`;
      if (b.p) h += [].concat(b.p).map(x => `<p>${x}</p>`).join('');
      if (b.ul) h += `<ul>${b.ul.map(x => `<li>${x}</li>`).join('')}</ul>`;
      if (b.ol) h += `<ol>${b.ol.map(x => `<li>${x}</li>`).join('')}</ol>`;
      if (b.tip) h += `<aside class="note"><b>Consejo</b>${b.tip}</aside>`;
      if (b.warn) h += `<aside class="note warn"><b>Ojo</b>${b.warn}</aside>`;
      return `<section class="blk">${h}</section>`;
    }).join('');
  }
  const modDone = m => m.lessons.filter(l => S.done[l.id]).length;
  const tick = on => `<span class="tick ${on ? 'on' : ''}">${on ? ico('check') : ''}</span>`;
  const seal = (m, on) => `<span class="seal ${on ? '' : 'off'}" title="${esc(m.name)}">${m.seal}</span>`;

  /* ---------- Vista: Inicio ---------- */
  function viewHome() {
    setTitle('');
    const xp = xpParts().total, lv = levelOf(xp);
    const next = (S.last && LESSONS[S.last] && !S.done[S.last]) ? LESSONS[S.last] : ORDER.find(l => !S.done[l.id]);
    const tip = KD.tips[Math.floor(Math.random() * KD.tips.length)];
    const word = KD.glossary[Math.floor(Math.random() * KD.glossary.length)];
    return `<section class="hero"><div><h1>Ken no Michi <span class="kanji">剣の道</span></h1>
      <p>El camino de la espada, paso a paso: del primer saludo a las técnicas de respuesta. Con ilustraciones, vocabulario, quizzes y entrenamientos para casa. Sin prisas, sin rachas y sin presión.</p>
      <div class="row">${next ? `<a class="btn" href="#/leccion/${next.id}">${ico('book')} ${S.done[ORDER[0].id] || S.last ? 'Seguir' : 'Empezar'}: ${esc(next.t)}</a>` : `<a class="btn" href="#/quiz">${ico('quiz')} Repasar con un quiz</a>`}
      <a class="btn ghost" href="#/ruta">Ver toda la ruta</a></div></div>
      <div class="logo" aria-hidden="true">${KArt.logo(150, true)}</div></section>
      <div class="card level" style="margin-top:16px"><span class="seal">${esc(lv.cur.jp.charAt(0))}</span><div class="xp"><div class="row" style="justify-content:space-between"><b class="serif">${esc(lv.cur.n)}</b><span class="small muted">${xp} XP${lv.next ? ' · siguiente: ' + esc(lv.next.n) + ' a los ' + lv.next.xp : ' · nivel máximo de estudio'}</span></div><div class="bar" role="progressbar" aria-valuenow="${lv.pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${lv.pct}%"></i></div></div></div>
      <h2>Qué quieres hacer hoy</h2>
      <div class="grid g3">
        <a class="card tile" href="#/ruta">${ico('book')}<b>Ruta de aprendizaje</b><span class="small muted">${ORDER.length} lecciones en ${KD.modules.length} módulos, abiertas desde el principio.</span></a>
        <a class="card tile" href="#/quiz">${ico('quiz')}<b>Quiz</b><span class="small muted">${KD.quiz.length}+ preguntas, con imágenes. Rondas de 10, las que quieras.</span></a>
        <a class="card tile" href="#/entrenar">${ico('drum')}<b>Entrenar en casa</b><span class="small muted">Rutinas, contador, metrónomo y diario de correcciones.</span></a>
        <a class="card tile" href="#/atlas">${ico('men')}<b>Atlas visual</b><span class="small muted">Todas las ilustraciones juntas: zonas, equipo, guardias, pies…</span></a>
        <a class="card tile" href="#/glosario">${ico('torii')}<b>Glosario</b><span class="small muted">${KD.glossary.length} términos con kanji. También como tarjetas.</span></a>
        <a class="card tile" href="#/progreso">${ico('chart')}<b>Progreso</b><span class="small muted">Tus sellos, XP y copia de seguridad.</span></a>
      </div>
      <div class="grid g2" style="margin-top:16px">
        <div class="card"><span class="pill">Palabra al azar</span><h3 style="margin:.4em 0 0;color:var(--ink)">${esc(word.t)} <span class="kanji" style="color:var(--red)">${esc(word.k)}</span></h3><p class="muted">${esc(word.e)}</p></div>
        <div class="card"><span class="pill">Consejo del dōjō</span><p class="serif" style="font-size:1.2rem;margin:.6em 0 0">${esc(tip)}</p></div>
      </div>
      <h2>Tus módulos</h2>
      <div class="grid g2">${KD.modules.map(m => { const d = modDone(m), t = m.lessons.length; return `<a class="card mod tile" href="#/ruta">${seal(m, d === t)}<div><b>${esc(m.name)}</b><div class="small muted">${d} de ${t} lecciones</div><div class="bar" style="margin-top:6px"><i style="width:${Math.round(100 * d / t)}%"></i></div></div></a>`; }).join('')}</div>
      ${foot()}`;
  }
  const foot = () => `<footer class="foot">Esta web es una ayuda para estudiar. No sustituye a tu sensei: si algo de aquí choca con lo que te enseñan en tu dōjō, manda tu dōjō.<br>Los niveles de la web (kyū y dan de estudio) no son grados oficiales.</footer>`;

  /* ---------- Vista: Ruta ---------- */
  function viewPath() {
    setTitle('Ruta');
    return `<h1>Ruta de aprendizaje</h1><p class="muted">Siete módulos, de lo básico a lo avanzado. Todo está abierto: estudia en el orden que quieras (el recomendado es de arriba abajo). Cada lección que marques como estudiada te da XP, una sola vez.</p>
      <div class="grid">${KD.modules.map(m => {
      const d = modDone(m), t = m.lessons.length;
      return `<section class="card mod">${seal(m, d === t)}<div><h2 style="margin:0"><span class="kanji">${m.jp}</span> · ${esc(m.name.split('·')[0].trim())}</h2><p class="muted" style="margin:.2em 0">${esc(m.desc)}</p><div class="row small muted"><span>${d} / ${t} lecciones</span><div class="bar" style="width:140px"><i style="width:${Math.round(100 * d / t)}%"></i></div></div>
        <ul class="lesson-list">${m.lessons.map(l => `<li><a href="#/leccion/${l.id}">${tick(S.done[l.id])}<span>${esc(l.t)}</span><span class="jp">${esc(l.jp)}</span></a></li>`).join('')}</ul>
        <div style="margin-top:10px"><a class="btn ghost small" href="#/quiz/jugar/module:${m.id}">${ico('quiz')} Quiz de este módulo</a></div></div></section>`;
    }).join('')}</div>${foot()}`;
  }

  /* ---------- Vista: Lección ---------- */
  function viewLesson(id) {
    const L = LESSONS[id];
    if (!L) return `<h1>No encuentro esa lección</h1><p><a class="btn" href="#/ruta">Volver a la ruta</a></p>`;
    setTitle(L.t);
    S.last = id; save();
    const idx = ORDER.indexOf(L), prev = ORDER[idx - 1], nextL = ORDER[idx + 1];
    const done = !!S.done[id];
    return `<div class="crumb"><a href="#/ruta">Ruta</a> › ${esc(L.mod.name)}</div>
      <header class="lesson-head"><div class="jp">${esc(L.jp)}</div><h1>${esc(L.t)}</h1><div class="muted">${esc(L.sub || '')}</div></header>
      ${(L.art || []).map(a => KArt.get(a)).join('')}
      <p class="lead">${L.intro}</p>
      ${blocks(L.blocks)}
      ${L.terms && L.terms.length ? `<h3>Vocabulario de esta lección</h3><div class="chips">${L.terms.map(t => `<a class="chip" href="#/glosario/${encodeURIComponent(t[0].split(' / ')[0])}"><b>${esc(t[0])}</b> <small>${esc(t[1])}</small></a>`).join('')}</div>` : ''}
      ${L.practice ? `<aside class="practice"><h3>Para el dōjō y para casa</h3><ul>${L.practice.map(p => `<li>${p}</li>`).join('')}</ul></aside>` : ''}
      <div class="done-bar"><button class="btn ${done ? 'ghost' : 'red'}" data-act="done" data-id="${id}">${done ? '✓ Estudiada (toca para desmarcar)' : 'Marcar como estudiada · +' + KD.XP.lesson + ' XP'}</button><a class="btn ghost" href="#/quiz/jugar/lesson:${id}">${ico('quiz')} Practicar</a></div>
      <div class="lesson-nav">${prev ? `<a class="btn ghost" href="#/leccion/${prev.id}">← ${esc(prev.t)}</a>` : '<span></span>'}${nextL ? `<a class="btn" href="#/leccion/${nextL.id}">${esc(nextL.t)} →</a>` : `<a class="btn" href="#/progreso">Ver tu progreso →</a>`}</div>
      ${foot()}`;
  }

  /* ---------- Ilustraciones interactivas ---------- */
  function wireInteractive(root) {
    $$('.art.interactive', root).forEach(box => {
      const kind = box.dataset.kind, info = KD.parts[kind];
      if (!info) return;
      const svg = $('svg', box);
      const keys = Object.keys(info).filter(k => svg.querySelector(`[data-part="${k}"],[data-zone="${k}"]`));
      const chips = document.createElement('div'); chips.className = 'chips';
      chips.innerHTML = keys.map(k => `<button type="button" class="chip" data-k="${k}">${esc(info[k].n)}</button>`).join('');
      const pi = document.createElement('div'); pi.className = 'partinfo'; pi.innerHTML = `<span class="muted">${KD.partsTitles[kind] || 'Toca una parte'}</span>`;
      box.appendChild(chips); box.appendChild(pi);
      const pick = k => {
        $$('.sel', svg).forEach(e => e.classList.remove('sel'));
        $$('.chip', chips).forEach(c => c.classList.toggle('on', c.dataset.k === k));
        $$(`[data-part="${k}"],[data-zone="${k}"]`, svg).forEach(e => e.classList.add('sel'));
        const d = info[k]; pi.innerHTML = `<b>${esc(d.n)}</b><span class="jp">${esc(d.jp)}</span><p>${esc(d.d)}</p>`;
      };
      svg.addEventListener('click', e => { const t = e.target.closest('[data-part],[data-zone]'); if (!t) return; const k = t.dataset.part || t.dataset.zone; if (info[k]) pick(k); });
      chips.addEventListener('click', e => { const b = e.target.closest('[data-k]'); if (b) pick(b.dataset.k); });
    });
  }

  /* ---------- Quiz ---------- */
  let Z = null; // estado de la ronda
  function buildVisual() {
    const out = [];
    const kamae = [['chudan', 'Chūdan'], ['jodan', 'Jōdan'], ['gedan', 'Gedan'], ['hasso', 'Hassō'], ['waki', 'Waki']];
    kamae.forEach(k => out.push({ id: 'v-kamae-' + k[0], cat: 'visual', q: '¿Qué guardia (kamae) es esta?', a: [k[1]].concat(shuffle(kamae.filter(x => x[0] !== k[0]).map(x => x[1])).slice(0, 3)), why: 'Es ' + k[1] + '.', lesson: 'kamae-5', fig: () => `<div class="art one small">${KArt.solo(k[0], 'Guardia')}</div>` }));
    const zones = [['men', 'Men'], ['yokomen', 'Yokomen'], ['kote', 'Kote'], ['do', 'Dō'], ['tsuki', 'Tsuki']];
    zones.forEach(z => out.push({ id: 'v-zona-' + z[0], cat: 'visual', q: '¿Cómo se llama la zona de golpeo marcada en rojo?', a: [z[1]].concat(shuffle(zones.filter(x => x[0] !== z[0]).map(x => x[1])).slice(0, 3)), why: KD.parts.zones[z[0]].d, lesson: 'datotsu-yuko', fig: () => `<div class="art one small qzone z-${z[0]}">${KArt.front('zones')}</div>` }));
    const bogu = [['men', 'Men'], ['kote', 'Kote'], ['do', 'Dō'], ['tare', 'Tare']];
    bogu.forEach(b => out.push({ id: 'v-bogu-' + b[0], cat: 'visual', q: '¿Qué pieza del bōgu está resaltada?', a: [b[1]].concat(shuffle(bogu.filter(x => x[0] !== b[0]).map(x => x[1]))), why: KD.parts.bogu[b[0]].d, lesson: 'bogu', fig: () => `<div class="art one small qsel" data-sel='[data-part="${b[0]}"]'>${KArt.front('bogu')}</div>` }));
    const mparts = [['mengane', 'Men-gane'], ['menbuton', 'Men-buton'], ['tsukidare', 'Tsuki-dare'], ['menhimo', 'Men-himo']];
    mparts.forEach(b => out.push({ id: 'v-men-' + b[0], cat: 'visual', q: '¿Qué parte del men está resaltada?', a: [b[1]].concat(shuffle(mparts.filter(x => x[0] !== b[0]).map(x => x[1]))), why: KD.parts.bogu[b[0]].d, lesson: 'bogu', fig: () => `<div class="art one small qsel" data-sel='[data-part="${b[0]}"]'>${KArt.front('bogu')}</div>` }));
    const sp = [['tsuka', 'Tsuka'], ['tsuba', 'Tsuba'], ['tsuru', 'Tsuru'], ['nakayui', 'Nakayui'], ['sakigawa', 'Saki-gawa'], ['datotsubu', 'Datotsu-bu'], ['tsubadome', 'Tsuba-dome']];
    sp.forEach(b => out.push({ id: 'v-shinai-' + b[0], cat: 'visual', q: '¿Qué parte del shinai está resaltada?', a: [b[1]].concat(shuffle(sp.filter(x => x[0] !== b[0]).map(x => x[1])).slice(0, 3)), why: KD.parts.shinai[b[0]].d, lesson: 'shinai', fig: () => `<div class="art one qsel" data-sel='[data-part="${b[0]}"]'>${KArt.shinai()}</div>` }));
    return out;
  }
  KD.visual = buildVisual();
  const ALLQ = () => KD.quiz.concat(KD.visual);

  function poolFor(mode) {
    const all = ALLQ();
    const [k, v] = mode.split(':');
    let p;
    if (k === 'cat') p = all.filter(q => q.cat === v);
    else if (k === 'visual') p = KD.visual;
    else if (k === 'fails') p = all.filter(q => S.q[q.id] && S.q[q.id].last === false);
    else if (k === 'lesson') { p = all.filter(q => q.lesson === v); if (p.length < 3) { const L = LESSONS[v]; p = all.filter(q => L && q.lesson && LESSONS[q.lesson] && LESSONS[q.lesson].mod === L.mod); } }
    else if (k === 'module') p = all.filter(q => q.lesson && LESSONS[q.lesson] && LESSONS[q.lesson].mod.id === v);
    else p = all;
    return p;
  }
  function pickRound(pool) {
    const w = q => { const s = S.q[q.id]; return (!s ? 0 : s.last === false ? -1 : 1 + Math.min(s.ok, 5)) + Math.random() * 1.6; };
    return pool.slice().sort((a, b) => w(a) - w(b)).slice(0, 10);
  }
  function startRound(mode) {
    const pool = poolFor(mode);
    Z = { mode, round: pickRound(pool), i: 0, ok: 0, ans: null };
    prep();
  }
  function prep() { const q = Z.round[Z.i]; if (q) Z.cur = Object.assign({}, q, { opts: shuffle(q.a) }); }

  function viewQuiz(a) {
    if (a && a.indexOf('jugar/') === 0) {
      const mode = a.slice(6);
      if (!Z || Z.mode !== mode) startRound(mode);
      return quizPlay();
    }
    setTitle('Quiz');
    const all = ALLQ();
    const seen = all.filter(q => S.q[q.id] && S.q[q.id].ok > 0).length;
    const fails = all.filter(q => S.q[q.id] && S.q[q.id].last === false).length;
    const cats = Object.keys(KD.quizCats).filter(c => c !== 'visual');
    return `<h1>Quiz</h1><p class="muted">Rondas de 10 preguntas. Salen primero las que aún no has acertado. No hay límite de rondas ni de intentos: puedes repetir cuando quieras. Has acertado ${seen} de ${all.length} preguntas distintas (la primera vez que aciertas una, ganas ${KD.XP.quiz} XP).</p>
      <div class="grid g2">
        <a class="card tile" href="#/quiz/jugar/all">${ico('quiz')}<b>Mixto</b><span class="small muted">Preguntas de todas las categorías.</span></a>
        <a class="card tile" href="#/quiz/jugar/visual">${ico('men')}<b>Visual</b><span class="small muted">Reconoce guardias, zonas, piezas del bōgu y partes del shinai.</span></a>
        <a class="card tile" href="#/quiz/jugar/fails" ${fails ? '' : 'style="opacity:.55"'}>${ico('flag')}<b>Repasar fallos</b><span class="small muted">${fails ? fails + ' pregunta(s) pendientes de repasar.' : 'Aún no tienes fallos que repasar.'}</span></a>
        <a class="card tile" href="#/tarjetas">${ico('book')}<b>Tarjetas de vocabulario</b><span class="small muted">Memoriza términos japoneses a tu ritmo.</span></a>
      </div>
      <h2>Por categoría</h2>
      <div class="row">${cats.map(c => `<a class="chip" href="#/quiz/jugar/cat:${c}">${esc(KD.quizCats[c])} <small>${KD.quiz.filter(q => q.cat === c).length}</small></a>`).join('')}</div>
      ${foot()}`;
  }
  function quizPlay() {
    setTitle('Quiz');
    if (!Z.round.length) return `<h1>Sin preguntas</h1><p class="muted">No hay preguntas para este modo todavía (o ya no te quedan fallos pendientes).</p><a class="btn" href="#/quiz">Volver</a>`;
    if (Z.i >= Z.round.length) {
      const pct = Math.round(100 * Z.ok / Z.round.length);
      const msg = pct === 100 ? '¡Ronda perfecta!' : pct >= 70 ? 'Muy bien.' : pct >= 40 ? 'Buen progreso. Repasa las lecciones de los fallos.' : 'No pasa nada: así es como se aprende.';
      return `<div class="result card"><span class="pill">Ronda terminada</span><div class="score">${Z.ok}/${Z.round.length}</div><p class="serif" style="font-size:1.2rem">${msg}</p>
        <div class="row" style="justify-content:center"><button class="btn red" data-act="again">Otra ronda</button><a class="btn ghost" href="#/quiz/jugar/fails">Repasar fallos</a><a class="btn ghost" href="#/quiz">Menú</a></div></div>${foot()}`;
    }
    const q = Z.cur, n = Z.i + 1, N = Z.round.length;
    const answered = Z.ans != null;
    $('#app').__after = () => { $$('.qsel').forEach(b => { const s = $(b.dataset.sel, b); if (s) s.classList.add('sel'); }); };
    return `<div class="q-head"><a class="btn ghost small" href="#/quiz">←</a><div class="bar"><i style="width:${Math.round(100 * Z.i / N)}%"></i></div><span class="small muted">${n}/${N}</span></div>
      ${q.fig ? q.fig() : ''}
      <div class="question">${esc(q.q)}</div>
      <div class="opts">${q.opts.map((o, k) => {
      let cls = '';
      if (answered) { if (o === q.a[0]) cls = 'ok'; else if (k === Z.ans) cls = 'bad'; }
      return `<button class="opt ${cls}" data-act="ans" data-k="${k}" ${answered ? 'disabled' : ''}>${esc(o)}</button>`;
    }).join('')}</div>
      ${answered ? `<div class="feedback ${Z.good ? 'ok' : 'bad'}"><b>${Z.good ? '¡Correcto!' : 'No era esa.'}</b> ${esc(q.why || '')}${!Z.good ? ` <br>La respuesta es <b>${esc(q.a[0])}</b>.` : ''}${q.lesson && LESSONS[q.lesson] ? ` <a href="#/leccion/${q.lesson}">Repasar: ${esc(LESSONS[q.lesson].t)}</a>` : ''}</div>
      <div class="row" style="margin-top:14px"><button class="btn" data-act="next">${n === N ? 'Ver resultado' : 'Siguiente'} →</button></div>` : ''}`;
  }

  /* ---------- Tarjetas ---------- */
  let F = null;
  function viewCards(a) {
    setTitle('Tarjetas');
    const cats = Object.keys(KD.catNames);
    const cat = a || 'todas';
    if (!F || F.cat !== cat) {
      const list = KD.glossary.filter(g => cat === 'todas' || g.c === cat);
      F = { cat, deck: shuffle(list).sort((x, y) => (S.cards[x.id] ? 1 : 0) - (S.cards[y.id] ? 1 : 0)), i: 0, flip: false };
    }
    const known = F.deck.filter(g => S.cards[g.id]).length;
    const head = `<h1>Tarjetas de vocabulario</h1><p class="muted">Toca la tarjeta para ver el significado. Marca "La sabía" para ganar ${KD.XP.card} XP (una vez por término). Sin límites ni contadores de racha.</p>
      <div class="row" style="margin-bottom:6px"><a class="chip ${cat === 'todas' ? 'on' : ''}" href="#/tarjetas">Todas</a>${cats.map(c => `<a class="chip ${cat === c ? 'on' : ''}" href="#/tarjetas/${c}">${esc(KD.catNames[c])}</a>`).join('')}</div>`;
    if (!F.deck.length) return head + '<p>No hay términos en esta categoría.</p>';
    if (F.i >= F.deck.length) return head + `<div class="card result"><div class="score">${known}/${F.deck.length}</div><p>Dominas ${known} de ${F.deck.length} términos de esta selección.</p><div class="row" style="justify-content:center"><button class="btn red" data-act="fc-restart">Volver a barajar</button><a class="btn ghost" href="#/glosario">Ver glosario</a></div></div>`;
    const g = F.deck[F.i];
    return head + `<div class="small muted" style="text-align:center">${F.i + 1} de ${F.deck.length} · ${known} sabidas</div>
      <div class="flash"><div class="face" data-act="flip" role="button" tabindex="0" aria-label="Girar tarjeta">${F.flip ? `<div class="t">${esc(g.t)}</div><div class="k">${esc(g.k)}</div><div class="e">${esc(g.e)}</div>` : `<div class="k">${esc(g.k)}</div><div class="t">${esc(g.t)}</div><div class="hint">Toca para ver el significado</div>`}</div></div>
      <div class="row" style="justify-content:center">${F.flip ? `<button class="btn" data-act="fc-yes">La sabía</button><button class="btn ghost" data-act="fc-no">Repasar</button>` : `<button class="btn ghost" data-act="flip">Girar</button>`}</div>`;
  }

  /* ---------- Glosario ---------- */
  function viewGlossary(a) {
    setTitle('Glosario');
    const cats = Object.keys(KD.catNames);
    $('#app').__after = () => {
      const inp = $('#gq'), box = $('#glist');
      let cat = 'todas';
      const upd = () => {
        const q = inp.value.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
        const rows = KD.glossary.filter(g => (cat === 'todas' || g.c === cat) &&
          (!q || (g.t + ' ' + g.k + ' ' + g.e).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').indexOf(q) >= 0));
        box.innerHTML = rows.length ? rows.map(g => `<div class="it"><b>${esc(g.t)}</b><span class="k">${esc(g.k)}</span><p>${esc(g.e)}</p><span class="cat">${esc(KD.catNames[g.c])}</span></div>`).join('') : '<p class="muted">Nada coincide. Prueba otra palabra.</p>';
        $('#gcount').textContent = rows.length + ' término' + (rows.length === 1 ? '' : 's');
      };
      inp.addEventListener('input', upd);
      $$('[data-gc]').forEach(c => c.addEventListener('click', () => { cat = c.dataset.gc; $$('[data-gc]').forEach(x => x.classList.toggle('on', x === c)); upd(); }));
      upd();
    };
    return `<h1>Glosario</h1><p class="muted">Busca por término, kanji o significado (no hace falta escribir las tildes).</p>
      <input id="gq" class="search" type="search" placeholder="Buscar: chūdan, 面, guardia…" value="${esc(a || '')}" autocomplete="off">
      <div class="row" style="margin-top:10px"><button class="chip on" data-gc="todas">Todos</button>${cats.map(c => `<button class="chip" data-gc="${c}">${esc(KD.catNames[c])}</button>`).join('')}</div>
      <div class="row small muted" style="margin:10px 0 0;justify-content:space-between"><span id="gcount"></span><a href="#/tarjetas">Practicar con tarjetas →</a></div>
      <div class="gl" id="glist"></div>${foot()}`;
  }

  /* ---------- Atlas ---------- */
  function viewAtlas() {
    setTitle('Atlas');
    const items = [
      ['Zonas de golpeo', 'zones', 'datotsu-yuko'], ['El bōgu', 'bogu', 'bogu'], ['El shinai', 'shinai', 'shinai'], ['Keikogi y hakama', 'wear', 'keikogi-hakama'],
      ['Los cinco kamae', 'kamae5', 'kamae-5'], ['Saludos y posturas de etiqueta', 'rei', 'saludos'], ['El agarre (tenouchi)', 'grip', 'tenouchi'],
      ['Men-uchi', 'strip:men', 'men'], ['Kote-uchi', 'strip:kote', 'kote'], ['Dō-uchi', 'strip:do', 'do'], ['Tsuki', 'strip:tsuki', 'tsuki'],
      ['Okuri-ashi', 'footwork:okuri', 'ashi-sabaki'], ['Ayumi-ashi', 'footwork:ayumi', 'ashi-sabaki'], ['Hiraki-ashi', 'footwork:hiraki', 'ashi-sabaki'], ['Tsugi-ashi', 'footwork:tsugi', 'ashi-sabaki'], ['Fumikomi-ashi', 'footwork:fumikomi', 'ashi-sabaki'],
      ['Las tres distancias (ma-ai)', 'maai', 'maai'], ['Esquiva lateral (nuki-waza)', 'topview:nuki', 'oji-waza'], ['Jōdan', 'solo:jodan', 'jodan']
    ];
    return `<h1>Atlas visual</h1><p class="muted">Todas las ilustraciones en un solo sitio. Toca una imagen para ver la lección completa; en las interactivas, toca las partes.</p>
      ${items.map(i => `<section><h2>${i[0]} <a class="small" href="#/leccion/${i[2]}">lección →</a></h2>${KArt.get(i[1])}</section>`).join('')}${foot()}`;
  }

  /* ---------- Entrenar ---------- */
  let tab = 'rutinas';
  const RS = {}; // pasos marcados en cada rutina (solo sesión)
  const CT = { n: 0, goal: 30 };
  const MT = { bpm: 60, on: false, t: null, ctx: null, beat: 0 };
  function viewTrain(a) {
    setTitle('Entrenar');
    if (a) tab = a;
    const tabs = [['rutinas', 'Rutinas'], ['herramientas', 'Contador y metrónomo'], ['diario', 'Diario']];
    let body = '';
    if (tab === 'rutinas') body = trainRoutines();
    else if (tab === 'herramientas') body = trainTools();
    else body = trainLog();
    return `<h1>Entrenar en casa</h1><p class="muted">Rutinas cortas, un contador, un metrónomo y un diario. Nada te obliga a entrenar todos los días: aquí solo se suma, nunca se resta.</p>
      <div class="note warn"><b>Antes de empezar</b>Espacio libre de al menos 3 × 3 m y techo alto (cuidado con lámparas). Descalzo o con calzado antideslizante, sin objetos cerca. Calienta primero. Si algo duele, para. Y enséñale a tu sensei lo que practicas: es mejor repetir poco y bien corregido que mucho con vicios.</div>
      <div class="tabs" role="tablist">${tabs.map(t => `<button role="tab" class="${tab === t[0] ? 'on' : ''}" data-act="tab" data-t="${t[0]}">${t[1]}</button>`).join('')}</div>${body}${foot()}`;
  }
  function trainRoutines() {
    return `<div class="grid g2">${KD.routines.map(r => {
      const st = RS[r.id] || (RS[r.id] = {});
      return `<section class="card routine"><div class="row" style="justify-content:space-between"><h3>${esc(r.t)}</h3><span class="pill">${r.min} min</span></div><p class="muted small">${esc(r.desc)}</p>
        <ul class="steps">${r.steps.map((s, i) => `<li class="${st[i] ? 'on' : ''}" data-act="step" data-r="${r.id}" data-i="${i}"><span class="tick ${st[i] ? 'on' : ''}">${st[i] ? ico('check') : ''}</span><span class="nm">${esc(s[0])}</span><span class="am">${esc(s[1])}</span>${s[2] ? `<span class="hn">${esc(s[2])}</span>` : ''}</li>`).join('')}</ul>
        <button class="btn small" data-act="routine-done" data-r="${r.id}">Registrar en el diario (+${KD.XP.log} XP)</button></section>`;
    }).join('')}</div>`;
  }
  function trainTools() {
    return `<div class="grid g2"><section class="card counter"><h3>Contador de repeticiones</h3><p class="muted small">Toca el círculo en cada golpe. Objetivo opcional: te avisa al llegar, sin presión.</p>
      <div class="n" id="ctn">${CT.n}</div><div class="small muted" id="ctg">${CT.goal ? 'Objetivo: ' + CT.goal : 'Sin objetivo'}</div>
      <button class="tap" id="ctap" data-act="ct-add">Golpe</button>
      <div class="row" style="justify-content:center"><button class="btn ghost small" data-act="ct-sub">−1</button><button class="btn ghost small" data-act="ct-reset">Reiniciar</button>
      <label class="small">Objetivo <input type="number" min="0" max="999" value="${CT.goal}" data-act="ct-goal" style="width:72px;padding:6px;border-radius:8px;border:2px solid var(--line);background:var(--card);color:var(--ink)"></label></div></section>
      <section class="card counter"><h3>Metrónomo</h3><p class="muted small">Para marcar el ritmo de tus suburi o de tus pasos. Un pitido por golpe.</p>
      <div class="n" id="mtn">${MT.bpm}</div><div class="small muted">golpes por minuto</div>
      <input type="range" min="30" max="160" value="${MT.bpm}" data-act="mt-bpm" style="width:80%;margin:14px 0" aria-label="Golpes por minuto">
      <div class="row" style="justify-content:center"><button class="btn ${MT.on ? 'ghost' : 'red'}" data-act="mt-toggle" id="mtb">${MT.on ? 'Parar' : 'Empezar'}</button></div></section></div>`;
  }
  function trainLog() {
    const mins = S.log.reduce((s, x) => s + (+x.min || 0), 0);
    const today = new Date().toISOString().slice(0, 10);
    return `<div class="grid g3" style="margin-bottom:14px"><div class="card stat"><b>${S.log.length}</b><span>sesiones registradas</span></div><div class="card stat"><b>${mins}</b><span>minutos en total</span></div><div class="card stat"><b>${S.log.length * KD.XP.log}</b><span>XP por práctica</span></div></div>
      <div class="grid g2"><form class="card" data-act="log-form"><h3 style="margin-top:0">Anotar una práctica</h3>
        <div class="field"><label for="ld">Fecha</label><input type="date" id="ld" value="${today}" required></div>
        <div class="field"><label for="lm">Minutos</label><input type="number" id="lm" min="1" max="600" value="15" required></div>
        <div class="field"><label for="lt">Tipo</label><select id="lt"><option>Suburi en casa</option><option>Pies y postura</option><option>Clase en el dōjō</option><option>Estudio (lecciones, vídeo)</option><option>Otro</option></select></div>
        <div class="field"><label for="ln">Qué me ha corregido el sensei / qué he aprendido</label><textarea id="ln" placeholder="Ej.: Mano izquierda más abajo; el pie izquierdo debe seguir al derecho…"></textarea></div>
        <button class="btn red" type="submit">Guardar (+${KD.XP.log} XP)</button></form>
        <div><h3 style="margin-top:0">Tus anotaciones</h3>${S.log.length ? S.log.slice().sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id).slice(0, 40).map(x => `<div class="log-item"><div><b>${new Date(x.date + 'T12:00').toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</b> · ${esc(x.type)} · ${x.min} min</div><button class="btn ghost small" data-act="log-del" data-id="${x.id}" aria-label="Borrar anotación">Borrar</button>${x.notes ? `<div class="nt">${esc(x.notes)}</div>` : ''}</div>`).join('') : '<p class="muted">Aún no hay nada. Cuando entrenes o tengas clase, apunta aquí lo que aprendes: dentro de unos meses será oro.</p>'}</div></div>`;
  }
  function beep() {
    try {
      MT.ctx = MT.ctx || new (window.AudioContext || window.webkitAudioContext)();
      const o = MT.ctx.createOscillator(), g = MT.ctx.createGain();
      o.frequency.value = (MT.beat++ % 4 === 0) ? 1040 : 760; g.gain.value = .22;
      o.connect(g); g.connect(MT.ctx.destination); o.start(); g.gain.exponentialRampToValueAtTime(.001, MT.ctx.currentTime + .09); o.stop(MT.ctx.currentTime + .1);
    } catch (e) { /* sin audio */ }
  }
  function mtRestart() { clearInterval(MT.t); if (MT.on) { beep(); MT.t = setInterval(beep, 60000 / MT.bpm); } }
  window.addEventListener('hashchange', () => { if (route().v !== 'entrenar' && MT.on) { MT.on = false; clearInterval(MT.t); } });

  /* ---------- Progreso ---------- */
  function viewProgress() {
    setTitle('Progreso');
    const p = xpParts(), lv = levelOf(p.total), all = ALLQ();
    const tr = Object.values(S.q).filter(x => x && x.ok > 0).length;
    return `<h1>Tu progreso</h1>
      <div class="card level"><span class="seal">${esc(lv.cur.jp.charAt(0))}</span><div class="xp"><div class="row" style="justify-content:space-between"><b class="serif" style="font-size:1.4rem">${esc(lv.cur.n)}</b><span class="small muted">${p.total} XP${lv.next ? ' · próximo: ' + esc(lv.next.n) + ' (' + lv.next.xp + ')' : ''}</span></div><div class="bar"><i style="width:${lv.pct}%"></i></div></div></div>
      <p class="small muted">Los niveles de estudio (kyū → dan) son solo una forma de seguir tu avance en esta web. No son grados oficiales ni sustituyen a un examen.</p>
      <h2>Sellos</h2><div class="grid g3">${KD.modules.map(m => { const d = modDone(m); return `<div class="card mod">${seal(m, d === m.lessons.length)}<div><b>${esc(m.name.split('·')[0].trim())}</b><div class="small muted">${d}/${m.lessons.length} lecciones${d === m.lessons.length ? ' · ¡completo!' : ''}</div></div></div>`; }).join('')}</div>
      <h2>De dónde sale tu XP</h2>
      <div class="grid g3"><div class="card stat"><b>${p.lessons}/${ORDER.length}</b><span>lecciones estudiadas (+${p.lessons * KD.XP.lesson})</span></div><div class="card stat"><b>${tr}/${all.length}</b><span>preguntas acertadas (+${p.quiz * KD.XP.quiz})</span></div><div class="card stat"><b>${p.cards}/${KD.glossary.length}</b><span>términos sabidos (+${p.cards * KD.XP.card})</span></div><div class="card stat"><b>${p.mods}/${KD.modules.length}</b><span>módulos completos (+${p.mods * KD.XP.module})</span></div><div class="card stat"><b>${p.logs}</b><span>prácticas anotadas (+${p.logs * KD.XP.log})</span></div></div>
      <h2>Ajustes y copia de seguridad</h2>
      <div class="card"><div class="field"><label for="th">Tema</label><select id="th" data-act="theme"><option value="auto" ${S.theme === 'auto' ? 'selected' : ''}>Automático (según tu dispositivo)</option><option value="light" ${S.theme === 'light' ? 'selected' : ''}>Claro</option><option value="dark" ${S.theme === 'dark' ? 'selected' : ''}>Oscuro</option></select></div>
      <p class="small muted">Tu progreso se guarda solo en este navegador. Para pasarlo al móvil u otro ordenador, exporta un archivo e impórtalo allí.</p>
      <div class="row"><button class="btn" data-act="export">Exportar progreso</button><label class="btn ghost" style="cursor:pointer">Importar<input type="file" accept="application/json" data-act="import" hidden></label><button class="btn ghost" data-act="reset">Borrar todo</button></div></div>${foot()}`;
  }

  /* ---------- Eventos ---------- */
  document.addEventListener('click', e => {
    const mb = e.target.closest('#moreBtn');
    if (mb) { const m = $('#more'); m.classList.toggle('open'); mb.setAttribute('aria-expanded', m.classList.contains('open')); return; }
    if (!e.target.closest('#more')) $('#more') && $('#more').classList.remove('open');
    const t = e.target.closest('[data-act]');
    if (!t || t.tagName === 'FORM' || t.tagName === 'INPUT' || t.tagName === 'SELECT') return;
    const act = t.dataset.act, before = xpParts().total;
    const redo = () => { const y = window.scrollY; render(); window.scrollTo(0, y); };
    switch (act) {
      case 'done': {
        const id = t.dataset.id, L = LESSONS[id];
        if (S.done[id]) { delete S.done[id]; save(); render(); paintTop(); break; }
        const mWas = L.mod.lessons.every(x => S.done[x.id]);
        S.done[id] = Date.now(); save();
        render();
        const mNow = L.mod.lessons.every(x => S.done[x.id]);
        gain(before, !mWas && mNow ? '🔴 ¡Sello de módulo conseguido!' : 'Lección estudiada');
        break;
      }
      case 'ans': {
        if (Z.ans != null) break;
        const q = Z.cur, k = +t.dataset.k, good = q.opts[k] === q.a[0];
        Z.ans = k; Z.good = good; if (good) Z.ok++;
        const s = S.q[q.id] || (S.q[q.id] = { ok: 0, bad: 0, last: null });
        if (good) s.ok++; else s.bad++; s.last = good; save();
        const keep = window.scrollY; render(); window.scrollTo(0, keep);
        gain(before);
        break;
      }
      case 'next': Z.i++; Z.ans = null; prep(); render(); break;
      case 'again': startRound(Z.mode); render(); break;
      case 'flip': F.flip = !F.flip; redo(); break;
      case 'fc-yes': { const g = F.deck[F.i]; S.cards[g.id] = 1; save(); F.i++; F.flip = false; redo(); gain(before); break; }
      case 'fc-no': { const g = F.deck[F.i]; delete S.cards[g.id]; save(); F.i++; F.flip = false; redo(); break; }
      case 'fc-restart': { const c = F.cat; F = null; location.hash = '#/tarjetas' + (c === 'todas' ? '' : '/' + c); render(); break; }
      case 'tab': tab = t.dataset.t; redo(); break;
      case 'step': { const st = RS[t.dataset.r] || (RS[t.dataset.r] = {}); st[t.dataset.i] = !st[t.dataset.i]; redo(); break; }
      case 'routine-done': {
        const r = KD.routines.find(x => x.id === t.dataset.r);
        S.log.push({ id: Date.now(), date: new Date().toISOString().slice(0, 10), min: r.min, type: 'Rutina: ' + r.t, notes: '' }); save(); RS[r.id] = {};
        redo(); gain(before, 'Práctica anotada'); break;
      }
      case 'ct-add': CT.n++; $('#ctn').textContent = CT.n; if (navigator.vibrate) navigator.vibrate(12); if (CT.goal && CT.n === CT.goal) { toast('¡Objetivo de ' + CT.goal + ' alcanzado!'); if (navigator.vibrate) navigator.vibrate([60, 40, 60]); } break;
      case 'ct-sub': CT.n = Math.max(0, CT.n - 1); $('#ctn').textContent = CT.n; break;
      case 'ct-reset': CT.n = 0; $('#ctn').textContent = 0; break;
      case 'mt-toggle': MT.on = !MT.on; mtRestart(); redo(); break;
      case 'log-del': if (confirm('¿Borrar esta anotación?')) { S.log = S.log.filter(x => x.id !== +t.dataset.id); save(); redo(); paintTop(); } break;
      case 'export': {
        const blob = new Blob([JSON.stringify({ app: 'ken-no-michi', v: 1, data: S }, null, 2)], { type: 'application/json' });
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'ken-no-michi-progreso.json'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
        break;
      }
      case 'reset': if (confirm('Se borrará todo tu progreso en este navegador. ¿Seguro?')) { S = def(); save(); applyTheme(); render(); paintTop(); toast('Progreso borrado'); } break;
    }
  });
  document.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-act="flip"][role="button"]')) { e.preventDefault(); e.target.click(); } });
  document.addEventListener('input', e => {
    const t = e.target;
    if (t.dataset.act === 'mt-bpm') { MT.bpm = +t.value; $('#mtn').textContent = MT.bpm; if (MT.on) mtRestart(); }
    if (t.dataset.act === 'ct-goal') { CT.goal = Math.max(0, +t.value || 0); $('#ctg').textContent = CT.goal ? 'Objetivo: ' + CT.goal : 'Sin objetivo'; }
  });
  document.addEventListener('change', e => {
    const t = e.target;
    if (t.dataset.act === 'theme') { S.theme = t.value; save(); applyTheme(); }
    if (t.dataset.act === 'import' && t.files[0]) {
      const fr = new FileReader();
      fr.onload = () => {
        try {
          const j = JSON.parse(fr.result), d = j && j.data;
          if (!d || typeof d !== 'object' || !d.done || !Array.isArray(d.log)) throw new Error('formato');
          S = Object.assign(def(), d); save(); applyTheme(); render(); paintTop(); toast('Progreso importado');
        } catch (err) { toast('Ese archivo no parece una copia de Ken no Michi'); }
      };
      fr.readAsText(t.files[0]);
    }
  });
  document.addEventListener('submit', e => {
    const f = e.target.closest('[data-act="log-form"]');
    if (!f) return;
    e.preventDefault();
    const before = xpParts().total;
    S.log.push({ id: Date.now(), date: $('#ld').value, min: Math.max(1, +$('#lm').value || 1), type: $('#lt').value, notes: $('#ln').value.trim() });
    save(); render(); gain(before, 'Práctica anotada');
  });

  function applyTheme() {
    const r = document.documentElement;
    if (S.theme === 'light' || S.theme === 'dark') r.dataset.theme = S.theme; else r.removeAttribute('data-theme');
  }

  /* ---------- Arranque ---------- */
  applyTheme(); paintTop(); paintBottom(); render();
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register('sw.js').catch(() => { });
})();
