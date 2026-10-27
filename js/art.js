/* Ilustraciones SVG de Kendō Michi — todo dibujado por código, sin imágenes externas */
window.KArt = (function () {
  const C = {
    paper: '#f3ead6', ink: '#16161c', indigo: '#2f4274', indigoD: '#1b2547', indigoL: '#5d6e9c',
    red: '#b3261e', gold: '#c9a24b', bamb: '#d8b266', bambD: '#9c6f2e', white: '#fbf8f0',
    gray: '#8b8b93', leather: '#6b3f22', steel: '#d3d6de', men: '#1d2447', skin: '#e2c3a0', wood: '#c9a36a', woodD: '#a9824c'
  };
  const f = n => (Math.round(n * 10) / 10);
  const pt = a => f(a[0]) + ',' + f(a[1]);

  /* ---------- Tomoe y torii ---------- */
  function tomoeShape(R) {
    const k = R / 35, rc = 20 * k, hw = 12.5 * k, N = 32;
    const a0 = -Math.PI / 2, a1 = 40 * Math.PI / 180;
    const P = (r, a) => [r * Math.cos(a), r * Math.sin(a)];
    const pts = [];
    for (let i = 0; i <= N; i++) { const t = i / N; pts.push(P(rc + hw * Math.pow(1 - t, 1.15), a0 + (a1 - a0) * t)); }
    for (let i = N; i >= 0; i--) { const t = i / N; pts.push(P(rc - hw * Math.pow(1 - t, 1.15), a0 + (a1 - a0) * t)); }
    const h = P(rc, a0);
    return `<path d="M${pts.map(pt).join('L')}Z"/><circle cx="${f(h[0])}" cy="${f(h[1])}" r="${f(hw)}"/>`;
  }
  function mitsudomoe(cx, cy, R, fill) {
    const s = tomoeShape(R);
    return `<g transform="translate(${cx} ${cy})" fill="${fill}">` +
      `<g>${s}</g><g transform="rotate(120)">${s}</g><g transform="rotate(240)">${s}</g></g>`;
  }
  function logo(size, bg) {
    const s = size || 64;
    return `<svg viewBox="0 0 100 100" width="${s}" height="${s}" role="img" aria-label="Tomoe dentro de un torii">` +
      (bg ? `<rect width="100" height="100" rx="22" fill="${C.indigoD}"/>` : '') +
      `<g fill="${C.red}">` +
      `<path d="M3,17 Q50,34 97,17 L95,29 Q50,43 5,29 Z"/>` +
      `<rect x="13" y="31" width="74" height="5" fill="${C.ink}"/>` +
      `<rect x="25" y="34" width="9" height="60"/><rect x="66" y="34" width="9" height="60"/>` +
      `<rect x="17" y="47" width="66" height="7"/></g>` +
      mitsudomoe(50, 73, 15, C.white) + `</svg>`;
  }

  /* ---------- Motor de figuras (vista lateral, mira a la derecha) ---------- */
  function ik(a, b, l1, l2, dir) {
    let dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 0.01;
    const max = l1 + l2 - 0.5;
    if (d > max) { dx *= max / d; dy *= max / d; d = max; b = [a[0] + dx, a[1] + dy]; }
    const x = (l1 * l1 - l2 * l2 + d * d) / (2 * d);
    const h = Math.sqrt(Math.max(0, l1 * l1 - x * x));
    const ux = dx / d, uy = dy / d;
    return [a[0] + ux * x + (-uy) * dir * h, a[1] + uy * x + ux * dir * h];
  }
  const line = (pts, w, col, extra) =>
    `<path d="M${pts.map(pt).join('L')}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" ${extra || ''}/>`;

  const POSES = {
    shisei: { head: [108, 40], sh: [106, 72], hip: [104, 116], ff: [112, 214], bf: [94, 214], lh: [114, 118], rh: [112, 134], noShinai: true },
    taito: { head: [108, 40], sh: [106, 72], hip: [104, 116], ff: [112, 214], bf: [94, 214], L: [120, 116], ang: 8, rh: [112, 134] },
    chudan: { head: [118, 50], sh: [114, 82], hip: [104, 128], L: [146, 112], ang: -14, ff: [140, 214], bf: [68, 206] },
    jodan: { head: [114, 50], sh: [112, 82], hip: [104, 128], L: [128, 18], ang: 138, ff: [140, 214], bf: [68, 206] },
    gedan: { head: [118, 52], sh: [114, 84], hip: [104, 128], L: [150, 124], ang: 26, ff: [140, 214], bf: [68, 206] },
    hasso: { head: [116, 50], sh: [112, 82], hip: [104, 128], L: [126, 82], ang: -128, ff: [140, 214], bf: [68, 206] },
    waki: { head: [116, 52], sh: [112, 84], hip: [104, 128], L: [128, 122], ang: 160, ff: [140, 214], bf: [68, 206] },
    furikaburi: { head: [112, 50], sh: [112, 80], hip: [108, 128], L: [134, 22], ang: 150, ff: [136, 214], bf: [70, 204] },
    koteUp: { head: [118, 52], sh: [116, 84], hip: [106, 128], L: [150, 62], ang: -42, ff: [140, 214], bf: [68, 204] },
    men: { head: [166, 54], sh: [160, 84], hip: [150, 126], L: [200, 30], ang: 6, ff: [188, 208], bf: [118, 198] },
    kote: { head: [160, 60], sh: [152, 90], hip: [140, 128], L: [186, 76], ang: 24, ff: [178, 210], bf: [108, 200] },
    do: { head: [160, 60], sh: [152, 90], hip: [148, 130], L: [172, 100], ang: 4, ff: [184, 210], bf: [116, 200] },
    tsukiPrep: { head: [124, 56], sh: [120, 88], hip: [108, 130], L: [132, 100], ang: -8, ff: [142, 214], bf: [70, 206] },
    tsuki: { head: [166, 58], sh: [158, 88], hip: [150, 128], L: [196, 78], ang: 0, ff: [190, 208], bf: [120, 198] },
    rei15: { head: [128, 50], sh: [116, 76], hip: [104, 116], ff: [112, 214], bf: [94, 214], lh: [116, 122], rh: [114, 138], noShinai: true },
    rei30: { head: [146, 64], sh: [128, 82], hip: [104, 116], ff: [112, 214], bf: [94, 214], lh: [118, 124], rh: [116, 140], noShinai: true },
    seiza: { head: [108, 100], sh: [104, 130], hip: [96, 172], legs: { k: [150, 212], f: [100, 220] }, lh: [140, 168], rh: [134, 172], noShinai: true },
    zarei: { head: [150, 132], sh: [132, 142], hip: [96, 172], legs: { k: [150, 212], f: [100, 220] }, lh: [172, 214], rh: [180, 214], noShinai: true },
    sonkyo: { head: [124, 78], sh: [112, 108], hip: [96, 164], legs: { k: [146, 178], f: [128, 220] }, L: [160, 146], ang: -30, rh: [150, 150] },
    yokomen: { head: [166, 54], sh: [160, 84], hip: [150, 126], L: [196, 34], ang: 16, ff: [188, 208], bf: [118, 198] },
    koteHi: { head: [160, 58], sh: [152, 88], hip: [142, 128], L: [186, 52], ang: 4, ff: [180, 210], bf: [110, 200] },
    suburiEnd: { head: [120, 52], sh: [116, 84], hip: [104, 128], L: [158, 100], ang: 2, ff: [140, 214], bf: [68, 206] },
    hayaUp: { head: [118, 52], sh: [114, 84], hip: [104, 128], L: [150, 52], ang: -62, ff: [140, 214], bf: [68, 206] },
    hayaDn: { head: [120, 52], sh: [116, 84], hip: [104, 128], L: [158, 84], ang: 22, ff: [140, 214], bf: [68, 206] },
    okuri1: { head: [126, 50], sh: [122, 82], hip: [112, 128], L: [154, 112], ang: -14, ff: [172, 208], bf: [68, 206] },
    tsugi1: { head: [120, 52], sh: [116, 84], hip: [106, 128], L: [148, 112], ang: -14, ff: [140, 214], bf: [118, 204] },
    fumi1: { head: [126, 48], sh: [124, 80], hip: [120, 126], L: [148, 20], ang: 150, ff: [178, 186], bf: [78, 204] },
    chudanLean: { head: [136, 58], sh: [128, 88], hip: [102, 130], L: [150, 112], ang: -14, ff: [140, 214], bf: [68, 206] },
    chudanFlat: { head: [118, 50], sh: [114, 82], hip: [104, 128], L: [146, 112], ang: -14, ff: [140, 214], bf: [68, 217] },
    chudanHigh: { head: [118, 50], sh: [114, 82], hip: [104, 128], L: [146, 84], ang: -2, ff: [140, 214], bf: [68, 206] },
    chudanLow: { head: [118, 52], sh: [114, 84], hip: [104, 128], L: [148, 136], ang: 22, ff: [140, 214], bf: [68, 206] },
    tsuba: { head: [140, 56], sh: [138, 86], hip: [124, 128], L: [170, 92], ang: -52, ff: [150, 214], bf: [90, 208] },
    hikiUp: { head: [122, 56], sh: [122, 86], hip: [114, 128], L: [140, 26], ang: 148, ff: [152, 214], bf: [88, 208] },
    hikiMen: { head: [118, 56], sh: [118, 86], hip: [112, 128], L: [190, 30], ang: 8, ff: [150, 206], bf: [84, 206] },
    hikiDo: { head: [118, 58], sh: [118, 88], hip: [112, 128], L: [166, 104], ang: 2, ff: [150, 206], bf: [84, 206] },
    haraiP: { head: [118, 50], sh: [114, 82], hip: [104, 128], L: [150, 116], ang: 2, ff: [140, 214], bf: [68, 206] },
    suriageP: { head: [118, 52], sh: [114, 84], hip: [104, 128], L: [150, 94], ang: -50, ff: [140, 214], bf: [68, 206] },
    blockP: { head: [118, 52], sh: [114, 84], hip: [104, 128], L: [136, 52], ang: -58, ff: [140, 214], bf: [68, 206] },
    uchiotoshiP: { head: [120, 54], sh: [116, 86], hip: [106, 128], L: [160, 66], ang: 52, ff: [142, 212], bf: [70, 204] },
    ukeKote: { head: [118, 54], sh: [114, 86], hip: [104, 128], L: [148, 118], ang: 48, ff: [140, 214], bf: [68, 206] },
    ukeDo: { head: [118, 54], sh: [114, 86], hip: [104, 128], L: [150, 96], ang: 76, ff: [140, 214], bf: [68, 206] }
  };

  function figure(p, o) {
    o = o || {};
    const dx = o.dx || 0, t = o.tint || {};
    const KEI = t.key || C.indigo, HAK = t.hak || C.indigoD, MEN = t.men || C.men;
    const S = a => [a[0] + dx, a[1]];
    const head = S(p.head), sh = S(p.sh), hip = S(p.hip);
    const out = [];
    // Piernas
    let legBack, legFront;
    if (p.legs) {
      const k = S(p.legs.k), ft = S(p.legs.f);
      legBack = legFront = { k, a: ft, raw: true };
    } else {
      const ff = S(p.ff), bf = S(p.bf);
      legFront = { k: ik(hip, ff, 53, 53, -1), a: ff };
      legBack = { k: ik(hip, bf, 53, 53, -1), a: bf };
    }
    const foot = l => l.raw
      ? line([l.k, l.a], 8, C.skin)
      : `<path d="M${pt([l.a[0] - 2, l.a[1] + 1])}L${pt([l.a[0] + 17, 222])}" stroke="${C.skin}" stroke-width="9" stroke-linecap="round"/>`;
    const leg = (l, hp) => foot(l) + line([hp, l.k, l.a], 25, HAK) + line([hp, l.k, l.a], 25, 'none');
    out.push(leg(legBack, hip));

    // Brazos y shinai
    const hasS = !p.noShinai;
    let L = p.L ? S(p.L) : (p.lh ? S(p.lh) : null);
    let R = null, tip = null, u = [1, 0];
    if (p.L) {
      const a = p.ang * Math.PI / 180; u = [Math.cos(a), Math.sin(a)];
      R = p.rh ? S(p.rh) : [L[0] + u[0] * 14, L[1] + u[1] * 14];
      tip = [L[0] + u[0] * 127, L[1] + u[1] * 127];
    } else { L = S(p.lh); R = S(p.rh); }
    const elL = ik(sh, L, 38, 38, 1), elR = ik(sh, R, 38, 38, 1);
    const arm = (el, h) => line([sh, el, h], 13, KEI) + line([[el[0] + (h[0] - el[0]) * .5, el[1] + (h[1] - el[1]) * .5], h], 15, C.indigoD);
    out.push(arm(elL, L));

    // Tronco, men-buton, do, tare
    const torso = line([hip, sh], 30, KEI);
    out.push(torso);
    const ang = Math.atan2(sh[1] - hip[1], sh[0] - hip[0]) * 180 / Math.PI;
    const mid = [(hip[0] + sh[0]) / 2 + 4, (hip[1] + sh[1]) / 2 - 2];
    if (!o.noBogu) {
      out.push(`<polygon points="${pt([head[0] - 20, head[1] + 12])} ${pt([head[0] + 18, head[1] + 12])} ${pt([sh[0] + 22, sh[1] + 14])} ${pt([sh[0] - 22, sh[1] + 18])}" fill="${MEN}" stroke="${C.ink}" stroke-width="1"/>`);
      out.push(`<g transform="translate(${pt(mid)}) rotate(${f(ang + 90)})"><rect x="-23" y="-12" width="46" height="26" rx="5" fill="#15151a" stroke="${C.ink}"/>` +
        `<rect x="-23" y="-12" width="46" height="5" rx="2" fill="${C.red}"/><line x1="-21" y1="-1" x2="21" y2="-1" stroke="${C.gold}" stroke-width="1.2"/><line x1="-21" y1="6" x2="21" y2="6" stroke="${C.gold}" stroke-width="1.2"/></g>`);
      out.push(`<polygon points="${pt([hip[0] - 6, hip[1] - 2])} ${pt([hip[0] + 17, hip[1] - 2])} ${pt([hip[0] + 20, hip[1] + 38])} ${pt([hip[0] - 4, hip[1] + 38])}" fill="${HAK}" stroke="${C.white}" stroke-width="1.2"/>`);
    }
    out.push(leg(legFront, hip));

    // Cabeza con men
    if (!o.noBogu) {
      out.push(`<ellipse cx="${f(head[0])}" cy="${f(head[1])}" rx="19" ry="21" fill="${MEN}" stroke="${C.ink}" stroke-width="1.2"/>`);
      let g = '';
      for (let i = 0; i < 6; i++) g += `<line x1="${f(head[0] + 2)}" x2="${f(head[0] + 18)}" y1="${f(head[1] - 12 + i * 4.6)}" y2="${f(head[1] - 12 + i * 4.6)}" stroke="${C.steel}" stroke-width="1.3"/>`;
      g += `<line x1="${f(head[0] + 18)}" x2="${f(head[0] + 18)}" y1="${f(head[1] - 14)}" y2="${f(head[1] + 13)}" stroke="${C.steel}" stroke-width="1.6"/>`;
      g += `<line x1="${f(head[0] + 8)}" x2="${f(head[0] + 8)}" y1="${f(head[1] - 13)}" y2="${f(head[1] + 12)}" stroke="${C.steel}" stroke-width="1"/>`;
      out.push(g);
      out.push(`<path d="M${pt([head[0] - 18, head[1] - 6])}Q${pt([head[0] - 4, head[1] - 22])} ${pt([head[0] + 12, head[1] - 17])}" stroke="${C.gray}" stroke-width="1" fill="none"/>`);
    } else {
      out.push(`<circle cx="${f(head[0])}" cy="${f(head[1])}" r="15" fill="${C.skin}" stroke="${C.ink}"/>`);
    }

    // Shinai
    if (hasS && tip) {
      const b = [L[0] - u[0] * 9, L[1] - u[1] * 9];
      const tb = [L[0] + u[0] * 29, L[1] + u[1] * 29];
      out.push(`<path d="M${pt(b)}L${pt(tip)}" stroke="${C.ink}" stroke-width="6.4" stroke-linecap="round"/>`);
      out.push(`<path d="M${pt(tb)}L${pt(tip)}" stroke="${C.bamb}" stroke-width="4" stroke-linecap="round"/>`);
      out.push(`<path d="M${pt(b)}L${pt(tb)}" stroke="${C.leather}" stroke-width="4.6" stroke-linecap="round"/>`);
      const pn = [-u[1], u[0]];
      out.push(`<path d="M${pt([tb[0] - pn[0] * 8, tb[1] - pn[1] * 8])}L${pt([tb[0] + pn[0] * 8, tb[1] + pn[1] * 8])}" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/>`);
    }
    out.push(arm(elR, R));
    const hand = h => `<circle cx="${f(h[0])}" cy="${f(h[1])}" r="7.6" fill="${C.indigoD}" stroke="${C.white}" stroke-width=".9"/>`;
    out.push(hand(L) + hand(R));
    return out.join('');
  }

  const FLOOR = `<rect x="-200" y="226" width="1000" height="16" fill="${C.wood}"/><rect x="-200" y="226" width="1000" height="3" fill="${C.woodD}"/>`;
  const W = 520;
  const OPP_TINT = { key: '#6b7da8', hak: '#2a3566', men: '#2a3050' };

  /* Anclajes de un figurín (para que un golpe "toque" el blanco del otro) */
  function geom(key, dx, flip) {
    const p = POSES[key], S = a => [a[0] + dx, a[1]], F = a => flip ? [W - a[0], a[1]] : a;
    const head = F(S(p.head)), sh = F(S(p.sh)), hip = F(S(p.hip)), s = flip ? -1 : 1;
    let L = p.L ? S(p.L) : S(p.lh), R;
    if (p.L) { const a = p.ang * Math.PI / 180; R = p.rh ? S(p.rh) : [L[0] + Math.cos(a) * 14, L[1] + Math.sin(a) * 14]; } else R = S(p.rh);
    R = F(R);
    return { men: [head[0], head[1] - 21], yokomen: [head[0] + s * 8, head[1] - 12], kote: R, do: [(hip[0] + sh[0]) / 2 + s * 14, (hip[1] + sh[1]) / 2], tsuki: [head[0] + s * 19, head[1] + 20] };
  }
  function touchDx(f, tp) {
    const p = POSES[f.pose], a = p.ang * Math.PI / 180, len = f.len || 83;
    const rx = p.L[0] + Math.cos(a) * len;
    return f.flip ? (W - tp[0] - rx) : (tp[0] - rx);
  }

  function scene(figs, opts) {
    opts = opts || {};
    const list = figs.map(x => Object.assign({}, typeof x === 'string' ? { pose: x } : x));
    if (opts.opp !== false && !opts.solo && !list.some(f => f.opp)) list.unshift(Object.assign({ opp: true, pose: 'chudan' }, typeof opts.opp === 'string' ? { pose: opts.opp } : (opts.opp || {})));
    list.forEach(f => { if (f.flip === undefined) f.flip = !!f.opp; if (f.dx === undefined && !f.touch) f.dx = 0; });
    const hits = [];
    // primero los que fijan posición, después los que "tocan" un blanco
    list.forEach((f, i) => {
      if (!f.touch) return;
      let tg;
      if (f.vs) tg = { pose: f.vs.pose, dx: f.vs.dx || 0, flip: f.vs.flip !== undefined ? f.vs.flip : !f.flip };
      else { const g = list.find((g, j) => j !== i && !!g.opp !== !!f.opp && g.dx !== undefined); tg = g; }
      if (!tg) return;
      const tp = geom(tg.pose, tg.dx, tg.flip)[f.touch];
      f.dx = touchDx(f, tp);
      if (!f.nohl) hits.push(tp);
    });
    let g = FLOOR;
    list.forEach(f => {
      const inner = figure(POSES[f.pose], { dx: f.dx || 0, tint: (f.opp || f.tint) ? OPP_TINT : undefined });
      g += `<g opacity="${f.ghost ? 0.28 : 1}">${f.flip ? `<g transform="translate(${W} 0) scale(-1 1)">${inner}</g>` : inner}</g>`;
    });
    hits.forEach(t => { g += `<circle class="pulse" cx="${f(t[0])}" cy="${f(t[1])}" r="15" fill="${C.red}" fill-opacity=".28" stroke="${C.red}" stroke-width="2.2" stroke-dasharray="4 3"/>`; });
    (opts.arrows || []).forEach(a => { g += arrow(a[0], a[1], a[2], a[3], a[4] || C.red); });
    return `<svg viewBox="${opts.vb || (opts.solo ? '36 -42 300 284' : '48 -42 452 284')}" role="img" aria-label="${opts.label || 'Ilustración de kendo'}">${g}</svg>`;
  }

  function solo(key, label) {
    return `<svg viewBox="${key === 'chudan' || key === 'gedan' ? '30 -42 270 284' : '30 -42 240 284'}" role="img" aria-label="${label || key}">${FLOOR}${figure(POSES[key])}</svg>`;
  }
  function soloRow(keys, labels) {
    return `<div class="grid-art">${keys.map((k, i) => `<figure>${solo(k, labels[i])}<figcaption>${labels[i]}</figcaption></figure>`).join('')}</div>`;
  }

  /* ---------- Secuencias paso a paso ---------- */
  const SO = { solo: true };
  const A = (pose, extra) => Object.assign({ pose }, extra || {});
  const O = (pose, extra) => Object.assign({ pose, opp: true }, extra || {});
  const SEQ = {
    men: { t: 'Men-uchi', quiz: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Chūdan: kensen al cuello del rival' },
      { figs: [A('furikaburi', { dx: 70 })], cap: '2 · Furikaburi: sube el shinai al avanzar' },
      { figs: [A('men', { touch: 'men' })], cap: '3 · Extiende, golpea con el monouchi y pisa (fumikomi)' }] },
    yokomen: { t: 'Yokomen-uchi', quiz: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Chūdan' },
      { figs: [A('furikaburi', { dx: 70 })], cap: '2 · Furikaburi' },
      { figs: [A('yokomen', { touch: 'yokomen' })], cap: '3 · Corte en diagonal al lateral de la cabeza' }] },
    kote: { t: 'Kote-uchi', quiz: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Chūdan' },
      { figs: [A('koteUp', { dx: 50 })], cap: '2 · Eleva el shinai solo lo justo' },
      { figs: [A('kote', { touch: 'kote' })], cap: '3 · Corta pequeño y rápido a la muñeca' }] },
    do: { t: 'Dō-uchi', quiz: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Chūdan' },
      { figs: [A('furikaburi', { dx: 70 })], cap: '2 · Furikaburi (puede ser algo menor)' },
      { figs: [A('do', { touch: 'do' })], cap: '3 · Corte al lado derecho del dō, con filo' }] },
    tsuki: { t: 'Tsuki', quiz: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Chūdan' },
      { figs: [A('tsukiPrep', { dx: 40 })], cap: '2 · Recoge ligeramente, sin levantar' },
      { figs: [A('tsuki', { touch: 'tsuki', len: 122 })], cap: '3 · Estocada recta a la garganta (tsuki-dare)' }] },
    'kote-men': { t: 'Kote-men', quiz: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Chūdan' },
      { figs: [A('kote', { touch: 'kote' })], cap: '2 · Kote con kiai' },
      { figs: [A('furikaburi', { dx: 118 })], cap: '3 · Recoge el shinai sin parar' },
      { figs: [A('men', { touch: 'men' })], cap: '4 · Men: el pie izquierdo sigue al derecho' }] },
    'debana-kote': { t: 'Debana-kote', quiz: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Ambos en chūdan: observa el kensen y el peso del rival' },
      { figs: [O('koteUp', { dx: 50 }), A('chudan')], cap: '2 · El rival empieza a subir el shinai: ese es el momento' },
      { figs: [O('koteUp', { dx: 50 }), A('koteHi', { touch: 'kote' })], cap: '3 · Golpeas kote antes de que complete su ataque' }] },
    'debana-men': { t: 'Debana-men', quiz: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Ambos en chūdan' },
      { figs: [O('koteUp', { dx: 50 }), A('chudan')], cap: '2 · El rival inicia su movimiento' },
      { figs: [O('koteUp', { dx: 50 }), A('men', { touch: 'men' })], cap: '3 · Men justo en su inicio' }] },
    'harai-men': { t: 'Harai-men', quiz: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Chūdan' },
      { figs: [A('haraiP', { dx: 30 })], cap: '2 · Barrido corto y firme: apartas su shinai' },
      { figs: [A('men', { touch: 'men' })], cap: '3 · Men por el hueco que se abre' }] },
    'hiki-men': { t: 'Hiki-men', quiz: 1, fr: [
      { figs: [O('tsuba', { dx: 77 }), A('tsuba', { dx: 77 })], cap: '1 · Tsubazeriai: guardas en contacto' },
      { figs: [O('tsuba', { dx: 77 }), A('hikiUp', { dx: 60 })], cap: '2 · Empujas, el rival reacciona, subes el shinai' },
      { figs: [O('tsuba', { dx: 77 }), A('hikiMen', { touch: 'men' })], cap: '3 · Golpeas men mientras retrocedes' }] },
    'hiki-do': { t: 'Hiki-dō', quiz: 1, fr: [
      { figs: [O('tsuba', { dx: 77 }), A('tsuba', { dx: 77 })], cap: '1 · Tsubazeriai' },
      { figs: [O('tsuba', { dx: 77 }), A('hikiUp', { dx: 60 })], cap: '2 · Empuja y sube el shinai' },
      { figs: [O('tsuba', { dx: 77 }), A('hikiDo', { touch: 'do' })], cap: '3 · Corta dō al retroceder' }] },
    'men-nuki-do': { t: 'Men-nuki-dō', quiz: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Chūdan: haces seme y esperas' },
      { figs: [O('furikaburi', { dx: 60 }), A('chudan', { ghost: true })], cap: '2 · El rival ataca men: sales en diagonal (hiraki-ashi)' },
      { figs: [O('men', { touch: 'men', nohl: 1, vs: { pose: 'chudan' } }), A('do', { touch: 'do' })], cap: '3 · Su golpe falla y tú cortas dō' }] },
    'kote-suriage-men': { t: 'Kote-suriage-men', quiz: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Chūdan' },
      { figs: [O('kote', { touch: 'kote', vs: { pose: 'chudan' } }), A('suriageP')], cap: '2 · Desvías su kote subiendo el shinai (suriage)' },
      { figs: [O('kote', { touch: 'kote', nohl: 1, vs: { pose: 'chudan' } }), A('men', { touch: 'men' })], cap: '3 · Respondes con men en el mismo gesto' }] },
    'men-kaeshi-do': { t: 'Men-kaeshi-dō', quiz: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Chūdan' },
      { figs: [O('men', { touch: 'men', vs: { pose: 'blockP' } }), A('blockP')], cap: '2 · Recibes su men con el shinai en alto (bloqueo)' },
      { figs: [O('men', { touch: 'men', nohl: 1, vs: { pose: 'blockP' } }), A('do', { touch: 'do' })], cap: '3 · Giras el shinai y devuelves dō' }] },
    'dou-uchiotoshi-men': { t: 'Dō-uchiotoshi-men', quiz: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Chūdan' },
      { figs: [O('do', { touch: 'do', vs: { pose: 'chudan' } }), A('uchiotoshiP')], cap: '2 · Golpeas hacia abajo su shinai (uchiotoshi)' },
      { figs: [O('do', { touch: 'do', nohl: 1, vs: { pose: 'chudan' } }), A('men', { touch: 'men' })], cap: '3 · Sin pausa, men' }] },
    zanshin: { t: 'Zanshin', fr: [
      { figs: [A('men', { touch: 'men' })], cap: '1 · Golpe correcto con kiai' },
      { figs: [O('chudan', { flip: false }), A('chudan', { flip: true })], cap: '2 · Tras pasar, te giras y vuelves a chūdan de cara al rival' }] },
    // Solos (sin rival)
    joge: { t: 'Jōge-buri', solo: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Chūdan' },
      { figs: [A('furikaburi')], cap: '2 · Sube hasta sobre la cabeza' },
      { figs: [A('suburiEnd')], cap: '3 · Baja y para con el kensen a la altura de chūdan' }] },
    sayu: { t: 'Sayū-men', solo: 1, fr: [
      { figs: [A('furikaburi')], cap: '1 · Arriba' },
      { figs: [A('yokomen', { dx: -46 })], cap: '2 · Baja en diagonal a unos 45°; sube de nuevo y repite al otro lado' }] },
    zenshin: { t: 'Zenshin-kōtai-suburi', solo: 1, fr: [
      { figs: [A('furikaburi')], cap: '1 · Sube' },
      { figs: [A('men', { dx: -10 })], cap: '2 · Golpea avanzando con okuri-ashi' },
      { figs: [A('furikaburi', { dx: -34 })], cap: '3 · Sube retrocediendo y golpea de nuevo' }] },
    haya: { t: 'Haya-suburi', solo: 1, fr: [
      { figs: [A('hayaUp')], cap: '1 · Sube corto' },
      { figs: [A('hayaDn')], cap: '2 · Baja con las muñecas' },
      { figs: [A('hayaUp')], cap: '3 · Y vuelve rápido' }] },
    okuri: { t: 'Okuri-ashi', solo: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Chūdan' },
      { figs: [A('okuri1')], cap: '2 · El pie derecho avanza primero' },
      { figs: [A('chudan', { dx: 32 })], cap: '3 · El izquierdo le sigue y vuelves a la postura' }] },
    tsugi: { t: 'Tsugi-ashi', solo: 1, fr: [
      { figs: [A('chudan')], cap: '1 · Chūdan' },
      { figs: [A('tsugi1')], cap: '2 · El pie trasero se acerca al delantero' },
      { figs: [A('okuri1', { dx: 20 })], cap: '3 · El delantero sale de golpe' },
      { figs: [A('chudan', { dx: 52 })], cap: '4 · El trasero le sigue' }] },
    fumikomi: { t: 'Fumikomi-ashi', solo: 1, fr: [
      { figs: [A('furikaburi')], cap: '1 · Furikaburi' },
      { figs: [A('fumi1')], cap: '2 · El pie delantero avanza alto y corto' },
      { figs: [A('men', { dx: -20 })], cap: '3 · Pisada con el pie plano y golpe a la vez' }] },
    'kamae-toru': { t: 'Taitō → sonkyō → chūdan', solo: 1, fr: [
      { figs: [A('taito')], cap: '1 · Taitō: shinai en la mano izquierda' },
      { figs: [A('sonkyo')], cap: '2 · Sonkyō: cuclillas, shinai al frente' },
      { figs: [A('chudan')], cap: '3 · Te levantas en chūdan' }] },
    seiza: { t: 'Seiza y zarei', solo: 1, fr: [
      { figs: [A('shisei')], cap: '1 · De pie' },
      { figs: [A('seiza')], cap: '2 · Seiza: espalda recta, manos en los muslos' },
      { figs: [A('zarei')], cap: '3 · Zarei: manos al suelo, inclinas desde la cadera' }] },
    'chudan-errores': { t: 'Errores en chūdan', solo: 1, fr: [
      { figs: [A('chudan')], cap: '✓ Correcto' },
      { figs: [A('chudanLean')], cap: '✗ Cuerpo inclinado hacia delante' },
      { figs: [A('chudanFlat')], cap: '✗ Talón izquierdo apoyado' },
      { figs: [A('chudanHigh')], cap: '✗ Kensen demasiado alto' },
      { figs: [A('chudanLow')], cap: '✗ Kensen demasiado bajo' }] }
  };
  SEQ.kotemen = SEQ['kote-men'];
  SEQ['men-do'] = { t: 'Men-dō', quiz: 1, fr: [
    { figs: [A('chudan')], cap: '1 · Chūdan' },
    { figs: [O('blockP'), A('men', { touch: 'men' })], cap: '2 · Atacas men y el rival sube los brazos para cubrirse' },
    { figs: [O('blockP'), A('do', { touch: 'do' })], cap: '3 · Con sus brazos arriba el dō queda abierto: cortas sin parar' }] };
  SEQ['seme-kote'] = { t: 'Seme y kote', quiz: 1, fr: [
    { figs: [A('chudan')], cap: '1 · Chūdan: el kensen apunta a su garganta' },
    { figs: [A('chudan', { dx: 50 })], cap: '2 · Entras con okuri-ashi sin soltar la presión (seme)' },
    { figs: [O('koteUp', { dx: 30 }), A('chudan', { dx: 50 })], cap: '3 · El rival reacciona: empieza a subir el shinai' },
    { figs: [O('koteUp', { dx: 30 }), A('koteHi', { touch: 'kote' })], cap: '4 · Aprovechas su reacción y golpeas kote' }] };
  SEQ.ukeru = { t: 'Recibir con el shinai', fr: [
    { figs: [O('men', { touch: 'men', vs: { pose: 'blockP' } }), A('blockP')], cap: 'Recibir men: shinai en alto, kensen algo adelantado' },
    { figs: [O('kote', { touch: 'kote', vs: { pose: 'ukeKote' } }), A('ukeKote')], cap: 'Recibir kote: manos al frente, kensen hacia abajo' },
    { figs: [O('do', { touch: 'do', vs: { pose: 'ukeDo' } }), A('ukeDo')], cap: 'Recibir dō: shinai casi vertical ante el costado' }] };
  function seq(key) {
    const s = SEQ[key];
    if (!s) return '';
    const n = s.fr.length;
    return `<div class="strip ${s.solo ? "solo" : ""} c${n}">${s.fr.map(fr =>
      `<figure>${scene(fr.figs, { solo: !!s.solo, label: fr.cap, arrows: fr.arrows })}<figcaption>${fr.cap}</figcaption></figure>`).join('')}</div>`;
  }
  const strip = seq;


  /* ---------- Control del centro (vista cenital) ---------- */
  function centro() {
    const panel = (x0, title, aTip, bTip, note) => {
      const ay = 70, by = 70, ax = x0 + 20, bx = x0 + 130;
      let g = `<text x="${x0 + 75}" y="18" text-anchor="middle" font-size="11.5" font-weight="700" fill="${C.ink}" font-family="sans-serif">${title}</text>`;
      g += `<line x1="${ax}" y1="${ay}" x2="${bx}" y2="${by}" stroke="${C.gray}" stroke-width="1.4" stroke-dasharray="4 4"/>`;
      g += `<line x1="${ax}" y1="${ay}" x2="${ax + 62}" y2="${ay + aTip}" stroke="${C.indigo}" stroke-width="4.5" stroke-linecap="round"/>`;
      g += `<line x1="${bx}" y1="${by}" x2="${bx - 62}" y2="${by + bTip}" stroke="${C.red}" stroke-width="4.5" stroke-linecap="round"/>`;
      g += `<circle cx="${ax}" cy="${ay}" r="13" fill="${C.indigo}" stroke="${C.ink}"/><circle cx="${bx}" cy="${by}" r="13" fill="#6b7da8" stroke="${C.ink}"/>`;
      g += `<text x="${ax}" y="${ay + 4}" text-anchor="middle" font-size="11" font-weight="700" fill="${C.white}" font-family="sans-serif">Tú</text><text x="${bx}" y="${by + 4}" text-anchor="middle" font-size="11" font-weight="700" fill="${C.white}" font-family="sans-serif">R</text>`;
      g += `<text x="${x0 + 75}" y="124" text-anchor="middle" font-size="10" fill="${C.ink}" font-family="sans-serif">${note[0]}</text><text x="${x0 + 75}" y="138" text-anchor="middle" font-size="10" fill="${C.ink}" font-family="sans-serif">${note[1]}</text>`;
      return g;
    };
    let g = `<rect width="480" height="150" rx="10" fill="${C.wood}" opacity=".3"/>`;
    g += panel(6, 'Tienes el centro', 0, 22, ['Tu kensen apunta a su garganta;', 'el suyo está desviado']);
    g += panel(162, 'Centro compartido', 4, 4, ['Ambos en la línea: se cruzan.', 'Gana quien presiona mejor']);
    g += panel(318, 'Lo pierdes', -22, 0, ['Su kensen apunta a ti;', 'el tuyo está desviado']);
    return `<svg viewBox="0 0 480 150" role="img" aria-label="Control del centro (nakasen)">${g}</svg>`;
  }

  /* ---------- Kirikaeshi (vista cenital) ---------- */
  function kirikaeshi() {
    let g = `<rect width="480" height="210" rx="10" fill="${C.wood}" opacity=".35"/>`;
    g += `<g font-family="sans-serif" fill="${C.ink}"><text x="14" y="22" font-size="13" font-weight="700">Kirikaeshi</text><text x="14" y="38" font-size="10.5">Shōmen · 4 yokomen avanzando · 5 yokomen retrocediendo · shōmen final</text></g>`;
    g += `<circle cx="400" cy="100" r="16" fill="#6b7da8" stroke="${C.ink}"/><text x="400" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="${C.white}" font-family="sans-serif">M</text>`;
    g += `<text x="400" y="132" text-anchor="middle" font-size="10" fill="${C.ink}" font-family="sans-serif">motodachi</text>`;
    g += `<circle cx="60" cy="100" r="16" fill="${C.indigo}" stroke="${C.ink}"/><text x="60" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="${C.white}" font-family="sans-serif">K</text>`;
    g += `<text x="60" y="132" text-anchor="middle" font-size="10" fill="${C.ink}" font-family="sans-serif">kakarite</text>`;
    g += arrow(86, 80, 360, 80, C.red);
    g += arrow(360, 124, 86, 124, C.indigo);
    const fw = ['I', 'D', 'I', 'D'], bw = ['I', 'D', 'I', 'D', 'I'];
    fw.forEach((s, i) => { const x = 130 + i * 62; g += `<circle cx="${x}" cy="80" r="11" fill="${C.red}"/><text x="${x}" y="84" text-anchor="middle" font-size="10.5" font-weight="700" fill="${C.white}" font-family="sans-serif">${s}</text>`; });
    bw.forEach((s, i) => { const x = 330 - i * 52; g += `<circle cx="${x}" cy="124" r="11" fill="${C.indigo}"/><text x="${x}" y="128" text-anchor="middle" font-size="10.5" font-weight="700" fill="${C.white}" font-family="sans-serif">${s}</text>`; });
    g += `<g font-family="sans-serif" font-size="10.5" fill="${C.ink}"><text x="14" y="168">I = yokomen izquierdo del rival · D = yokomen derecho</text><text x="14" y="184">Avanzas con okuri-ashi golpeando en cada paso; al retroceder, también.</text><text x="14" y="200">Al final, un shōmen y pasas.</text></g>`;
    return `<svg viewBox="0 0 480 210" role="img" aria-label="Esquema del kirikaeshi">${g}</svg>`;
  }

  /* ---------- Figura frontal: bogu, zonas, keikogi ---------- */
  function front(mode) {
    // mode: 'bogu' | 'zones' | 'wear'
    const bogu = mode !== 'wear';
    const z = mode === 'zones';
    let g = '';
    // hakama
    g += `<g data-part="hakama"><path d="M84,196 L176,196 L198,326 L62,326 Z" fill="${C.indigoD}" stroke="${C.ink}"/>` +
      [104, 117, 130, 143, 156].map((x, i) => `<line x1="${x}" y1="200" x2="${[88, 109, 130, 151, 172][i]}" y2="324" stroke="${C.indigoL}" stroke-width="1.4" opacity=".75"/>`).join('') + `</g>`;
    g += `<ellipse cx="100" cy="330" rx="18" ry="6" fill="${C.skin}"/><ellipse cx="160" cy="330" rx="18" ry="6" fill="${C.skin}"/>`;
    // keikogi
    g += `<g data-part="keikogi"><path d="M86,104 L174,104 L178,200 L82,200 Z" fill="${C.indigo}" stroke="${C.ink}"/>`;
    if (!bogu) g += `<path d="M104,104 L130,160 L156,104" fill="none" stroke="${C.white}" stroke-width="2"/><path d="M130,160 L112,196" stroke="${C.indigoD}" stroke-width="3"/>`;
    g += `</g>`;
    if (!bogu) {
      g += `<g data-part="himo"><rect x="82" y="190" width="96" height="9" fill="${C.indigoD}" stroke="${C.white}" stroke-width=".8"/><path d="M130,192 q-10,10 -6,22 M130,192 q10,10 6,22" stroke="${C.white}" fill="none" stroke-width="2"/></g>`;
      g += `<g data-part="koshiita"><rect x="106" y="199" width="48" height="10" rx="2" fill="${C.ink}" opacity=".0"/></g>`;
    }
    // do
    if (bogu) {
      g += `<g data-part="do"><path d="M90,116 Q130,100 170,116 L174,196 Q130,208 86,196 Z" fill="#15151a" stroke="${C.ink}" stroke-width="1.2"/>` +
        `<path d="M92,120 Q130,106 168,120 L170,148 Q130,140 90,148 Z" fill="#26262e"/>` +
        [156, 164, 172, 180, 188].map(y => `<line x1="88" y1="${y}" x2="172" y2="${y}" stroke="${C.red}" stroke-width="1.6" opacity=".85"/>`).join('') +
        `<circle cx="108" cy="130" r="4" fill="${C.gold}"/><circle cx="152" cy="130" r="4" fill="${C.gold}"/></g>`;
      // tare
      g += `<g data-part="tare"><path d="M88,198 L118,198 L116,246 L90,238 Z" fill="${C.indigoD}" stroke="${C.white}" stroke-width="1.2"/>` +
        `<path d="M172,198 L142,198 L144,246 L170,238 Z" fill="${C.indigoD}" stroke="${C.white}" stroke-width="1.2"/>` +
        `<rect x="116" y="198" width="28" height="56" fill="${C.indigo}" stroke="${C.white}" stroke-width="1.2"/><rect x="123" y="212" width="14" height="28" fill="${C.white}"/>` +
        `<rect x="84" y="193" width="92" height="9" fill="${C.indigoD}" stroke="${C.white}" stroke-width="1"/></g>`;
    }
    // brazos
    const arm = (s, e, h) => `<path d="M${s}L${e}L${h}" stroke="${C.indigo}" stroke-width="21" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
    g += arm('92,118', '76,160', '121,174') + arm('168,118', '184,160', '140,178');
    const kote = (cx, cy, rot) => `<g transform="translate(${cx} ${cy}) rotate(${rot})"><rect x="-13" y="-11" width="26" height="22" rx="8" fill="${C.indigoD}" stroke="${C.white}" stroke-width="1.2"/><path d="M-9,-6 h18 M-9,0 h18 M-9,6 h18" stroke="${C.white}" stroke-width=".9" opacity=".7"/></g>`;
    g += bogu ? `<g data-part="kote">${kote(121, 174, -15)}${kote(140, 178, 15)}</g>` :
      `<circle cx="121" cy="174" r="8" fill="${C.skin}"/><circle cx="140" cy="178" r="8" fill="${C.skin}"/>`;
    // men
    if (bogu) {
      g += `<g data-part="men"><path d="M92,80 L168,80 L186,114 Q130,126 74,114 Z" fill="${C.men}" stroke="${C.ink}" stroke-width="1.2" data-part="menbuton"/>` +
        `<path d="M94,86 L166,86 M88,96 L172,96 M82,106 L178,106" stroke="${C.indigoL}" stroke-width="1" stroke-dasharray="3 3" opacity=".7"/>` +
        `<ellipse cx="130" cy="50" rx="39" ry="42" fill="${C.men}" stroke="${C.ink}" stroke-width="1.4"/>` +
        `<path d="M96,28 Q130,6 164,28" stroke="${C.indigoL}" stroke-width="1" fill="none"/><path d="M94,36 Q130,14 166,36" stroke="${C.indigoL}" stroke-width="1" fill="none"/>` +
        `<g data-part="mengane"><rect x="97" y="38" width="66" height="42" rx="8" fill="#0d0e18" stroke="${C.steel}" stroke-width="2.6"/>` +
        [44, 49, 54, 63, 68, 73].map(y => `<line x1="97" y1="${y}" x2="163" y2="${y}" stroke="${C.steel}" stroke-width="1.7"/>`).join('') +
        `<line x1="115" y1="38" x2="115" y2="80" stroke="${C.steel}" stroke-width="1.2"/><line x1="145" y1="38" x2="145" y2="80" stroke="${C.steel}" stroke-width="1.2"/></g>` +
        `<g data-part="tsukidare"><path d="M122,80 h16 l-1,18 h-14 z" fill="#0d0e18" stroke="${C.white}" stroke-width="1"/></g>` +
        `<path d="M94,52 q-20,-2 -22,26" stroke="${C.red}" stroke-width="2.4" fill="none" data-part="menhimo"/><path d="M166,52 q20,-2 22,26" stroke="${C.red}" stroke-width="2.4" fill="none" data-part="menhimo"/></g>`;
    } else {
      g += `<circle cx="130" cy="56" r="26" fill="${C.skin}" stroke="${C.ink}"/><path d="M104,48 Q130,20 156,48 L156,40 Q130,16 104,40 Z" fill="${C.white}"/>`;
    }
    // zonas
    if (z) {
      const hl = (shape) => shape.replace('<', '<').replace('/>', ` class="zone" fill="${C.red}" fill-opacity=".34" stroke="${C.red}" stroke-width="2"/>`);
      g += hl('<rect data-zone="men" x="104" y="9" width="52" height="19" rx="8"/>');
      g += hl('<rect data-zone="yokomen" x="84" y="24" width="22" height="40" rx="9"/>') + hl('<rect data-zone="yokomen" x="154" y="24" width="22" height="40" rx="9"/>');
      g += hl('<rect data-zone="kote" x="104" y="160" width="34" height="30" rx="10"/>') + `<rect data-zone="kote" class="zone2" x="128" y="164" width="34" height="30" rx="10" fill="none" stroke="${C.red}" stroke-width="1.6" stroke-dasharray="4 3"/>`;
      g += hl('<rect data-zone="do" x="82" y="148" width="22" height="48" rx="8"/>') + hl('<rect data-zone="do" x="156" y="148" width="22" height="48" rx="8"/>');
      g += hl('<circle data-zone="tsuki" cx="130" cy="88" r="13"/>');
    }
    return `<svg viewBox="40 0 180 340" role="img" aria-label="${z ? 'Zonas válidas de golpeo' : bogu ? 'Armadura de kendo (bogu)' : 'Keikogi y hakama'}">${g}</svg>`;
  }

  /* ---------- Shinai ---------- */
  function shinai() {
    const y = 62;
    let g = '';
    // staves
    g += `<g data-part="take"><rect x="40" y="${y - 7}" width="560" height="14" rx="3" fill="${C.bamb}" stroke="${C.bambD}"/>` +
      `<line x1="150" y1="${y - 2}" x2="598" y2="${y - 2}" stroke="${C.bambD}" opacity=".5"/><line x1="150" y1="${y + 2}" x2="598" y2="${y + 2}" stroke="${C.bambD}" opacity=".5"/></g>`;
    g += `<g data-part="tsuka"><rect x="16" y="${y - 9}" width="150" height="18" rx="5" fill="${C.leather}" stroke="${C.ink}"/>` +
      Array.from({ length: 14 }, (_, i) => `<line x1="${28 + i * 10}" y1="${y - 8}" x2="${24 + i * 10}" y2="${y + 8}" stroke="${C.gold}" stroke-width="1" opacity=".55"/>`).join('') + `</g>`;
    g += `<g data-part="tsukagashira"><rect x="10" y="${y - 10}" width="12" height="20" rx="4" fill="${C.ink}"/></g>`;
    g += `<g data-part="tsuba"><ellipse cx="172" cy="${y}" rx="9" ry="30" fill="${C.ink}" stroke="${C.gray}"/></g>`;
    g += `<g data-part="tsubadome"><rect x="182" y="${y - 11}" width="9" height="22" rx="3" fill="${C.red}" stroke="${C.ink}"/></g>`;
    g += `<g data-part="tsuru"><path d="M190,${y - 12} L598,${y - 12}" stroke="${C.white}" stroke-width="3" stroke-dasharray="1 0"/><path d="M190,${y - 12} L598,${y - 12}" stroke="${C.ink}" stroke-width=".8"/></g>`;
    g += `<g data-part="nakayui"><rect x="438" y="${y - 11}" width="12" height="22" rx="3" fill="${C.leather}" stroke="${C.ink}"/></g>`;
    g += `<g data-part="sakigawa"><path d="M552,${y - 9} h46 q10,0 10,9 q0,9 -10,9 h-46 z" fill="${C.leather}" stroke="${C.ink}"/><circle cx="604" cy="${y}" r="4" fill="${C.gray}"/></g>`;
    g += `<g data-part="datotsubu"><path d="M450,${y + 22} v8 h156 v-8" fill="none" stroke="${C.red}" stroke-width="3"/><path d="M450,${y + 22} v8 h156 v-8" fill="none" stroke="${C.red}" stroke-width="10" opacity="0"/></g>`;
    g += `<g data-part="monouchi"><rect x="530" y="${y - 13}" width="26" height="26" rx="4" fill="${C.red}" fill-opacity=".22" stroke="${C.red}" stroke-dasharray="3 3"/></g>`;
    g += `<g font-family="Noto Sans JP, sans-serif" font-size="11" fill="${C.ink}"><text x="30" y="${y - 20}">tsuka-gashira · tsuka</text><text x="150" y="${y + 52}">tsuba</text><text x="455" y="${y + 52}">datotsu-bu</text><text x="410" y="${y - 22}">nakayui</text><text x="555" y="${y - 22}">saki-gawa</text><text x="240" y="${y - 22}">tsuru</text></g>`;
    return `<svg viewBox="0 0 640 124" role="img" aria-label="Partes del shinai">${g}</svg>`;
  }

  /* ---------- Tenouchi (agarre) ---------- */
  function grip() {
    let g = `<rect x="14" y="62" width="330" height="26" rx="8" fill="${C.leather}" stroke="${C.ink}"/>`;
    g += `<rect x="6" y="60" width="12" height="30" rx="5" fill="${C.ink}"/>`;
    const hand = (x0, label, sub) => {
      let h = '';
      for (let i = 0; i < 4; i++) {
        const firm = i < 2;
        h += `<rect x="${x0 + i * 19}" y="42" width="18" height="66" rx="8" fill="${firm ? C.red : C.bamb}" stroke="${C.ink}" stroke-width="1.2"/>`;
      }
      h += `<ellipse cx="${x0 + 60}" cy="40" rx="16" ry="7" fill="${C.bamb}" stroke="${C.ink}"/>`;
      h += `<text x="${x0 + 38}" y="132" text-anchor="middle" font-size="12" font-weight="700" fill="${C.ink}" font-family="sans-serif">${label}</text>`;
      h += `<text x="${x0 + 38}" y="146" text-anchor="middle" font-size="10.5" fill="${C.ink}" font-family="sans-serif">${sub}</text>`;
      return h;
    };
    g += hand(26, 'Mano izquierda', 'manda y da la fuerza');
    g += hand(150, 'Mano derecha', 'guía y acompaña');
    g += `<g font-family="sans-serif" font-size="10.5" fill="${C.ink}"><rect x="262" y="20" width="12" height="12" fill="${C.red}"/><text x="280" y="30">meñique y anular: firmes</text><rect x="262" y="38" width="12" height="12" fill="${C.bamb}"/><text x="280" y="48">corazón, índice y pulgar: sueltos</text></g>`;
    g += `<text x="262" y="112" font-size="10.5" fill="${C.ink}" font-family="sans-serif">Un puño de separación</text><path d="M214,60 h40" stroke="${C.ink}" stroke-width="1.4"/>`;
    return `<svg viewBox="0 0 400 156" role="img" aria-label="Agarre del shinai (tenouchi)">${g}</svg>`;
  }

  /* ---------- Ashi-sabaki (vista cenital) ---------- */
  function footIcon(type, x, y, n, ghost, heel) {
    const mirror = type === 'L' ? -1 : 1;
    const col = type === 'R' ? C.red : C.indigo;
    return `<g transform="translate(${x} ${y})" opacity="${ghost ? 0.3 : 1}"><g transform="scale(1 ${mirror})">` +
      `<path d="M-15,-6 Q-15,-9 -9,-9 L9,-8 Q18,-6 18,0 Q18,6 9,7 L-9,8 Q-15,8 -15,5 Z" fill="${col}" stroke="${C.ink}" stroke-width="1"/>` +
      (heel ? `<path d="M-15,-5 Q-19,0 -15,5" fill="none" stroke="${C.white}" stroke-width="2.4" stroke-dasharray="2 2"/>` : '') + `</g>` +
      `<text x="-1" y="4" text-anchor="middle" font-size="11" font-weight="700" fill="${C.white}" font-family="sans-serif">${n ? n : type}</text></g>`;
  }
  const arrow = (x1, y1, x2, y2, col) => {
    const a = Math.atan2(y2 - y1, x2 - x1), s = 8;
    return `<path d="M${x1},${y1}L${x2},${y2}" stroke="${col || C.ink}" stroke-width="2" fill="none" stroke-dasharray="5 4"/>` +
      `<path d="M${x2},${y2}l${f(-s * Math.cos(a - .45))},${f(-s * Math.sin(a - .45))} M${x2},${y2}l${f(-s * Math.cos(a + .45))},${f(-s * Math.sin(a + .45))}" stroke="${col || C.ink}" stroke-width="2.4" fill="none"/>`;
  };
  const FOOT = {
    okuri: { t: 'Okuri-ashi', items: [['R', 120, 60, 0, 1], ['L', 70, 100, 0, 1, 1], ['R', 250, 60, 1], ['L', 200, 100, 2, 0, 1]], arrows: [[140, 60, 224, 60], [90, 100, 174, 100]] },
    ayumi: { t: 'Ayumi-ashi', items: [['R', 120, 60, 0, 1], ['L', 70, 100, 0, 1, 1], ['L', 200, 100, 1], ['R', 270, 60, 2]], arrows: [[90, 100, 176, 100], [140, 60, 246, 60]] },
    hiraki: { t: 'Hiraki-ashi', items: [['R', 120, 70, 0, 1], ['L', 70, 110, 0, 1, 1], ['R', 200, 40, 1], ['L', 150, 80, 2, 0, 1]], arrows: [[140, 70, 180, 44], [90, 110, 130, 84]] },
    tsugi: { t: 'Tsugi-ashi', items: [['R', 120, 60, 0, 1], ['L', 70, 100, 0, 1, 1], ['L', 118, 100, 1], ['R', 250, 60, 2], ['L', 200, 100, 3, 0, 1]], arrows: [[90, 100, 100, 100], [140, 60, 226, 60]] },
    fumikomi: { t: 'Fumikomi-ashi', items: [['R', 120, 60, 0, 1], ['L', 70, 100, 0, 1, 1], ['R', 240, 60, 1], ['L', 190, 100, 2, 0, 1]], arrows: [[140, 60, 216, 60], [90, 100, 166, 100]], bang: [262, 60] }
  };
  function footwork(kind) {
    const d = FOOT[kind];
    let g = `<rect x="0" y="0" width="360" height="136" rx="8" fill="${C.wood}" opacity=".35"/>`;
    g += `<text x="12" y="20" font-size="13" font-weight="700" fill="${C.ink}" font-family="sans-serif">${d.t}</text><text x="12" y="34" font-size="10" fill="${C.ink}" font-family="sans-serif">→ dirección del avance · pie rojo = derecho · azul = izquierdo</text>`;
    d.arrows.forEach(a => g += arrow(a[0], a[1], a[2], a[3], C.ink));
    d.items.forEach(i => g += footIcon(i[0], i[1], i[2] + 10, i[3], i[4], i[5]));
    if (d.bang) g += `<g stroke="${C.red}" stroke-width="2.4"><line x1="270" y1="58" x2="286" y2="46"/><line x1="272" y1="68" x2="290" y2="70"/><line x1="268" y1="48" x2="274" y2="34"/></g>`;
    return `<svg viewBox="0 0 360 136" role="img" aria-label="${d.t}">${g}</svg>`;
  }

  /* ---------- Ma-ai ---------- */
  function maai() {
    const rows = [['Tō-ma · distancia larga', 330, 'Ninguno puede golpear. Zona de observar y de seme.'],
    ['Issoku-ittō-no-ma-ai · distancia de golpeo', 205, 'Con un paso se golpea. Los kensen apenas se cruzan.'],
    ['Chika-ma · distancia corta', 130, 'Los shinai se cruzan casi a la mitad: muy peligroso, se golpea sin pasos.']];
    let g = '';
    rows.forEach((r, i) => {
      const y = 36 + i * 74, ax = 60, bx = ax + r[1];
      const reach = 105;
      g += `<text x="10" y="${y - 20}" font-size="12" font-weight="700" fill="${C.ink}" font-family="sans-serif">${r[0]}</text>`;
      g += `<line x1="${ax}" y1="${y}" x2="${ax + reach}" y2="${y}" stroke="${C.indigo}" stroke-width="4" stroke-linecap="round"/>`;
      g += `<line x1="${bx}" y1="${y}" x2="${bx - reach}" y2="${y}" stroke="${C.red}" stroke-width="4" stroke-linecap="round" opacity=".85"/>`;
      g += `<circle cx="${ax}" cy="${y}" r="13" fill="${C.indigo}" stroke="${C.ink}"/><circle cx="${bx}" cy="${y}" r="13" fill="#6b7da8" stroke="${C.ink}"/>`;
      g += `<text x="${(ax + bx) / 2}" y="${y + 30}" text-anchor="middle" font-size="10.5" fill="${C.ink}" font-family="sans-serif">${r[2]}</text>`;
    });
    return `<svg viewBox="0 0 470 238" role="img" aria-label="Las tres distancias de combate">${g}</svg>`;
  }

  /* ---------- Tai-sabaki cenital (nuki-waza) ---------- */
  function topview(kind) {
    const A = [90, 90], B = [340, 90];
    let g = `<rect width="440" height="190" rx="8" fill="${C.wood}" opacity=".35"/>`;
    const man = (p, col, lbl, dir) => `<g transform="translate(${p[0]} ${p[1]})"><circle r="14" fill="${col}" stroke="${C.ink}" stroke-width="1.4"/><path d="M${dir * 14},-7 L${dir * 26},0 L${dir * 14},7 Z" fill="${C.ink}"/><text y="4" text-anchor="middle" font-size="12" font-weight="700" fill="${C.white}" font-family="sans-serif">${lbl}</text></g>`;
    g += man(A, C.indigo, 'A', 1) + man(B, '#6b7da8', 'B', -1);
    g += arrow(318, 90, 190, 90, C.red);
    g += `<path d="M104,100 Q150,150 215,148" stroke="${C.indigo}" stroke-width="2.4" fill="none" stroke-dasharray="5 4"/>` + arrow(190, 146, 232, 150, C.indigo);
    g += `<text x="14" y="176" font-size="11" fill="${C.ink}" font-family="sans-serif">B ataca recto (men). A sale hacia su derecha y corta el dō sin quedar en la línea.</text>`;
    g += `<text x="255" y="75" font-size="10.5" fill="${C.red}" font-family="sans-serif">ataque de B</text><text x="120" y="150" font-size="10.5" fill="${C.indigo}" font-family="sans-serif">tai-sabaki de A</text>`;
    return `<svg viewBox="0 0 440 190" role="img" aria-label="Esquiva lateral (nuki-waza)">${g}</svg>`;
  }

  /* ---------- Mascota ---------- */
  function mascot() {
    let g = '';
    g += `<path d="M104,132 L121,42" stroke="${C.ink}" stroke-width="8" stroke-linecap="round"/><path d="M106,120 L120,48" stroke="${C.bamb}" stroke-width="5" stroke-linecap="round"/><path d="M104,130 L108,110" stroke="${C.leather}" stroke-width="5.4" stroke-linecap="round"/><path d="M99,113 L113,116" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>`;
    g += `<path d="M40,104 h50 l9,36 h-68 z" fill="${C.indigoD}" stroke="${C.ink}" stroke-width="1.4"/>`;
    g += `<path d="M52,106 l-3,34 M65,106 v34 M78,106 l3,34" stroke="${C.indigoL}" stroke-width="1.2" opacity=".6"/>`;
    g += `<rect x="42" y="90" width="46" height="20" rx="8" fill="${C.indigo}" stroke="${C.ink}" stroke-width="1.2"/><rect x="41" y="104" width="48" height="6" rx="3" fill="${C.white}"/>`;
    g += `<ellipse cx="52" cy="144" rx="13" ry="5" fill="${C.skin}" stroke="${C.ink}"/><ellipse cx="80" cy="144" rx="13" ry="5" fill="${C.skin}" stroke="${C.ink}"/>`;
    g += `<path d="M44,98 L26,82" stroke="${C.indigo}" stroke-width="10" stroke-linecap="round"/><circle cx="25" cy="80" r="9" fill="${C.indigoD}" stroke="${C.white}" stroke-width="1.2"/>`;
    g += `<path d="M86,98 L103,120" stroke="${C.indigo}" stroke-width="10" stroke-linecap="round"/><circle cx="104" cy="122" r="9" fill="${C.indigoD}" stroke="${C.white}" stroke-width="1.2"/>`;
    g += `<path d="M31,76 Q65,98 99,76 L108,96 Q65,114 22,96 Z" fill="${C.men}" stroke="${C.ink}" stroke-width="1.4"/>`;
    g += `<ellipse cx="65" cy="52" rx="44" ry="42" fill="#2b3a6b" stroke="${C.ink}" stroke-width="1.6"/>`;
    g += `<path d="M23,42 Q65,4 107,42 L107,50 Q65,14 23,50 Z" fill="${C.red}" stroke="${C.ink}" stroke-width="1"/>`;
    g += mitsudomoe(65, 24, 6.5, C.white);
    g += `<rect x="29" y="43" width="72" height="36" rx="13" fill="#0f1126" stroke="${C.steel}" stroke-width="3"/>`;
    g += [47, 52, 68, 73].map(y => `<line x1="30" y1="${y}" x2="100" y2="${y}" stroke="${C.steel}" stroke-width="2"/>`).join('');
    g += [44, 65, 86].map(x => `<line x1="${x}" y1="44" x2="${x}" y2="78" stroke="${C.steel}" stroke-width="1.4" opacity=".7"/>`).join('');
    g += `<ellipse cx="49" cy="60" rx="8.5" ry="9.5" fill="#fff"/><ellipse cx="81" cy="60" rx="8.5" ry="9.5" fill="#fff"/><circle cx="51" cy="61" r="5" fill="${C.ink}"/><circle cx="83" cy="61" r="5" fill="${C.ink}"/><circle cx="53" cy="58.5" r="1.7" fill="#fff"/><circle cx="85" cy="58.5" r="1.7" fill="#fff"/>`;
    g += `<path d="M58,68 Q65,73 72,68" stroke="#e98a86" stroke-width="2" fill="none" stroke-linecap="round" opacity=".0"/>`;
    return `<svg viewBox="0 0 130 152" role="img" aria-label="Mascota kendōka"><g class="mascot">${g}</g></svg>`;
  }

  /* ---------- Iconos 24x24 ---------- */
  const ICONS = {
    torii: '<path d="M2 6q10 3 20 0M5 9h14M7 9v12M17 9v12M4 14h16" />',
    men: '<path d="M5 6q7-5 14 0v8q-7 4-14 0zM7 11h10M7 14h10M12 6v10"/>',
    shinai: '<path d="M3 21L20 4M18 3l3 3M5 17l2 2"/>',
    feet: '<path d="M8 4c-2 0-3 3-3 6s1 5 3 5 3-2 3-5-1-6-3-6zM16 9c-2 0-3 3-3 6s1 5 3 5 3-2 3-5-1-6-3-6z"/>',
    swords: '<path d="M4 20L18 6M20 20L6 6M3 3l5 1M21 3l-5 1"/>',
    flag: '<path d="M6 21V4h12l-3 4 3 4H6"/>',
    book: '<path d="M4 5h7v15H4zM13 5h7v15h-7z"/>',
    home: '<path d="M3 11l9-7 9 7M6 10v10h12V10"/>',
    quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 114 2c-1 .8-1.5 1.2-1.5 2.5M12 17.5v.5"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/>',
    drum: '<ellipse cx="12" cy="8" rx="8" ry="3"/><path d="M4 8v8c0 2 4 3 8 3s8-1 8-3V8"/>',
    check: '<path d="M5 12l5 5 9-10"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    sound: '<path d="M4 9v6h4l5 4V5L8 9zM16.5 9a4 4 0 010 6M19 6.5a8 8 0 010 11"/>',
    chev: '<path d="M9 6l6 6-6 6"/>',
    down: '<path d="M6 9l6 6 6-6"/>',
    install: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
    cup: '<path d="M5 9h12v5a5 5 0 01-5 5H10a5 5 0 01-5-5zM17 10h2a2 2 0 010 4h-2M8 3v3M12 3v3"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.2 6L12 16.6 6.5 19.6l1.2-6L3.2 9.4l6.1-.8z"/>'
  };
  function icon(name, cls) {
    return `<svg class="ico ${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
  }

  /* ---------- Registro ---------- */
  function get(spec) {
    const [k, arg] = spec.split(':');
    switch (k) {
      case 'logo': return logo(120, true);
      case 'strip': case 'seq': return seq(arg);
      case 'vs': return `<div class="art one">${scene([{ pose: arg }])}</div>`;
      case 'duo': { const p = arg.split(','); return `<div class="art one">${scene([{ pose: p[0] }], { opp: { pose: p[1] } })}</div>`; }
      case 'centro': return `<div class="art one wide">${centro()}</div>`;
      case 'kirikaeshi': return `<div class="art one wide">${kirikaeshi()}</div>`;
      case 'frontchudan': return `<div class="art one small">${front('bogu')}</div>`;
      case 'solo': return `<div class="art one">${solo(arg, arg)}</div>`;
      case 'kamae5': return soloRow(['chudan', 'jodan', 'gedan', 'hasso', 'waki'], ['Chūdan', 'Jōdan', 'Gedan', 'Hassō', 'Waki']);
      case 'rei': return soloRow(['shisei', 'rei15', 'rei30', 'zarei', 'sonkyo'], ['Shisei (de pie)', 'Ritsurei ~15°', 'Ritsurei ~30°', 'Zarei (seiza)', 'Sonkyo']);
      case 'bogu': return `<div class="art interactive" data-kind="bogu">${front('bogu')}</div>`;
      case 'zones': return `<div class="art interactive" data-kind="zones">${front('zones')}</div>`;
      case 'wear': return `<div class="art interactive" data-kind="wear">${front('wear')}</div>`;
      case 'shinai': return `<div class="art interactive wide" data-kind="shinai">${shinai()}</div>`;
      case 'grip': return `<div class="art one wide">${grip()}</div>`;
      case 'footwork': return `<div class="art one wide">${footwork(arg)}</div>`;
      case 'maai': return `<div class="art one wide">${maai()}</div>`;
      case 'topview': return `<div class="art one wide">${topview(arg)}</div>`;
      case 'scene': return `<div class="art one wide">${scene(arg.split('+'))}</div>`;
      default: return '';
    }
  }

  return { get, logo, icon, mitsudomoe, scene, solo, front, shinai, mascot, seq, SEQ, POSES, C };
})();
