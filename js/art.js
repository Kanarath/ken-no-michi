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
    const k = R / 35, rc = 20 * k, hw = 15 * k, N = 22;
    const a0 = -Math.PI / 2, a1 = 10 * Math.PI / 180;
    const P = (r, a) => [r * Math.cos(a), r * Math.sin(a)];
    const pts = [];
    for (let i = 0; i <= N; i++) { const t = i / N; pts.push(P(rc + hw * (1 - t), a0 + (a1 - a0) * t)); }
    for (let i = N; i >= 0; i--) { const t = i / N; pts.push(P(rc - hw * (1 - t), a0 + (a1 - a0) * t)); }
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
    sonkyo: { head: [124, 78], sh: [112, 108], hip: [96, 164], legs: { k: [146, 178], f: [128, 220] }, L: [160, 146], ang: -30, rh: [150, 150] }
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
  const TARGETS = { men: [398, 36, 17], kote: [361, 110, 14], do: [392, 106, 18], tsuki: [385, 82, 12], yokomen: [380, 52, 15] };
  const OPP_TINT = { key: '#6b7da8', hak: '#2a3566', men: '#2a3050' };

  function scene(att, opts) {
    opts = opts || {};
    const a = att.map(x => (typeof x === 'string' ? { pose: x } : x));
    let g = FLOOR;
    if (opts.opp !== false) {
      const op = opts.opp || { pose: 'chudan' };
      const o = typeof op === 'string' ? { pose: op } : op;
      g += `<g transform="translate(${W} 0) scale(-1 1)">${figure(POSES[o.pose], { dx: o.dx || 0, tint: OPP_TINT })}</g>`;
    }
    a.forEach((x, i) => { g += `<g opacity="${x.ghost ? 0.28 : 1}">${figure(POSES[x.pose], { dx: x.dx || 0 })}</g>`; });
    if (opts.hl) {
      const t = TARGETS[opts.hl];
      g += `<circle class="pulse" cx="${t[0]}" cy="${t[1]}" r="${t[2]}" fill="${C.red}" fill-opacity=".28" stroke="${C.red}" stroke-width="2.2" stroke-dasharray="4 3"/>`;
    }
    if (opts.arrow) g += opts.arrow;
    return `<svg viewBox="${opts.vb || '48 -42 452 284'}" role="img" aria-label="${opts.label || 'Ilustración de kendo'}">${g}</svg>`;
  }

  function solo(key, label) {
    return `<svg viewBox="${key === 'chudan' || key === 'gedan' ? '30 -42 270 284' : '30 -42 240 284'}" role="img" aria-label="${label || key}">${FLOOR}${figure(POSES[key])}</svg>`;
  }
  function soloRow(keys, labels) {
    return `<div class="grid-art">${keys.map((k, i) => `<figure>${solo(k, labels[i])}<figcaption>${labels[i]}</figcaption></figure>`).join('')}</div>`;
  }

  const STRIPS = {
    men: { frames: [[{ pose: 'chudan' }], [{ pose: 'furikaburi', dx: 70 }], [{ pose: 'men', dx: 117 }]], hl: [null, null, 'men'], caps: ['1 · Chūdan: kensen al cuello del rival', '2 · Furikaburi: sube el shinai al avanzar', '3 · Datotsu: extiende, golpea y pisa (fumikomi)'] },
    kote: { frames: [[{ pose: 'chudan' }], [{ pose: 'koteUp', dx: 50 }], [{ pose: 'kote', dx: 96 }]], hl: [null, null, 'kote'], caps: ['1 · Chūdan', '2 · Eleva el shinai solo lo justo', '3 · Corta pequeño y rápido a la muñeca'] },
    do: { frames: [[{ pose: 'chudan' }], [{ pose: 'furikaburi', dx: 70 }], [{ pose: 'do', dx: 130 }]], hl: [null, null, 'do'], caps: ['1 · Chūdan', '2 · Furikaburi (puede ser algo menor)', '3 · Corte al lado derecho del dō, con filo'] },
    tsuki: { frames: [[{ pose: 'chudan' }], [{ pose: 'tsukiPrep', dx: 40 }], [{ pose: 'tsuki', dx: 62 }]], hl: [null, null, 'tsuki'], caps: ['1 · Chūdan', '2 · Recoge ligeramente, sin levantar', '3 · Estocada recta a la garganta (tsuki-dare)'] }
  };
  function strip(key) {
    const s = STRIPS[key];
    return `<div class="strip">${s.frames.map((fr, i) =>
      `<figure>${scene(fr, { hl: s.hl[i], label: s.caps[i] })}<figcaption>${s.caps[i]}</figcaption></figure>`).join('')}</div>`;
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
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>'
  };
  function icon(name, cls) {
    return `<svg class="ico ${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
  }

  /* ---------- Registro ---------- */
  function get(spec) {
    const [k, arg] = spec.split(':');
    switch (k) {
      case 'logo': return logo(120, true);
      case 'strip': return strip(arg);
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

  return { get, logo, icon, mitsudomoe, scene, solo, front, shinai, POSES, C };
})();
