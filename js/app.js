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
  /* Disciplina activa: kendō o iaidō */
  const discOf = m => m.disc || 'kendo';
  const DISC = () => (S && S.disc === 'iaido') ? 'iaido' : 'kendo';
  const discMods = () => KD.modules.filter(m => discOf(m) === DISC());
  const ORDERD = () => ORDER.filter(l => discOf(l.mod) === DISC());
  const inDisc = q => (q.lesson && LESSONS[q.lesson]) ? discOf(LESSONS[q.lesson].mod) === DISC() : DISC() === 'kendo';
  const SHARED = new Set(['rei', 'ritsurei', 'zarei', 'seiza', 'mokuso', 'shomen', 'shinzen', 'sensei', 'dojo', 'kata', 'shisei', 'metsuke', 'enzan-no-metsuke', 'tenouchi', 'hasuji', 'kiai', 'zanshin', 'ki-ken-tai-ichi', 'hakama', 'keikogi-dogi', 'himo', 'tsuba', 'tsuka', 'tsuka-gashira', 'kensen', 'sonkyo', 'jodan-no-kamae', 'chudan-no-kamae', 'gedan-no-kamae', 'hasso-no-kamae', 'waki-gamae', 'kamae', 'ma-ai', 'bokuto-bokken', 'shu-ha-ri', 'fudoshin', 'mushin', 'heijoshin', 'onegaishimasu', 'arigato-gozaimashita', 'nafuda', 'ashi-sabaki', 'shinogi', 'taito']);
  const inGl = g => g.d === 'iaido' ? DISC() === 'iaido' : (DISC() === 'kendo' || SHARED.has(g.id));

  /* ---------- Estado (localStorage, con fallback en memoria) ---------- */
  const KEY = 'ken-no-michi-v1';
  const def = () => ({ done: {}, q: {}, cards: {}, log: [], theme: 'auto', last: null, open: {}, checks: {}, disc: 'kendo' });
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

  /* ---------- Pronunciación (voz japonesa del dispositivo) ---------- */
  function speak(txt) {
    try {
      if (!('speechSynthesis' in window)) { toast('Tu navegador no puede leer en voz alta'); return; }
      const vs = speechSynthesis.getVoices();
      const ja = vs.find(v => /^ja/i.test(v.lang));
      if (vs.length && !ja) toast('No hay voz japonesa: Ajustes › Sistema › Idioma › Salida de texto a voz');
      const u = new SpeechSynthesisUtterance(txt); u.lang = 'ja-JP'; u.rate = .85;
      if (ja) u.voice = ja;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    } catch (e) { /* sin voz */ }
  }
  const say = g => `<button type="button" class="say" data-act="say" data-t="${esc(g.k.split(' / ')[0])}" aria-label="Escuchar ${esc(g.t)}">${ico('sound')}</button>`;

  /* ---------- Instalación como app (PWA) ---------- */
  let DEF = null;
  const standalone = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone;
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); DEF = e; if (['inicio', 'progreso'].indexOf(route().v) >= 0) render(); });
  window.addEventListener('appinstalled', () => { DEF = null; toast('¡App instalada!'); render(); });

  /* ---------- Cabecera y navegación ---------- */
  const NAV = [['inicio', 'Camino', 'torii'], ['quiz', 'Repaso', 'quiz'], ['atlas', 'Colección', 'book'], ['entrenar', 'Dōjō', 'swords']];
  const NAVMAP = { inicio: 'inicio', leccion: 'inicio', ruta: 'inicio', quiz: 'quiz', tarjetas: 'quiz', atlas: 'atlas', glosario: 'atlas', entrenar: 'entrenar', progreso: 'entrenar' };
  const sealsDone = () => discMods().filter(m => m.lessons.every(l => S.done[l.id])).length;
  function paintTop() {
    const xp = xpParts().total, lv = levelOf(xp);
    const jp = lv.cur.jp.length > 2 ? lv.cur.jp.slice(0, 2) : lv.cur.jp;
    $('#top').innerHTML = `<div class="in"><a class="badge" href="#/progreso" aria-label="Tu nivel: ${esc(lv.cur.n)}">${esc(jp)}</a>` +
      `<a class="who" href="#/progreso"><b>${esc(lv.cur.n)}</b><small>Nivel de estudio</small></a>` +
      `<div class="xpbar"><div class="bar" role="progressbar" aria-valuenow="${lv.pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${lv.pct}%"></i></div><small>${xp}${lv.next ? ' / ' + lv.next.xp : ''} XP</small></div>` +
      `<a class="sealpill" href="#/progreso" title="Sellos de módulo conseguidos">${ico('star')}${sealsDone()}/${discMods().length}</a></div>` +
      `<div class="in disc"><div class="dsw" role="tablist" aria-label="Disciplina"><button role="tab" class="${DISC() === 'kendo' ? 'on' : ''}" data-act="disc" data-d="kendo" aria-selected="${DISC() === 'kendo'}">Kendō 剣道</button><button role="tab" class="${DISC() === 'iaido' ? 'on' : ''}" data-act="disc" data-d="iaido" aria-selected="${DISC() === 'iaido'}">Iaidō 居合道</button></div></div>`;
  }
  function paintBottom() {
    $('#bottom').innerHTML = `<div class="in">${NAV.map(n => `<a href="#/${n[0]}" data-nav="${n[0]}">${ico(n[2])}<span>${n[1]}</span></a>`).join('')}</div>`;
  }
  function markNav() {
    const v = NAVMAP[route().v] || 'inicio';
    $$('[data-nav]').forEach(a => { a.classList.toggle('on', a.dataset.nav === v); if (a.dataset.nav === v) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  }
  const seg = (items, active) => `<div class="seg">${items.map(i => `<a class="${i[2] === active ? 'on' : ''}" href="${i[0]}">${i[1]}</a>`).join('')}</div>`;
  const segRepaso = a => seg([['#/quiz', 'Quiz', 'quiz'], ['#/tarjetas', 'Tarjetas', 'tarjetas']], a);
  const segColeccion = a => seg([['#/atlas', 'Atlas', 'atlas'], ['#/glosario', 'Glosario', 'glosario']], a);
  const segDojo = a => seg([['#/entrenar', 'Entrenar', 'entrenar'], ['#/progreso', 'Progreso', 'progreso']], a);

  /* ---------- Router ---------- */
  function route() {
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    const parts = h.split('/');
    return { v: parts[0] || 'inicio', a: parts.slice(1).join('/') };
  }
  const VIEWS = { inicio: viewHome, ruta: viewHome, leccion: viewLesson, quiz: viewQuiz, tarjetas: viewCards, glosario: viewGlossary, entrenar: viewTrain, atlas: viewAtlas, progreso: viewProgress };
  function render() {
    const r = route();
    const fn = VIEWS[r.v] || viewHome;
    const app = $('#app');
    document.body.classList.toggle('focus', r.v === 'leccion' || (r.v === 'quiz' && r.a.indexOf('jugar') === 0));
    app.innerHTML = fn(r.a);
    const after = app.__after; app.__after = null;
    wireInteractive(app);
    if (after) after();
    markNav();
    window.scrollTo(0, 0);
    document.title = (app.dataset.title ? app.dataset.title + ' · ' : '') + 'Ken no Michi';
  }
  function setTitle(t) { $('#app').dataset.title = t; }
  window.addEventListener('hashchange', () => { Z = null; F = null; render(); });

  /* ---------- Bloques de contenido ---------- */
  function blocks(bs, lid) {
    return bs.map(b => {
      const chk = (S.checks && S.checks[lid]) || {};
      let h = '';
      if (b.h) h += `<h3>${b.h}</h3>`;
      if (b.p) h += [].concat(b.p).map(x => `<p>${x}</p>`).join('');
      if (b.ul) h += `<ul>${b.ul.map(x => `<li>${x}</li>`).join('')}</ul>`;
      if (b.ol) h += `<ol>${b.ol.map(x => `<li>${x}</li>`).join('')}</ol>`;
      if (b.ifthen) h += `<ul class="errs ifs">${b.ifthen.map(e => `<li><b>Si ${e[0]}</b><span>→ ${e[1]}</span></li>`).join('')}</ul>`;
      if (b.err) h += `<ul class="errs">${b.err.map(e => `<li><b>✗ ${e[0]}</b><span>✓ ${e[1]}</span></li>`).join('')}</ul>`;
      if (b.check) h += `<ul class="checks">${b.check.map((c, i) => `<li class="${chk[i] ? 'on' : ''}" data-act="chk" data-l="${lid}" data-i="${i}"><span class="tick ${chk[i] ? 'on' : ''}">${chk[i] ? ico('check') : ''}</span><span>${c}</span></li>`).join('')}</ul>`;
      if (b.tip) h += `<aside class="note"><b>Consejo</b>${b.tip}</aside>`;
      if (b.warn) h += `<aside class="note warn"><b>Ojo</b>${b.warn}</aside>`;
      return `<section class="blk">${h}</section>`;
    }).join('');
  }
  const modDone = m => m.lessons.filter(l => S.done[l.id]).length;
  const foot = () => `<footer class="foot">Esta web es una ayuda para estudiar. No sustituye a tu sensei: si algo de aquí choca con lo que te enseñan en tu dōjō, manda tu dōjō.<br>Los niveles de la web (kyū y dan de estudio) no son grados oficiales.</footer>`;

  /* ---------- Vista: Camino (inicio) ---------- */
  function nextLesson() { return (S.last && LESSONS[S.last] && discOf(LESSONS[S.last].mod) === DISC() && !S.done[S.last]) ? LESSONS[S.last] : ORDERD().find(l => !S.done[l.id]); }
  function viewHome() {
    setTitle('');
    const next = nextLesson();
    const tipsL = DISC() === 'iaido' ? KD.tipsIai : KD.tips; const tip = tipsL[Math.floor(Math.random() * tipsL.length)];
    const nextMod = next ? next.mod : null;
    const isOpen = m => (S.open && S.open[m.id] !== undefined) ? S.open[m.id] : (m === nextMod || (!nextMod && m === discMods()[discMods().length - 1]));
    const installBox = (DEF && !standalone()) ? `<div class="install">${ico('install')}<p><b>Instala la app</b> en tu móvil: se abre a pantalla completa y funciona sin conexión.</p><button class="btn small" data-act="install">Instalar</button></div>` : '';
    return `<div class="mascot-row">${KArt.mascot(DISC() === "iaido")}<div class="bubble">${esc(tip)}</div></div>
      <a class="card todo" href="#/quiz/jugar/all">${ico('cup', 'big')}<div><b>Repaso rápido</b><span class="muted small">10 preguntas cuando quieras. Sin límites.</span></div><span class="chev">${ico('chev')}</span></a>
      ${installBox}
      ${next ? `<a class="card next" href="#/leccion/${next.id}"><span class="orb">${esc(next.jp.charAt(0))}</span><div><small>${S.last && S.done[ORDERD()[0].id] ? 'Siguiente lección' : 'Empieza aquí'}</small><b>${esc(next.t)}</b></div><span class="go">Ir ›</span></a>` : `<div class="card"><b>¡Has completado toda la ruta!</b><p class="muted">Repasa con quizzes y tarjetas, o entrena en el Dōjō.</p></div>`}
      ${discMods().map(m => {
      const d = modDone(m), t = m.lessons.length, open = isOpen(m);
      return `<section><button class="modhead" data-act="mod" data-m="${m.id}" aria-expanded="${open}"><div><h2>${m.jp} · ${esc(m.name.split('·')[1] ? m.name.split('·')[1].trim() : m.name)}</h2><p>${esc(m.name.split('·')[0].trim())}</p></div><span class="pill">${d}/${t} ${ico(open ? 'down' : 'chev')}</span></button>
        <div class="path" ${open ? '' : 'hidden'}>${m.lessons.map((l, i) => {
        const done = !!S.done[l.id], cls = ['', 'r', 'i', 'r i'][i % 4];
        return `<a class="node ${cls}" href="#/leccion/${l.id}"><span class="orb ${done ? 'done' : ''}">${done ? ico('check') : esc(l.jp.charAt(0))}</span><span><b>${esc(l.t)}</b><small>${esc(l.sub || '')}</small><em class="${done ? 'ok' : ''}">${done ? 'HECHA' : 'NUEVA'}</em></span></a>`;
      }).join('')}
        <a class="node ${['', 'r', 'i', 'r i'][t % 4]}" href="#/quiz/jugar/module:${m.id}"><span class="orb quiz">${ico('quiz')}</span><span><b>Repaso del módulo</b><small>Preguntas de ${esc(m.name.split('·')[0].trim())}</small><em>QUIZ</em></span></a></div></section>`;
    }).join('')}
      <p class="muted small" style="text-align:center;margin-top:22px">Todas las lecciones están abiertas: entra por donde quieras.</p>${foot()}`;
  }

  /* ---------- Vista: Lección ---------- */
  function viewLesson(id) {
    const L = LESSONS[id];
    if (!L) return `<h1>No encuentro esa lección</h1><p><a class="btn" href="#/inicio">Volver al camino</a></p>`;
    setTitle(L.t);
    S.last = id; save();
    if (S.disc !== discOf(L.mod)) { S.disc = discOf(L.mod); save(); applyDisc(); paintTop(); }
    const OD = ORDERD(), idx = OD.indexOf(L), prev = OD[idx - 1], nextL = OD[idx + 1];
    const done = !!S.done[id];
    const mpct = Math.round(100 * modDone(L.mod) / L.mod.lessons.length);
    return `<div class="lhead"><a class="x" href="#/inicio" aria-label="Volver al camino">${ico('x')}</a><div class="bar" aria-label="Progreso del módulo"><i style="width:${mpct}%"></i></div><span class="xpt">${done ? '✓ HECHA' : '+' + KD.XP.lesson + ' XP'}</span></div>
      <header class="lesson-title"><div class="jp">${esc(L.jp)}</div><h1>${esc(L.t)}</h1><div class="muted">${esc(L.sub || '')}</div></header>
      ${(L.art || []).map(a => KArt.get(a)).join('')}
      <p class="lead">${L.intro}</p>
      ${blocks(L.blocks, id)}
      ${L.terms && L.terms.length ? `<h3>Vocabulario de esta lección</h3><div class="chips">${L.terms.map(t => `<a class="chip" href="#/glosario/${encodeURIComponent(t[0].split(' / ')[0])}"><b>${esc(t[0])}</b> <small>${esc(t[1])}</small></a>`).join('')}</div>` : ''}
      ${L.practice ? `<aside class="practice"><h3>Para el dōjō y para casa</h3><ul>${L.practice.map(p => `<li>${p}</li>`).join('')}</ul></aside>` : ''}
      <div class="lnav">${prev ? `<a class="btn ghost small" href="#/leccion/${prev.id}">‹ ${esc(prev.t)}</a>` : '<span></span>'}${nextL ? `<a class="btn ghost small" href="#/leccion/${nextL.id}">${esc(nextL.t)} ›</a>` : ''}</div>
      ${foot()}
      <div class="cta"><div class="in">
        <a class="btn ghost" href="#/quiz/jugar/lesson:${id}" aria-label="Practicar con preguntas">${ico('quiz')}</a>
        ${done
        ? `<button class="btn ghost" data-act="done" data-id="${id}">Desmarcar</button>${nextL ? `<a class="btn green" href="#/leccion/${nextL.id}">Siguiente ›</a>` : `<a class="btn green" href="#/progreso">Ver progreso ›</a>`}`
        : `<button class="btn green" data-act="done" data-id="${id}">Terminar lección</button>`}
      </div></div>`;
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
      const pi = document.createElement('div'); pi.className = 'partinfo'; pi.innerHTML = `<span style="opacity:.7">${KD.partsTitles[kind] || 'Toca una parte'}</span>`;
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

  /* ---------- Repaso: quiz ---------- */
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
    // Secuencias de técnica: ¿qué técnica es?
    const seqLesson = { men: 'men', yokomen: 'yokomen', kote: 'kote', do: 'do', tsuki: 'tsuki', 'kote-men': 'kote-men', 'debana-kote': 'debana-kote', 'debana-men': 'debana-men', 'harai-men': 'harai-men', 'hiki-men': 'hiki-men', 'hiki-do': 'hiki-do', 'men-nuki-do': 'men-nuki-do', 'kote-suriage-men': 'kote-suriage-men', 'men-kaeshi-do': 'men-kaeshi-do', 'dou-uchiotoshi-men': 'do-uchiotoshi-men', 'men-do': 'patrones-combate', 'seme-kote': 'seme' };
    const sk = Object.keys(KArt.SEQ).filter(k => KArt.SEQ[k].quiz && seqLesson[k]);
    sk.forEach(k => out.push({ id: 'v-seq-' + k, cat: 'visual', q: '¿Qué técnica muestra esta secuencia? (desliza las imágenes)', a: [KArt.SEQ[k].t].concat(shuffle(sk.filter(x => x !== k).map(x => KArt.SEQ[x].t)).slice(0, 3)), why: 'Es ' + KArt.SEQ[k].t + '.', lesson: seqLesson[k], fig: () => KArt.get('seq:' + k) }));
    // Iaidō: partes de la katana y fases
    const kp = [['kashira', 'Kashira'], ['tsuka', 'Tsuka'], ['tsuba', 'Tsuba'], ['habaki', 'Habaki'], ['kissaki', 'Kissaki'], ['saya', 'Saya'], ['koiguchi', 'Koiguchi'], ['kurikata', 'Kurikata'], ['sageo', 'Sageo'], ['kojiri', 'Kojiri']];
    kp.forEach(b => out.push({ id: 'v-katana-' + b[0], cat: 'visual', q: '¿Qué parte de la katana o de la saya está resaltada?', a: [b[1]].concat(shuffle(kp.filter(x => x[0] !== b[0]).map(x => x[1])).slice(0, 3)), why: KD.parts.katana[b[0]].d, lesson: 'ia-katana', fig: () => `<div class="art one qsel" data-sel='[data-part="${b[0]}"]'>${KArt.katana()}</div>` }));
    const ph = [['iaiNuki', 'Nukitsuke (desenvainar y cortar)'], ['iaiKiri', 'Kiritsuke (corte final)'], ['iaiChiburi', 'Chiburi (sacudida de la hoja)'], ['iaiNoto', 'Nōtō (envainar)'], ['iaiTachi', 'Taitō (espada en el obi)']];
    ph.forEach(p => out.push({ id: 'v-iai-' + p[0], cat: 'visual', q: '¿Qué fase del iaidō muestra la figura?', a: [p[1]].concat(shuffle(ph.filter(x => x[0] !== p[0]).map(x => x[1])).slice(0, 3)), why: 'Es ' + p[1] + '.', lesson: 'ia-secuencia', fig: () => `<div class="art one small">${KArt.solo(p[0], 'Fase del iaidō')}</div>` }));
    const po = [['iaiSeiza', 'Seiza'], ['iaiTatehiza', 'Tatehiza'], ['iaiTachi', 'De pie (tachi)']];
    po.forEach(p => out.push({ id: 'v-iaipos-' + p[0], cat: 'visual', q: '¿Qué postura de iaidō es esta?', a: [p[1]].concat(shuffle(po.filter(x => x[0] !== p[0]).map(x => x[1]))).concat(['Sonkyō']), why: 'Es ' + p[1] + '.', lesson: 'ia-seiza', fig: () => `<div class="art one small">${KArt.solo(p[0], 'Postura')}</div>` }));
    // Errores de chūdan
    const errs = [['chudanLean', 'Cuerpo inclinado hacia delante'], ['chudanFlat', 'Talón izquierdo apoyado en el suelo'], ['chudanHigh', 'Kensen demasiado alto'], ['chudanLow', 'Kensen demasiado bajo']];
    errs.forEach(e => out.push({ id: 'v-err-' + e[0], cat: 'visual', q: '¿Qué error de chūdan se ve en la figura?', a: [e[1]].concat(shuffle(errs.filter(x => x[0] !== e[0]).map(x => x[1]))), why: 'Compáralo con tu chūdan frente al espejo.', lesson: 'chudan-ajustes', fig: () => `<div class="art one small">${KArt.solo(e[0], 'Error de chūdan')}</div>` }));
    return out;
  }
  KD.visual = buildVisual();
  const ALLQ = () => KD.quiz.concat(KD.visual).filter(inDisc);

  function poolFor(mode) {
    const all = ALLQ();
    const [k, v] = mode.split(':');
    let p;
    if (k === 'cat') p = all.filter(q => q.cat === v);
    else if (k === 'visual') p = KD.visual.filter(inDisc);
    else if (k === 'fails') p = all.filter(q => S.q[q.id] && S.q[q.id].last === false);
    else if (k === 'due') p = all.filter(q => isDue(q));
    else if (k === 'lesson') { p = all.filter(q => q.lesson === v); if (p.length < 3) { const L = LESSONS[v]; p = all.filter(q => L && q.lesson && LESSONS[q.lesson] && LESSONS[q.lesson].mod === L.mod); } }
    else if (k === 'module') p = all.filter(q => q.lesson && LESSONS[q.lesson] && LESSONS[q.lesson].mod.id === v);
    else p = all;
    return p;
  }
  const DAY = 864e5, INTV = [0, 1, 3, 7, 14, 30].map(d => d * DAY);
  function isDue(q) {
    const s = S.q[q.id];
    if (!s || s.last === null || s.last === undefined) return false;
    if (s.last === false) return true;
    return Date.now() >= (s.t || 0) + INTV[Math.min(s.box || 0, 5)];
  }
  function dueScore(q) {
    const s = S.q[q.id];
    if (!s) return 0 + Math.random();
    if (s.last === false) return -2 + Math.random();
    if (isDue(q)) return -1 + Math.random();
    return 5 + ((s.t || 0) + INTV[Math.min(s.box || 0, 5)] - Date.now()) / DAY + Math.random();
  }
  function pickRound(pool) {
    const w = q => dueScore(q);
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
    setTitle('Repaso');
    const all = ALLQ();
    const seen = all.filter(q => S.q[q.id] && S.q[q.id].ok > 0).length;
    const fails = all.filter(q => S.q[q.id] && S.q[q.id].last === false).length;
    const due = all.filter(q => isDue(q)).length;
    const cats = Object.keys(KD.quizCats).filter(c => c !== 'visual' && all.some(q => q.cat === c));
    const mode = (href, icon, t, s, dim) => `<a class="card mode" href="${href}" ${dim ? 'style="opacity:.6"' : ''}><span class="orb">${ico(icon)}</span><div><b>${t}</b><small>${s}</small></div><span class="chev">${ico('chev')}</span></a>`;
    return `${segRepaso('quiz')}<h1>Repaso</h1><p class="muted">Rondas de 10 preguntas, sin límite de rondas ni de intentos. Salen primero las que aún no has acertado. Llevas ${seen} de ${all.length} preguntas acertadas (la primera vez que aciertas una, ganas ${KD.XP.quiz} XP).</p>
      <div class="grid">
        ${mode('#/quiz/jugar/all', 'quiz', 'Mixto', 'Preguntas de todas las categorías')}
        ${mode('#/quiz/jugar/visual', 'men', 'Visual', 'Guardias, zonas, piezas del bōgu y del shinai')}
        ${mode('#/quiz/jugar/due', 'cup', 'Toca repasar', due ? due + ' pregunta(s) listas para repasar (repetición espaciada)' : 'Nada pendiente por ahora', !due)}
        ${mode('#/quiz/jugar/fails', 'flag', 'Repasar fallos', fails ? fails + ' pregunta(s) pendientes' : 'Aún no tienes fallos que repasar', !fails)}
      </div>
      <h2>Por categoría</h2>
      <div class="row">${cats.map(c => `<a class="chip" href="#/quiz/jugar/cat:${c}">${esc(KD.quizCats[c])} <small>${all.filter(q => q.cat === c).length}</small></a>`).join('')}</div>${foot()}`;
  }
  function quizPlay() {
    setTitle('Repaso');
    if (!Z.round.length) return `<div class="qtop"><a class="x" href="#/quiz" aria-label="Salir">${ico('x')}</a></div><h1>Sin preguntas</h1><p class="muted">No hay preguntas para este modo todavía (o ya no te quedan fallos pendientes).</p><a class="btn" href="#/quiz">Volver</a>`;
    if (Z.i >= Z.round.length) {
      const pct = Math.round(100 * Z.ok / Z.round.length);
      const msg = pct === 100 ? '¡Ronda perfecta!' : pct >= 70 ? 'Muy bien.' : pct >= 40 ? 'Buen progreso. Repasa las lecciones de los fallos.' : 'No pasa nada: así es como se aprende.';
      return `<div class="qtop"><a class="x" href="#/quiz" aria-label="Salir">${ico('x')}</a><div class="bar"><i style="width:100%"></i></div></div><div class="result card"><span class="pill">Ronda terminada</span><div class="score">${Z.ok}/${Z.round.length}</div><p class="serif" style="font-size:1.2rem">${msg}</p>
        <div class="grid" style="margin-top:14px"><button class="btn block green" data-act="again">Otra ronda</button><a class="btn block ghost" href="#/quiz/jugar/fails">Repasar fallos</a><a class="btn block ghost" href="#/quiz">Menú</a></div></div>`;
    }
    const q = Z.cur, n = Z.i + 1, N = Z.round.length;
    const answered = Z.ans != null;
    $('#app').__after = () => { $$('.qsel').forEach(b => { const s = $(b.dataset.sel, b); if (s) s.classList.add('sel'); }); };
    return `<div class="qtop"><a class="x" href="#/quiz" aria-label="Salir del quiz">${ico('x')}</a><div class="bar"><i style="width:${Math.round(100 * Z.i / N)}%"></i></div><span class="small muted">${n}/${N}</span></div>
      ${q.fig ? q.fig() : ''}
      <div class="question">${esc(q.q)}</div>
      <div class="opts">${q.opts.map((o, k) => {
      let cls = '';
      if (answered) { if (o === q.a[0]) cls = 'ok'; else if (k === Z.ans) cls = 'bad'; }
      return `<button class="opt ${cls}" data-act="ans" data-k="${k}" ${answered ? 'disabled' : ''}>${esc(o)}</button>`;
    }).join('')}</div>
      ${answered ? `<div style="height:170px"></div><div class="sheet ${Z.good ? 'ok' : 'bad'}"><div class="in"><h3>${Z.good ? '¡Correcto!' : 'No era esa'}</h3><p>${esc(q.why || '')}${!Z.good ? ` La respuesta es <b>${esc(q.a[0])}</b>.` : ''}${q.lesson && LESSONS[q.lesson] ? ` <a href="#/leccion/${q.lesson}">Repasar: ${esc(LESSONS[q.lesson].t)}</a>` : ''}</p><button class="btn block ${Z.good ? 'green' : ''}" data-act="next">${n === N ? 'Ver resultado' : 'Continuar'}</button></div></div>` : ''}`;
  }

  /* ---------- Repaso: tarjetas ---------- */
  let F = null;
  function viewCards(a) {
    setTitle('Tarjetas');
    const cats = Object.keys(KD.catNames);
    const cat = a || 'todas';
    if (!F || F.cat !== cat) {
      const list = KD.glossary.filter(g => inGl(g) && (cat === 'todas' || g.c === cat));
      F = { cat, deck: shuffle(list).sort((x, y) => (S.cards[x.id] ? 1 : 0) - (S.cards[y.id] ? 1 : 0)), i: 0, flip: false };
    }
    const known = F.deck.filter(g => S.cards[g.id]).length;
    const head = `${segRepaso('tarjetas')}<h1>Tarjetas</h1><p class="muted">Toca la tarjeta para ver el significado. "La sabía" da ${KD.XP.card} XP (una vez por término). Sin límites ni rachas.</p>
      <div class="row" style="margin-bottom:6px"><a class="chip ${cat === 'todas' ? 'on' : ''}" href="#/tarjetas">Todas</a>${cats.map(c => `<a class="chip ${cat === c ? 'on' : ''}" href="#/tarjetas/${c}">${esc(KD.catNames[c])}</a>`).join('')}</div>`;
    if (!F.deck.length) return head + '<p>No hay términos en esta categoría.</p>';
    if (F.i >= F.deck.length) return head + `<div class="card result"><div class="score">${known}/${F.deck.length}</div><p>Dominas ${known} de ${F.deck.length} términos de esta selección.</p><div class="grid"><button class="btn block green" data-act="fc-restart">Volver a barajar</button><a class="btn block ghost" href="#/glosario">Ver glosario</a></div></div>`;
    const g = F.deck[F.i];
    return head + `<div class="small muted" style="text-align:center">${F.i + 1} de ${F.deck.length} · ${known} sabidas</div>
      <div class="flash"><div class="face" data-act="flip" role="button" tabindex="0" aria-label="Girar tarjeta">${F.flip ? `<div class="t">${esc(g.t)}</div><div class="k">${esc(g.k)}</div><div class="e">${esc(g.e)}</div>${say(g)}` : `<div class="k">${esc(g.k)}</div><div class="t">${esc(g.t)}</div>${say(g)}<div class="hint">Toca para ver el significado</div>`}</div></div>
      <div class="grid">${F.flip ? `<button class="btn block green" data-act="fc-yes">La sabía</button><button class="btn block ghost" data-act="fc-no">Repasar</button>` : `<button class="btn block ghost" data-act="flip">Girar</button>`}</div>`;
  }

  /* ---------- Colección: glosario ---------- */
  function viewGlossary(a) {
    setTitle('Glosario');
    const cats = Object.keys(KD.catNames);
    $('#app').__after = () => {
      const inp = $('#gq'), box = $('#glist');
      let cat = 'todas';
      const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
      const upd = () => {
        const q = norm(inp.value.trim());
        const rows = KD.glossary.filter(g => inGl(g) && (cat === 'todas' || g.c === cat) && (!q || norm(g.t + ' ' + g.k + ' ' + g.e).indexOf(q) >= 0));
        box.innerHTML = rows.length ? rows.map(g => `<div class="it"><b>${esc(g.t)} ${say(g)}</b><span class="k">${esc(g.k)}</span><p>${esc(g.e)}</p><span class="cat">${esc(KD.catNames[g.c])}</span></div>`).join('') : '<p class="muted">Nada coincide. Prueba otra palabra.</p>';
        $('#gcount').textContent = rows.length + ' término' + (rows.length === 1 ? '' : 's');
      };
      inp.addEventListener('input', upd);
      $$('[data-gc]').forEach(c => c.addEventListener('click', () => { cat = c.dataset.gc; $$('[data-gc]').forEach(x => x.classList.toggle('on', x === c)); upd(); }));
      upd();
    };
    return `${segColeccion('glosario')}<h1>Glosario</h1><p class="muted">Busca por término, kanji o significado (no hace falta escribir las tildes).</p>
      <input id="gq" class="search" type="search" placeholder="Buscar: chūdan, 面, guardia…" value="${esc(a || '')}" autocomplete="off">
      <div class="row" style="margin-top:10px"><button class="chip on" data-gc="todas">Todos</button>${cats.map(c => `<button class="chip" data-gc="${c}">${esc(KD.catNames[c])}</button>`).join('')}</div>
      <div class="row small muted" style="margin:10px 0 0;justify-content:space-between"><span id="gcount"></span><a href="#/tarjetas">Practicar con tarjetas ›</a></div>
      <div class="gl" id="glist"></div>${foot()}`;
  }

  /* ---------- Colección: atlas ---------- */
  function viewAtlas() {
    setTitle('Atlas');
    const itemsK = [
      ['Zonas de golpeo', 'zones', 'datotsu-yuko'], ['El bōgu', 'bogu', 'bogu'], ['El shinai', 'shinai', 'shinai'], ['Keikogi y hakama', 'wear', 'keikogi-hakama'],
      ['Los cinco kamae', 'kamae5', 'kamae-5'], ['Saludos y posturas de etiqueta', 'rei', 'saludos'], ['El agarre (tenouchi)', 'grip', 'tenouchi'],
      ['Men-uchi', 'strip:men', 'men'], ['Kote-uchi', 'strip:kote', 'kote'], ['Dō-uchi', 'strip:do', 'do'], ['Tsuki', 'strip:tsuki', 'tsuki'],
      ['Okuri-ashi', 'footwork:okuri', 'ashi-sabaki'], ['Ayumi-ashi', 'footwork:ayumi', 'ashi-sabaki'], ['Hiraki-ashi', 'footwork:hiraki', 'ashi-sabaki'], ['Tsugi-ashi', 'footwork:tsugi', 'ashi-sabaki'], ['Fumikomi-ashi', 'footwork:fumikomi', 'ashi-sabaki'],
      ['Las tres distancias (ma-ai)', 'maai', 'maai'], ['Esquiva lateral (nuki-waza)', 'topview:nuki', 'oji-waza'], ['Jōdan', 'solo:jodan', 'jodan']
    ];
    const itemsI = [
      ['La katana y su funda', 'katana', 'ia-katana'], ['Posturas: seiza, tatehiza y de pie', 'seq:iai-seiza', 'ia-seiza'], ['La secuencia básica del iaidō', 'seq:iai-basico', 'ia-secuencia'],
      ['Seitei 1 · Mae', 'kata:mae', 'ia-s1'], ['Seitei 2 · Ushiro', 'kata:ushiro', 'ia-s2'], ['Seitei 3 · Ukenagashi', 'kata:ukenagashi', 'ia-s3'], ['Seitei 4 · Tsuka-ate', 'kata:tsukaate', 'ia-s4'],
      ['Seitei 5 · Kesagiri', 'kata:kesagiri', 'ia-s5'], ['Seitei 6 · Morote-tsuki', 'kata:morote', 'ia-s6'], ['Seitei 7 · Sanpōgiri', 'kata:sanpo', 'ia-s7'], ['Seitei 8 · Ganmen-ate', 'kata:ganmen', 'ia-s8'],
      ['Seitei 9 · Soete-tsuki', 'kata:soete', 'ia-s9'], ['Seitei 10 · Shihōgiri', 'kata:shiho', 'ia-s10'], ['Seitei 11 · Sōgiri', 'kata:sogiri', 'ia-s11'], ['Seitei 12 · Nukiuchi', 'kata:nukiuchi', 'ia-s12'],
      ['Shoden: las cuatro primeras direcciones', 'kata:mjer4', 'ia-mjer-shoden']
    ];
    const items = DISC() === 'iaido' ? itemsI : itemsK;
    return `${segColeccion('atlas')}<h1>Atlas visual</h1><p class="muted">Todas las ilustraciones en un solo sitio. En las interactivas, toca las partes para ver su nombre.</p>
      ${items.map(i => `<section><h2>${i[0]} <a class="small" href="#/leccion/${i[2]}">lección ›</a></h2>${KArt.get(i[1])}</section>`).join('')}${foot()}`;
  }

  /* ---------- Dōjō: entrenar ---------- */
  let tab = 'plan';
  const RS = {}; // pasos marcados en cada rutina (solo sesión)
  const CT = { n: 0, goal: 30 };
  const MT = { bpm: 60, on: false, t: null, ctx: null, beat: 0 };
  function viewTrain(a) {
    setTitle('Dōjō');
    if (a) tab = a;
    const tabs = [['plan', 'Plan por semanas'], ['rutinas', 'Rutinas'], ['herramientas', 'Contador y metrónomo'], ['diario', 'Diario']];
    const body = tab === 'plan' ? trainPlan() : tab === 'rutinas' ? trainRoutines() : tab === 'herramientas' ? trainTools() : trainLog();
    return `${segDojo('entrenar')}<h1>Entrenar en casa</h1><p class="muted">Rutinas cortas, un contador, un metrónomo y un diario. Nada te obliga a entrenar todos los días: aquí solo se suma, nunca se resta.</p>
      <div class="note warn"><b>Antes de empezar</b>Espacio libre de al menos 3 × 3 m y techo alto (cuidado con lámparas). Descalzo o con calzado antideslizante. Calienta primero y, si algo duele, para. Enséñale a tu sensei lo que practicas: es mejor repetir poco y bien corregido que mucho con vicios.</div>
      <div class="tabs" role="tablist">${tabs.map(t => `<button role="tab" class="${tab === t[0] ? 'on' : ''}" data-act="tab" data-t="${t[0]}">${t[1]}</button>`).join('')}</div>${body}${foot()}`;
  }
  const planL = () => DISC() === 'iaido' ? KD.planIai : KD.plan;
  const routinesL = () => DISC() === 'iaido' ? KD.routinesIai : KD.routines;
  function trainPlan() {
    return `<p class="muted small">Un camino de ${planL().length} semanas centrado en técnica. Sin fechas ni rachas: cada semana es un bloque, avanza a tu ritmo. Marca lo que vayas haciendo y toca los enlaces para estudiar la lección.</p>
      ${planL().map(w => {
      const pk = (DISC() === 'iaido' ? 'planI:' : 'plan:') + w.n; const st = S.checks[pk] || {};
      const done = w.tasks.every((_, i) => st[i]);
      return `<section class="card week ${done ? 'done' : ''}"><h3>${esc(w.t)}</h3><p class="muted small" style="margin:0 0 6px">${esc(w.focus)}</p>
        <div class="lk small">${w.lessons.map(id => LESSONS[id] ? `<a class="chip" href="#/leccion/${id}">${esc(LESSONS[id].t)}</a>` : '').join('')}</div>
        <ul class="checks">${w.tasks.map((x, i) => `<li class="${st[i] ? 'on' : ''}" data-act="chk" data-l="${pk}" data-i="${i}"><span class="tick ${st[i] ? 'on' : ''}">${st[i] ? ico('check') : ''}</span><span>${x}</span></li>`).join('')}</ul></section>`;
    }).join('')}`;
  }
  function trainRoutines() {
    return `<div class="grid">${routinesL().map(r => {
      const st = RS[r.id] || (RS[r.id] = {});
      return `<section class="card routine"><div class="row" style="justify-content:space-between"><h3>${esc(r.t)}</h3><span class="pill">${r.min} min</span></div><p class="muted small">${esc(r.desc)}</p>
        <ul class="steps">${r.steps.map((s, i) => `<li class="${st[i] ? 'on' : ''}" data-act="step" data-r="${r.id}" data-i="${i}"><span class="tick ${st[i] ? 'on' : ''}">${st[i] ? ico('check') : ''}</span><span class="nm">${esc(s[0])}</span><span class="am">${esc(s[1])}</span>${s[2] ? `<span class="hn">${esc(s[2])}</span>` : ''}</li>`).join('')}</ul>
        <button class="btn block small" data-act="routine-done" data-r="${r.id}">Anotar en el diario (+${KD.XP.log} XP)</button></section>`;
    }).join('')}</div>`;
  }
  function trainTools() {
    return `<div class="grid"><section class="card counter"><h3 style="margin-top:0;color:var(--ink)">Contador de repeticiones</h3><p class="muted small">Toca el círculo en cada golpe. El objetivo es opcional: te avisa al llegar, sin presión.</p>
      <div class="n" id="ctn">${CT.n}</div><div class="small muted" id="ctg">${CT.goal ? 'Objetivo: ' + CT.goal : 'Sin objetivo'}</div>
      <button class="tap" id="ctap" data-act="ct-add">Golpe</button>
      <div class="row" style="justify-content:center"><button class="btn ghost small" data-act="ct-sub">−1</button><button class="btn ghost small" data-act="ct-reset">Reiniciar</button>
      <label class="small">Objetivo <input type="number" min="0" max="999" value="${CT.goal}" data-act="ct-goal" style="width:72px;padding:7px;border-radius:12px;border:2px solid var(--line);background:var(--card);color:var(--ink)"></label></div></section>
      <section class="card counter"><h3 style="margin-top:0;color:var(--ink)">Metrónomo</h3><p class="muted small">Para marcar el ritmo de tus suburi o de tus pasos. Un pitido por golpe.</p>
      <div class="n" id="mtn">${MT.bpm}</div><div class="small muted">golpes por minuto</div>
      <input type="range" min="30" max="160" value="${MT.bpm}" data-act="mt-bpm" style="width:80%;margin:14px 0" aria-label="Golpes por minuto">
      <div><button class="btn ${MT.on ? 'ghost' : ''}" data-act="mt-toggle" id="mtb">${MT.on ? 'Parar' : 'Empezar'}</button></div></section></div>`;
  }
  function trainLog() {
    const mins = S.log.reduce((s, x) => s + (+x.min || 0), 0);
    const today = new Date().toISOString().slice(0, 10);
    return `<div class="stats" style="margin-bottom:14px"><div class="card stat"><b>${S.log.length}</b><span>sesiones anotadas</span></div><div class="card stat"><b>${mins}</b><span>minutos en total</span></div></div>
      <form class="card" data-act="log-form"><h3 style="margin-top:0">Anotar una práctica</h3>
        <div class="field"><label for="ld">Fecha</label><input type="date" id="ld" value="${today}" required></div>
        <div class="field"><label for="lm">Minutos</label><input type="number" id="lm" min="1" max="600" value="15" required></div>
        <div class="field"><label for="lt">Tipo</label><select id="lt"><option>Suburi en casa</option><option>Pies y postura</option><option>Clase en el dōjō</option><option>Estudio (lecciones, vídeo)</option><option>Otro</option></select></div>
        <div class="field"><label for="ln">Qué me ha corregido el sensei / qué he aprendido</label><textarea id="ln" placeholder="Ej.: Mano izquierda más abajo; el pie izquierdo debe seguir al derecho…"></textarea></div>
        <button class="btn block green" type="submit">Guardar (+${KD.XP.log} XP)</button></form>
        <h3>Tus anotaciones</h3>${S.log.length ? S.log.slice().sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id).slice(0, 40).map(x => `<div class="log-item"><div><b>${new Date(x.date + 'T12:00').toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</b> · ${esc(x.type)} · ${x.min} min</div><button class="btn ghost small" data-act="log-del" data-id="${x.id}" aria-label="Borrar anotación">Borrar</button>${x.notes ? `<div class="nt">${esc(x.notes)}</div>` : ''}</div>`).join('') : '<p class="muted">Aún no hay nada. Cuando entrenes o tengas clase, apunta aquí lo que aprendes: dentro de unos meses será oro.</p>'}`;
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

  function weakHtml() {
    const all = ALLQ(), byId = {};
    all.forEach(q => { byId[q.id] = q; });
    const agg = {}, cat = {};
    Object.keys(S.q).forEach(id => {
      const q = byId[id], s = S.q[id];
      if (!q || !s) return;
      const c = cat[q.cat] || (cat[q.cat] = { ok: 0, bad: 0 }); c.ok += s.ok; c.bad += s.bad;
      if (!q.lesson) return;
      const a = agg[q.lesson] || (agg[q.lesson] = { ok: 0, bad: 0 }); a.ok += s.ok; a.bad += s.bad;
    });
    const rows = Object.keys(agg).filter(l => LESSONS[l] && agg[l].bad > 0)
      .map(l => ({ l, ok: agg[l].ok, bad: agg[l].bad, r: agg[l].bad / (agg[l].ok + agg[l].bad) }))
      .sort((a, b) => b.r - a.r || b.bad - a.bad).slice(0, 5);
    const cats = Object.keys(cat).filter(c => cat[c].ok + cat[c].bad >= 3);
    if (!rows.length && !cats.length) return `<h2>Tus puntos débiles</h2><div class="card"><p class="muted" style="margin:0">Cuando hagas algunos quizzes, aquí verás qué lecciones y categorías te cuestan más, con enlaces para repasarlas.</p></div>`;
    return `<h2>Tus puntos débiles</h2><div class="grid">${rows.map(x => `<div class="card"><b>${esc(LESSONS[x.l].t)}</b><div class="small muted">${Math.round(100 * x.ok / (x.ok + x.bad))}% de aciertos · ${x.bad} fallo(s)</div><div class="row" style="margin-top:8px"><a class="btn small" href="#/leccion/${x.l}">Repasar lección</a><a class="btn ghost small" href="#/quiz/jugar/lesson:${x.l}">Practicar</a></div></div>`).join('')}</div>
      ${cats.length ? `<div class="card" style="margin-top:12px"><b>Acierto por categoría</b>${cats.map(c => { const p = Math.round(100 * cat[c].ok / (cat[c].ok + cat[c].bad)); return `<div class="small" style="margin-top:8px">${esc(KD.quizCats[c] || c)} · ${p}%</div><div class="bar"><i style="width:${p}%"></i></div>`; }).join('')}</div>` : ''}`;
  }
  /* ---------- Dōjō: progreso ---------- */
  function viewProgress() {
    setTitle('Progreso');
    const p = xpParts(), lv = levelOf(p.total), all = ALLQ();
    const tr = Object.values(S.q).filter(x => x && x.ok > 0).length;
    const installCard = standalone() ? '' : `<h2>Instalar en el móvil</h2><div class="card">${DEF ? `<p style="margin-top:0">Instálala para abrirla como una app, a pantalla completa y sin conexión.</p><button class="btn block" data-act="install">Instalar app</button>` : `<p style="margin:0"><b>Chrome en Android:</b> abre el menú <b>⋮</b> y elige <b>Instalar app</b> (o <b>Añadir a pantalla de inicio</b>). Te quedará un icono con el torii y el tomoe.</p>`}</div>`;
    return `${segDojo('progreso')}<h1>Tu progreso</h1>
      <div class="card level"><span class="seal">${esc(lv.cur.jp.charAt(0))}</span><div class="xp"><div class="row" style="justify-content:space-between"><b class="serif" style="font-size:1.35rem">${esc(lv.cur.n)}</b><span class="small muted">${p.total} XP${lv.next ? ' · próximo: ' + esc(lv.next.n) + ' (' + lv.next.xp + ')' : ''}</span></div><div class="bar"><i style="width:${lv.pct}%"></i></div></div></div>
      <p class="small muted">Los niveles de estudio (kyū → dan) son solo una forma de seguir tu avance en esta web. No son grados oficiales ni sustituyen a un examen.</p>
      ${weakHtml()}
      <h2>Sellos · ${DISC() === 'iaido' ? 'Iaidō' : 'Kendō'}</h2><div class="grid">${discMods().map(m => { const d = modDone(m), ok = d === m.lessons.length; return `<div class="card sealrow"><span class="seal ${ok ? '' : 'off'}">${m.seal}</span><div><b>${esc(m.name.split('·')[0].trim())}</b><div class="small muted">${d}/${m.lessons.length} lecciones${ok ? ' · ¡completo!' : ''}</div></div></div>`; }).join('')}</div>
      <h2>De dónde sale tu XP</h2>
      <div class="stats"><div class="card stat"><b>${p.lessons}/${ORDER.length}</b><span>lecciones (+${p.lessons * KD.XP.lesson})</span></div><div class="card stat"><b>${tr}/${all.length}</b><span>preguntas (+${p.quiz * KD.XP.quiz})</span></div><div class="card stat"><b>${p.cards}/${KD.glossary.length}</b><span>términos (+${p.cards * KD.XP.card})</span></div><div class="card stat"><b>${p.mods}/${KD.modules.length}</b><span>módulos (+${p.mods * KD.XP.module})</span></div><div class="card stat"><b>${p.logs}</b><span>prácticas (+${p.logs * KD.XP.log})</span></div></div>
      ${installCard}
      <h2>Ajustes y copia de seguridad</h2>
      <div class="card"><div class="field"><label for="th">Tema</label><select id="th" data-act="theme"><option value="auto" ${S.theme === 'auto' ? 'selected' : ''}>Automático (según tu dispositivo)</option><option value="light" ${S.theme === 'light' ? 'selected' : ''}>Claro</option><option value="dark" ${S.theme === 'dark' ? 'selected' : ''}>Oscuro</option></select></div>
      <p class="small muted">Tu progreso se guarda solo en este navegador (en el móvil y en el ordenador por separado). Para pasarlo de uno a otro, exporta un archivo e impórtalo allí.</p>
      <div class="grid"><button class="btn block" data-act="export">Exportar progreso</button><label class="btn block ghost" style="cursor:pointer">Importar progreso<input type="file" accept="application/json" data-act="import" hidden></label><button class="btn block ghost" data-act="reset">Borrar todo</button></div></div>${foot()}`;
  }

  /* ---------- Eventos ---------- */
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-act]');
    if (!t || t.tagName === 'FORM' || t.tagName === 'INPUT' || t.tagName === 'SELECT') return;
    const act = t.dataset.act, before = xpParts().total;
    const redo = () => { const y = window.scrollY; render(); window.scrollTo(0, y); };
    switch (act) {
      case 'mod': {
        const m = KD.modules.find(x => x.id === t.dataset.m);
        const cur = t.getAttribute('aria-expanded') === 'true';
        S.open[m.id] = !cur; save(); redo(); break;
      }
      case 'install':
        if (DEF) { DEF.prompt(); DEF.userChoice.then(() => { DEF = null; render(); }); }
        break;
      case 'done': {
        const id = t.dataset.id, L = LESSONS[id];
        if (S.done[id]) { delete S.done[id]; save(); redo(); paintTop(); break; }
        const mWas = L.mod.lessons.every(x => S.done[x.id]);
        S.done[id] = Date.now(); save();
        redo();
        const mNow = L.mod.lessons.every(x => S.done[x.id]);
        gain(before, !mWas && mNow ? '🔴 ¡Sello de módulo conseguido!' : 'Lección terminada');
        break;
      }
      case 'say': speak(t.dataset.t); break;
      case 'disc': { const d = t.dataset.d; if (DISC() === d) break; S.disc = d; save(); applyDisc(); F = null; Z = null; paintTop(); if (route().v === 'leccion' || (route().v === 'quiz' && route().a.indexOf('jugar') === 0)) location.hash = '#/inicio'; else render(); break; }
      case 'chk': {
        const k = t.dataset.l, i = t.dataset.i;
        const st = S.checks[k] || (S.checks[k] = {});
        st[i] = !st[i]; save(); redo(); break;
      }
      case 'ans': {
        if (Z.ans != null) break;
        const q = Z.cur, k = +t.dataset.k, good = q.opts[k] === q.a[0];
        Z.ans = k; Z.good = good; if (good) Z.ok++;
        const s = S.q[q.id] || (S.q[q.id] = { ok: 0, bad: 0, last: null });
        if (good) s.ok++; else s.bad++; s.last = good; s.box = good ? Math.min(5, (s.box || 0) + 1) : 0; s.t = Date.now(); save();
        redo();
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
        const r = routinesL().concat(KD.routines, KD.routinesIai || []).find(x => x.id === t.dataset.r);
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
    const m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', getComputedStyle(document.body).backgroundColor ? (S.theme === 'dark' || (S.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? '#1c1923' : '#fbf3e8') : '#1c1923');
  }

  /* ---------- Arranque ---------- */
  function applyDisc() { document.documentElement.dataset.disc = DISC(); }
  applyTheme(); applyDisc(); paintTop(); paintBottom(); render();
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register('sw.js').catch(() => { });
})();
