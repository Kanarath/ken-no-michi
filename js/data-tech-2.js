/* Contenido de técnica (parte 2): golpes, combinaciones, waza y ordenación final de módulos */
(function () {
  const add = KD.add;

  /* ---------- Golpes básicos ---------- */
  add({
    id: 'men', t: 'Men-uchi', jp: '面打ち', sub: 'El golpe principal',
    art: ['seq:men'],
    intro: 'Men es el golpe más importante: el más usado y el que más se practica. Si lo haces bien, todos los demás golpes mejoran.',
    why: 'Concentra todo el kendō: guardia, distancia, pies, golpe, kiai y zanshin. Es la base de kirikaeshi, uchikomi y de casi todas las combinaciones.',
    steps: ['Chūdan a distancia de issoku-ittō-no-ma-ai (los kensen apenas se cruzan).', 'Haz seme: entra un poco con okuri-ashi y presiona con el kensen y la mirada.', 'Sube el shinai por el centro (furikaburi) hasta sobre la cabeza; las manos pasan por encima de la frente con los brazos estirándose.', 'Cuando el pie derecho sale, el shinai baja; extiende los brazos hacia delante y golpea con el monouchi sobre el centro de la cabeza (shōmen).', 'El golpe, el kiai ("men!") y la pisada (fumikomi) ocurren a la vez; aprieta tenouchi al impactar.', 'El pie izquierdo llega rápido (hikitsuke). Pasa junto al rival (tu sensei te dirá por qué lado) y gira para terminar en chūdan con zanshin.'],
    keys: ['La mano izquierda dirige y sube/baja por el centro.', 'Brazos estirados al golpear: el golpe "llega" con el cuerpo, no solo con los brazos.', 'Mirada a los ojos del rival hasta el final.', 'Después del golpe sigues avanzando: no frenes.'],
    errors: [['Subes demasiado el shinai y bajas tarde', 'Sube hasta sobre la cabeza, pero con el ritmo del paso: sube mientras avanzas.'], ['Golpeas solo con los brazos', 'Empuja con la cadera: el cuerpo avanza antes que los brazos terminen.'], ['El pie izquierdo se queda atrás', 'Hikitsuke: tira del pie izquierdo a la vez que el derecho aterriza.'], ['Bajas la cabeza o cierras los ojos', 'Mantén el mentón recogido y la mirada al frente.'], ['Golpea con la mano derecha', 'La izquierda manda; la derecha solo guía.']],
    drills: ['Suburi de men sin moverte (20), luego con okuri-ashi (20).', 'Men con fumikomi sin rival, escuchando la pisada y el kiai.', 'Con un compañero con bōgu: 10 uchikomi de men a la cabeza (shōmen).', 'Grábate de lado: ¿sale el golpe con el pie derecho, o con los brazos antes?'],
    check: ['Subo el shinai por el centro.', 'Golpe, kiai y pisada coinciden.', 'El pie izquierdo llega rápido.', 'Mantengo la mirada y termino en zanshin.'],
    terms: [['Men-uchi', 'golpe a la cabeza'], ['Furikaburi', 'subida'], ['Monouchi', 'zona de golpeo'], ['Fumikomi-ashi', 'pisada'], ['Zanshin', 'alerta']]
  });

  add({
    id: 'yokomen', t: 'Yokomen-uchi', jp: '横面打ち', sub: 'El golpe en diagonal',
    art: ['seq:yokomen'],
    intro: 'Yokomen es el golpe a los laterales de la cabeza, izquierdo o derecho, en diagonal. Es el que se practica en kirikaeshi y sayū-men.',
    why: 'Entrena el filo en diagonal y el control del shinai. También es una opción de ataque cuando el rival protege el centro.',
    steps: ['Chūdan a issoku-ittō-no-ma-ai.', 'Furikaburi como en men: sube por el centro.', 'Al bajar, rota el shinai en diagonal hacia el lateral de la cabeza del rival (a unos 45°).', 'El monouchi corta el lateral de la cabeza, con el filo bien orientado (hasuji).', 'Kiai ("men!"), fumikomi y hikitsuke igual que en men.', 'Termina en zanshin.'],
    keys: ['Sube siempre por el centro: solo la bajada es diagonal.', 'El filo corta: no "palmeas" el lateral con la cara plana.', 'La mano izquierda termina en el centro del cuerpo.'],
    errors: [['El golpe llega con la cara plana', 'Coloca el tsuru arriba y que la bajada "corte" como una espada.'], ['Subes por un lado', 'Siempre por el centro, también en yokomen.'], ['Bajas mucho el shinai', 'Frena con la mano izquierda, a la altura de chūdan o ligeramente más abajo.']],
    drills: ['20 sayū-men con pies, alternando lados.', 'Con un compañero: yokomen izquierdo y derecho, 10 de cada lado.'],
    check: ['Subo por el centro.', 'Corto con el filo correcto.', 'Mi mano izquierda termina en el centro.'],
    terms: [['Yokomen', 'lateral de la cabeza'], ['Sayū-men', 'diagonales']]
  });

  add({
    id: 'kote', t: 'Kote-uchi', jp: '小手打ち', sub: 'Pequeño, rápido y limpio',
    art: ['seq:kote'],
    intro: 'Kote es un golpe corto a la muñeca del rival. Es más rápido que men porque el recorrido es menor, y es la base de debana-kote y kote-men.',
    why: 'Es el golpe más económico: pocos centímetros de recorrido y mucho efecto. Enseña a golpear sin telegrafiar la subida.',
    steps: ['Chūdan a issoku-ittō-no-ma-ai.', 'Haz seme y, cuando el rival se mueva o se distraiga, sube el shinai solo lo justo (hasta la altura de la frente, no hasta atrás).', 'Avanza con okuri-ashi y corta hacia abajo con el monouchi sobre la muñeca derecha del rival (la más cercana a ti).', 'Kiai ("kote!"), fumikomi y hikitsuke a la vez.', 'Sigue avanzando y recupera chūdan con zanshin.'],
    keys: ['La subida es pequeña: el golpe nace de las muñecas y de la mano izquierda.', 'El kensen no se desvía del centro del rival.', 'Cortas, no empujas: el filo se asienta en la muñeca.'],
    errors: [['Subes demasiado (se convierte en men)', 'Sube solo hasta la frente; el golpe baja casi vertical.'], ['Golpeas con el plano del shinai', 'Tsuru arriba y filo abajo: que sea un corte.'], ['Te inclinas hacia delante', 'La cadera avanza; la espalda sigue recta.'], ['Frenas el golpe por miedo', 'Termina el golpe con decisión: el kote lo protege.']],
    drills: ['20 kote en el aire con subida pequeña.', 'Kote con okuri-ashi + fumikomi, 20 repeticiones.', 'Con compañero: 10 kote a un kote ofrecido, luego 10 a un kote que se mueve.'],
    check: ['Mi subida es corta.', 'Corto con el filo correcto.', 'Mantengo el kensen en el centro.', 'Termino en zanshin.'],
    terms: [['Kote-uchi', 'golpe a la muñeca']]
  });

  add({
    id: 'do', t: 'Dō-uchi', jp: '胴打ち', sub: 'Un corte al costado',
    art: ['seq:do'],
    intro: 'Dō se golpea en el costado del torso del rival. Es un golpe de corte, no de empuje: el filo recorre la zona de lado a lado.',
    why: 'Aprovecha el hueco que deja el rival cuando levanta los brazos para atacar men. Enseña a controlar el filo en un plano distinto al de men y kote.',
    steps: ['Chūdan a issoku-ittō-no-ma-ai.', 'Sube el shinai (furikaburi), algo menos que en men.', 'Al bajar, lleva el shinai en diagonal hacia el costado derecho del rival (migi-dō) con el filo orientado hacia el golpe.', 'El monouchi corta la zona del dō; las manos terminan delante de tu cuerpo, sin que el shinai pase de largo.', 'Kiai ("dō!"), fumikomi y hikitsuke.', 'Sigue avanzando (tu sensei te indicará el lado) y vuelve a chūdan con zanshin.'],
    keys: ['El filo corta el dō: se oye un sonido seco y claro.', 'La cabeza y la mirada se mantienen al frente: no miras el dō.', 'El cuerpo avanza: el golpe llega con el pie.'],
    errors: [['El golpe suena hueco ("toc")', 'Estás golpeando con el plano. Ajusta el filo (hasuji) y mantén el tsuru hacia arriba.'], ['Bajas la cabeza para mirar el dō', 'Ojos a los ojos del rival; el dō "se ve" sin mirarlo.'], ['El shinai pasa de largo', 'Frena con las manos delante del cuerpo.'], ['Te caes hacia un lado', 'La cadera avanza recta; el movimiento es de muñecas y brazos.']],
    drills: ['20 dō en el aire, escuchando el sonido del corte.', 'Con compañero: 10 dō a un dō ofrecido y luego a un rival que levanta los brazos.'],
    check: ['Corto con el filo correcto.', 'No bajo la cabeza.', 'Mis manos terminan delante del cuerpo.'],
    terms: [['Dō-uchi', 'golpe al costado'], ['Migi-dō', 'costado derecho']]
  });

  add({
    id: 'tsuki', t: 'Tsuki', jp: '突き', sub: 'La estocada a la garganta',
    art: ['seq:tsuki'],
    intro: 'Tsuki es una estocada a la garganta. Es el golpe más delicado: solo se practica con supervisión y cuando tu sensei lo indique.',
    why: 'Es una opción clave contra jōdan y cuando el rival levanta mucho el shinai. Enseña a empujar con la mano izquierda de forma recta.',
    steps: ['Chūdan, con la mirada en el tsuki-dare del rival.', 'Recoge ligeramente el shinai sin subirlo y avanza con okuri-ashi.', 'Empuja el kensen en línea recta hacia la garganta: la mano izquierda empuja y la derecha guía.', 'Los brazos se extienden; el golpe termina con el kensen sobre el tsuki-dare, nunca más alto ni de lado.', 'Kiai ("tsuki!"), fumikomi y retirada inmediata del shinai.', 'Mantén zanshin.'],
    keys: ['El empuje es recto: del cuerpo al blanco.', 'Controla la fuerza: solo debe rozar el protector con la punta.', 'Retira el shinai enseguida.'],
    errors: [['Golpeas hacia arriba o hacia abajo', 'Apunta recto al tsuki-dare; no subas ni bajes.'], ['Empujas con fuerza excesiva', 'Es un golpe de precisión, no de fuerza: controla.'], ['Dejas el shinai clavado', 'Retíralo en cuanto toca.']],
    drills: ['Hasta que tu sensei lo permita, solo estudia la teoría.', 'Más adelante, tsuki en el aire con okuri-ashi para fijar el recorrido recto.'],
    warn: 'El tsuki puede lesionar si se hace mal. No lo practiques con compañero sin supervisión y comprueba siempre que el tsuki-dare está bien atado.',
    check: ['Entiendo el recorrido recto del golpe.', 'Sé que solo se practica con supervisión.'],
    terms: [['Tsuki', 'estocada'], ['Tsuki-dare', 'protección de garganta']]
  });

  add({
    id: 'kirikaeshi', t: 'Kirikaeshi', jp: '切り返し', sub: 'El ejercicio completo',
    art: ['kirikaeshi'],
    intro: 'Kirikaeshi es una serie de golpes alternos a yokomen avanzando y retrocediendo, con un shōmen al principio y otro al final. Combina pies, golpe, kiai y resistencia.',
    why: 'Entrena la postura, el filo en diagonal, la distancia, la respiración y el kiai continuo. Es el ejercicio de calentamiento de los veteranos.',
    steps: ['Saludo, sonkyō y chūdan frente al motodachi.', 'Shōmen inicial: el motodachi abre el men y tú golpeas.', 'Avanzas golpeando 4 yokomen alternos (izquierdo, derecho…), un golpe por paso, con kiai.', 'Sin parar, retrocedes golpeando 5 yokomen alternos.', 'Terminas con un shōmen y pasas junto al motodachi.', 'Zanshin, vuelta a chūdan y saludo.'],
    keys: ['Cada golpe sale de la subida por el centro, también en yokomen.', 'Golpes amplios: los brazos estirados.', 'El motodachi recibe con el shinai y marca la distancia.', 'El kiai no se pierde cuando te cansas.'],
    errors: [['Golpeas solo con los brazos', 'Cada golpe lleva un paso: pies y espada a la vez.'], ['Pierdes el kiai al cansarte', 'Respira al retroceder; mantén el volumen de voz.'], ['Los golpes se encogen', 'Mantén el tamaño: sube hasta sobre la cabeza.'], ['Encoges los hombros', 'Relájalos; exhala con cada "men".']],
    drills: ['En casa, kirikaeshi en el aire: 4 adelante, 5 atrás, 5 series.', 'Con tu motodachi, uno al principio de cada clase.', 'Grábate para ver que la subida es central.'],
    check: ['Los golpes son amplios.', 'Pies y golpe coinciden.', 'Mantengo el kiai hasta el final.'],
    terms: [['Kirikaeshi', 'serie de golpes'], ['Sayū-men', 'golpes diagonales'], ['Motodachi', 'quien recibe']]
  });

  add({
    id: 'kote-men', t: 'Kote-men y combinaciones', jp: '小手面・連続技', sub: 'Encadenar sin parar',
    art: ['seq:kote-men'],
    intro: 'Kote-men es la combinación básica: un kote seguido de un men sin pausa. El primer golpe pide al rival que reaccione; el segundo aprovecha esa reacción.',
    why: 'Entrena la continuidad: el segundo golpe es tan bueno como el primero y el cuerpo no se detiene entre ambos.',
    steps: ['Chūdan a issoku-ittō-no-ma-ai.', 'Golpea kote con kiai ("kote!"), con subida corta y pisada.', 'Recoge el shinai de inmediato hacia el centro, sin pararte.', 'Sigue avanzando con okuri-ashi y golpea men ("men!") con el furikaburi completo.', 'Pasa y termina en zanshin.'],
    keys: ['El primer golpe es real: debe tener intención para abrir el men.', 'El pie izquierdo siempre sigue al derecho.', 'El segundo golpe nace de un movimiento continuo, sin parar el shinai.'],
    errors: [['El kote es un trámite', 'Golpea el kote como si fuera el único: si no hay intención, el rival no reacciona.'], ['Paras entre ambos golpes', 'Piensa en un solo movimiento con dos impactos.'], ['El men sale corto', 'Sube de verdad: arriba antes de bajar.']],
    drills: ['20 kote-men en el aire, con los pies siguiendo.', 'Con compañero: 10 kote-men sobre un blanco ofrecido.', 'A cámara lenta: observa dónde se detiene el shinai.'],
    extra: [{ h: 'Otras combinaciones', ul: ['Kote-men-dō: acabas en dō cuando el rival cubre el men.', 'Men-men: dos men seguidos si el primero se bloquea.', 'Men-dō: dō cuando el rival levanta los brazos tras recibir el men.'] }],
    check: ['No hago pausa entre los dos golpes.', 'El segundo es tan completo como el primero.', 'Mantengo la postura al terminar.'],
    terms: [['Kote-men', 'kote seguido de men'], ['Renzoku-waza', 'golpes encadenados']]
  });

  /* ---------- Waza intermedios ---------- */
  add({
    id: 'tai-atari', t: 'Tai-atari', jp: '体当たり', sub: 'El choque de cuerpo',
    art: ['seq:hiki-men'],
    intro: 'Tras un golpe, los kendōka a menudo se encuentran muy cerca. Tai-atari es el choque de cuerpo controlado que rompe el equilibrio del rival y abre una oportunidad.',
    why: 'Convierte la proximidad en ventaja: el rival pierde la base y tú aprovechas para golpear (por ejemplo, con hiki-waza).',
    steps: ['Tras el golpe, acércate con los brazos adelante y el shinai bien sujeto.', 'Empuja con la cadera, no con los brazos ni con el hombro.', 'La espalda sigue recta y las rodillas flexionadas; la cabeza no baja.', 'Mantén el contacto un instante y suéltalo con control, o sigue con tsubazeriai o hiki-waza.'],
    keys: ['El empuje sale de la cadera.', 'Los codos pegados al cuerpo, el shinai ante ti.', 'Control total: es una técnica, no un empujón.'],
    errors: [['Empujas con los brazos', 'Piensa en la cadera: el cuerpo entero choca, no los brazos.'], ['Bajas la cabeza', 'La espalda recta y el mentón recogido.']],
    drills: ['Con tu sensei o un compañero de confianza: tai-atari suave desde chika-ma.'],
    warn: 'Técnica de contacto: practícala con control y con compañeros de nivel parecido.',
    check: ['Empujo con la cadera.', 'Mi espalda se mantiene recta.'],
    terms: [['Tai-atari', 'choque de cuerpo']]
  });

  add({
    id: 'tsubazeriai', t: 'Tsubazeriai', jp: '鍔迫り合い', sub: 'Guardas en contacto',
    art: ['seq:hiki-men'],
    intro: 'En tsubazeriai las guardas (tsuba) están en contacto y cada kendōka presiona con control. Es una situación de transición: no es un lugar para quedarse.',
    why: 'Desde aquí se preparan los hiki-waza y se reinicia el combate. Enseña a mantener el centro bajo presión.',
    steps: ['Las manos quedan delante del cuerpo, a la altura del pecho, con las tsuba en contacto.', 'Mantén la espalda recta y presiona con la cadera hacia delante.', 'Busca una oportunidad para el hiki-waza o separa de forma limpia.', 'Si no hay iniciativa, sepárate con control (en competición, los árbitros separan con "wakare").'],
    keys: ['Manos al centro, codos pegados.', 'No te agarres ni empujes con las manos al rival.', 'Tsubazeriai prolongado sin intención es falta.'],
    errors: [['Empujas con los brazos', 'Empuja con la cadera; las manos solo sostienen.'], ['Te agarras del rival', 'Está prohibido: mantén el shinai sujeto con tus dos manos.']],
    drills: ['Con un compañero, 10 entradas a tsubazeriai y salida limpia.'],
    check: ['Mis manos están al centro.', 'Salgo del contacto sin agarrar.'],
    terms: [['Tsubazeriai', 'empuje con tsuba']]
  });

  add({
    id: 'hiki-waza', t: 'Hiki-waza: panorama', jp: '引き技', sub: 'Golpear al retirarse',
    art: ['seq:hiki-men'],
    intro: 'Hiki-waza son golpes que se hacen mientras retrocedes, normalmente desde tsubazeriai: hiki-men, hiki-kote y hiki-dō.',
    why: 'Aprovechan el empuje del rival en tsubazeriai: al ceder, él se abre y tú golpeas mientras sales.',
    keys: ['Parte de tsubazeriai: empuja para que el rival reaccione.', 'Sube el shinai a la vez que retrocedes.', 'El golpe se completa antes de que los pies se detengan.', 'Espalda recta: no te dejes caer hacia atrás.', 'Termina con zanshin a distancia segura.'],
    errors: [['Golpeas y te quedas parado', 'El golpe y el retroceso son un solo movimiento.'], ['Te inclinas hacia atrás', 'Retrocede con la espalda recta.']],
    check: ['Sé la diferencia entre hiki-men, hiki-kote y hiki-dō.'],
    terms: [['Hiki-waza', 'golpes al retirarse']]
  });

  add({
    id: 'hiki-men', t: 'Hiki-men', jp: '引き面', sub: 'Men al retroceder',
    art: ['seq:hiki-men'],
    intro: 'Desde tsubazeriai, empujas al rival; cuando él reacciona, subes el shinai y golpeas men mientras retrocedes.',
    why: 'Es el hiki-waza más completo y el que mejor entrena el golpe amplio al retirarse.',
    steps: ['Desde tsubazeriai, empuja ligeramente hacia delante con la cadera.', 'Cuando el rival devuelva el empuje o se mueva, sube el shinai (furikaburi) y empieza a retroceder con okuri-ashi.', 'Golpea el men con el monouchi mientras retrocedes, con kiai.', 'Sigue hacia atrás unos pasos con la guardia y la mirada.', 'Termina en chūdan con zanshin.'],
    keys: ['El golpe llega antes de que los pies se detengan.', 'Brazos estirados, golpe amplio.', 'Espalda recta durante todo el movimiento.'],
    errors: [['El golpe sale con los brazos solos', 'Retrocede con la cadera para que el cuerpo "tire" del golpe.'], ['Subes demasiado tarde', 'Sube justo cuando el rival reacciona al empuje.'], ['Te quedas en tsubazeriai', 'Cuando suba tu shinai, el pie ya está en movimiento.']],
    drills: ['20 hiki-men en el aire con retroceso.', 'Con compañero: tsubazeriai + hiki-men, 10 repeticiones.'],
    check: ['Sincronizo subida y retroceso.', 'Mi espalda está recta.', 'Termino en zanshin.'],
    terms: [['Hiki-men', 'men al retirarse']]
  });

  add({
    id: 'hiki-do', t: 'Hiki-dō', jp: '引き胴', sub: 'Dō al retroceder',
    art: ['seq:hiki-do'],
    intro: 'Es el hiki-waza más natural: el corte al dō se hace mientras te retiras, con el movimiento hacia atrás ayudando al golpe.',
    why: 'Es rápido y con poca subida; se usa cuando el rival levanta las manos en tsubazeriai.',
    steps: ['Desde tsubazeriai, empuja ligeramente.', 'Cuando el rival levante o ceda, sube el shinai y retrocede.', 'Corta el dō derecho del rival con el filo, mientras los pies van hacia atrás.', 'Mantén la guardia y la mirada; retrocede unos pasos.', 'Termina con zanshin.'],
    keys: ['La dirección del retroceso suma fuerza al corte.', 'Corta con el filo, no con el plano.', 'La cabeza y la mirada se mantienen al frente.'],
    errors: [['Golpeas con el plano', 'Cuida el tsuru arriba y el filo hacia el dō.'], ['Sales torcido', 'Retrocede en línea recta, pies y cuerpo juntos.']],
    drills: ['20 hiki-dō en el aire.', 'Con compañero: tsubazeriai + hiki-dō, 10 repeticiones.'],
    check: ['Corto con el filo.', 'Retrocedo recto.', 'Mantengo zanshin.'],
    terms: [['Hiki-dō', 'dō al retirarse']]
  });

  add({
    id: 'hiki-kote', t: 'Hiki-kote', jp: '引き小手', sub: 'Kote al retroceder',
    intro: 'Hiki-kote se hace desde tsubazeriai golpeando el kote mientras retrocedes. Es el menos frecuente de los tres, pero completa el repertorio.',
    why: 'Aprovecha que el rival adelanta las manos en tsubazeriai: el kote queda al alcance.',
    steps: ['Desde tsubazeriai, empuja ligeramente.', 'Cuando el rival ceda, sube el shinai solo lo justo y retrocede.', 'Corta el kote del rival con el monouchi, con kiai.', 'Sigue hacia atrás y termina en zanshin.'],
    keys: ['Subida corta, como en kote normal.', 'El retroceso acompaña al corte.'],
    errors: [['Subes demasiado', 'La subida es corta: el kote está cerca.'], ['El golpe sale flojo', 'Cuida el tenouchi y el kiai.']],
    drills: ['20 hiki-kote en el aire.', 'Con compañero: 10 repeticiones controladas.'],
    check: ['Mi subida es corta.', 'Termino en zanshin.'],
    terms: [['Hiki-kote', 'kote al retirarse']]
  });

  add({
    id: 'harai-debana', t: 'Harai-waza y debana-waza: panorama', jp: '払い技・出ばな技', sub: 'Abrir la guardia y golpear al inicio',
    art: ['seq:harai-men'],
    intro: 'Dos técnicas de iniciativa: apartar el shinai del rival para abrirte camino (harai) y golpear justo cuando el rival empieza a moverse (debana).',
    keys: ['Harai: un barrido corto y firme desvía el shinai del rival; golpeas por el hueco.', 'Debana: golpeas en el instante en que el rival empieza a mover el shinai.', 'Ambas exigen mirada amplia, seme y paciencia.', 'Se entrenan con muchas repeticiones lentas.'],
    check: ['Distingo harai de debana.'],
    terms: [['Harai-waza', 'apartar y golpear'], ['Debana-waza', 'golpear al inicio'], ['Maki-waza', 'envolver el shinai']]
  });

  add({
    id: 'harai-men', t: 'Harai-men', jp: '払い面', sub: 'Apartar y golpear',
    art: ['seq:harai-men'],
    intro: 'Con un barrido corto del shinai apartas el del rival del centro y, en el mismo gesto, golpeas men por el hueco.',
    why: 'Abre la guardia del rival cuando no te deja entrar. Enseña a controlar el centro del rival (nakasen).',
    steps: ['Chūdan a issoku-ittō-no-ma-ai, con el kensen en el centro del rival.', 'Haz un barrido corto y firme con el shinai (hacia fuera y ligeramente hacia abajo) que aparte el suyo del centro.', 'Sin pausa, sube y golpea men con okuri-ashi y fumikomi.', 'Kiai ("men!"), pasa y termina en zanshin.'],
    keys: ['El barrido es pequeño y rápido; no un gran movimiento.', 'El golpe nace del mismo gesto: no hay pausa.', 'Mantén el centro tras el barrido.'],
    errors: [['El barrido es demasiado grande', 'Hazlo con las muñecas: corto, firme, sin abrir tu guardia.'], ['Pausa tras el barrido', 'Un solo movimiento: barrer y golpear.']],
    drills: ['20 harai en el aire, solo el barrido.', 'Con compañero: harai-men, 10 repeticiones.'],
    check: ['Mi barrido es corto.', 'No hay pausa entre barrido y golpe.'],
    terms: [['Harai-men', 'apartar y golpear men']]
  });

  add({
    id: 'debana-kote', t: 'Debana-kote', jp: '出ばな小手', sub: 'Kote en el inicio del rival',
    art: ['seq:debana-kote'],
    intro: 'Debana-kote es una de las técnicas más típicas y elegantes del kendō: golpear el kote justo cuando el rival empieza a subir el shinai para atacar.',
    why: 'Aprovecha el instante en que el rival está comprometido y no puede cambiar su acción. Entrena el sen (iniciativa).',
    steps: ['Chūdan, con seme constante y mirada amplia.', 'Observa el momento en que el rival empieza a subir el shinai o a mover el cuerpo (el debana).', 'En ese instante, avanza con okuri-ashi y golpea el kote con subida corta.', 'Kiai ("kote!"), fumikomi y hikitsuke.', 'Pasa y termina en zanshin.'],
    keys: ['El timing lo es todo: golpeas antes de que su ataque termine.', 'Subida mínima: el golpe nace del seme, no de una gran subida.', 'Mantén la calma: no golpees antes ni después.'],
    errors: [['Golpeas demasiado pronto (el rival no se ha movido)', 'Espera su movimiento: el debana es un instante concreto.'], ['Golpeas demasiado tarde (te golpea a ti)', 'Entra en cuanto empiece a moverse, no cuando ya está arriba.'], ['Subes mucho', 'La subida es corta: el kote está al alcance.']],
    drills: ['Con un compañero que ataca men de forma predecible: 10 debana-kote lentos.', 'Más tarde, con ataques variados.', 'Observa vídeos y busca el instante del debana.'],
    check: ['Detecto el inicio del movimiento del rival.', 'Mi subida es corta.', 'Mi golpe llega antes que el suyo.'],
    terms: [['Debana-kote', 'kote al inicio'], ['Sen', 'iniciativa']]
  });

  add({
    id: 'debana-men', t: 'Debana-men', jp: '出ばな面', sub: 'Men en el inicio del rival',
    art: ['seq:debana-men'],
    intro: 'Igual que debana-kote, pero golpeando men justo cuando el rival se mueve. Requiere más valentía y mejor distancia.',
    why: 'Es un golpe de iniciativa que corta el ataque del rival en su origen.',
    steps: ['Chūdan, con seme y mirada amplia.', 'Cuando el rival empiece a moverse, avanza con okuri-ashi.', 'Sube y golpea men con kiai y fumikomi.', 'Pasa y termina en zanshin.'],
    keys: ['Entra en cuanto empiece el movimiento: no esperes a que termine.', 'Golpe amplio: men completo.', 'Mantén la guardia al terminar.'],
    errors: [['Entras tarde', 'Observa el peso y el kensen: el inicio es sutil.'], ['Subes con titubeo', 'Hazlo con decisión: o entras o no entras.']],
    drills: ['Con un compañero que ataca kote o men: 10 debana-men lentos.'],
    check: ['Entro justo al inicio.', 'Mi men es completo.'],
    terms: [['Debana-men', 'men al inicio']]
  });

  add({
    id: 'maki-waza', t: 'Maki-waza', jp: '巻き技', sub: 'Envolver el shinai',
    intro: 'En maki-waza giras tu shinai alrededor del del rival para desviarlo y golpear. Es una técnica de iniciativa sutil.',
    why: 'Cuando el rival defiende bien el centro, el giro del shinai abre una línea nueva.',
    steps: ['Desde chūdan, coloca el kensen contra el shinai del rival.', 'Haz un giro circular pequeño y rápido que envuelva su shinai y lo desplace.', 'En el mismo movimiento, golpea men o kote por el hueco.', 'Fumikomi, kiai y zanshin.'],
    keys: ['El giro es pequeño y se hace con las muñecas.', 'No pierdes el centro.'],
    errors: [['El giro es muy grande', 'Hazlo corto y pegado a su shinai.'], ['Pausa tras el giro', 'Giro y golpe son un movimiento.']],
    drills: ['Con un compañero y a cámara lenta: 10 maki + men.'],
    check: ['Mi giro es corto.', 'No hay pausa antes del golpe.'],
    terms: [['Maki-waza', 'envolver el shinai']]
  });

  /* ---------- Ōji-waza ---------- */
  add({
    id: 'oji-waza', t: 'Ōji-waza: panorama', jp: '応じ技', sub: 'Dejar que el rival abra tu golpe',
    art: ['topview:nuki'],
    intro: 'Ōji-waza son técnicas en las que esperas el ataque del rival y respondes con un golpe propio. Hay cuatro familias.',
    keys: ['Nuki-waza: esquivas el golpe moviendo el cuerpo y contraatacas (men-nuki-dō, kote-nuki-men).', 'Suriage-waza: desvías el golpe subiendo el shinai y respondes (kote-suriage-men).', 'Kaeshi-waza: bloqueas y devuelves por otro lado (men-kaeshi-dō).', 'Uchiotoshi-waza: golpeas hacia abajo su shinai y respondes (dō-uchiotoshi-men).', 'Todas exigen kihon sólido, seme y calma.'],
    warn: 'No empieces ōji-waza hasta que tu sensei te lo indique. Primero kihon y debana.',
    check: ['Conozco las cuatro familias de ōji-waza.'],
    terms: [['Ōji-waza', 'técnicas de respuesta'], ['Nuki-waza', 'esquivar'], ['Suriage-waza', 'desviar'], ['Kaeshi-waza', 'devolver'], ['Uchiotoshi-waza', 'golpear hacia abajo']]
  });

  add({
    id: 'men-nuki-do', t: 'Men-nuki-dō', jp: '面抜き胴', sub: 'Esquivar el men y cortar dō',
    art: ['seq:men-nuki-do', 'topview:nuki'],
    intro: 'El rival ataca men; tú sales en diagonal (hiraki-ashi) dejando que falle, y cortas su dō. Es la técnica de esquiva más clásica.',
    why: 'Convierte el ataque del rival en tu oportunidad sin necesidad de bloquear.',
    steps: ['Chūdan; haz seme para provocar que ataque men.', 'En el instante en que su shinai sube, sal en diagonal con hiraki-ashi (lado derecho, normalmente).', 'Gira el cuerpo para que su golpe pase de largo.', 'Corta el dō derecho del rival con el filo, con kiai.', 'Sigue y vuelve a chūdan con zanshin.'],
    keys: ['Sales de la línea sin retroceder.', 'El corte sale de tu movimiento: no esperas a que su golpe falle.', 'Mira siempre al rival.'],
    errors: [['Retrocedes en vez de abrirte', 'El paso es en diagonal hacia delante.'], ['Sales demasiado pronto', 'Espera a que su ataque esté lanzado.'], ['Te quedas en la línea', 'Con hiraki-ashi te desplazas lo suficiente.']],
    drills: ['Sin rival: 10 hiraki-ashi + dō.', 'Con compañero a cámara lenta: ataca men, esquiva y corta dō, 10 repeticiones.'],
    check: ['Salgo de la línea en diagonal.', 'Corto con filo.', 'Mantengo zanshin.'],
    terms: [['Men-nuki-dō', 'esquivar men y cortar dō'], ['Hiraki-ashi', 'paso en diagonal']]
  });

  add({
    id: 'kote-nuki-men', t: 'Kote-nuki-men', jp: '小手抜き面', sub: 'Esquivar el kote y golpear men',
    art: ['topview:nuki'],
    intro: 'El rival ataca kote; tú subes las manos para que el golpe pase por debajo y respondes con men. Es una esquiva sin desplazamiento.',
    why: 'Es rápida y económica, y aprovecha que el rival queda abierto tras su kote.',
    steps: ['Chūdan; haz seme para invitar el kote.', 'Cuando el rival golpee kote, sube las manos y el shinai (como en furikaburi) para que su golpe pase por debajo.', 'Avanza ligeramente y golpea men con kiai.', 'Fumikomi, zanshin y vuelta a chūdan.'],
    keys: ['Subes las manos justo cuando su golpe baja.', 'El men sale del mismo movimiento de subida.'],
    errors: [['Subes demasiado pronto', 'Espera a que el golpe esté en camino.'], ['Te quedas quieto tras subir', 'Sube y golpea sin pausa.']],
    drills: ['En el aire: subir y men, 20 repeticiones.', 'Con compañero a cámara lenta: 10 kote-nuki-men.'],
    check: ['Subo en el momento justo.', 'Mi men sale sin pausa.'],
    terms: [['Kote-nuki-men', 'esquivar kote y golpear men']]
  });

  add({
    id: 'kote-suriage-men', t: 'Kote-suriage-men', jp: '小手すり上げ面', sub: 'Desviar el kote y golpear men',
    art: ['seq:kote-suriage-men'],
    intro: 'Desvías el kote del rival subiendo tu shinai de forma que el suyo resbale hacia un lado, y respondes con men en el mismo gesto.',
    why: 'Neutraliza su ataque sin retroceder y deja su men expuesto.',
    steps: ['Chūdan; haz seme.', 'Cuando el rival golpee kote, sube tu shinai desde abajo, rozando el suyo (suriage), para desviarlo.', 'La subida del suriage es ya el furikaburi del men.', 'Golpea men con fumikomi y kiai.', 'Zanshin.'],
    keys: ['El desvío y la subida son el mismo movimiento.', 'El shinai "resbala" sobre el del rival, no choca.', 'La distancia debe ser justa.'],
    errors: [['Bloqueas en vez de desviar', 'Sube rozando su shinai, no lo golpees.'], ['Paras tras el desvío', 'El men sale del mismo movimiento.']],
    drills: ['En el aire: subida de suriage + men, 20 repeticiones.', 'Con compañero a cámara lenta, 10 repeticiones.'],
    check: ['Mi shinai resbala sobre el suyo.', 'El men sale sin pausa.'],
    terms: [['Kote-suriage-men', 'desviar kote y men'], ['Suriage-waza', 'desviar']]
  });

  add({
    id: 'men-suriage-men', t: 'Men-suriage-men', jp: '面すり上げ面', sub: 'Desviar el men y devolver men',
    art: ['seq:kote-suriage-men'],
    intro: 'Cuando el rival ataca men, subes tu shinai desviando el suyo hacia un lado y devuelves un men. Es una técnica de coraje.',
    why: 'Responde al ataque más directo sin retroceder.',
    steps: ['Chūdan; haz seme para provocar el men.', 'Cuando su shinai baje, sube el tuyo rozándolo, hacia un lado de tu cabeza.', 'Desvía su golpe y, con la misma subida, golpea men.', 'Fumikomi, kiai y zanshin.'],
    keys: ['El shinai resbala hacia el lado, no choca.', 'Mantén los ojos abiertos y la mirada al rival.', 'Es una técnica de valentía: no cierres los ojos.'],
    errors: [['Cierras los ojos', 'Mantén la mirada: es lo que te permite ver el desvío.'], ['Bloqueas con el shinai plano', 'Sube con ángulo para que resbale.']],
    drills: ['En el aire: la subida con ángulo + men.', 'Con compañero a cámara lenta, 10 repeticiones.'],
    warn: 'Es una técnica de contacto en la cabeza: practícala con control y con compañeros de nivel parecido.',
    check: ['Mi shinai resbala hacia un lado.', 'No cierro los ojos.'],
    terms: [['Men-suriage-men', 'desviar men y men']]
  });

  add({
    id: 'men-kaeshi-do', t: 'Men-kaeshi-dō', jp: '面返し胴', sub: 'Bloquear el men y devolver dō',
    art: ['seq:men-kaeshi-do'],
    intro: 'Recibes el men del rival con el shinai en alto, giras el shinai y devuelves un corte a su dō.',
    why: 'Convierte el bloqueo en un contraataque limpio y aprovecha que el rival ha levantado los brazos.',
    steps: ['Chūdan; haz seme para provocar el men.', 'Sube el shinai a la altura de la frente, con el kensen ligeramente hacia delante, para recibir su golpe.', 'En el contacto, gira las muñecas para que su shinai resbale y tu shinai se abra hacia el lado.', 'Corta el dō derecho del rival con el filo, con kiai.', 'Fumikomi, zanshin y vuelta a chūdan.'],
    keys: ['Recibes con el shinai, no con las manos.', 'El giro y el corte forman un movimiento continuo.', 'La mirada nunca deja de seguir al rival.'],
    errors: [['Bloqueas con las manos', 'El shinai recibe; las manos quedan detrás.'], ['Paras tras el bloqueo', 'El giro es parte del bloqueo: sin pausa.'], ['El corte sale con el plano', 'Cuida el tsuru arriba al cortar.']],
    drills: ['En el aire: bloqueo, giro y dō, 20 repeticiones.', 'Con compañero a cámara lenta, 10 repeticiones.'],
    check: ['Recibo el golpe con el shinai.', 'El giro y el corte son continuos.'],
    terms: [['Men-kaeshi-dō', 'bloquear men y devolver dō'], ['Kaeshi-waza', 'devolver']]
  });

  add({
    id: 'do-uchiotoshi-men', t: 'Dō-uchiotoshi-men', jp: '胴打ち落とし面', sub: 'Golpear hacia abajo y responder',
    art: ['seq:dou-uchiotoshi-men'],
    intro: 'Cuando el rival ataca dō, golpeas hacia abajo su shinai (uchiotoshi) y, sin pausa, respondes con men.',
    why: 'Neutraliza su ataque y deja el men descubierto, porque su shinai queda hacia abajo.',
    steps: ['Chūdan; haz seme para provocar el dō.', 'Cuando su shinai vaya hacia tu costado, golpea hacia abajo el suyo con un movimiento corto y seco.', 'Sin pausa, sube y golpea men con fumikomi y kiai.', 'Zanshin.'],
    keys: ['El golpe hacia abajo es corto y seco, con las muñecas.', 'El men nace del mismo gesto.'],
    errors: [['El golpe hacia abajo es muy grande', 'Hazlo corto: lo justo para sacar su shinai de la línea.'], ['Pausa antes del men', 'Un solo movimiento con dos golpes.']],
    drills: ['En el aire: golpe hacia abajo + men, 20 repeticiones.', 'Con compañero a cámara lenta, 10 repeticiones.'],
    check: ['Mi golpe hacia abajo es corto.', 'No hay pausa antes del men.'],
    terms: [['Uchiotoshi-waza', 'golpear hacia abajo']]
  });

  /* ---------- Reordenación final de módulos ---------- */
  const P = id => KD.pool[id] || LESS[id];
  const LESS = {};
  KD.modules.forEach(m => m.lessons.forEach(l => { LESS[l.id] = l; }));
  const byId = id => { const l = KD.pool[id] || LESS[id]; if (!l) throw new Error('lección no encontrada: ' + id); return l; };
  const old = {}; KD.modules.forEach(m => { old[m.id] = m; });
  const mod = (o, ids) => Object.assign({}, o, { lessons: ids.map(byId) });

  KD.modules = [
    mod(old.shoshin, ['que-es-kendo', 'etiqueta-dojo', 'saludos', 'clase-tipo']),
    mod({ id: 'examen', name: 'Examen · Tu camino de kyū', jp: '級', seal: '級', icon: 'flag', desc: 'El programa oficial de kyū, qué se pide en tu primer examen y cómo prepararlo, y un plan para tener la mejor técnica posible.' },
      ['ex-programa', 'ex-5kyu', 'ex-tus-kata', 'ex-mejor', 'ex-4kyu', 'ex-3kyu', 'ex-2kyu', 'ex-bokuto', 'ex-dia', 'ex-dan']),
    mod(old.kendogu, ['shinai', 'keikogi-hakama', 'bogu', 'vestirse', 'cuidado-equipo']),
    mod({ id: 'kihon', name: 'Kihon · Postura base', jp: '基本', seal: '基', icon: 'feet', desc: 'Postura, mirada, respiración, agarre y espíritu: lo que hay debajo de cada técnica.' },
      ['shisei', 'metsuke', 'respiracion', 'tenouchi', 'kiai-zanshin']),
    mod({ id: 'kamae', name: 'Kamae · Guardias', jp: '構え', seal: '構', icon: 'men', desc: 'Chūdan al detalle y las otras cuatro guardias, con errores típicos dibujados y la ceremonia de taitō y sonkyō.' },
      ['chudan', 'chudan-ajustes', 'kamae-5', 'gedan', 'jodan', 'hasso', 'waki', 'taito-sonkyo']),
    mod({ id: 'ashi', name: 'Ashi-sabaki · Pies', jp: '足捌き', seal: '足', icon: 'feet', desc: 'Los cinco desplazamientos paso a paso, la distancia y un programa de ejercicios para casa.' },
      ['ashi-sabaki', 'okuri-ashi', 'ayumi-ashi', 'hiraki-ashi', 'tsugi-ashi', 'fumikomi-ashi', 'maai', 'ashi-ejercicios']),
    mod({ id: 'suburi', name: 'Suburi · Golpes al aire', jp: '素振り', seal: '振', icon: 'shinai', desc: 'Los cuatro suburi, cada uno con su secuencia, y un programa semanal.' },
      ['suburi', 'joge-buri', 'sayu-men', 'zenshin-kotai', 'haya-suburi', 'suburi-plan']),
    mod(old['kihon-waza'] && { id: 'kihon-waza', name: 'Kihon-waza · Golpes básicos', jp: '基本技', seal: '技', icon: 'shinai', desc: 'Los blancos, el golpe válido y los golpes fundamentales: men, yokomen, kote, dō, tsuki, kirikaeshi y kote-men.' },
      ['datotsu-yuko', 'men', 'men-pasante', 'yokomen', 'kote', 'do', 'tsuki', 'kirikaeshi', 'kote-men']),
    mod({ id: 'waza-medio', name: 'Waza · Iniciativa', jp: '応用技', seal: '応', icon: 'swords', desc: 'Contacto cuerpo a cuerpo, golpes al retirarse, apartar el shinai y golpear al inicio del rival.' },
      ['tai-atari', 'tsubazeriai', 'hiki-waza', 'hiki-men', 'men-tai-hiki', 'hiki-do', 'hiki-kote', 'harai-debana', 'harai-men', 'debana-kote', 'debana-men', 'maki-waza']),
    mod({ id: 'avanzado', name: 'Ōji-waza · Respuesta y estrategia', jp: '応じ技', seal: '極', icon: 'chart', desc: 'Esquivar, desviar y devolver golpes; iniciativa (sen), presión (seme) y kata.' },
      ['oji-waza', 'men-nuki-do', 'kote-nuki-men', 'kote-suriage-men', 'men-suriage-men', 'men-kaeshi-do', 'do-uchiotoshi-men', 'sen', 'seme', 'nakasen', 'kake-hiki']),
    mod({ id: 'pareja', name: 'Pareja · Práctica y defensa', jp: '稽古', seal: '稽', icon: 'swords', desc: 'Cómo practicar con compañero: motodachi, uchikomi, kakari, ji-geiko, recibir golpes y cerrar el hueco tras atacar.' },
      ['tipos-practica', 'motodachi', 'uchikomi-geiko', 'kakari-geiko', 'ji-geiko', 'ukeru', 'tras-el-ataque']),
    mod({ id: 'kata', name: 'Kata · Las diez formas', jp: '形', seal: '形', icon: 'book', desc: 'El Nihon Kendō Kata: reglas comunes y una lección por forma, con aviso de lo que debes confirmar con tu sensei.' },
      ['kata', 'kata-etiqueta', 'kata-1', 'kata-2', 'kata-3', 'kata-4', 'kata-5', 'kata-6', 'kata-7', 'kata-kodachi']),
    mod({ id: 'cuerpo', name: 'Cuerpo · Preparación', jp: '身体', seal: '体', icon: 'feet', desc: 'Calentamiento, movilidad, fuerza, cuidado de los pies, prevención de lesiones y resistencia.' },
      ['calentamiento-kendo', 'movilidad', 'fuerza-kendo', 'cuidado-pies', 'prevencion-lesiones', 'resistencia']),
    mod(old.shiai, ['reglas-shiai', 'flujo-shiai', 'arbitraje', 'faltas-shiai', 'patrones-combate', 'preparacion-torneo', 'mentalidad', 'grados', 'consejos'])
  ];
})();
