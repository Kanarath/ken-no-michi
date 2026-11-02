/* Animaciones paso a paso (cámara lenta con líneas guía). Se cargan después de art.js. */
(function () {
  const A = KArt.ANIM;
  const chu = (cap, note, extra) => Object.assign({ a: { pose: 'chudan', dx: 0 }, o: { pose: 'chudan', dx: 0 }, hold: 900, cap, note }, extra || {});
  const seme = () => ({ a: { pose: 'chudan', dx: 30 }, dur: 600, hold: 200, cap: '2 · Seme: entras con okuri-ashi', note: 'Desliza los pies sin que la cabeza suba ni baje. El kensen sigue apuntando a su garganta y todavía no subes el shinai.' });
  const up = (n) => ({ a: { pose: 'furikaburi', dx: 70, over: { ang: -210 } }, dur: 700, hold: 250, cap: n + ' · Furikaburi', note: 'El shinai sube por el centro hasta sobre la cabeza, con los brazos casi estirados y la mano izquierda por encima de la frente. Mientras, el cuerpo sigue avanzando.' });

  A.men = { t: 'Men-uchi', target: 'men', keys: [
    chu('1 · Chūdan', 'Kensen a la garganta, mano izquierda en el centro del cuerpo y talón izquierdo ligeramente levantado.'), seme(), up(3),
    { a: { pose: 'men', touch: 'men' }, dur: 300, hold: 1200, cap: '4 · Golpe: fumikomi y kiai', note: 'Los brazos se extienden hacia delante y el monouchi toca el centro de la cabeza. Pisada y grito a la vez; el pie izquierdo llega enseguida (hikitsuke).' }] };

  A.yokomen = { t: 'Yokomen-uchi', target: 'yokomen', keys: [
    chu('1 · Chūdan', 'Misma guardia que para men.'), seme(), up(3),
    { a: { pose: 'yokomen', touch: 'yokomen' }, dur: 300, hold: 1200, cap: '4 · Corte en diagonal al lateral de la cabeza', note: 'Subes siempre por el centro; solo la bajada es diagonal (unos 45°). El filo corta el lateral con el monouchi.' }] };

  A.kote = { t: 'Kote-uchi', target: 'kote', keys: [
    chu('1 · Chūdan', 'Kensen a la garganta y hombros relajados.'), seme(),
    { a: { pose: 'koteUp', dx: 50 }, dur: 500, hold: 200, cap: '3 · Subes solo lo justo', note: 'El shinai sube hasta la altura de la frente, no más: el golpe nace de las muñecas y de la mano izquierda.' },
    { a: { pose: 'kote', touch: 'kote' }, dur: 260, hold: 1200, cap: '4 · Corte corto a la muñeca', note: 'Un corte corto y rápido a la muñeca derecha del rival, con fumikomi y kiai. La espalda sigue recta.' }] };

  A.do = { t: 'Dō-uchi', target: 'do', keys: [
    chu('1 · Chūdan', 'Kensen a la garganta.'), seme(), up(3),
    { a: { pose: 'do', touch: 'do' }, dur: 300, hold: 1200, cap: '4 · Corte al costado derecho del dō', note: 'El filo recorre el costado: se oye un sonido claro. La cabeza y la mirada se quedan al frente; las manos terminan delante del cuerpo.' }] };

  A.tsuki = { t: 'Tsuki', target: 'tsuki', keys: [
    chu('1 · Chūdan', 'Mirada en el tsuki-dare (la protección de la garganta).'), seme(),
    { a: { pose: 'tsukiPrep', dx: 40 }, dur: 500, hold: 200, cap: '3 · Recoges sin subir', note: 'El shinai se recoge ligeramente; no sube.' },
    { a: { pose: 'tsuki', touch: 'tsuki', len: 122 }, dur: 260, hold: 1200, cap: '4 · Estocada recta', note: 'La mano izquierda empuja y la derecha guía. Solo la punta toca el tsuki-dare; retira el shinai enseguida. Solo con supervisión del sensei.' }] };

  A['kote-men'] = { t: 'Kote-men', target: 'kote', keys: [
    chu('1 · Chūdan', 'Guardia habitual.'), seme(),
    { a: { pose: 'koteUp', dx: 50 }, dur: 450, hold: 120, cap: '3 · Sube corto', note: 'Subida mínima para el kote.' },
    { a: { pose: 'kote', touch: 'kote' }, dur: 250, hold: 150, cap: '4 · Kote', note: 'Golpe real, con kiai ("kote!").' },
    { a: { pose: 'furikaburi', dxr: 12, over: { ang: -210 } }, dur: 320, hold: 40, target: 'men', cap: '5 · Recoges sin parar', note: 'El shinai sube de inmediato por el centro: un solo movimiento continuo.' },
    { a: { pose: 'men', touch: 'men' }, dur: 240, hold: 1200, target: 'men', cap: '6 · Men', note: 'El segundo golpe es tan completo como el primero; el pie izquierdo sigue al derecho.' }] };

  A['men-pasante'] = { t: 'Men con pase y vuelta', target: 'men', keys: [
    chu('1 · Chūdan', 'Frente al compañero.'), seme(), up(3),
    { a: { pose: 'men', touch: 'men' }, dur: 300, hold: 500, cap: '4 · Men con fumikomi', note: 'Golpeas y no frenas.' },
    { a: { pose: 'passing', dxr: 90 }, dur: 500, hold: 0, target: null, cap: '5 · Sigues avanzando', note: 'Pasos cortos y rápidos junto al compañero, con el shinai delante y los brazos recogidos.' },
    { a: { pose: 'passing', dxr: 110 }, cam: 36, dur: 500, hold: 120, cap: '6 · Pasas de largo', note: 'No choques con él: mantén tu línea. Tu sensei te indicará por qué lado se pasa.' },
    { a: { pose: 'passing' }, fx: -1, dur: 500, hold: 120, cap: '7 · Te giras mirándole', note: 'Gira sin dar la espalda al compañero.' },
    { a: { pose: 'chudan', dxr: -22 }, fx: -1, dur: 500, hold: 1300, cap: '8 · Chūdan con zanshin', note: 'Vuelves a la guardia, de cara y con el kensen en su garganta.' }] };

  /* Jōge-buri y pies (sin rival) */
  A['joge-buri'] = { t: 'Jōge-buri', solo: true, keys: [
    { a: { pose: 'chudan', dx: 0 }, hold: 900, cap: '1 · Chūdan', note: 'Punto de partida.' },
    { a: { pose: 'furikaburi', dx: 0, over: { ang: -210 } }, dur: 800, hold: 300, cap: '2 · Subes por el centro', note: 'Hasta sobre la cabeza, brazos casi estirados, el kensen cae hacia atrás a unos 45°.' },
    { a: { pose: 'suburiEnd', dx: 0 }, dur: 320, hold: 1300, cap: '3 · Bajas y paras a la altura de chūdan', note: 'Aprieta tenouchi al final, haz kiai y frena con la mano izquierda: el kensen no pasa de la altura de la garganta.', g: [{ h: 104, label: 'altura de chūdan' }] }] };

  A['okuri-ashi'] = { t: 'Okuri-ashi', solo: true, keys: [
    { a: { pose: 'chudan', dx: 0 }, hold: 800, cap: '1 · Chūdan', note: 'Pie derecho delante, talón izquierdo ligeramente alto.', g: [{ h: 29, label: 'la cabeza va a la misma altura' }] },
    { a: { pose: 'okuri1', dx: 0 }, dur: 600, hold: 150, cap: '2 · Sale primero el pie derecho', note: 'Se desliza rozando el suelo; la mano izquierda no se mueve.', g: [{ h: 29, label: 'la cabeza va a la misma altura' }] },
    { a: { pose: 'chudan', dx: 32 }, dur: 450, hold: 1200, cap: '3 · El izquierdo le sigue de inmediato', note: 'Recuperas la distancia entre los pies y la guardia. La cabeza no ha subido ni bajado.', g: [{ h: 29, label: 'la cabeza va a la misma altura' }] }] };

  A['fumikomi-ashi'] = { t: 'Fumikomi-ashi', solo: true, keys: [
    { a: { pose: 'furikaburi', dx: 0, over: { ang: -210 } }, hold: 800, cap: '1 · Furikaburi', note: 'Shinai arriba, listo para golpear.' },
    { a: { pose: 'fumi1', dx: 0, over: { ang: -210 } }, dur: 500, hold: 150, cap: '2 · El pie delantero avanza corto y bajo', note: 'No es un salto: es un paso rasante hacia delante.' },
    { a: { pose: 'men', dx: -20 }, dur: 260, hold: 1300, cap: '3 · Pisada con la planta entera y golpe a la vez', note: 'Aterriza con toda la planta (no con el talón); el pie izquierdo llega de inmediato (hikitsuke).', g: [{ h: 223, label: 'planta entera en el suelo' }] }] };

  /* Kirikaeshi completo */
  (function () {
    const k = [
      chu('1 · Chūdan frente al motodachi', 'Saludo, sonkyō y guardia. El motodachi mantiene chūdan.'),
      { a: { pose: 'furikaburi', dx: 70, over: { ang: -210 } }, dur: 600, hold: 120, cap: '2 · Shōmen inicial: subes', note: 'Subes por el centro con okuri-ashi.' },
      { a: { pose: 'men', touch: 'men' }, dur: 260, hold: 450, target: 'men', cap: '3 · Shōmen (men) al centro', note: 'El motodachi abre el men. Golpe completo con kiai.' }
    ];
    for (let i = 1; i <= 4; i++) {
      k.push({ a: { pose: 'furikaburi', dxr: 22, over: { ang: -210 } }, o: { dxr: -18 }, dur: 260, hold: 40, target: 'yokomen', cap: '4 · Avanzas: yokomen ' + (i % 2 ? 'izquierdo' : 'derecho') + ' (' + i + '/4)', note: 'Sube siempre por el centro y baja en diagonal, alternando lados. Un golpe por paso, con kiai. El motodachi retrocede y recibe con su shinai.' });
      k.push({ a: { pose: 'yokomen', touch: 'yokomen' }, dur: 200, hold: 90, target: 'yokomen', cap: '4 · Avanzas: yokomen ' + (i % 2 ? 'izquierdo' : 'derecho') + ' (' + i + '/4)', note: 'Sube siempre por el centro y baja en diagonal, alternando lados. Un golpe por paso, con kiai. El motodachi retrocede y recibe con su shinai.' });
    }
    for (let j = 1; j <= 5; j++) {
      k.push({ a: { pose: 'furikaburi', dxr: -22, over: { ang: -210 } }, o: { dxr: 18 }, dur: 260, hold: 40, target: 'yokomen', cap: '5 · Retrocedes: yokomen ' + (j % 2 ? 'izquierdo' : 'derecho') + ' (' + j + '/5)', note: 'Ahora el motodachi avanza y tú retrocedes golpeando igual: mismos golpes amplios, mismo kiai.' });
      k.push({ a: { pose: 'yokomen', touch: 'yokomen' }, dur: 200, hold: 90, target: 'yokomen', cap: '5 · Retrocedes: yokomen ' + (j % 2 ? 'izquierdo' : 'derecho') + ' (' + j + '/5)', note: 'Ahora el motodachi avanza y tú retrocedes golpeando igual: mismos golpes amplios, mismo kiai.' });
    }
    k.push({ a: { pose: 'furikaburi', dxr: 18, over: { ang: -210 } }, o: { dxr: -14 }, dur: 320, hold: 60, target: 'men', cap: '6 · Shōmen final: subes', note: 'Último golpe: sube por el centro.' });
    k.push({ a: { pose: 'men', touch: 'men' }, dur: 240, hold: 700, target: 'men', cap: '7 · Shōmen final y pase', note: 'Men al centro y sigues pasando junto al motodachi para terminar con zanshin.' });
    k.push({ a: { pose: 'passing', dxr: 100 }, dur: 600, hold: 900, cap: '8 · Sigues y terminas con zanshin', note: 'Pasas, te giras de cara al motodachi y vuelves a chūdan.' });
    A.kirikaeshi = { t: 'Kirikaeshi completo', target: 'men', trailWin: 700, keys: k };
  })();

  /* Kata (con bokutō, sin bōgu): shidachi a la izquierda (azul), uchidachi a la derecha (claro) */
  const B = (pose, over) => ({ pose, over: Object.assign({ iai: true, katana: true, wood: true, blade: 96 }, over || {}) });
  const both = (pa, po, o) => Object.assign({ a: pa, o: po }, o || {});

  A.kata1 = { t: 'Kata 1 · Ippon-me (men-nuki-men)', vw: 570, keys: [
    both(Object.assign(B('jodan', { ang: -222 }), { dx: -36 }), Object.assign(B('jodan', { ang: -222 }), { dx: -36 }), { hold: 900, cam: -76, cap: '1 · Kamae inicial: ambos en jōdan', note: 'Uchidachi (claro) en hidari-jōdan; shidachi (azul) en migi-jōdan.' }),
    both({ dx: 0 }, { dx: 0 }, { dur: 1400, hold: 300, cap: '2 · Tres pasos grandes hacia delante', note: 'Acabas sobre el pie delantero, con el bokutō arriba.' }),
    both(Object.assign(B('jodan', { ang: -222, L: [128, -2] }), { dx: -48 }), { pose: 'men', over: { iai: true, katana: true, wood: true, blade: 96 }, touch: 'men', vs: { pose: 'jodan', dx: 0 } }, { dur: 450, hold: 700, cap: '3 · Uchidachi corta men; shidachi retrocede y sube las manos (nuki)', note: 'El corte de uchidachi pasa de largo. El bokutō baja recto, sin girar el filo; shidachi lo evita sin bloquear.' }),
    both({ pose: 'men', over: { iai: true, katana: true, wood: true, blade: 96 }, touch: 'men' }, {}, { dur: 380, hold: 800, target: 'men', cap: '4 · Shidachi avanza y corta men', note: 'Corte limpio con fumikomi. Las rodillas no se doblan al cortar y el pie trasero llega rápido.' }),
    both(B('chudan', { L: [170, 58], ang: -3 }), { dxr: -28 }, { dur: 700, hold: 400, target: null, cap: '5 · Uchidachi da un paso atrás; shidachi baja el bokutō al puente de la nariz', note: 'El kensen de shidachi queda a la altura del puente de la nariz de uchidachi.', g: [{ h: 52, label: 'puente de la nariz de uchidachi' }] }),
    both(B('chudan', { L: [182, 56], ang: -3 }), { dxr: -26 }, { dur: 800, hold: 300, cap: '6 · Shidachi extiende los brazos, empujando con el kensen', note: 'Presión lenta y continua: uchidachi cede.', g: [{ h: 52, label: 'puente de la nariz de uchidachi' }] }),
    both(Object.assign(B('jodan', { ang: -222 }), { dxr: 24 }), {}, { dur: 800, hold: 800, cap: '7 · Zanshin: shidachi sube a hidari-jōdan', note: 'Sube el bokutō sobre la cabeza sin dejar caer el kensen y mantiene la alerta.' }),
    both({}, B('jodan', { ang: -222 }), { dur: 600, hold: 500, cap: '8 · Uchidachi sube el bokutō y levanta la cabeza', note: 'Cierra el intercambio.' }),
    both(Object.assign(B('chudan'), { dx: 0 }), Object.assign(B('chudan'), { dx: 0 }), { dur: 900, hold: 500, cap: '9 · Ambos vuelven a chūdan en el centro', note: 'Con el kensen en la garganta del compañero.' }),
    both(B('gedan', { ang: 52 }), B('gedan', { ang: 52 }), { dur: 700, hold: 600, cap: '10 · Kamae wo toku', note: 'Bajan el bokutō girándolo a la derecha: el kensen queda aproximadamente delante de la rodilla derecha.' }),
    both({ dx: -52 }, { dx: -52 }, { dur: 1300, hold: 900, cap: '11 · Cinco pasos pequeños hacia atrás', note: 'Empiezas con el pie izquierdo. Después, chūdan para el siguiente kata.' })] };

  A.kata2 = { t: 'Kata 2 · Nihon-me (kote-nuki-kote)', vw: 570, keys: [
    both(Object.assign(B('chudan'), { dx: -36 }), Object.assign(B('chudan'), { dx: -36 }), { hold: 900, cam: -76, cap: '1 · Kamae inicial: ambos en chūdan', note: 'Los dos con el kensen en la garganta del otro.' }),
    both({ dx: 0 }, { dx: 0 }, { dur: 1400, hold: 300, cap: '2 · Tres pasos grandes hacia delante', note: 'Acabas sobre el pie delantero.' }),
    both(Object.assign(B('gedan', { ang: 36 }), { dx: -40 }), { pose: 'kote', over: { iai: true, katana: true, wood: true, blade: 96 }, touch: 'kote', vs: { pose: 'chudan', dx: 0 } }, { dur: 450, hold: 700, cap: '3 · Uchidachi corta kote; shidachi baja el bokutō y retrocede en diagonal', note: 'El kote de uchidachi es un corte real. Shidachi lo evita bajando el bokutō y retrocediendo en diagonal hacia la izquierda.' }),
    both({ pose: 'kote', over: { iai: true, katana: true, wood: true, blade: 96 }, touch: 'kote' }, {}, { dur: 320, hold: 900, target: 'kote', cap: '4 · Shidachi corta el kote derecho de uchidachi', note: 'Cortas cuando el golpe de uchidachi ya ha pasado, avanzando con el pie derecho.' }),
    both(Object.assign(B('chudan'), { dx: 0 }), Object.assign(B('chudan'), { dx: 0 }), { dur: 1000, hold: 500, target: null, cap: '5 · Vuelven al centro manteniendo la mirada', note: 'Uchidachi retrocede hacia el centro y shidachi se mueve hacia el centro: contacto visual siempre.' }),
    both(B('gedan', { ang: 52 }), B('gedan', { ang: 52 }), { dur: 700, hold: 600, cap: '6 · Kamae wo toku', note: 'Bokutō girado a la derecha, kensen aproximadamente delante de la rodilla derecha.' }),
    both({ dx: -52 }, { dx: -52 }, { dur: 1300, hold: 900, cap: '7 · Cinco pasos pequeños hacia atrás', note: 'Con el pie izquierdo primero.' })] };

  A.kata3 = { t: 'Kata 3 · Sanbon-me (gedan: tsuki y presión)', vw: 570, keys: [
    both(Object.assign(B('gedan'), { dx: -36 }), Object.assign(B('gedan'), { dx: -36 }), { hold: 900, cam: -76, cap: '1 · Kamae inicial: ambos en gedan', note: 'Los dos con el kensen hacia las rodillas del compañero.' }),
    both({ dx: 0 }, { dx: 0 }, { dur: 1400, hold: 300, cap: '2 · Tres pasos grandes hacia delante', note: 'Acabas sobre el pie delantero.' }),
    both(B('chudan', { L: [148, 118], ang: -10 }), B('chudan'), { dur: 900, hold: 400, cap: '3 · Ambos suben a chūdan; shidachi ligeramente por debajo', note: 'El bokutō de shidachi queda un poco por debajo del de uchidachi: su espíritu es más fuerte.' }),
    both(Object.assign(B('chudan', { L: [150, 116], ang: -6 }), { dx: -35 }), { pose: 'tsuki', over: { iai: true, katana: true, wood: true, blade: 96 }, touch: 'do', len: 122, vs: { pose: 'chudan', dx: 0 } }, { dur: 420, hold: 600, cap: '4 · Uchidachi estoca al plexo; shidachi retrocede y desvía (nayashi)', note: 'Shidachi desvía la estocada sin aplastar el bokutō de uchidachi.' }),
    both({ pose: 'tsuki', over: { iai: true, katana: true, wood: true, blade: 96 }, touch: 'do', len: 122 }, {}, { dur: 380, hold: 800, target: 'do', cap: '5 · Shidachi estoca al pecho de uchidachi', note: 'Avanzas con el pie derecho; la estocada es recta.' }),
    both({}, Object.assign(B('chudan', { ang: -2 }), { dxr: -34 }), { dur: 700, hold: 400, target: null, cap: '6 · Uchidachi retrocede y bloquea; shidachi mantiene sin estocar otra vez', note: 'Shidachi mantiene el bokutō delante: no es una segunda estocada.' }),
    both(Object.assign(B('chudan', { L: [150, 108], ang: -4 }), { dxr: 24 }), { dxr: -22 }, { dur: 700, hold: 500, cap: '7 · Kurai-zeme (1/3): la punta al pecho', note: 'Avanzas aplicando presión sin golpear.', g: [{ h: 100, label: 'pecho' }] }),
    both(Object.assign(B('chudan', { L: [148, 108], ang: -18 }), { dxr: 24 }), { dxr: -22 }, { dur: 700, hold: 500, cap: '8 · Kurai-zeme (2/3): la punta a la garganta', note: 'Segundo paso: la punta sube a la garganta.', g: [{ h: 70, label: 'garganta' }] }),
    both(Object.assign(B('chudan', { L: [148, 108], ang: -27 }), { dxr: 24 }), { dxr: -22 }, { dur: 700, hold: 600, cap: '9 · Kurai-zeme (3/3): la punta al puente de la nariz', note: 'Tercer paso: la punta llega al puente de la nariz.', g: [{ h: 52, label: 'puente de la nariz' }] }),
    both(Object.assign(B('gedan', { ang: 52 }), { dx: -20 }), Object.assign(B('chudan'), { dx: -10 }), { dur: 1200, hold: 700, target: null, cap: '10 · Shidachi retrocede tres pasos y baja el bokutō', note: 'Muestra la derrota de uchidachi y mantiene el zanshin.' }),
    both(Object.assign(B('chudan'), { dx: 0 }), Object.assign(B('chudan'), { dx: 0 }), { dur: 900, hold: 500, cap: '11 · Ambos vuelven a chūdan', note: 'En el centro, con el kensen en la garganta.' }),
    both(B('gedan', { ang: 52 }), B('gedan', { ang: 52 }), { dur: 700, hold: 600, cap: '12 · Kamae wo toku', note: 'Bokutō a la derecha, kensen delante de la rodilla derecha.' }),
    both({ dx: -52 }, { dx: -52 }, { dur: 1300, hold: 900, cap: '13 · Cinco pasos pequeños hacia atrás', note: 'Con el pie izquierdo primero.' })] };
})();
