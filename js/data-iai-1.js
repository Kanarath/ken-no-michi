/* Iaidō (parte 1): primeros pasos, equipo y fundamentos técnicos. Se carga después de data-tech-2. */
(function () {
  const add = KD.add;
  const AVISO = 'Resumen general. Los detalles (pies, alturas, manos, protocolo) varían según la escuela y el dōjō: tu sensei de iaidō manda.';

  /* =============== PRIMEROS PASOS =============== */
  add({
    id: 'ia-que-es', t: '¿Qué es el iaidō?', jp: '居合道', sub: 'El arte de sacar la espada',
    art: ['seq:iai-basico'],
    intro: 'Iaidō es el camino de sacar la espada (katana) y cortar en un solo movimiento, y de volver a envainarla con calma. Se practica solo, frente a oponentes imaginarios, y tiene mucho que ver con la atención, la respiración y la presencia.',
    why: 'Para un kendōka, el iaidō enseña lo que el shinai no puede: el filo real (hasuji), el control de la espada en reposo y el respeto por un arma de verdad. Para cualquiera, es un trabajo muy profundo de postura y concentración.',
    steps: ['Nukitsuke: sacar la espada de la funda (saya) y realizar el primer corte.', 'Kiritsuke: el corte final y decisivo.', 'Chiburi: la sacudida simbólica de la hoja.', 'Nōtō: envainar de nuevo con calma y precisión.'],
    stepsH: 'Las cuatro acciones de cada técnica',
    keys: ['Todas las técnicas empiezan con la espada envainada, incluso cuando el oponente ya ha desenvainado.', 'El oponente es imaginario (kassoteki): la imagen mental es parte de la práctica.', 'Zanshin (alerta) antes, durante y después de cada técnica.', 'En iaidō se enseña a "no cortar": la espada se saca solo cuando es imprescindible.'],
    extra: [{ h: 'Un poco de historia', ul: ['Se atribuye a Hayashizaki Jinsuke Shigenobu (siglo XVI) la base de muchas escuelas de desenvainado (battōjutsu).', 'Con el tiempo se organizaron escuelas tradicionales (koryū) como Musō Jikiden Eishin-ryū o Musō Shinden-ryū.', 'En 1969 la Federación Japonesa de Kendō creó un conjunto estándar de formas (seitei-gata) a partir de varias escuelas; hoy son doce.'] }],
    errors: [['Querer "cortar fuerte" desde el principio', 'Primero postura, desenvainado limpio y control; la potencia viene después.'], ['Practicar con prisa', 'La calma es parte de la técnica: la envainada lenta es tan importante como el corte.']],
    drills: ['Observa un seitei completo en vídeo y fíjate solo en cómo termina cada técnica (chiburi y nōtō).', 'Pregunta a tu sensei cómo se organiza la práctica en vuestro dōjō.'],
    check: ['Conozco las cuatro acciones.', 'Sé que el oponente es imaginario.', 'Sé que el iaidō parte siempre con la espada envainada.'],
    warn: AVISO,
    terms: [['Iaidō', 'camino del desenvainado'], ['Nukitsuke', 'desenvainar y cortar'], ['Kiritsuke', 'corte final'], ['Chiburi', 'sacudida de la hoja'], ['Nōtō', 'envainar'], ['Kassoteki', 'oponente imaginario']]
  });

  add({
    id: 'ia-kendo-iaido', t: 'Iaidō y kendō: qué los une', jp: '居合と剣道', sub: 'Dos caminos, una misma espada',
    intro: 'Kendō e iaidō comparten espíritu y principios, pero se practican de forma distinta. Entender las diferencias te ayuda a no mezclar hábitos.',
    steps: ['Kendō: dos personas, shinai y bōgu, golpes reales, distancia viva.', 'Iaidō: una persona, katana (o iaitō), oponente imaginario, sin contacto.', 'En kendō el golpe es de ida y vuelta; en iaidō el desenvainado es el primer movimiento y la envainada la última acción.', 'Ambos comparten postura, mirada, kiai/respiración, zanshin y respeto.', 'Muchas federaciones de kendō también organizan iaidō y piden iaidō (seitei) en sus exámenes.'],
    keys: ['El shinai se sujeta con las dos manos de forma simétrica; en iaidō la mano izquierda controla la funda y la derecha la empuñadura al desenvainar.', 'El filo importa más en iaidō: una espada de verdad solo corta si el filo está bien alineado.', 'Practicar iaidō mejora el control del filo y de la mano izquierda en kendō.'],
    errors: [['Golpeas en iaidō con la fuerza del kendō', 'En iaidō el control y el filo mandan; cortas, no golpeas.'], ['Mantienes la mirada del kendō (rival cercano) en el oponente imaginario', 'Imagina la distancia real y mantén la mirada con calma.']],
    drills: ['Con tu sensei, practica un corte de kendō (men) y un kiritsuke de iaidō y nota la diferencia de sensación.'],
    check: ['Sé enumerar tres diferencias entre kendō e iaidō.', 'Sé enumerar tres cosas en común.'],
    warn: AVISO,
    terms: [['Iaitō', 'espada de entrenamiento sin filo'], ['Seitei-gata', 'formas estándar']]
  });

  add({
    id: 'ia-etiqueta', t: 'Etiqueta del iaidō', jp: '居合の礼法', sub: 'Respeto por la espada y por el dōjō',
    intro: 'La etiqueta en iaidō es especialmente estricta porque trabajas con un arma. El saludo a la espada (tō-rei) es parte de cada práctica.',
    steps: ['Saluda al entrar y al salir del dōjō hacia el shōmen o el shinzen.', 'Antes de empezar cada serie, saluda al frente (shōmen o kamiza) con la espada en la mano izquierda.', 'Siéntate en seiza (la rodilla izquierda baja primero) y coloca la espada delante, con el filo hacia ti o como indique tu escuela.', 'Haz el tō-rei: un saludo a la espada, con las manos ante ti, "con la sensación de ser uno con la espada".', 'Vuelve a colocar la espada en el obi y levántate para empezar.', 'Al terminar, repite el proceso en orden inverso: tō-rei, saludo al frente y salida.'],
    keys: ['La espada nunca se pasa por encima, no se deja en el suelo de cualquier manera y nunca se toca la de otro sin permiso.', 'No señales a nadie con el filo ni con el kensen.', 'Nada de bromas con la espada, ni siquiera con el iaitō o el bokken.', 'Puntualidad, silencio y atención a las indicaciones del sensei.'],
    errors: [['Dejas la espada en el suelo con el filo hacia otra persona', 'Colócala siempre con orden y filo hacia ti o según tu escuela.'], ['Haces el saludo con prisa', 'Hazlo con calma: es una pausa para concentrarte.']],
    drills: ['En casa, practica el saludo en seiza sentándote y levantándote 5 veces.', 'Pregunta a tu sensei cómo se hace el tō-rei en vuestro dōjō.'],
    check: ['Sé cómo se entra y se sale del dōjō.', 'Sé qué es el tō-rei.', 'Nunca paso la espada por encima de nadie.'],
    warn: 'El protocolo exacto (con qué mano, hacia dónde, con qué orientación del filo) cambia según la escuela. ' + AVISO,
    terms: [['Tō-rei', 'saludo a la espada'], ['Shinzen', 'altar'], ['Shōmen', 'frente del dōjō']]
  });

  add({
    id: 'ia-seguridad', t: 'Seguridad con la espada y el bokken', jp: '安全', sub: 'Lo primero antes de sacar nada',
    intro: 'Una espada de verdad es un objeto peligroso, y un bokken también puede hacer daño. La seguridad no es opcional: es parte de la práctica.',
    steps: ['Comprueba siempre que tienes espacio libre alrededor, con techo alto y sin objetos.', 'Revisa el equipo: el mekugi (clavija) bien puesto, la tsuka firme y la hoja sin daños.', 'Nunca toques el filo con los dedos ni dejes la hoja sin proteger.', 'Al desenvainar, mira siempre hacia dónde va la punta: no hay nadie en su recorrido.', 'Envaina con calma: la punta debe entrar en la funda sin mirar, pero aprendiendo a controlarla; al principio, hazlo despacio y con la mirada.', 'Guarda la espada en su funda o bolsa, fuera del alcance de los niños.'],
    keys: ['Con bokken: nada de golpes fuertes ni a nadie ni a muebles.', 'Con iaitō: aunque no tenga filo, puede cortar o pinchar.', 'No practiques con una espada que no conoces ni sin la supervisión de tu sensei.', 'Si sientes dolor o cansancio, para.'],
    errors: [['Envainas con prisa sin controlar la punta', 'Hazlo despacio; la precisión nace de la lentitud.'], ['Practicas con gente cerca', 'Mínimo un radio de seguridad libre de personas y objetos.'], ['Pruebas el filo con el dedo', 'Nunca: puedes cortarte gravemente.']],
    drills: ['Antes de cada práctica, revisa tu equipo con la lista de comprobación.', 'Pide a tu sensei que revise cómo envainas.'],
    check: ['Reviso mi equipo antes de empezar.', 'Practico con espacio libre.', 'Nunca toco el filo.'],
    warn: 'Esta guía es general. Sigue siempre las normas de seguridad de tu dōjō y la legislación local sobre tenencia y transporte de espadas.'
  });

  add({
    id: 'ia-clase', t: 'Cómo es una clase de iaidō', jp: '稽古の流れ', sub: 'Qué esperar al empezar',
    intro: 'Las clases de iaidō suelen ser más silenciosas que las de kendō y más centradas en la calidad de cada movimiento.',
    steps: ['Llegada, saludo y preparación del equipo (keikogi, hakama, obi).', 'Calentamiento suave y movilidad de rodillas, tobillos y muñecas.', 'Práctica de los fundamentos: postura, seiza, tenouchi, nukitsuke, kiritsuke, chiburi y nōtō.', 'Práctica de los kata (seitei u otra escuela) con correcciones del sensei.', 'Tō-rei final y saludo.'],
    keys: ['Muchas veces se practica una sola técnica durante toda la clase.', 'Lo habitual es observar, probar y recibir correcciones.', 'Se cuida cada detalle: postura, mirada, ritmo y respiración.'],
    errors: [['Quieres aprender muchos kata deprisa', 'En iaidō se profundiza: un kata bien hecho vale más que diez a medias.'], ['No preguntas por vergüenza', 'Pregunta: la corrección es parte del camino.']],
    drills: ['Anota en el diario qué te corrigió el sensei en cada clase.', 'Repite en casa solo un detalle corregido.'],
    check: ['Sé la estructura habitual de una clase.', 'Anoto mis correcciones.'],
    warn: AVISO
  });

  /* =============== EQUIPO =============== */
  add({
    id: 'ia-katana', t: 'La katana y sus partes', jp: '日本刀', sub: 'Hoja, empuñadura y funda',
    art: ['katana'],
    intro: 'Conocer las partes de la espada y de su funda es lo primero. Toca la ilustración para ver cada una.',
    steps: ['Hoja: ha (filo), mune (lomo), shinogi (línea longitudinal), hamon (línea de temple) y kissaki (punta).', 'Entre la hoja y la empuñadura: habaki (pieza metálica) y tsuba (guarda).', 'Empuñadura (tsuka): envuelta con tsuka-ito, con fuchi y kashira como remates.', 'Funda (saya): koiguchi (boca), kurikata (anilla del cordón), sageo (cordón) y kojiri (contera).'],
    stepsH: 'Las partes',
    keys: ['El filo (ha) mira hacia arriba cuando la espada está en el obi.', 'El sageo se usa para asegurar la espada en el obi según la escuela.', 'La tsuka se sujeta con tenouchi, no con fuerza.'],
    drills: ['Toca cada parte de la ilustración y di su nombre.', 'Con tu sensei, pídele que te muestre las partes en una espada real.'],
    check: ['Conozco las partes de la hoja.', 'Conozco las partes de la funda.'],
    terms: [['Katana', 'espada larga'], ['Tsuka', 'empuñadura'], ['Tsuba', 'guarda'], ['Saya', 'funda'], ['Kissaki', 'punta'], ['Habaki', 'pieza bajo la guarda'], ['Sageo', 'cordón de la funda']]
  });

  add({
    id: 'ia-iaito', t: 'Iaitō, shinken y bokken', jp: '居合刀・木刀', sub: 'Qué usar en cada momento',
    intro: 'En iaidō se utilizan distintos tipos de espada. Tú practicas hoy con bokken: es un buen punto de partida, pero conviene entender qué aporta cada una.',
    steps: ['Bokken: espada de madera. Sirve para kata por parejas, suburi y para aprender el movimiento del cuerpo y de los pies. Normalmente no se usa para el desenvainado real con saya.', 'Iaitō: espada de entrenamiento con forma de katana, sin filo (aleación). Se usa en la práctica de iaidō y en los exámenes. Es la opción habitual.', 'Shinken: espada real con filo. Solo con permiso y supervisión de tu sensei; se utiliza en niveles avanzados.', 'Saya de práctica: algunos dōjō permiten practicar el gesto de sayabiki con un bokken en saya especial; pregunta a tu sensei.'],
    keys: ['Practicar con bokken es muy útil: trabajas postura, pies, ritmo y control.', 'El nukitsuke y el nōtō reales requieren saya: espera a la indicación de tu sensei.', 'Un iaitō bien equilibrado no es necesariamente caro; tu sensei puede recomendarte marca y tamaño.'],
    errors: [['Compras una espada sin consultar', 'Consulta con tu sensei: tamaño, peso y balance cuentan.'], ['Intentas desenvainar con el bokken sin funda', 'Hazlo con funda o con la guía de tu sensei; mejor esperar.']],
    drills: ['Con bokken: practica la postura, el tenouchi y los suburi de iaidō (subir y cortar) con control.', 'Habla con tu sensei sobre cuándo y qué iaitō comprar.'],
    check: ['Sé la diferencia entre bokken, iaitō y shinken.', 'Sé que el desenvainado real se trabaja con saya.'],
    warn: AVISO,
    terms: [['Bokken', 'espada de madera'], ['Iaitō', 'espada de entrenamiento sin filo'], ['Shinken', 'espada real']]
  });

  add({
    id: 'ia-vestimenta', t: 'Keikogi, hakama y obi', jp: '稽古着・袴・帯', sub: 'La ropa de iaidō',
    intro: 'En iaidō se viste keikogi y hakama, igual que en kendō, y un obi (cinturón) donde se coloca la espada. Los colores y detalles pueden variar según la escuela.',
    steps: ['Keikogi: cierra con la solapa izquierda sobre la derecha.', 'Obi: cinturón ancho (a veces de algodón, a veces de seda o tela especial) que se ata sobre el keikogi y bajo el hakama.', 'Hakama: ajústalo a la cintura; el himo delantero y trasero se atan según el estilo de tu dōjō.', 'Calzado: se practica descalzo.', 'Antes de entrenar, comprueba que todo está firme y que nada puede enredar la espada.'],
    keys: ['El obi debe quedar firme para sujetar la espada: ni suelto ni excesivamente apretado.', 'El hakama no debe tapar el obi donde apoya la saya.', 'Cuida las prendas: lavado suave y secado al aire.'],
    errors: [['El obi se afloja y la espada se mueve', 'Apriétalo bien; si hace falta, repásalo antes de empezar.'], ['El hakama tropieza al andar', 'Ajusta la altura: ni demasiado largo ni demasiado corto.']],
    drills: ['Practica vestirte y colocar el obi hasta que sea automático.'],
    check: ['Me visto sin ayuda.', 'Mi obi queda firme.'],
    warn: AVISO,
    terms: [['Keikogi', 'chaqueta'], ['Hakama', 'falda-pantalón'], ['Obi', 'cinturón']]
  });

  add({
    id: 'ia-colocar', t: 'Colocar la espada en el obi', jp: '帯刀', sub: 'Taitō y sageo',
    art: ['seq:iai-seiza'],
    intro: 'La espada se lleva en el lado izquierdo del cuerpo, dentro del obi, con el filo hacia arriba. Colocarla bien es una técnica en sí misma.',
    steps: ['Sujeta la saya con la mano izquierda cerca de la boca (koiguchi), con el pulgar sobre la tsuba para asegurarla.', 'Introduce la contera en el obi a la izquierda del cuerpo, con el filo hacia arriba.', 'Desliza la saya a través del obi hasta que la tsuba quede aproximadamente a la altura del ombligo, un poco a la izquierda (según tu escuela).', 'Recoge el sageo según el método de tu escuela (por ejemplo, metido en el obi) para que no cuelgue.', 'Comprueba que la espada está firme y que puedes sacarla sin tropiezos.'],
    keys: ['El filo siempre hacia arriba en el obi.', 'La mano izquierda sujeta la saya: así no se escurre al desenvainar.', 'La espada queda ligeramente inclinada hacia delante en la parte de la tsuka.'],
    errors: [['La espada queda muy atrás o muy adelante', 'Colócala con la tsuba a la altura del ombligo, un poco a la izquierda.'], ['Se mueve al andar', 'Comprueba que el obi está firme y que la saya está bien insertada.']],
    drills: ['Practica colocar y retirar la espada 10 veces con calma.', 'Practica sentarte y levantarte en seiza sin que se mueva.'],
    check: ['La espada queda firme en mi obi.', 'Sé recoger el sageo como en mi escuela.'],
    warn: 'El método exacto para el sageo y la posición de la tsuba varían según la escuela. ' + AVISO,
    terms: [['Taitō', 'llevar la espada al cinto'], ['Koiguchi', 'boca de la funda'], ['Sageo', 'cordón']]
  });

  add({
    id: 'ia-cuidado', t: 'Cuidado de la espada', jp: '手入れ', sub: 'Hoja, funda y madera',
    intro: 'Cuidar el equipo es parte del respeto. Cada tipo de espada requiere un cuidado distinto.',
    steps: ['Bokken: limpia con un paño seco, revisa grietas y no lo dejes al sol directo ni en lugares húmedos.', 'Iaitō: tras la práctica, limpia la hoja con un paño suave y seco; cada cierto tiempo, una capa fina de aceite según te enseñe tu sensei.', 'Shinken: el mantenimiento (aceite, polvo de uchiko) se aprende con tu sensei; nunca lo hagas sin guía.', 'Guarda cada espada en su funda o bolsa, en un lugar seco y seguro.', 'Revisa la clavija (mekugi) antes de cada práctica.'],
    keys: ['Nunca toques la hoja con los dedos desnudos: la grasa de la piel favorece la oxidación.', 'Humedad = enemigo: seca bien y no guardes la hoja húmeda.', 'Si algo está flojo o dañado, no practiques con ello.'],
    errors: [['Guardas la espada húmeda', 'Séca la hoja y la funda antes de guardarla.'], ['Aplicas aceite en exceso', 'Una capa muy fina basta.']],
    drills: ['Anota cada cierto tiempo cuándo limpiaste y revisaste tu equipo.'],
    check: ['Reviso la clavija antes de empezar.', 'Seco y limpio mi equipo.'],
    warn: AVISO
  });

  /* =============== FUNDAMENTOS TÉCNICOS =============== */
  add({
    id: 'ia-postura', t: 'Postura, centro y respiración', jp: '姿勢・丹田', sub: 'El cimiento de todo',
    intro: 'Como en kendō, todo empieza en la postura: espalda recta, hombros sueltos y respiración abdominal. En iaidō se trabaja además con la espada en el obi, lo que obliga a cuidar la simetría.',
    steps: ['De pie, espalda recta, cabeza erguida y mentón recogido.', 'Hombros relajados y brazos sueltos; la mano izquierda sobre la saya.', 'Respira por el abdomen (tanden): inspira por la nariz y espira lento.', 'Mirada al frente, abierta (enzan-no-metsuke), sin fijar un punto.', 'Peso repartido y rodillas suaves.'],
    keys: ['La calma y la quietud son parte de la técnica.', 'La respiración marca el ritmo de cada movimiento.', 'El centro (tanden) es el origen del movimiento.'],
    errors: [['Hombros tensos', 'Exhala y suéltalos.'], ['Cuerpo inclinado hacia delante', 'Endereza la espalda; la cadera sobre los pies.']],
    drills: ['5 minutos de postura y respiración al inicio de cada práctica.', 'Frente al espejo, comprueba la simetría de hombros y cadera.'],
    check: ['Mi espalda está recta.', 'Respiro por el abdomen.', 'Mi mirada es abierta.'],
    terms: [['Shisei', 'postura'], ['Tanden', 'centro del abdomen'], ['Enzan-no-metsuke', 'mirada de montaña lejana']]
  });

  add({
    id: 'ia-seiza', t: 'Seiza y tatehiza', jp: '正座・立膝', sub: 'Sentarse y levantarse con la espada',
    art: ['seq:iai-seiza'],
    intro: 'Muchos kata de iaidō empiezan en seiza o en tatehiza. Aprender a sentarte y levantarte con control, sin mover la espada, es una de las primeras habilidades.',
    steps: ['Seiza: sentado sobre los talones, espalda recta, manos sobre los muslos, rodillas separadas aproximadamente un puño o dos.', 'Para sentarte con la espada en el obi: la rodilla izquierda baja primero; mantén la saya sujeta con la mano izquierda.', 'Tatehiza: una rodilla levantada y la otra en el suelo (según la forma, la derecha suele ser la levantada), espalda recta.', 'Para levantarte, sube de forma suave, sin dar saltos ni balancearte, y mantén la espada firme.', 'Cuida la respiración: espira al levantarte, inspira al sentarte.'],
    keys: ['La espalda recta y la cadera sobre los talones.', 'La espada no debe golpear el suelo ni a la persona de al lado.', 'Mantén los pies relajados para evitar calambres.'],
    errors: [['Te balanceas al levantarte', 'Sube con las piernas, no con los brazos; mantén la espalda recta.'], ['Te duele el empeine', 'Coloca una toalla fina bajo los tobillos y aumenta el tiempo poco a poco.'], ['La espada se mueve al sentarte', 'Sujeta la saya con la mano izquierda y colócala con calma.']],
    drills: ['Sentarte y levantarte 10 veces sin espada, lento y con control.', 'Mantén seiza 1–3 minutos al día, aumentando poco a poco.'],
    warn: 'Si tienes problemas de rodillas o tobillos, avisa a tu sensei y consulta con un profesional.',
    check: ['Me siento y me levanto con control.', 'Mantengo la espalda recta.', 'Sé cuándo parar si me duele.'],
    terms: [['Seiza', 'sentado sobre talones'], ['Tatehiza', 'una rodilla levantada']]
  });

  add({
    id: 'ia-ashi', t: 'Pies en iaidō', jp: '足捌き', sub: 'Suri-ashi y giros',
    intro: 'Los pies en iaidō se deslizan, igual que en kendō (suri-ashi). Con la espada, además, aprendes a girar y a avanzar sin perder la estabilidad.',
    steps: ['Suri-ashi: desliza los pies sobre el suelo, sin levantarlos ni pisar.', 'Pasos hacia delante: el pie derecho o el izquierdo según la forma, con el otro siguiéndole.', 'Pasos hacia atrás: el mismo principio, deslizando.', 'Giros: pivota sobre la parte delantera del pie, con el cuerpo recto y la mirada anticipándose.', 'Mantén las rodillas suaves y la cadera estable.'],
    keys: ['La cabeza se mueve a la misma altura.', 'Los pies terminan en la posición correcta para el siguiente movimiento.', 'La espada no se mueve más que lo necesario.'],
    errors: [['Pisas en vez de deslizar', 'Roza el suelo; el sonido debe ser suave.'], ['Giras con los hombros', 'Gira con la cadera y los pies; los hombros siguen.']],
    drills: ['Suri-ashi adelante y atrás, 10 veces cada uno, sin espada.', 'Giros de 90° y 180° lentos, con las manos como si sujetaras la espada.'],
    check: ['Mis pies deslizan.', 'Mi cabeza no sube ni baja.', 'Giro con la cadera.'],
    terms: [['Suri-ashi', 'pies deslizantes'], ['Ayumi-ashi', 'caminar']]
  });

  add({
    id: 'ia-tenouchi', t: 'Tenouchi y filo (hasuji)', jp: '手の内・刃筋', sub: 'Agarrar y cortar con el filo correcto',
    intro: 'El agarre de la espada es parecido al del shinai: firme en las últimas dos manos, suelto en el resto. Pero con una espada de verdad, el filo (hasuji) decide si cortas o no.',
    steps: ['Mano izquierda en el extremo de la tsuka, con el meñique pegado al kashira.', 'Mano derecha junto a la tsuba, a un puño de la izquierda.', 'Meñique y anular firmes; corazón medio; índice y pulgar sueltos.', 'Al cortar, aprieta como si escurrieras una toalla y relaja al terminar.', 'Controla que el filo (ha) mire hacia donde corta.'],
    keys: ['La mano izquierda guía y da la fuerza.', 'El filo alineado es lo que hace que el corte sea limpio.', 'Un agarre rígido bloquea la muñeca.'],
    errors: [['El corte sale torcido', 'Revisa el filo; practica con un bokken, mirando que la línea sea recta.'], ['Agarras con demasiada fuerza', 'Suelta índice y pulgar; la fuerza va al final del golpe.']],
    drills: ['20 cortes lentos con bokken, solo mirando el filo.', 'Grábate de frente y comprueba que la línea del corte es recta.'],
    check: ['Mi agarre es firme en meñique y anular.', 'Mi filo está alineado.'],
    terms: [['Tenouchi', 'agarre'], ['Hasuji', 'dirección del filo']]
  });

  add({
    id: 'ia-nukitsuke', t: 'Nukitsuke', jp: '抜付', sub: 'Desenvainar y cortar',
    art: ['seq:iai-basico'],
    intro: 'Nukitsuke es la acción de sacar la espada de la funda y realizar el primer corte con un solo movimiento. Todo el iaidō nace de aquí.',
    why: 'Enseña a unir el movimiento de la espada y la funda (sayabiki) con el cuerpo y los pies, y a no avisar de la intención.',
    steps: ['Posición inicial con la espada envainada: mano izquierda sobre la saya, mano derecha lista cerca de la tsuka.', 'La mano izquierda tira de la saya hacia atrás (sayabiki) mientras la derecha saca la espada.', 'El primer corte se hace con el filo alineado, sin pausa entre sacar y cortar.', 'Los pies y el cuerpo avanzan a la vez que la espada: unidad de cuerpo y espada.', 'Mantén la mirada y el zanshin durante todo el gesto.'],
    keys: ['Es un solo movimiento: no sacar y después cortar.', 'La funda se mueve tanto como la espada (sayabiki).', 'No hay tensión ni prisa.'],
    errors: [['Sacas la espada y después cortas', 'Piensa en un único gesto fluido.'], ['No tiras de la saya y la espada se atasca', 'La mano izquierda tira de la funda hacia atrás.'], ['Mueves los hombros', 'El movimiento sale de las caderas, los brazos acompañan.']],
    drills: ['Practica el gesto sin espada (solo las manos) 20 veces, lento.', 'Con tu sensei, practica el nukitsuke con iaitō en cuanto lo indique.'],
    warn: 'El nukitsuke real se practica con espada y funda y con la supervisión de tu sensei. ' + AVISO,
    check: ['Mi nukitsuke es un solo movimiento.', 'Tiro de la saya con la mano izquierda.', 'Mantengo la postura.'],
    terms: [['Nukitsuke', 'desenvainar y cortar'], ['Sayabiki', 'tirar de la funda']]
  });

  add({
    id: 'ia-kiritsuke', t: 'Kiritsuke', jp: '切付', sub: 'El corte final',
    art: ['seq:iai-basico'],
    intro: 'Kiritsuke es el corte decisivo tras el nukitsuke. Suele hacerse sobre la cabeza con las dos manos y debe terminar con control.',
    steps: ['Tras el primer corte, sube la espada por encima de la cabeza con las dos manos.', 'Baja con un corte recto (kirioroshi), con el filo alineado y tenouchi al final.', 'Termina con la punta a la altura que marque la técnica (normalmente chūdan o algo más abajo).', 'Mantén zanshin: la mirada y la postura continúan.'],
    keys: ['El corte termina con control: la punta se detiene sin caerse.', 'La mano izquierda dirige el recorrido.', 'Los pies acompañan el corte, igual que en men de kendō.'],
    errors: [['La punta cae demasiado', 'Frena con la mano izquierda; el corte termina a una altura constante.'], ['Cortas con los hombros', 'Usa las muñecas y la mano izquierda; relaja los hombros.']],
    drills: ['Con bokken: 20 cortes verticales lentos con kiai suave.', 'Compara tu recorrido con el de jōge-buri de kendō.'],
    check: ['Mi corte termina con control.', 'Mi filo está alineado.'],
    terms: [['Kiritsuke', 'corte final'], ['Kirioroshi', 'corte descendente']]
  });

  add({
    id: 'ia-chiburi', t: 'Chiburi', jp: '血振り', sub: 'La sacudida simbólica de la hoja',
    art: ['seq:iai-basico'],
    intro: 'Chiburi es un gesto simbólico: sacudir la hoja como para quitarle la sangre. Hay varias formas; las más habituales son el chiburi lateral (yoko-chiburi) y el amplio (ō-chiburi).',
    steps: ['Tras el corte final, suelta la mano izquierda de la tsuka (según la forma).', 'La mano derecha lleva la espada hacia el lado con un movimiento limpio y controlado.', 'La punta señala hacia abajo y hacia delante, aproximadamente a la altura de la cadera, con el filo lateral.', 'Mantén la mirada y el zanshin; la postura se mantiene estable.', 'El gesto es calmado, no violento.'],
    keys: ['Yoko-chiburi: lateral, con la mano derecha.', 'Ō-chiburi: más amplio, con la mano izquierda en la cadera (según la forma).', 'El chiburi es parte de la técnica, no un adorno: tiene su ritmo y su precisión.'],
    errors: [['Sacudes con fuerza', 'Hazlo con un movimiento calmado.'], ['Pierdes la postura al hacer el chiburi', 'Mantén las rodillas suaves y la espalda recta.']],
    drills: ['Practica el chiburi con bokken, lento, 10 veces por lado.', 'Fíjate en que la punta termina siempre a la misma altura.'],
    check: ['Mi chiburi es calmado.', 'Mantengo la postura al hacerlo.'],
    warn: 'Qué tipo de chiburi se usa en cada forma varía según la escuela. ' + AVISO,
    terms: [['Chiburi', 'sacudida de la hoja'], ['Yoko-chiburi', 'chiburi lateral'], ['Ō-chiburi', 'chiburi amplio']]
  });

  add({
    id: 'ia-noto', t: 'Nōtō', jp: '納刀', sub: 'Envainar con calma',
    art: ['seq:iai-basico'],
    intro: 'Nōtō es envainar la espada. Se hace lento, con control y sin mirar la funda, y es una parte esencial: muestra tu dominio y tu calma.',
    steps: ['Con la mano izquierda, lleva la saya a una posición cómoda en el obi.', 'La mano derecha lleva la espada hacia la boca de la funda (koiguchi).', 'La punta entra en la funda sin mirar, guiada por la sensación y el control.', 'Desliza la espada con calma hasta que quede envainada.', 'Cuando la tsuba toca la boca de la funda, termina el movimiento con un último gesto controlado.'],
    keys: ['Lento y controlado: la envainada es tan importante como el corte.', 'La punta no debe tocar el borde de la funda.', 'La mirada se mantiene al frente.'],
    errors: [['Envainas con prisa y la punta roza', 'Hazlo despacio; mejor lento y limpio.'], ['Miras la boca de la funda', 'Aprende a sentirla: mira al frente.'], ['Pierdes zanshin al envainar', 'Mantén la mirada y la postura hasta terminar.']],
    drills: ['Con bokken y saya de práctica (si tu sensei lo permite): 10 nōtō lentos al día.', 'Practica solo el gesto de la mano izquierda en la saya sin espada.'],
    warn: 'El nōtō con espada real se practica solo con la supervisión de tu sensei. ' + AVISO,
    check: ['Envaino sin mirar.', 'Mi punta no roza.', 'Mantengo zanshin.'],
    terms: [['Nōtō', 'envainar'], ['Koiguchi', 'boca de la funda']]
  });

  add({
    id: 'ia-zanshin', t: 'Zanshin, mirada y oponente imaginario', jp: '残心・仮想敵', sub: 'Practicar contra alguien que no está',
    intro: 'En iaidō no hay oponente real, pero el oponente imaginario es la clave. La distancia, la mirada y el zanshin dependen de cuánto lo "veas".',
    steps: ['Antes de la técnica, ve a tu oponente: dónde está, a qué distancia, cuál es su postura.', 'Mantén la mirada hacia él, abierta, sin fijar.', 'Durante el movimiento, imagina su reacción: dónde cae su espada, cómo se mueve.', 'Tras el corte, mantén el zanshin: sigue atento a que se levante.', 'Al envainar, no bajes la guardia mental hasta que termine la técnica.'],
    keys: ['El oponente imaginario hace tu práctica real.', 'La mirada va a donde está el oponente.', 'Zanshin no es una pose: es atención.'],
    errors: [['Cortas al aire sin imaginar', 'Visualiza al oponente antes de cada técnica.'], ['Miras la espada', 'Mira al oponente; la espada se maneja sin mirarla.']],
    drills: ['Antes de cada kata, cierra los ojos 5 segundos e imagina al oponente.', 'Pide a tu sensei que te diga dónde "ve" al oponente en cada técnica.'],
    check: ['Visualizo al oponente antes de la técnica.', 'Mi mirada se dirige a él.', 'Mantengo el zanshin.'],
    terms: [['Kassoteki', 'oponente imaginario'], ['Zanshin', 'alerta']]
  });

  add({
    id: 'ia-secuencia', t: 'La secuencia completa paso a paso', jp: '一連の動作', sub: 'De la espera al nōtō',
    art: ['seq:iai-basico'],
    intro: 'Esta lección junta todo: es la secuencia básica que verás en casi cada técnica de iaidō, sea cual sea la escuela.',
    steps: ['Taitō: la espada en el obi, postura recta y respiración calmada.', 'Visualiza al oponente y ajusta la distancia.', 'Nukitsuke: desenvainas y cortas de un solo gesto.', 'Subes la espada con las dos manos.', 'Kiritsuke: el corte final, con control.', 'Chiburi: sacudida simbólica de la hoja.', 'Nōtō: envainas con calma.', 'Zanshin: mantienes la atención hasta terminar y vuelves a la posición inicial.'],
    keys: ['Todo es una única línea de movimiento: no hay pausas bruscas.', 'La respiración sostiene el ritmo.', 'La calma al final es tan importante como la rapidez al principio.'],
    errors: [['Te apresuras en el chiburi y el nōtō', 'Dedica el mismo cuidado a las últimas acciones que a las primeras.'], ['Pierdes la mirada al final', 'Mantén el zanshin hasta volver a la posición inicial.']],
    drills: ['Repite la secuencia con bokken 10 veces, lento, concentrándote solo en las transiciones.', 'Grábate y revisa los puntos de transición.'],
    check: ['Conozco las ocho fases.', 'Mis transiciones son suaves.', 'Mantengo el zanshin hasta el final.'],
    warn: AVISO
  });
})();
