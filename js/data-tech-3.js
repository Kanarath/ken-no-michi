/* Contenido de combate: seme, centro, patrones y primer shiai (se carga antes de data-tech-2) */
(function () {
  const add = KD.add;

  /* ---------- Seme y control del centro ---------- */
  add({
    id: 'seme', t: 'Seme: la presión', jp: '攻め', sub: 'Hacer que el rival se abra',
    art: ['seq:seme-kote'],
    intro: 'Seme es la presión que ejerces sobre el rival con el espíritu, la postura, el kensen y la distancia. Es lo que diferencia "golpear" de "ganar el punto": sin seme, el golpe es una apuesta.',
    why: 'Cuando presionas bien, el rival reacciona (levanta el shinai, retrocede, ataca con prisa o se agarrota). Esa reacción es la oportunidad que aprovechas con tu golpe.',
    steps: ['En chūdan, apunta el kensen a su garganta con la mano izquierda en el centro (ken-zeme).', 'Avanza con okuri-ashi muy poco a poco hacia issoku-ittō-no-ma-ai, sin subir el shinai ni inclinar el cuerpo (tai-zeme).', 'Mantén una mirada tranquila y una actitud decidida: tu espíritu "empuja" (ki-zeme).', 'Observa su reacción: ¿levanta el shinai? ¿retrocede? ¿se tensa?', 'Golpea en cuanto reaccione (debana-kote, men) o, si no reacciona, entra más hasta que lo haga.'],
    keys: ['Ken-zeme: con el kensen en su garganta.', 'Ki-zeme: con el espíritu, la mirada y la actitud.', 'Tai-zeme: con el cuerpo, avanzando sin mostrar prisa.', 'La presión es continua: no se enciende y se apaga.', 'Si tú te mueves de forma brusca, pierdes la presión.'],
    errors: [['Entras con prisa y subes el shinai', 'Avanza con calma y el kensen firme; el golpe sale después de la reacción.'], ['Presionas pero no observas', 'Mira siempre su respuesta: la presión sin lectura no sirve.'], ['Te quedas quieto esperando', 'Si el rival no reacciona, entra un poco más: la presión necesita progresar.'], ['Tensas los hombros al presionar', 'Presión no es tensión: respira y mantén los hombros sueltos.']],
    drills: ['Con un compañero: 10 entradas a issoku-ittō-no-ma-ai sin atacar, observando qué hace.', 'Repite entrando con el kensen en el centro y luego con el kensen ligeramente desviado: nota la diferencia.', 'Ataca solo si ves una reacción (en ji-geiko, pide a tu compañero que te diga cuándo ha notado tu presión).'],
    check: ['Entro sin subir el shinai.', 'Observo la reacción del rival.', 'Mis hombros están relajados mientras presiono.'],
    terms: [['Seme', 'presión'], ['Ken-zeme', 'presión con el kensen'], ['Ki-zeme', 'presión con el espíritu'], ['Tai-zeme', 'presión con el cuerpo']]
  });

  add({
    id: 'nakasen', t: 'Nakasen: controlar el centro', jp: '中心線', sub: 'La línea que une tu garganta con la suya',
    art: ['centro'],
    intro: 'El nakasen es la línea imaginaria entre tú y tu rival. Quien mantiene el kensen apuntando a la garganta del otro "tiene el centro" y obliga al rival a ceder o a apartar su shinai.',
    why: 'Tener el centro te protege (tu cuerpo queda detrás de tu kensen) y te da la iniciativa. Perderlo hace que cada ataque tuyo sea más difícil y que el rival entre por esa línea.',
    steps: ['Chūdan: la mano izquierda en el centro de tu cuerpo, el kensen en el centro de su garganta.', 'Tras el contacto de los kensen, mantén la punta firme: no la dejes caer ni la desvíes.', 'Si te desvía el shinai, vuelve a centrar sin hacer un gran movimiento (con las muñecas, no con los hombros).', 'Si quieres abrir su guardia, usa harai-waza (barrido) o maki-waza (giro) y golpea.', 'Si el rival te quita el centro, recupéralo con paciencia o ataca con una técnica de respuesta (ōji-waza).'],
    keys: ['El centro es tuyo cuando tu kensen está en su garganta y el suyo no apunta a la tuya.', 'Se defiende con presión, no con tensión.', 'La mano izquierda es la que mantiene el centro.'],
    errors: [['Dejas caer el kensen al cansarte', 'Respira y vuelve a subirlo hasta la garganta: la guardia se mantiene con la mano izquierda.'], ['Te desvían y haces un gran movimiento para recuperar', 'Hazlo corto, con las muñecas.'], ['Miras el shinai y pierdes al rival', 'Mira sus ojos: el kensen se controla sin mirarlo.']],
    drills: ['Con un compañero: 1 minuto de chūdan frente a frente intentando mantener el centro sin moverte.', 'Con tu sensei: pídele que te desvíe el shinai y practica volver al centro.', 'Practica harai-men: barrido corto y golpe.'],
    check: ['Mantengo el kensen en su garganta.', 'Recupero el centro con las muñecas.', 'Sé abrir su guardia con harai o maki.'],
    terms: [['Nakasen', 'línea central'], ['Harai-waza', 'apartar y golpear'], ['Maki-waza', 'envolver el shinai']]
  });

  add({
    id: 'kake-hiki', t: 'Kake-hiki: entrar y salir', jp: '掛け引き', sub: 'El juego de la distancia',
    art: ['seq:seme-kote', 'maai'],
    intro: 'Kake-hiki es el arte de entrar y salir de la distancia, de ofrecer y retirar, para leer al rival y hacer que se mueva. Un combate rara vez se gana con un golpe a ciegas: se gana leyendo y provocando.',
    why: 'Te permite probar al rival sin arriesgarte y descubrir cómo reacciona. También rompe su ritmo.',
    steps: ['Entra un poco con okuri-ashi hasta casi la distancia de golpeo y observa.', 'Sal inmediatamente un paso atrás si no ves oportunidad.', 'Repite variando el ritmo y la profundidad de la entrada: a veces corta, a veces más profunda.', 'Cuando notes una reacción (levanta el shinai, retrocede, tensa), golpea en la entrada siguiente.', 'Alterna entradas "de verdad" (con intención de golpear) y entradas "de prueba".'],
    keys: ['Entrar y salir siempre con la guardia intacta.', 'Cambia el ritmo: lo predecible se lee.', 'No te quedes a la distancia peligrosa sin intención.'],
    errors: [['Entras y sales siempre igual', 'Varía ritmo y profundidad; si no, el rival aprende tu patrón.'], ['Te quedas en distancia de golpeo sin atacar', 'O ataca o sal: esa zona es peligrosa.'], ['Pierdes la guardia al retroceder', 'Mantén chūdan en cada paso.']],
    drills: ['Con un compañero: 2 minutos de entradas y salidas sin atacar, anotando cuándo reacciona.', 'Añade un ataque (kote o men) al final de la entrada que veas más fructífera.'],
    check: ['Mi guardia se mantiene al entrar y al salir.', 'Cambio el ritmo.', 'Detecto la reacción del rival.'],
    terms: [['Kake-hiki', 'entrar y salir'], ['Ma-ai', 'distancia']]
  });

  /* ---------- Combinaciones para el combate ---------- */
  add({
    id: 'patrones-combate', t: 'Qué hacer en combate: si pasa X, haz Y', jp: '技の選び方', sub: 'Patrones para tus primeros combates',
    art: ['seq:men-do'],
    intro: 'En tus primeros combates no necesitas veinte técnicas: necesitas pocas y bien elegidas. Aquí tienes respuestas sencillas a las situaciones más habituales.',
    pre: [
      { h: 'Si pasa esto… haz esto', ifthen: [
        ['el rival está quieto y a distancia', 'seme + men o kote-men con okuri-ashi o tsugi-ashi'],
        ['el rival empieza a subir el shinai o a moverse', 'debana-kote (si sube poco) o debana-men'],
        ['el rival sube los brazos para cubrir men', 'men-dō: el dō queda abierto'],
        ['el rival baja las manos para cubrir kote', 'kote-men o men directo'],
        ['el rival ataca men', 'men-nuki-dō, men-suriage-men o men-kaeshi-dō (cuando tu sensei te los haya enseñado)'],
        ['el rival ataca kote', 'kote-nuki-men o kote-suriage-men'],
        ['el rival se pega a ti en tsubazeriai', 'hiki-dō o hiki-men al separar'],
        ['el rival protege muy bien el centro', 'harai-men o maki-waza para abrir la guardia'],
        ['el rival retrocede cuando entras', 'sigue con tsugi-ashi y ataca antes de que recupere la distancia'],
        ['no sabes qué hacer', 'kake-hiki: entra y sal, observa su reacción y golpea la siguiente vez']
      ] }
    ],
    steps: ['Elige tres técnicas "de confianza": por ejemplo men directo, kote-men y debana-kote.', 'Entrénalas hasta que salgan sin pensar, con buen kiai y zanshin.', 'Añade una técnica de respuesta cuando tu sensei lo apruebe (men-nuki-dō es la más clásica).', 'En cada práctica libre, intenta aplicar una sola idea (por ejemplo, "solo kote-men") para que se afiance.'],
    stepsH: 'Cómo construir tu repertorio',
    keys: ['La técnica correcta es la que sale limpia y a tiempo, no la más difícil.', 'Un buen seme vale más que una técnica compleja.', 'Pierdes más puntos por golpear sin oportunidad que por no golpear.'],
    errors: [['Cambias de técnica cada combate', 'Afianza tres: la repetición es lo que las hace tuyas.'], ['Atacas sin seme', 'Primero presión, luego golpe. Sin reacción del rival, no hay oportunidad.'], ['Te quedas en tu zona de confort', 'Una vez a la semana, practica una técnica nueva en ji-geiko sin presión de resultado.']],
    drills: ['Escribe en el diario tus tres técnicas de confianza y cómo las has usado.', 'Con un compañero, haz ji-geiko con una sola técnica permitida (por ejemplo, solo kote-men).'],
    check: ['Tengo tres técnicas de confianza.', 'Sé qué hacer si el rival sube los brazos.', 'Sé qué hacer si el rival ataca men.'],
    warn: 'Estos patrones son una guía simple para empezar. El sensei y la práctica te irán enseñando matices.'
  });

  /* ---------- Primer shiai ---------- */
  add({
    id: 'flujo-shiai', t: 'El combate de principio a fin', jp: '試合の流れ', sub: 'Qué pasa desde que te llaman hasta que sales',
    art: ['seq:kamae-toru'],
    intro: 'Un combate de kendō sigue un protocolo claro. Conocerlo evita nervios y errores tontos. Los detalles pueden variar un poco según el torneo, así que pregunta a tu sensei antes de tu primera vez.',
    steps: ['Te llaman por tu nombre y color (rojo o blanco); llevas una cinta de ese color (tasuki) en la espalda.', 'Saludas al entrar en el área y vas a tu línea de inicio.', 'Taitō, saludo mutuo, tres pasos hacia delante, nuki-tō (sacar el shinai) y sonkyō.', 'Al oír "hajime", te levantas en chūdan y empieza el combate. Haz kiai desde el principio.', 'Cuando los árbitros marcan un punto, o si oyes "yame", paras de inmediato, vuelves a tu posición ("moto no ichi") y esperas.', 'El combate dura unos cinco minutos; gana quien consigue dos puntos (ippon) o tiene más puntos al final. Si hay empate, puede haber prórroga (enchō).', 'Con "shōbu-ari" termina el combate: sonkyō, osame-tō (guardar el shinai), retrocedes y saludas al salir.'],
    keys: ['Respeto en todo momento: también si ganas o pierdes.', 'No celebres los puntos: los gestos de alegría pueden hacer que se anule el punto.', 'Cuando suene "yame" o "mate", paras: seguir golpeando puede ser falta.', 'Guarda la compostura hasta salir del área.'],
    errors: [['Sigues golpeando tras oír "yame"', 'Para en el acto y vuelve a tu posición.'], ['Celebras un punto', 'Mantén la calma: el zanshin es parte del punto.'], ['Te cuesta recordar el protocolo', 'Practica la secuencia de taitō a sonkyō en casa (lección "Taitō, sonkyō y kamae-o-toru").']],
    drills: ['Repite en casa la secuencia completa de entrada y salida hasta que no tengas que pensar.', 'Pídele a tu sensei que simule un combate con árbitro en el dōjō.'],
    check: ['Conozco el protocolo de entrada.', 'Sé qué hacer cuando oigo "yame".', 'Sé cómo termina el combate.'],
    terms: [['Tachiai', 'encuentro'], ['Shōbu-ari', 'fin del combate'], ['Enchō', 'prórroga'], ['Moto no ichi', 'posiciones originales']],
    warn: 'Pasos exactos, distancias y detalles de protocolo dependen del torneo y la federación. Confírmalos con tu sensei.'
  });

  add({
    id: 'faltas-shiai', t: 'Faltas y golpes que no cuentan', jp: '反則と無効', sub: 'Lo que más les pasa a los principiantes',
    intro: 'Muchos puntos se pierden por faltas evitables. Aquí tienes las más habituales y cómo evitarlas. La lista oficial depende del reglamento del torneo.',
    why: 'Dos faltas dan un punto al rival: no merece la pena regalarle puntos por descuidos.',
    errors: [
      ['Salir del área de combate (jōgai)', 'Mantén conciencia de las líneas y no retrocedas siempre en línea recta.'],
      ['Soltar el shinai', 'Aprieta tenouchi al golpear y relaja después; si se te cae, cógelo con calma y sigue las indicaciones del árbitro.'],
      ['Empujar, agarrar al rival o su shinai, hacer zancadillas', 'En tsubazeriai empuja con la cadera y sepárate limpio.'],
      ['Quedarse en tsubazeriai sin intención', 'Si no hay oportunidad, separa; el árbitro lo hará con "wakare".'],
      ['Golpear después de oír "yame"', 'Para al instante.'],
      ['Golpear con demasiada fuerza o sin control, o a zonas no válidas', 'Golpea controlado y a las cuatro zonas válidas.'],
      ['Gestos de celebración o de protesta', 'Mantén la compostura: es parte del kendō.']
    ],
    extra: [
      { h: 'Golpes que no cuentan', ul: ['Sin kiai o sin fumikomi (ki-ken-tai-ichi incompleto).', 'Sin zanshin: te relajas o das la espalda tras golpear.', 'Con el plano del shinai (sin filo, hasuji incorrecto).', 'Con la parte equivocada del shinai (no el datotsu-bu).', 'A una zona no válida o con golpe "arrastrado".'] }
    ],
    drills: ['Revisa con tu sensei el reglamento del torneo que vas a disputar.', 'En ji-geiko, practica detenerte al instante cuando te digan "mate".'],
    check: ['Conozco las faltas más habituales.', 'Sé qué es un golpe no válido.', 'Sé separar de tsubazeriai sin agarrar.'],
    warn: 'Es una guía general. La lista exacta de faltas y cómo se sancionan las marca el reglamento del torneo.'
  });

  add({
    id: 'preparacion-torneo', t: 'Preparar tu primer torneo', jp: '大会の準備', sub: 'Equipo, cuerpo y cabeza',
    intro: 'Un buen primer torneo se prepara con calma: equipo revisado, cuerpo descansado y cabeza clara. No vas a ganar, vas a aprender; llegar tranquilo ya es ganar.',
    steps: ['Una semana antes: revisa tu shinai (astillas, nakayui, tsuru, longitud y peso del reglamento) y el estado del bōgu.', 'Prepara repuestos: himo del men, tenugui, un shinai de repuesto, cinta de color si te la piden.', 'La noche anterior: deja la bolsa lista, cena ligero y duerme lo suficiente.', 'El día del torneo: come ligero, llega con tiempo y calienta con calma (movilidad, suburi suave, okuri-ashi).', 'Antes de entrar: tres respiraciones abdominales, hombros sueltos y una intención concreta ("un ataque claro al principio").', 'Después: anota en el diario lo que has aprendido y habla con tu sensei sobre lo que viste.'],
    stepsH: 'Cómo prepararte',
    keys: ['El objetivo es de proceso: atacar con claridad, mantener el kiai y el zanshin.', 'Los nervios son normales: con respiración y rutina bajan.', 'Pierdas o ganes, saluda con respeto y agradece.'],
    errors: [['Estrenas equipo o cambias de shinai el día del torneo', 'Usa lo que conoces; los cambios, en semanas anteriores.'], ['Calientas poco o demasiado', 'Un calentamiento breve y suave: llega sin cansarte.'], ['Te obsesionas con ganar', 'Cambia el objetivo: "un ataque claro y limpio, con kiai y zanshin".']],
    drills: ['Haz una "simulación" en el dōjō: entrada, combate corto y salida.', 'Practica tu rutina de respiración antes de cada ji-geiko durante dos semanas.'],
    check: ['Mi shinai está revisado y cumple el reglamento.', 'Tengo repuestos listos.', 'Sé qué haré antes de entrar al área.', 'Mi objetivo es de proceso, no de resultado.'],
    tip: 'Después de cada combate, aunque sea de práctica, anota una cosa que has hecho bien y una que cambiarías. Es la forma más rápida de mejorar.'
  });
})();
