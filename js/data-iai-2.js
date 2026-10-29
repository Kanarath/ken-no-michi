/* Iaidō (parte 2): seitei-gata de la ZNKR y Musō Jikiden Eishin-ryū. Se carga después de data-iai-1. */
(function () {
  const add = KD.add;
  const SRC = 'Resumen basado en descripciones públicas del seitei-gata (kampaibudokai.org, Wikipedia y AKBAN). Faltan detalles que solo se ven en persona: pies, alturas, ritmo y manos. Apréndelo con tu sensei y el manual de la ZNKR.';

  /* =============== SEITEI-GATA =============== */
  add({
    id: 'ia-seitei', t: 'Seitei-gata: las doce formas', jp: '制定居合', sub: 'El estándar de la Federación Japonesa de Kendō',
    intro: 'El seitei-gata (o "Zen Ken Ren Iai") es un conjunto de doce formas de iaidō creado por la Federación Japonesa de Kendō para enseñar, examinar y difundir el iaidō. Se tomaron técnicas de varias escuelas tradicionales.',
    why: 'Es lo que se practica en los exámenes de iaidō de las federaciones de kendō y suele ser lo primero que se enseña en los dōjō afiliados, antes de pasar a una escuela tradicional.',
    keys: ['Se creó a partir de la Federación (fundada en 1952): en 1969 se establecieron siete formas, en 1981 se añadieron tres y en 2000 dos más.', 'Se inspiran en Musō Jikiden Eishin-ryū, Musō Shinden-ryū y Hōki-ryū, entre otras.', 'Cada forma tiene oponentes imaginarios y un orden: nukitsuke, kiritsuke, chiburi y nōtō.'],
    extra: [{ h: 'Las doce formas', ul: ['1 · Mae (前): seiza, un oponente de frente.', '2 · Ushiro (後ろ): seiza, un oponente por detrás.', '3 · Ukenagashi (受け流し): seiza, un oponente a la izquierda.', '4 · Tsuka-ate (柄当て): tatehiza, dos oponentes (delante y detrás).', '5 · Kesagiri (袈裟切り): de pie, un oponente.', '6 · Morote-tsuki (諸手突き): de pie, tres oponentes (dos delante y uno detrás).', '7 · Sanpōgiri (三方切り): de pie, tres oponentes (delante, derecha e izquierda).', '8 · Ganmen-ate (顔面当て): de pie, dos oponentes (delante y detrás).', '9 · Soete-tsuki (添え手突き): de pie, un oponente a la izquierda.', '10 · Shihōgiri (四方切り): de pie, cuatro oponentes en las esquinas.', '11 · Sōgiri (総切り): de pie, uno o más oponentes de frente.', '12 · Nukiuchi (抜き打ち): de pie, un oponente de frente.'] }],
    drills: ['Pregunta a tu sensei en qué orden estudiaréis las formas en tu dōjō.', 'Mira las doce en vídeo de una demostración reconocida y repasa solo la secuencia.'],
    check: ['Sé cuántas formas tiene el seitei.', 'Sé las diferencias entre las de seiza y las de pie.'],
    warn: SRC,
    terms: [['Seitei-gata', 'formas estándar'], ['Kasso-teki', 'oponente imaginario']]
  });

  add({
    id: 'ia-seitei-rei', t: 'Saludo de apertura y cierre', jp: '礼法', sub: 'Antes y después de las formas',
    intro: 'Cada demostración o práctica de seitei empieza y termina con un protocolo de saludo: al frente y a la espada.',
    steps: ['Entras en la zona de práctica con el pie derecho, con la espada en la mano izquierda.', 'Frente al shōmen, haces el saludo con la espada pasada a la mano derecha, y la devuelves a la izquierda.', 'Te sientas en seiza (la rodilla izquierda primero) y colocas la espada delante, con el filo hacia fuera según el protocolo.', 'Tō-rei: saludas a la espada con las manos ante ti; la mano derecha avanza la última y se retira la primera.', 'Coges la espada, la colocas en el obi y te levantas para empezar la primera forma.', 'Al terminar, vuelves a seiza, apoyas la contera en el suelo, colocas la espada delante, haces el tō-rei, vuelves a ponerla en el obi, te levantas, saludas al frente y retrocedes cuatro pasos pequeños empezando por el pie izquierdo para salir.'],
    keys: ['Se hace con calma y con "la sensación de ser uno con la espada".', 'El orden y la posición de las manos se repiten cada vez.', 'Cada escuela tiene sus matices.'],
    errors: [['Te apresuras al empezar o terminar', 'El protocolo es parte de la práctica: dale el mismo cuidado que a los kata.'], ['Confundes el orden', 'Practica el protocolo por separado hasta que sea automático.']],
    drills: ['En casa, practica el saludo de apertura y cierre en seiza, sin espada o con bokken, 5 veces.'],
    check: ['Sé el orden del protocolo.', 'Lo hago con calma.'],
    warn: SRC,
    terms: [['Tō-rei', 'saludo a la espada'], ['Embu', 'demostración']]
  });

  const S = (n, id, t, jp, sub, post, opp, steps, keys, extra) => add(Object.assign({
    id: id, t: 'Seitei ' + n + ' · ' + t, jp: jp, sub: sub, art: ['kata:' + extra.k],
    intro: extra.intro, steps: steps, stepsH: 'Resumen de la forma',
    keys: keys, errors: extra.errors, drills: extra.drills, check: extra.check,
    warn: SRC, terms: extra.terms
  }, {}));

  S(1, 'ia-s1', 'Mae', '前', 'Un oponente de frente, desde seiza', 'seiza', 1,
    ['Posición: seiza, con un oponente imaginario delante.', 'Nukitsuke: desenvainas y haces un corte horizontal dirigido a la cabeza (ojos) del oponente.', 'Avanzas con el pie derecho y haces un corte descendente (kirioroshi).', 'Ō-chiburi, con la mano izquierda en la cadera, al levantarte desde medio arrodillado.', 'Nōtō: envainas con control; la rodilla toca el suelo con la espada ya envainada.', 'Al levantarte, el pie izquierdo se une al derecho.'],
    ['Los dos cortes salen de un gesto continuo.', 'Pies y espada se coordinan.', 'La envainada es lenta y limpia.'],
    { k: 'mae', intro: 'Es la primera forma: desde seiza, el oponente se acerca de frente y tú lo anticipas con un desenvainado y dos cortes. Contiene muchas ideas básicas del iaidō.', errors: [['Cortas con los hombros', 'La fuerza sale de la cadera; los brazos acompañan.'], ['Te apresuras en el nōtō', 'Hazlo lento: la rodilla toca el suelo al final.']], drills: ['Practica con bokken el recorrido de los dos cortes, sin envainar.', 'Repite el movimiento de sentarte y levantarte con la mano izquierda en la cadera.'], check: ['Conozco los dos cortes.', 'Sé dónde apoya la rodilla al envainar.'], terms: [['Kirioroshi', 'corte descendente'], ['Ō-chiburi', 'chiburi amplio']] });

  S(2, 'ia-s2', 'Ushiro', '後ろ', 'Un oponente por detrás, desde seiza', 'seiza', 1,
    ['Posición: seiza, con un oponente imaginario detrás.', 'Levantas la rodilla izquierda, te giras y desenvainas mientras haces un corte horizontal; los pies permanecen juntos al levantarte.', 'Avanzas y cortas como en Mae, pero con los pies invertidos.', 'Chiburi y nōtō como en Mae, con los pies invertidos.'],
    ['Los pies juntos al levantarte y girar.', 'El giro sale de las caderas.', 'La mirada va hacia el oponente detrás de ti.'],
    { k: 'ushiro', intro: 'La segunda forma es el espejo de la primera: el oponente aparece por detrás y debes girarte y cortarlo antes de que ataque.', errors: [['Pierdes el equilibrio al girar', 'Mantén los pies juntos y gira desde las caderas.'], ['Miras al frente al girar', 'La mirada anticipa el giro hacia el oponente.']], drills: ['Practica el giro con las manos como si sujetaras la espada.', 'Repite el giro en seiza: levantarte con la rodilla izquierda y los pies juntos.'], check: ['Mi giro es de caderas.', 'Mis pies siguen juntos.'], terms: [['Ushiro', 'detrás']] });

  S(3, 'ia-s3', 'Ukenagashi', '受け流し', 'Desvío y corte, desde seiza', 'seiza', 1,
    ['Posición: seiza; el oponente está a tu izquierda.', 'El oponente se levanta de repente y ataca.', 'Llevas el pie izquierdo hacia la rodilla derecha, te levantas y realizas ukenagashi: un desvío deslizante de su corte.', 'Cortas al oponente.', 'Terminas con chinugui (limpiar la sangre con la mano izquierda) y gyaku-nōtō.'],
    ['El desvío (ukenagashi) es flexible, no un bloqueo.', 'La respuesta es inmediata.', 'Los pies y el cuerpo se mueven a la vez.'],
    { k: 'ukenagashi', intro: 'En la tercera forma el oponente ataca de repente desde la izquierda y tú desvías su corte en lugar de bloquearlo, para cortar después.', errors: [['Bloqueas en vez de desviar', 'La espada resbala sobre la del oponente: es un desvío.'], ['Pierdes la calma', 'El ritmo es sereno aunque la reacción sea rápida.']], drills: ['Practica el movimiento de levantarte desde seiza con el pie izquierdo hacia la rodilla derecha.', 'Con bokken: practica el desvío sin cortar, con control.'], check: ['Conozco el movimiento de levantarme.', 'Sé qué es ukenagashi.'], terms: [['Ukenagashi', 'desvío flexible'], ['Chinugui', 'limpiar la hoja'], ['Gyaku-nōtō', 'envainar invertido']] });

  S(4, 'ia-s4', 'Tsuka-ate', '柄当て', 'Golpe de empuñadura, desde tatehiza', 'tatehiza', 2,
    ['Posición: tatehiza; hay un oponente delante y otro detrás.', 'Golpeas con la tsuka al plexo (suigetsu) del primer oponente.', 'Empujas con una estocada al plexo del segundo oponente.', 'Te giras hacia el frente y cortas al primer oponente.', 'Terminas con yoko-chiburi y nōtō.'],
    ['La tsuka (empuñadura) se usa como arma de golpe.', 'Los dos oponentes están en lados opuestos.', 'El cambio de dirección es limpio.'],
    { k: 'tsukaate', intro: 'La cuarta forma se practica desde tatehiza e introduce el golpe con la empuñadura: tienes oponentes delante y detrás.', errors: [['El golpe de tsuka es flojo', 'Usa la cadera, no los brazos.'], ['Te giras con los hombros', 'Gira con las caderas.']], drills: ['Practica el golpe de tsuka sin espada, con el puño derecho sobre la mano izquierda.', 'Con tu sensei, practica el giro desde tatehiza.'], check: ['Sé dónde están los dos oponentes.', 'Conozco el golpe con la tsuka.'], terms: [['Tsuka-ate', 'golpe con la empuñadura'], ['Suigetsu', 'plexo solar']] });

  S(5, 'ia-s5', 'Kesagiri', '袈裟切り', 'Corte diagonal, de pie', 'pie', 1,
    ['Posición: de pie; un oponente se acerca de frente.', 'Realizas un corte diagonal (kesa) al oponente.', 'Evita que la espada se desvíe demasiado hacia el lado.', 'Retiras el pie derecho hasta hasso-no-kamae.', 'Das un paso atrás con el pie izquierdo mientras haces el chiburi.', 'Nōtō.'],
    ['El corte es diagonal, de hombro a cintura contraria.', 'La espada no se abre de más.', 'Postura clara en hassō.'],
    { k: 'kesagiri', intro: 'La quinta forma es la primera de pie: un corte diagonal limpio y un retroceso a hassō antes de terminar.', errors: [['La espada se va hacia el lado', 'Mantén la trayectoria diagonal controlada, sin abrir los brazos.'], ['Pierdes el hassō', 'Cuida los pies y las manos al retirarte.']], drills: ['Con bokken: 20 cortes diagonales lentos con filo alineado.', 'Practica la transición a hassō.'], check: ['Mi corte es diagonal.', 'Llego a hassō con control.'], terms: [['Kesa-giri', 'corte diagonal'], ['Hassō', 'guardia de ocho lados']] });

  S(6, 'ia-s6', 'Morote-tsuki', '諸手突き', 'Estocada con las dos manos', 'pie', 3,
    ['Posición: de pie; dos oponentes delante y uno detrás.', 'Desenvainas en el segundo paso.', 'En el tercer paso cortas la cara del primer oponente.', 'Realizas una estocada con las dos manos al plexo.', 'Te giras y cortas al oponente de detrás.', 'Te giras de nuevo y terminas al segundo oponente de frente.', 'Yoko-chiburi y nōtō.'],
    ['Estocada con dos manos al plexo (suigetsu).', 'Tres oponentes: dos de frente, uno por detrás.', 'Los giros son limpios.'],
    { k: 'morote', intro: 'La sexta forma introduce la estocada con las dos manos y el trabajo con varios oponentes, incluido uno por detrás.', errors: [['La estocada es débil', 'La mano izquierda empuja desde el centro.'], ['Te pierdes con tres oponentes', 'Visualízalos antes: dos delante, uno detrás.']], drills: ['Practica la estocada con bokken en una línea recta, 10 veces.', 'Ensaya solo los giros de 180°.'], check: ['Sé dónde están los tres oponentes.', 'Mi estocada es recta.'], terms: [['Morote-tsuki', 'estocada a dos manos']] });

  S(7, 'ia-s7', 'Sanpōgiri', '三方切り', 'Tres oponentes: delante, derecha e izquierda', 'pie', 3,
    ['Posición: de pie; un oponente delante, otro a la derecha y otro a la izquierda.', 'Intimidas al oponente de frente.', 'Cortas la cara del oponente de la derecha.', 'Controlas al de frente, te giras a la izquierda y cortas al oponente de la izquierda.', 'Avanzas con el pie derecho y cortas al último oponente.', 'Retrocedes con el pie derecho hasta jōdan; después con el izquierdo mientras haces el chiburi.', 'Nōtō.'],
    ['Controlar al oponente de frente mientras atiendes a los de los lados.', 'Los giros salen de las caderas.', 'Jōdan al retroceder.'],
    { k: 'sanpo', intro: 'La séptima forma enseña a manejar a tres oponentes en tres direcciones. Es una forma de control y de atención.', errors: [['Olvidas controlar al de frente', 'El zanshin hacia el oponente central se mantiene toda la forma.'], ['Giras rígido', 'Gira con las caderas y los pies.']], drills: ['Con bokken: practica los tres cortes en el aire con giros lentos.', 'Visualiza los tres oponentes antes de empezar.'], check: ['Sé el orden de los tres oponentes.', 'Controlo al de frente.'], terms: [['Sanpō-giri', 'corte en tres direcciones'], ['Jōdan', 'guardia alta']] });

  S(8, 'ia-s8', 'Ganmen-ate', '顔面当て', 'Golpe a la cara y estocada', 'pie', 2,
    ['Posición: de pie; un oponente delante y otro detrás.', 'Golpeas con la tsuka entre los ojos del oponente de frente.', 'Desenvainas y te giras, con la espada horizontal.', 'Realizas una estocada con una mano al plexo del oponente de detrás.', 'Te giras y cortas al primer oponente.', 'Yoko-chiburi y nōtō.'],
    ['El golpe a la cara se hace con la empuñadura.', 'La estocada es con una mano.', 'La espada queda horizontal tras el giro.'],
    { k: 'ganmen', intro: 'La octava forma combina un golpe de empuñadura a la cara con una estocada a una mano a un oponente situado detrás.', errors: [['El golpe a la cara es brusco', 'Control y precisión: es un golpe corto y seco.'], ['La estocada se desvía', 'Mantén la espada horizontal y recta.']], drills: ['Practica el golpe de tsuka y el giro por separado.', 'Estocada a una mano con bokken, 10 veces, lento.'], check: ['Conozco el orden de los dos oponentes.', 'Sé qué es la estocada a una mano.'], terms: [['Ganmen-ate', 'golpe a la cara']] });

  S(9, 'ia-s9', 'Soete-tsuki', '添え手突き', 'Estocada con la mano de apoyo', 'pie', 1,
    ['Posición: de pie; un oponente a la izquierda.', 'Cortas desde el hombro hacia el oponente, terminando con la mano por debajo de la espada, a la altura de la cadera.', 'Realizas una estocada horizontal.', 'Retrocedes con el pie derecho hasta un jōdan lo más amplio posible.', 'Retrocedes con el pie izquierdo y haces el chiburi.', 'Nōtō.'],
    ['La mano de apoyo está bajo la espada en la estocada.', 'El jōdan es amplio.', 'La estocada es horizontal.'],
    { k: 'soete', intro: 'La novena forma une un corte desde el hombro y una estocada con la mano de apoyo (soete) ante un oponente a la izquierda.', errors: [['La mano de apoyo se descuelga', 'Mantén la mano izquierda bajo la hoja, a la altura de la cadera.'], ['El jōdan es pequeño', 'Hazlo amplio, como pide la forma.']], drills: ['Con bokken: practica el corte y la estocada en línea.', 'Practica el retroceso a jōdan.'], check: ['La mano de apoyo está donde toca.', 'Mi jōdan es amplio.'], terms: [['Soete-tsuki', 'estocada con mano de apoyo']] });

  S(10, 'ia-s10', 'Shihōgiri', '四方切り', 'Cuatro oponentes en las esquinas', 'pie', 4,
    ['Posición: de pie; cuatro oponentes en las esquinas.', 'En el tercer paso, golpeas con la tsuka la muñeca del oponente delantero derecho.', 'Sacas la espada a la altura del pecho, te giras y haces una estocada al plexo del oponente trasero izquierdo con un paso deslizado, manteniendo la tensión del pie derecho.', 'Te giras y cortas al oponente delantero derecho avanzando con el pie izquierdo.', 'Avanzas hacia el oponente trasero derecho y lo cortas.', 'Te giras hacia el oponente delantero izquierdo pasando por wakigamae.', 'Das un gran paso con el pie derecho y terminas al último oponente.', 'Retrocedes con el pie derecho hasta jōdan, después con el izquierdo mientras haces el chiburi, y nōtō.'],
    ['Los cuatro oponentes se atienden por orden.', 'Se pasa por wakigamae en el giro final.', 'Tensión en el pie derecho durante la estocada deslizada.'],
    { k: 'shiho', intro: 'La décima forma es la más compleja hasta aquí: cuatro oponentes, giros, estocadas y cortes. Exige memoria espacial y control.', errors: [['Pierdes el orden de los oponentes', 'Memoriza la ruta: delantero derecho, trasero izquierdo, de nuevo delantero derecho, trasero derecho y delantero izquierdo.'], ['Giras demasiado rápido', 'La calma y el control mandan; la velocidad llega sola.']], drills: ['Dibuja un esquema con los cuatro oponentes y repásalo cada día.', 'Practica solo los giros, sin espada, siguiendo la ruta.'], check: ['Sé la ruta de los cuatro oponentes.', 'Controlo los giros.'], terms: [['Shihō-giri', 'corte en cuatro direcciones'], ['Wakigamae', 'guardia lateral']] });

  S(11, 'ia-s11', 'Sōgiri', '総切り', 'Cinco cortes completos', 'pie', 1,
    ['Posición: de pie; uno o más oponentes se acercan de frente.', 'En el tercer paso, desenvainas hacia delante y retiras el pie derecho con ukenagashi.', 'Realizas tres cortes en diagonal (a la barbilla, al plexo y horizontal), cada uno siguiendo el mismo recorrido, con la mano izquierda en el centro.', 'Haces un corte horizontal y uno vertical; todos los cortes avanzan con el pie derecho.', 'Yoko-chiburi y nōtō.'],
    ['La mano izquierda se mantiene en el centro.', 'Todos los cortes avanzan con el pie derecho.', 'Cinco cortes distintos, sin pausas innecesarias.'],
    { k: 'sogiri', intro: 'La undécima forma reúne cinco cortes completos en serie y exige continuidad y precisión.', errors: [['La mano izquierda se desplaza', 'Mantenla en el centro del cuerpo durante toda la serie.'], ['Los cortes pierden el filo', 'Cuida el hasuji de cada uno.']], drills: ['Practica los cinco cortes con bokken, uno a uno, y luego en serie.', 'Graba la serie para comprobar el centro de la mano izquierda.'], check: ['Sé los cinco cortes.', 'Mi mano izquierda está en el centro.'], terms: [['Sōgiri', 'cinco cortes completos']] });

  S(12, 'ia-s12', 'Nukiuchi', '抜き打ち', 'Evitar y cortar, de pie', 'pie', 1,
    ['Posición: de pie; un oponente de frente ataca.', 'Agarras la espada y retrocedes mientras desenvainas hacia arriba, evitando el corte; la mano derecha queda en el centro.', 'Avanzas y cortas en horizontal.', 'Retrocedes con el pie derecho y haces yoko-chiburi.', 'Nōtō y un paso adelante para volver a la posición inicial.'],
    ['No hay ukenagashi: evitas con el cuerpo y el desenvainado.', 'El desenvainado hacia arriba recuerda al nuki de kendō.', 'El corte horizontal sale justo tras evitar el ataque.'],
    { k: 'nukiuchi', intro: 'La duodécima forma enseña a evitar un ataque directo con el propio movimiento del desenvainado y a responder de inmediato con un corte.', errors: [['Bloqueas en vez de evitar', 'Retrocede y desenvaina hacia arriba para dejar pasar el corte.'], ['Llegas tarde al corte', 'El corte nace justo después de evitar el ataque.']], drills: ['Practica el retroceso con el movimiento de la mano derecha, sin espada.', 'Con bokken: practica la salida del corte horizontal.'], check: ['Evito con el cuerpo.', 'Corto justo tras evitar.'], terms: [['Nukiuchi', 'desenvainar y cortar']] });

  /* =============== MUSŌ JIKIDEN EISHIN-RYŪ =============== */
  const MJ = 'Resumen basado en fuentes públicas (Wikipedia y artículos de escuela). Las descripciones técnicas de cada waza se transmiten en el dōjō: esta lección te da la estructura, los nombres y su significado.';

  add({
    id: 'ia-mjer', t: 'Musō Jikiden Eishin-ryū: panorama', jp: '無雙直傳英信流', sub: 'Una escuela tradicional de iaidō',
    intro: 'Musō Jikiden Eishin-ryū (MJER) es una de las escuelas tradicionales (koryū) de iaidō más extendidas. Sus técnicas se transmiten en series, con un orden y una enseñanza progresiva.',
    why: 'Es una de las escuelas de las que proceden las formas del seitei. Estudiarla te enseña el fundamento de muchas de esas formas y una manera de entender el iaidō más tradicional.',
    keys: ['Se atribuye la base a Hayashizaki Jinsuke Shigenobu (siglo XVI).', 'La escuela toma su nombre de Hasegawa Chikaranosuke Hidenobu (Eishin), séptimo sōke.', 'Hayashi Rokudayū Morimasa (noveno sōke) introdujo la serie de seiza, enseñada como Ōmori-ryū.', 'Ōe Masaji reorganizó unas 160 técnicas en las series actuales (Shoden, Chūden, Okuden) y renombró la escuela como Musō Jikiden Eishin-ryū.', 'Las series incluyen formas en solitario (tandoku) y por parejas (kumitachi).'],
    extra: [{ h: 'Las series', ul: ['Shoden / Seiza no bu (11 formas): desde seiza, derivadas de Ōmori-ryū.', 'Chūden / Tatehiza no bu (10 formas): desde tatehiza, atribuidas a Hasegawa Eishin.', 'Okuden / Okuiai Iwaza no bu (8 formas) y Tachiwaza no bu (13 formas): avanzadas, sentado y de pie.', 'Bangai no bu: formas extra, no consideradas koryū.', 'Kumitachi: formas por parejas, en varios conjuntos.', 'Battō-hō: ejercicios de desenvainado añadidos en el siglo XX.'] }],
    drills: ['Pregunta a tu sensei qué linaje de MJER sigue vuestro dōjō y en qué orden se enseñan las series.', 'Cuando empieces, no te adelantes a la serie siguiente: cada una prepara la siguiente.'],
    check: ['Sé cuáles son las tres series principales.', 'Sé quién reorganizó la escuela.'],
    warn: MJ,
    terms: [['Koryū', 'escuela tradicional'], ['Musō Jikiden Eishin-ryū', 'escuela de iaidō'], ['Sōke', 'maestro principal']]
  });

  add({
    id: 'ia-mjer-shoden', t: 'Shoden · Seiza no bu', jp: '初傳・正座の部', sub: 'Las once formas desde seiza',
    art: ['kata:mjer4'],
    intro: 'La primera serie (Shoden) se practica desde seiza y procede de la Ōmori-ryū. Enseña a sujetar la espada, a desenvainar y a mover el cuerpo de forma sencilla. La mayoría empieza desde seiza.',
    extra: [{ h: 'Las once formas y su significado', ul: ['1 · Mae (前): "frente" — un oponente de frente.', '2 · Migi (右): "derecha" — un oponente a la derecha.', '3 · Hidari (左): "izquierda" — un oponente a la izquierda.', '4 · Ushiro (後): "detrás" — un oponente por detrás.', '5 · Yaegaki (八重垣): "valla de ocho capas".', '6 · Ukenagashi (受流): "recibir y desviar".', '7 · Kaishaku (介錯): "asistente en el seppuku".', '8 · Tsukekomi (附込): "entrar sobre el oponente".', '9 · Tsukikage (月影): "luz de luna".', '10 · Oikaze (追風): "viento de cola"; suele empezar de pie.', '11 · Nukiuchi (抜打): "desenvainar y cortar".'] }],
    keys: ['Los nombres de los cuatro primeros indican la dirección del oponente.', 'Oikaze es la forma que suele comenzar de pie.', 'Los nombres coinciden en parte con las formas del seitei, pero la ejecución es distinta.'],
    drills: ['Aprende de memoria el orden de las once formas.', 'Con tu sensei, empieza por Mae y los tres siguientes antes de seguir.'],
    check: ['Sé las once formas en orden.', 'Sé qué indican los cuatro primeros nombres.'],
    warn: MJ,
    terms: [['Seiza no bu', 'serie de seiza'], ['Shoden', 'nivel de entrada']]
  });

  add({
    id: 'ia-mjer-chuden', t: 'Chūden · Tatehiza no bu', jp: '中傳・立膝の部', sub: 'Las diez formas desde tatehiza',
    intro: 'La segunda serie (Chūden) se practica desde tatehiza, con una rodilla levantada, y se atribuye a Hasegawa Eishin. Casi todas empiezan desde esa postura; la excepción es Makkō.',
    extra: [{ h: 'Las diez formas y su significado', ul: ['1 · Yokogumo (横雲): "nube horizontal".', '2 · Toraissoku (虎一足): "un paso de tigre".', '3 · Inazuma (稲妻): "relámpago".', '4 · Ukigumo (浮雲): "nube flotante".', '5 · Oroshi (颪): "viento que baja de la montaña".', '6 · Iwanami (岩波): "ola contra la roca".', '7 · Urokogaeshi (鱗返): "voltear las escamas".', '8 · Namigaeshi (波返): "la ola que vuelve".', '9 · Takiotoshi (瀧落): "caída de cascada".', '10 · Makkō (真向): "de frente"; la excepción de la serie.'] }],
    keys: ['Tatehiza: una rodilla levantada y la otra en el suelo.', 'La serie se basa en la técnica de Hasegawa Eishin.', 'Se practica tras dominar el Shoden.'],
    drills: ['Aprende el orden de las diez formas.', 'Practica la postura de tatehiza (sentarte y levantarte) con calma.'],
    check: ['Sé las diez formas en orden.', 'Sé cuál es la excepción de la serie.'],
    warn: MJ,
    terms: [['Tatehiza no bu', 'serie de tatehiza'], ['Chūden', 'nivel medio']]
  });

  add({
    id: 'ia-mjer-okuden', t: 'Okuden y Bangai', jp: '奥傳・番外', sub: 'Las series avanzadas',
    intro: 'La serie avanzada (Okuden) incluye formas sentado y de pie. Se estudia mucho después de dominar Shoden y Chūden. Aquí tienes los nombres y su significado general.',
    extra: [
      { h: 'Okuiai Iwaza no bu (sentado, 8 formas)', ul: ['Kasumi (霞): "niebla".', 'Sunegakoi (脛囲): "proteger las espinillas".', 'Tozume (戸詰): "acorralado en la puerta".', 'Towaki (戸脇): "junto a la puerta".', 'Shihōgiri (四方切): "corte en cuatro direcciones".', 'Tanashita (棚下): "bajo la estantería".', 'Ryōzume (両詰): "cerrado por ambos lados".', 'Torabashiri (虎走): "tigre corriendo".'] },
      { h: 'Okuiai Tachiwaza no bu (de pie, 13 formas)', ul: ['Yukizure (行連): "ir acompañado".', 'Tsuredachi (連達): "compañeros".', 'Sō Makuri (惣捲): "barrido total".', 'Sō Dome (惣留): "detención total".', 'Shinobu (信夫).', 'Yukichigai (行違): "cruzarse".', 'Sode Surigaeshi (袖摺返): "rozar la manga y volver".', 'Mon\'iri (門入): "entrar por la puerta".', 'Kabezoe (壁添): "junto a la pared".', 'Ukenagashi (受流).', 'Itomagoi (暇乞), tres versiones: "despedida" (las tres empiezan desde seiza).'] },
      { h: 'Bangai no bu', ul: ['Hayanami (速浪), Raiden (雷電) y Jinrai (迅雷): formas extra, de pie, no consideradas koryū.'] }
    ],
    keys: ['Se estudian tras años de práctica y con permiso del sensei.', 'No todos los linajes enseñan las mismas formas extra.'],
    drills: ['Por ahora, solo familiarízate con los nombres.', 'Pregunta a tu sensei cómo se organiza el Okuden en vuestro dōjō.'],
    check: ['Sé las dos secciones de Okuden.', 'Sé qué es Bangai.'],
    warn: MJ,
    terms: [['Okuden', 'nivel avanzado'], ['Bangai', 'formas extra']]
  });

  add({
    id: 'ia-mjer-kumitachi', t: 'Kumitachi y battō-hō', jp: '組太刀・抜刀法', sub: 'Formas por parejas y ejercicios de desenvainado',
    intro: 'Además de las formas en solitario, MJER tiene formas por parejas (kumitachi) que enseñan principios como la distancia y el tiempo. Los battō-hō son ejercicios de desenvainado añadidos en el siglo XX.',
    extra: [
      { h: 'Tachi Uchi no Kurai', ul: ['Versión clásica (10): Deai, Tsukekomi, Ukenagashi, Ukekomi, Tsukikage, Suigetsutō, Zetsumyōken, Dokumyōken, Shinmyōken, Uchikomi.', 'Versión de Ōe (7): Deai, Kobushitori, Zetsumyōken, Dokumyōken, Tsubadome, Ukenagashi, Mappō.'] },
      { h: 'Otros conjuntos', ul: ['Tsume Ai no Kurai: Hassō, Kobushitori, Namigaeshi, Yaegaki, Urokogaeshi, Kurai Yurumi, Tsubame Gaeshi, Ganseki Otoshi, Suigetsutō, Kasumi Ken.', 'Daishō Zume: Dakizume, Koppō, Tsukadome, Kotedome, Munatori, Migifuse, Hidarifuse, Yamagatazume.', 'Daishō Tachi Zume y Daikentori: conjuntos menos frecuentes, enseñados en algunos dōjō.'] },
      { h: 'Battō-hō (Dai Nippon Battō Hō)', ul: ['Kihon (7): Juntō Sono Ichi, Juntō Sono Ni, Tsuigekitō, Shatō, Shihōtō Sono Ichi, Shihōtō Sono Ni, Zantotsutō.', 'Oku (4): Zenteki Gyakutō, Tatekitō, Kōteki Gyakutō, Kōteki Nukiuchi.'] }
    ],
    keys: ['Los kumitachi se practican con parejas y espadas de madera (bokken).', 'Cada forma enseña un principio: el "katachi" de la forma.', 'Algunos conjuntos son poco frecuentes y no todos los dōjō los enseñan.'],
    drills: ['Como practicas con bokken, pregunta a tu sensei si hay kumitachi apropiados para ti.', 'Cuando los estudies, hazlo siempre con pareja y control.'],
    check: ['Sé qué es kumitachi.', 'Sé qué son los battō-hō.'],
    warn: MJ,
    terms: [['Kumitachi', 'formas por parejas'], ['Battō-hō', 'ejercicios de desenvainado']]
  });

  add({
    id: 'ia-mjer-estudio', t: 'Cómo estudiar una escuela tradicional', jp: '稽古の心得', sub: 'Paciencia, memoria y maestro',
    intro: 'Una escuela tradicional se aprende con un maestro, paso a paso, y con mucha paciencia. Aquí tienes consejos para tu camino.',
    steps: ['Sigue el orden que marca tu sensei: no te adelantes.', 'Memoriza los nombres y el orden de las formas con tarjetas y quizzes.', 'Practica cada forma por partes (pies, manos, espada) antes de unir todo.', 'Anota las correcciones de tu sensei en el diario.', 'Repite siempre poco y bien: la calidad enseña más que la cantidad.', 'Respeta el linaje: la forma de tu dōjō puede diferir de la de otros y eso es normal.'],
    keys: ['Shu-ha-ri: obedecer, romper moldes, crear lo propio, pero siempre desde la base.', 'No mezcles detalles de escuelas distintas.', 'La paciencia es parte del camino.'],
    errors: [['Quieres aprender muchas formas rápido', 'Profundiza una antes de pasar a la siguiente.'], ['Mezclas lo que ves en vídeos con lo de tu sensei', 'Los vídeos sirven de apoyo, pero manda tu sensei.']],
    drills: ['Anota cada semana la forma que trabajas y una corrección.', 'Repasa las tarjetas de vocabulario de iaidō tres veces por semana.'],
    check: ['Sigo el orden de mi sensei.', 'Anoto las correcciones.', 'Repaso el vocabulario.'],
    warn: MJ,
    terms: [['Shu-ha-ri', 'obedecer, romper, crear']]
  });

  /* =============== CUERPO Y CAMINO (IAIDŌ) =============== */
  add({
    id: 'ia-rodillas', t: 'Cuidar rodillas y tobillos', jp: '膝のケア', sub: 'Seiza y tatehiza sin dolor',
    intro: 'Muchas formas empiezan en seiza o tatehiza y piden levantarse y sentarse muchas veces. Rodillas y tobillos necesitan atención.',
    steps: ['Aumenta el tiempo en seiza poco a poco: 1 minuto al día, añadiendo 30 segundos por semana.', 'Calienta tobillos y rodillas antes de practicar: círculos y flexiones suaves.', 'Si te duele el empeine, coloca una toalla fina enrollada bajo los tobillos.', 'Al levantarte, no empujes con los brazos: usa las piernas.', 'Estira cuádriceps, gemelos y la parte frontal del tobillo al terminar.'],
    keys: ['El dolor agudo en la rodilla no es normal: para.', 'La técnica correcta protege las articulaciones.', 'Avisa a tu sensei si tienes problemas previos.'],
    errors: [['Fuerzas la postura', 'Cede al dolor: acorta el tiempo y vuelve a intentarlo otro día.'], ['Te levantas con los brazos', 'Trabaja la fuerza de piernas.']],
    drills: ['Seiza 1–3 minutos al día, aumentando poco a poco.', 'Estiramientos de tobillos y cuádriceps tras cada práctica.'],
    warn: 'Si tienes lesiones de rodilla o tobillo, consulta con un profesional antes de practicar seiza prolongada.',
    check: ['Aumento el tiempo en seiza poco a poco.', 'Sé cuándo parar.']
  });

  add({
    id: 'ia-casa', t: 'Practicar en casa con bokken', jp: '自主稽古', sub: 'Qué sí y qué no',
    intro: 'Con bokken puedes trabajar muchas cosas en casa. Lo importante es hacerlo con seguridad y sin inventar: lo que no sepas, pregúntaselo a tu sensei.',
    steps: ['Prepara un espacio libre, con techo alto y sin objetos.', 'Postura, respiración y seiza: sentarte y levantarte, sin espada y con ella en el obi si tu sensei lo aprueba.', 'Suburi de iaidō: subir y cortar con control, filo alineado.', 'Pies: suri-ashi y giros.', 'Practicar el gesto de la mano izquierda sobre la saya (sin espada).', 'Evita practicar el desenvainado real hasta que tu sensei te lo enseñe.'],
    keys: ['Poco y bien: 10–15 minutos al día valen más que una sesión larga.', 'Anota qué has trabajado y qué dudas tienes para tu sensei.', 'Grábate para revisar la postura.'],
    errors: [['Practicas desenvainado con bokken sin guía', 'Espera a la indicación de tu sensei.'], ['Practicas sin espacio libre', 'Siempre un radio de seguridad.']],
    drills: ['Seiza 2 minutos y 10 sentadas/levantadas.', '20 cortes lentos con bokken y filo alineado.', '10 minutos de suri-ashi y giros.'],
    warn: 'Evita espadas con filo para practicar sin supervisión. Sigue las normas de seguridad de tu dōjō y la legislación local.',
    check: ['Tengo un espacio seguro.', 'Practico solo lo que mi sensei me ha enseñado.']
  });

  add({
    id: 'ia-grados', t: 'Grados y exámenes de iaidō', jp: '段位', sub: 'Qué se espera',
    intro: 'Las federaciones de kendō suelen organizar también exámenes de iaidō. La estructura exacta depende de cada federación.',
    steps: ['Los exámenes de iaidō suelen incluir los kata del seitei, empezando por los primeros.', 'A medida que subes de grado, se piden más formas del seitei y, en algunos niveles, una forma de una escuela tradicional.', 'Se valoran la postura, la actitud, el zanshin, la calma y la corrección técnica.', 'Pregunta a tu sensei qué se pide para tu primer examen y cuándo.'],
    keys: ['El iaidō se examina por separado del kendō.', 'La calidad del movimiento y la calma cuentan más que la velocidad.', 'Los requisitos exactos los marca tu federación.'],
    drills: ['Pregunta a tu sensei qué formas se piden para tu primer examen.', 'Practica esas formas con calma y anota las correcciones.'],
    warn: 'Los requisitos dependen de tu federación. Confírmalos con tu sensei.',
    check: ['Sé qué se evalúa.', 'Sé qué formas se piden primero.']
  });
})();
