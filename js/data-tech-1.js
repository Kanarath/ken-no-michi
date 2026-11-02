/* Contenido de técnica (parte 1): plantilla de lección, postura, guardias, pies y suburi */
window.KD = window.KD || {};
KD.pool = {};

/* Plantilla: genera los bloques de una lección técnica a partir de campos fijos */
KD.T = function (o) {
  const b = [];
  (o.pre || []).forEach(x => b.push(x));
  if (o.why) b.push({ h: 'Para qué sirve', p: o.why });
  if (o.steps) b.push({ h: o.stepsH || 'Cómo se hace', ol: o.steps });
  if (o.keys) b.push({ h: 'Puntos clave', ul: o.keys });
  if (o.errors) b.push({ h: 'Errores comunes y cómo corregirlos', err: o.errors });
  if (o.drills) b.push({ h: 'Ejercicios para el dōjō y para casa', ul: o.drills });
  (o.extra || []).forEach(x => b.push(x));
  if (o.check) b.push({ h: 'Autoevaluación', check: o.check });
  if (o.tip) b.push({ tip: o.tip });
  if (o.warn) b.push({ warn: o.warn });
  return { id: o.id, t: o.t, jp: o.jp, sub: o.sub, art: o.art, intro: o.intro, blocks: b, terms: o.terms };
};
KD.add = function (o) { KD.pool[o.id] = KD.T(o); };

/* ---------- Kihon: postura base ---------- */
KD.add({
  id: 'metsuke', t: 'Metsuke: la mirada', jp: '目付', sub: 'Ver sin mirar fijamente',
  intro: 'En kendō no se mira el shinai ni el sitio donde se va a golpear. Se mira al rival entero, con los ojos como punto de referencia. Una mirada correcta te da información y no avisa de tus intenciones.',
  why: 'Si miras el blanco, el rival lo nota y reacciona. Si miras el shinai, llegas tarde. Con una mirada amplia ves hombros, manos, kensen y pies a la vez, y detectas el instante de golpear (debana).',
  steps: ['En chūdan, dirige la mirada a los ojos del rival, sin clavarla.', 'Relaja los ojos y abre la visión: deja que el kensen, los hombros y los pies entren en tu campo de visión periférica (enzan-no-metsuke: mirar como a una montaña lejana).', 'Mantén la cabeza recta; mueve los ojos, no el cuello.', 'No cierres los ojos al golpear, aunque el rival golpee a la vez.'],
  keys: ['Ojos del rival = punto de referencia, no objetivo.', 'Cabeza recta, mentón recogido.', 'Parpadeo natural: sin tensión en la cara.'],
  errors: [['Miras el blanco antes de golpear', 'Mira los ojos del rival hasta el último instante. El blanco se "ve" sin mirarlo.'], ['Miras el shinai del rival', 'Amplía la visión: el shinai se sigue sin fijarlo.'], ['Bajas la cabeza al golpear', 'Mantén la barbilla recogida y la vista al frente durante el golpe.']],
  drills: ['Con un compañero, 1 minuto de chūdan mirándoos a los ojos sin parpadear de forma forzada.', 'Ejercicio periférico: fija la vista en un punto y, sin mover los ojos, describe lo que ves a los lados.', 'Delante de un espejo, comprueba que la cabeza no baja al hacer suburi.'],
  check: ['Puedo mantener la mirada sin tensión durante un minuto.', 'No miro el blanco antes de golpear.', 'No bajo la cabeza al hacer suburi.'],
  terms: [['Metsuke', 'dirección de la mirada'], ['Enzan-no-metsuke', 'mirada de montaña lejana'], ['Debana', 'inicio del movimiento']]
});

KD.add({
  id: 'respiracion', t: 'Respiración y abdomen', jp: '呼吸・丹田', sub: 'El kiai nace aquí',
  intro: 'La respiración conecta cuerpo y espíritu. En kendō se respira por el abdomen (tanden, unos centímetros bajo el ombligo) y se espira con fuerza en el golpe a través del kiai.',
  why: 'Una respiración correcta mantiene los hombros relajados, estabiliza la postura, da potencia al golpe y evita que te quedes sin aire en un kirikaeshi o en un combate.',
  steps: ['En seiza o de pie, coloca una mano bajo el ombligo.', 'Inspira por la nariz de forma lenta y siente cómo el abdomen se expande (no el pecho).', 'Espira por la boca o la nariz, más despacio que la inspiración, notando cómo el abdomen se recoge.', 'En el golpe: inspira al subir el shinai (furikaburi) y espira con kiai al impactar.', 'Entre golpes, respira de forma natural: nunca contengas el aire.'],
  keys: ['Respira por el abdomen, no por los hombros.', 'Espira en el golpe, inspira en la preparación.', 'Garganta abierta: el kiai sale del abdomen, no de la garganta.'],
  errors: [['Contienes el aire al atacar', 'Piensa en "soltar" el aire con el kiai. Sin espiración no hay kiai.'], ['Subes los hombros al inspirar', 'Practica en seiza con una mano en el abdomen y otra en el pecho: solo debe moverse la del abdomen.'], ['Te quedas sin aire en kirikaeshi', 'Respira al retroceder; cada golpe lleva su kiai, pero entre bloques recupera aire.']],
  drills: ['Seiza 3 minutos: inspira 4 tiempos, espira 6.', 'De pie en chūdan: 10 respiraciones abdominales sin mover los hombros.', 'Suburi: 20 jōge-buri inspirando al subir y espirando con kiai al bajar.'],
  check: ['Noto el abdomen moverse al inspirar.', 'Espiro en cada golpe con kiai.', 'No contengo el aire durante una serie de suburi.'],
  terms: [['Tanden', 'centro del abdomen'], ['Kokyū', 'respiración'], ['Kiai', 'grito de energía']]
});

/* ---------- Kamae ---------- */
KD.add({
  id: 'chudan', t: 'Chūdan-no-kamae', jp: '中段の構え', sub: 'La guardia base',
  art: ['solo:chudan', 'frontchudan'],
  intro: 'Chūdan es la guardia fundamental del kendō: equilibrada, lista para atacar y defender. Casi todo lo que hagas parte de ella y vuelve a ella. Si aprendes bien una cosa, que sea esta.',
  why: 'Con el kensen apuntando a la garganta, defiendes tu centro y presionas al rival (seme). Desde ahí puedes golpear men, kote, dō o tsuki con un pequeño movimiento.',
  steps: ['Pie derecho delante, pie izquierdo detrás. Los pies van paralelos y separados lateralmente aproximadamente un puño. Como referencia, los dedos del pie izquierdo quedan a la altura del talón derecho (tu sensei puede ajustar esta medida a tu cuerpo).', 'Talón izquierdo ligeramente levantado, lo justo para pasar una hoja de papel (1–2 cm). El peso queda repartido y la cadera mira al frente.', 'Rodillas suaves, sin bloquear; espalda recta, cuello estirado, mentón recogido.', 'Mano izquierda a la altura del ombligo y a un puño de distancia del abdomen, en el centro del cuerpo. Mano derecha a un puño por delante de la izquierda, relajada.', 'Codos ligeramente doblados, hombros sueltos.', 'El kensen apunta a la garganta del rival (la línea que va de tu mano izquierda a su garganta). El tsuru queda arriba y el filo abajo.', 'Mirada a los ojos del rival (metsuke).'],
  keys: ['La mano izquierda manda: va siempre en el centro del cuerpo.', 'Es una guardia "viva": relajada, nunca rígida.', 'El kensen no baja ni sube al respirar: busca la quietud.'],
  errors: [['Talón izquierdo demasiado alto o apoyado del todo', 'Colócalo para que quepa una hoja de papel; si lo apoyas, pierdes agilidad.'], ['Pies demasiado separados o demasiado en línea', 'Separación lateral de un puño: te da estabilidad sin perder movilidad.'], ['Kensen demasiado alto (a la cara) o bajo (al pecho)', 'La punta apunta a la garganta. Revísalo con un espejo o con un compañero.'], ['Mano izquierda desplazada hacia un lado', 'Colócala en el centro, a un puño del ombligo. Es lo que más cambia el golpe.'], ['Hombros y brazos tensos', 'Exhala y suéltalos. Una guardia tensa llega tarde.']],
  drills: ['Mantén chūdan 1 minuto sin moverte, respirando por el abdomen. Repite 3 veces.', 'Delante del espejo: punta, mano izquierda, talón izquierdo y hombros.', 'Cierra los ojos 5 segundos en chūdan y comprueba dónde sientes el peso; ábrelos y verifica que no te has movido.', 'Pídele a tu sensei que revise tu chūdan en cada clase y apunta lo que te cambie.'],
  check: ['Mis pies están paralelos y a un puño de separación.', 'El talón izquierdo está ligeramente levantado.', 'La mano izquierda está en el centro, a un puño del ombligo.', 'El kensen apunta a la garganta.', 'Mis hombros están relajados.'],
  terms: [['Chūdan-no-kamae', 'guardia media'], ['Kensen', 'punta de la espada'], ['Seme', 'presión'], ['Tsuru', 'cuerda (lomo)']]
});

KD.add({
  id: 'chudan-ajustes', t: 'Afinar tu chūdan', jp: '構えの調整', sub: 'Comparar con errores típicos',
  art: ['seq:chudan-errores'],
  intro: 'Casi todos los principiantes cometen los mismos errores en chūdan. Aquí los ves dibujados junto al correcto para que los reconozcas en tu propio cuerpo.',
  steps: ['Pon la mano izquierda en el centro y comprueba que no se desplaza al respirar.', 'Revisa el talón izquierdo: ¿cabe una hoja de papel? ¿o está apoyado?', 'Con un compañero o un espejo, mira la línea desde tu mano izquierda hasta tu punta: ¿apunta a la garganta?', 'Da cinco pasos con okuri-ashi manteniendo la guardia: ¿sube y baja la cabeza?', 'Repite con los ojos cerrados 3 segundos y vuelve a abrirlos: ¿has cambiado de postura?'],
  keys: ['El espejo es tu mejor sensei entre clases: úsalo.', 'Corrige un solo error por semana: si cambias todo a la vez, no cambias nada.', 'Cuando algo se sienta raro, probablemente sea lo correcto: el cuerpo está acostumbrado a lo incorrecto.'],
  errors: [['Cuerpo inclinado hacia delante', 'Endereza la espalda; imagina un hilo que tira de tu coronilla. El peso debe estar sobre la cadera.'], ['Talón izquierdo apoyado', 'Levántalo lo justo; si te cuesta, trabaja la movilidad de tobillos y gemelos.'], ['Kensen alto', 'Baja las manos: la izquierda a la altura del ombligo.'], ['Kensen bajo', 'Sube ligeramente la mano izquierda y mantén el codo suelto.']],
  drills: ['Cada día, 3 minutos de chūdan delante del espejo, cambiando un solo punto.', 'Fotografía o graba tu guardia de lado una vez por semana y compárala.'],
  check: ['Reconozco los cuatro errores principales.', 'Sé cuál es mi error más habitual.', 'Lo he comparado con una grabación.'],
  terms: [['Chūdan-no-kamae', 'guardia media']]
});

KD.add({
  id: 'gedan', t: 'Gedan-no-kamae', jp: '下段の構え', sub: 'La guardia baja',
  art: ['vs:gedan'],
  intro: 'En gedan el kensen apunta hacia las rodillas del rival. Es una guardia de espera y de provocación que se usa poco en combate, pero que forma parte del kata y del repertorio completo.',
  why: 'Sirve para invitar al rival a atacar men (abriendo tu guardia a propósito), para recuperar la iniciativa o para observar. También enseña a mantener la presión con el kensen más bajo.',
  steps: ['Parte de chūdan.', 'Baja el shinai sin mover la mano izquierda del centro del cuerpo: las manos descienden, el kensen apunta a las rodillas del rival.', 'Mantén los pies como en chūdan (pie derecho delante).', 'Hombros relajados, mirada a los ojos del rival.', 'Para volver, sube a chūdan sin pausa y con el kensen a la garganta.'],
  keys: ['La mano izquierda sigue en el centro, solo más baja.', 'El kensen mantiene la presión sobre el rival: no es una guardia "caída".', 'Tu men queda más expuesto: úsalo como señuelo con intención.'],
  errors: [['Encoges el cuerpo y bajas la cabeza', 'Mantén la espalda recta; baja los brazos, no la cabeza.'], ['El kensen apunta al suelo', 'Apunta a las rodillas del rival, no a sus pies.'], ['Te quedas rígido', 'Gedan es tan "viva" como chūdan: respira y mantén el seme.']],
  drills: ['Alterna chūdan y gedan 10 veces, sin que la mano izquierda cambie de línea.', 'Con un compañero, ofrece el men en gedan y responde con debana-kote si ataca.'],
  check: ['La mano izquierda sigue en el centro.', 'El kensen apunta a las rodillas del rival.', 'Puedo volver a chūdan sin pausa.'],
  terms: [['Gedan-no-kamae', 'guardia baja']]
});

KD.add({
  id: 'jodan', t: 'Jōdan-no-kamae', jp: '上段の構え', sub: 'La guardia alta',
  art: ['vs:jodan'],
  intro: 'Jōdan es una guardia ofensiva: el shinai se mantiene sobre la cabeza, listo para caer con un solo movimiento. Para quien la usa y para quien la enfrenta, es todo un reto.',
  why: 'Aumenta el alcance y la velocidad del golpe a men, y transmite una presión muy fuerte. A cambio, deja el torso y las muñecas más expuestos.',
  steps: ['Parte de chūdan.', 'Sube el shinai por el centro con ambas manos hasta sobre la cabeza; la mano izquierda queda por encima de la frente y la derecha un poco más abajo y delante.', 'El kensen se inclina hacia atrás, aproximadamente 45°.', 'Los pies pueden colocarse en dos variantes: hidari-jōdan (pie izquierdo delante) y migi-jōdan (pie derecho delante). Tu sensei decidirá cuál te conviene.', 'Mantén los hombros bajos, los codos sueltos y la mirada a los ojos del rival.'],
  keys: ['No levantes los hombros: la guardia vive de la relajación.', 'El centro del cuerpo sigue protegido por la presión del espíritu, aunque el shinai no apunte.', 'Se aprende después de dominar chūdan, no antes.'],
  errors: [['Hombros subidos y brazos tensos', 'Suelta los hombros; el peso del shinai debe repartirse sin esfuerzo.'], ['Manos muy atrasadas', 'Mantén las manos por encima de la frente, sin llevarlas detrás de la cabeza.'], ['Te mueves como en chūdan', 'En jōdan el desplazamiento es más corto y sereno; pregunta a tu sensei.']],
  drills: ['Con tu sensei, 10 subidas lentas a jōdan y bajada a chūdan, controlando el centro.', 'Cuando estés listo, trabaja men desde jōdan y observa dónde queda abierto tu kote.'],
  check: ['Mi guardia sube por el centro.', 'Mis hombros están bajos.', 'Puedo volver a chūdan sin perder postura.'],
  terms: [['Jōdan-no-kamae', 'guardia alta'], ['Hidari-jōdan', 'jōdan con pie izquierdo delante'], ['Migi-jōdan', 'jōdan con pie derecho delante']],
  warn: 'Es una guardia avanzada. Hasta que tu sensei te lo indique, estúdiala como cultura y como rival que podrás encontrarte.'
});

KD.add({
  id: 'hasso', t: 'Hassō-no-kamae', jp: '八相の構え', sub: 'La guardia de ocho lados',
  art: ['vs:hasso'],
  intro: 'En hassō el shinai está vertical a la altura del lado derecho de la cara. Se usa sobre todo en el kata y para entender cómo se prepara un golpe desde un lado.',
  why: 'Es una posición de preparación: permite lanzar un men rápido y directo, y enseña a mantener la espada cerca del cuerpo.',
  steps: ['Parte de chūdan.', 'Lleva el shinai hacia la derecha de tu cara sin separar los brazos del cuerpo.', 'Las manos quedan a la altura del pecho/hombro, junto a tu lado derecho; el shinai queda casi vertical, con el kensen ligeramente atrás.', 'Pie derecho delante, como en chūdan.', 'Mantén los hombros relajados y la mirada al frente.'],
  keys: ['No es un levantamiento exagerado: el shinai está pegado a tu cuerpo.', 'El golpe sale por el centro, no desde fuera.'],
  errors: [['Brazos separados del cuerpo', 'Mantén los codos pegados; el shinai "descansa" cerca de tu hombro.'], ['Kensen demasiado atrás', 'Casi vertical, solo ligeramente inclinado.']],
  drills: ['Alterna chūdan y hassō 10 veces cuidando que la mano izquierda vuelva al centro.', 'Con tu sensei, practica el golpe a men desde hassō cuando lleguéis al kata.'],
  check: ['El shinai queda casi vertical.', 'Los codos no se separan del cuerpo.'],
  terms: [['Hassō-no-kamae', 'guardia de ocho lados']],
  warn: 'Los detalles exactos (altura de las manos, ángulo) se aprenden en el kata con tu sensei; aquí tienes la idea general.'
});

KD.add({
  id: 'waki', t: 'Waki-gamae', jp: '脇構え', sub: 'La guardia que esconde el shinai',
  art: ['vs:waki'],
  intro: 'En waki-gamae el shinai queda al lado, detrás, con la punta baja, para que el rival no pueda calcular su longitud. Se estudia sobre todo en el kata.',
  why: 'Esconde la longitud real del arma y confunde la distancia. También enseña a mover el shinai desde abajo y hacia delante con control.',
  steps: ['Parte de chūdan.', 'Lleva el shinai hacia tu lado derecho y hacia atrás con la punta baja, oculta tras tu cuerpo.', 'Las manos se acercan a la cadera derecha; el cuerpo se gira ligeramente.', 'Según el kata, el pie derecho suele retrasarse; la ilustración muestra una versión simplificada.', 'Mirada a los ojos del rival.'],
  keys: ['El shinai no debe verse desde delante.', 'Las manos siguen cerca del cuerpo.'],
  errors: [['El kensen asoma por delante', 'Llévalo más atrás; el rival no debe ver la punta.'], ['Te giras demasiado y pierdes la mirada', 'Gira el tronco lo justo; la cabeza sigue de frente.']],
  drills: ['Alterna chūdan y waki 10 veces, sin perder la mirada.', 'Cuando empecéis kata, practica la entrada en waki con tu sensei.'],
  check: ['El kensen queda oculto detrás de mí.', 'No pierdo la mirada al girar.'],
  terms: [['Waki-gamae', 'guardia lateral']],
  warn: 'Es una guardia de kata. Los detalles (pies, ángulo) los marca tu sensei.'
});

KD.add({
  id: 'taito-sonkyo', t: 'Taitō, sonkyō y kamae-o-toru', jp: '帯刀・蹲踞', sub: 'De la espera a la guardia',
  art: ['seq:kamae-toru', 'seq:seiza'],
  intro: 'Antes de cada ejercicio con rival, pasas por una ceremonia breve: taitō (shinai al cinto), saludo, sonkyō y levantarte en chūdan. Hacerlo bien demuestra respeto y te prepara mentalmente.',
  why: 'Es parte del reihō: marca el principio y el final de cada intercambio y te ayuda a concentrarte.',
  stepsH: 'La secuencia',
  steps: ['Taitō: de pie, el shinai en la mano izquierda a la altura de la cadera, con el pulgar sobre la tsuba.', 'Saludo (ritsurei) y avance hacia el rival; en el tachiai de combate se avanzan tres pasos.', 'Nuki-tō: sacas el shinai con la mano derecha, pasando a sujetarlo con las dos manos.', 'Sonkyō: bajas en cuclillas con los talones levantados, rodillas abiertas, espalda recta y los kensen cruzados.', 'Te levantas despacio en chūdan (kamae-o-toru) y empieza el ejercicio.', 'Al terminar, repites en orden inverso: sonkyō, osame-tō (guardar el shinai), cinco pasos atrás y saludo.'],
  keys: ['Todo se hace con calma: el ritmo es parte del respeto.', 'En sonkyō la espalda queda recta y el kensen no baja.', 'Al levantarte, no pierdas el equilibrio ni la guardia.'],
  errors: [['Te inclinas o bajas la cabeza en sonkyō', 'Mantén la espalda recta; baja flexionando las rodillas, no el torso.'], ['Te levantas de golpe', 'Sube despacio, con control, y llega a chūdan sin pausa ni tambaleo.'], ['Se te cae el shinai', 'Practica el nuki-tō en casa con calma antes de hacerlo rápido.']],
  drills: ['En casa, practica 5 veces la secuencia taitō → sonkyō → chūdan → sonkyō → osame-tō.', 'Practica sentarte y levantarte de seiza 5 veces con calma.'],
  check: ['Sé ejecutar la secuencia sin pensar.', 'En sonkyō mantengo la espalda recta.', 'Me levanto con control.'],
  terms: [['Taitō', 'shinai al cinto'], ['Sonkyō', 'cuclillas de saludo'], ['Nuki-tō', 'desenvainar'], ['Osame-tō', 'envainar'], ['Kamae-o-toru', 'adoptar la guardia']],
  warn: 'Detalles como cuántos pasos, hacia dónde mirar o qué mano guarda el shinai varían un poco según el dōjō y la federación. Sigue la costumbre de tu dōjō.'
});

/* ---------- Ashi-sabaki ---------- */
KD.add({
  id: 'ashi-sabaki', t: 'Ashi-sabaki: panorama', jp: '足捌き', sub: 'Tus pies hacen el 70% del kendō',
  art: ['footwork:okuri', 'footwork:ayumi', 'footwork:hiraki', 'footwork:tsugi', 'footwork:fumikomi'],
  intro: 'Los pies deciden si llegas, si llegas a tiempo y si puedes volver. En kendō no se camina: se desliza. Hay cinco desplazamientos básicos; cada uno tiene su lección con la secuencia dibujada.',
  keys: ['Okuri-ashi: el desplazamiento principal, pies que se siguen.', 'Ayumi-ashi: caminar, para entrar y salir y en kata.', 'Hiraki-ashi: paso en diagonal para esquivar.', 'Tsugi-ashi: paso largo para distancias grandes.', 'Fumikomi-ashi: pisada que acompaña al golpe.', 'En todos: la cabeza va a la misma altura, la cadera al frente y el talón izquierdo ligeramente levantado.'],
  drills: ['10 repeticiones de okuri-ashi adelante y atrás sin shinai, mirando un punto al frente.', 'Mientras haces okuri-ashi, fíjate en que la cabeza no sube ni baja.'],
  warn: 'Practica los pies despacio y sin shinai primero. Si fuerzas el fumikomi sin control puedes hacerte daño en el talón o la rodilla.',
  check: ['Distingo los cinco desplazamientos.', 'Mi cabeza no sube ni baja al moverme.'],
  terms: [['Ashi-sabaki', 'trabajo de pies'], ['Okuri-ashi', 'pies que se siguen'], ['Ayumi-ashi', 'caminar'], ['Hiraki-ashi', 'paso en diagonal'], ['Tsugi-ashi', 'paso largo'], ['Fumikomi-ashi', 'pisada']]
});

KD.add({
  id: 'okuri-ashi', t: 'Okuri-ashi', jp: '送り足', sub: 'El desplazamiento principal',
  art: ['anim:okuri-ashi', 'seq:okuri', 'footwork:okuri'],
  intro: 'En okuri-ashi el pie delantero sale primero y el trasero le sigue de inmediato, de modo que la distancia entre los pies se mantiene. Casi todos los golpes del kendō se hacen con él.',
  why: 'Te permite avanzar, retroceder y moverte lateralmente sin perder la guardia ni abrir los pies. Es la base de todo el trabajo de pies.',
  steps: ['Desde chūdan, empuja con el pie izquierdo y desliza el pie derecho hacia delante, con la planta rozando el suelo.', 'Inmediatamente, el pie izquierdo avanza y se coloca a su distancia habitual detrás del derecho.', 'El pie izquierdo nunca pasa al derecho ni se cruza con él.', 'Al terminar, vuelves a chūdan: talón izquierdo ligeramente levantado y peso centrado.', 'Para retroceder: el pie izquierdo sale primero hacia atrás y el derecho le sigue.', 'Lateralmente: sale primero el pie del lado hacia el que te mueves y el otro le sigue.'],
  keys: ['Desliza, no pises ni saltes: los pies casi rozan el suelo.', 'La cabeza avanza a la misma altura, sin subir ni bajar.', 'La mano izquierda y la postura no cambian durante el paso.', 'El pie trasero llega rápido: no se arrastra.'],
  errors: [['La cabeza sube y baja', 'Desliza más y dobla menos las rodillas; practica ante un espejo de lado.'], ['El pie izquierdo llega tarde', 'Piensa en "dos pies, un movimiento". Cuenta 1-2 rápido para que se acostumbre.'], ['Los pies se cruzan', 'Mantén siempre la línea derecha delante, izquierda detrás.'], ['Se levantan los talones del todo', 'Solo el talón izquierdo va ligeramente alto; el derecho nunca se despega demasiado.'], ['Pasos demasiado grandes', 'El paso base es corto: tu centro no debe moverse bruscamente.']],
  drills: ['Cinta en el suelo: 10 pasos adelante y 10 atrás sobre una línea recta, 3 series.', 'Okuri-ashi con shinai en chūdan, comprobando que el kensen no oscila.', 'Metrónomo a 60: un paso por pitido, adelante y atrás.', 'Avanza 5 pasos y retrocede 5 mirando a un punto de la pared.'],
  check: ['El pie izquierdo sigue al derecho de inmediato.', 'Mi cabeza no sube ni baja.', 'No se cruzan mis pies.', 'Mi mano izquierda no se mueve del centro.'],
  terms: [['Okuri-ashi', 'pies que se siguen'], ['Suri-ashi', 'deslizar los pies']]
});

KD.add({
  id: 'ayumi-ashi', t: 'Ayumi-ashi', jp: '歩み足', sub: 'Caminar con sentido',
  art: ['footwork:ayumi'],
  intro: 'Ayumi-ashi es el paso alternado, como caminar, pero deslizando los pies. Se usa para entrar y salir del dōjō, en el kata y en algunos momentos del tachiai.',
  why: 'Te permite desplazarte con calma y precisión en situaciones donde no estás en distancia de golpeo.',
  steps: ['De pie en shisei, avanza un pie y después el otro, alternando.', 'Los pies se deslizan sobre el suelo sin golpearlo.', 'La cabeza permanece a la misma altura y la espalda recta.', 'Al terminar, junta los pies o vuelve a la guardia según la situación.'],
  keys: ['Caminar sin "botar": sin subir y bajar.', 'Rodillas suaves, pasos medidos.', 'La mirada al frente, no a los pies.'],
  errors: [['Caminas con pasos grandes y bamboleas', 'Pasos cortos y deslizados, cabeza quieta.'], ['Miras al suelo', 'Mira a un punto al frente, a la altura de los ojos.']],
  drills: ['Camina 20 pasos en línea recta deslizando los pies y sin que la cabeza suba ni baje.', 'Practica la entrada y salida del dōjō con ayumi-ashi.'],
  check: ['Mis pasos son deslizados.', 'Mi cabeza no bota.'],
  terms: [['Ayumi-ashi', 'caminar']]
});

KD.add({
  id: 'hiraki-ashi', t: 'Hiraki-ashi', jp: '開き足', sub: 'Abrir línea para esquivar',
  art: ['footwork:hiraki', 'topview:nuki'],
  intro: 'Hiraki-ashi es el paso en diagonal con el que sales de la línea de ataque del rival. Es la base de las técnicas de esquiva (nuki-waza) y de muchos movimientos del kata.',
  why: 'Te permite que el golpe del rival falle sin retroceder y, a la vez, quedar en posición de contraatacar.',
  steps: ['Desde chūdan, decide el lado (derecho o izquierdo).', 'Hacia la derecha: el pie derecho se desliza en diagonal hacia delante-derecha y el izquierdo le sigue para recuperar la posición.', 'Hacia la izquierda: el pie izquierdo sale hacia la izquierda y el derecho le sigue.', 'El cuerpo gira ligeramente al moverse, de modo que quedes con el hombro hacia el ataque.', 'Termina en chūdan, mirando al rival y con el kensen en su centro.'],
  keys: ['Sal de la línea, pero no te alejes del rival: tienes que poder contraatacar.', 'Mueve los pies y el cuerpo a la vez.', 'La cabeza no se hunde ni se inclina.'],
  errors: [['Retrocedes en vez de abrirte', 'El paso es diagonal hacia delante, no hacia atrás.'], ['Te inclinas hacia un lado', 'Mantén la espalda recta; mueve los pies y la cadera.'], ['Pierdes el kensen', 'Mantén el kensen en el centro del rival durante todo el movimiento.']],
  drills: ['Sin shinai: 10 hiraki-ashi a la derecha y 10 a la izquierda, volviendo a la guardia cada vez.', 'Con un compañero, a cámara lenta: ataca men y esquiva con hiraki-ashi.'],
  check: ['Salgo de la línea sin retroceder.', 'Mi espalda se mantiene recta.', 'Termino en chūdan mirando al rival.'],
  terms: [['Hiraki-ashi', 'paso en diagonal'], ['Tai-sabaki', 'movimiento del cuerpo']]
});

KD.add({
  id: 'tsugi-ashi', t: 'Tsugi-ashi', jp: '継ぎ足', sub: 'El paso largo',
  art: ['seq:tsugi', 'footwork:tsugi'],
  intro: 'Tsugi-ashi sirve para cubrir una distancia grande de forma rápida y discreta: el pie trasero se acerca al delantero y éste sale de golpe.',
  why: 'Te permite entrar desde tō-ma hasta la distancia de golpeo sin que el rival lo note.',
  steps: ['Desde chūdan, desliza el pie izquierdo hasta acercarlo al derecho (sin cruzarlo).', 'Sin pausa, el pie derecho sale hacia delante, a más distancia que un paso normal.', 'El pie izquierdo sigue al derecho y recuperas la guardia.', 'Si es el inicio de un golpe, el pie derecho sale con el furikaburi y el golpe llega al aterrizar.'],
  keys: ['El primer movimiento es corto y discreto: no avisa.', 'No saltes: el movimiento es deslizado.', 'La mano izquierda no se mueve del centro.'],
  errors: [['El rival nota tu intención', 'Haz el primer movimiento sin tensar los hombros ni alzar el kensen.'], ['Saltas', 'Mantén los pies cerca del suelo; la fuerza viene de la cadera.'], ['Cruzas los pies', 'El izquierdo se acerca al derecho pero nunca lo pasa.']],
  drills: ['Sin shinai: 10 tsugi-ashi seguidos, volviendo cada vez.', 'Con shinai: tsugi-ashi + men, en suburi.'],
  check: ['Mi primer movimiento es discreto.', 'Mis pies no se cruzan.', 'No salto: deslizo.'],
  terms: [['Tsugi-ashi', 'paso largo']]
});

KD.add({
  id: 'fumikomi-ashi', t: 'Fumikomi-ashi', jp: '踏み込み足', sub: 'La pisada del golpe',
  art: ['anim:fumikomi-ashi', 'seq:fumikomi', 'footwork:fumikomi'],
  intro: 'Fumikomi-ashi es la pisada que acompaña al golpe: el pie delantero cae plano y firme en el mismo instante en que el shinai impacta, y el pie trasero llega de inmediato.',
  why: 'Une el cuerpo y la espada (ki-ken-tai-ichi), da potencia al golpe y marca el momento de impacto con un sonido seco. Sin fumikomi, el golpe suele no ser válido.',
  steps: ['Desde la posición de furikaburi, el pie derecho avanza con un paso corto y bajo (no un salto).', 'En el instante del golpe, el pie derecho aterriza con la planta entera: no con el talón.', 'El pie izquierdo llega muy rápido tras el derecho (hikitsuke) y vuelve a su posición, con el talón ligeramente alto.', 'Las rodillas amortiguan: no te quedas rígido.', 'Después del golpe sigues avanzando y pasas por el lado del rival.'],
  keys: ['Golpe y pisada son un solo movimiento.', 'Pisa con la planta entera, no con el talón.', 'El pie izquierdo no se arrastra: llega rápido.', 'El sonido debe ser firme y seco.'],
  errors: [['Pisas con el talón', 'Apoya la planta entera; si te duele el talón, estás cayendo de talón.'], ['El pie izquierdo se queda atrás', 'Piensa en "hikitsuke": tira del pie izquierdo hacia delante en cuanto el derecho toque.'], ['Saltas hacia arriba', 'El paso es hacia delante, bajo y deslizado.'], ['Golpeas antes de pisar', 'Sincroniza: el shinai llega al mismo instante que el pie.']],
  drills: ['En el sitio: 10 fumikomi suaves sin avanzar, concentrándote en la planta entera.', 'Fumikomi + men en el aire, 10 repeticiones, escuchando el sonido.', 'Cuenta "1-2": el 1 es el pie derecho y el golpe; el 2 es el izquierdo que llega.'],
  warn: 'Si sientes dolor en el talón o la rodilla, para y reduce la intensidad. Pide a tu sensei que revise tu pisada.',
  check: ['Pisas con la planta entera.', 'El pie izquierdo llega rápido.', 'Golpe y pisada ocurren a la vez.'],
  terms: [['Fumikomi-ashi', 'pisada'], ['Hikitsuke', 'tirar del pie trasero']]
});

KD.add({
  id: 'ashi-ejercicios', t: 'Programa de pies', jp: '足の稽古', sub: 'Ejercicios para casa',
  intro: 'Un programa corto de ejercicios para trabajar los pies cada día, sin shinai y en poco espacio. Pocos minutos al día valen más que una sesión larga una vez a la semana.',
  steps: ['Calentamiento: 1 minuto de movilidad de tobillos y rodillas.', 'Chūdan en el sitio 1 minuto, sintiendo el talón izquierdo y el peso.', 'Okuri-ashi: 10 adelante y 10 atrás, 3 series.', 'Hiraki-ashi: 10 a cada lado.', 'Tsugi-ashi: 10 repeticiones.', 'Fumikomi suave: 10 en el sitio (solo si tu sensei ya te lo ha enseñado).', 'Estiramientos: gemelos, cuádriceps y caderas, 3 minutos.'],
  keys: ['Hazlo descalzo o con suela fina, sobre suelo liso y seco.', 'La calidad manda: mejor 10 buenos que 40 flojos.', 'Graba un minuto una vez por semana y compara.'],
  drills: ['Lunes y jueves: programa completo.', 'Resto de días: 5 minutos de okuri-ashi.', 'Una vez por semana, con espejo o vídeo.'],
  check: ['He hecho el programa esta semana.', 'Me he grabado para comparar.'],
  tip: 'Si no tienes espacio, puedes hacer okuri-ashi en el sitio, sin desplazarte, para fijar la sensación.'
});

KD.add({
  id: 'suburi', t: 'Suburi: panorama', jp: '素振り', sub: 'El ejercicio que más vas a hacer',
  art: ['seq:joge'],
  intro: 'Suburi es el ejercicio base: golpes sin compañero. Puedes hacerlo en casa y es donde se forman la postura, el agarre, el filo y el ritmo. Hay cuatro tipos básicos.',
  keys: ['Jōge-buri: arriba y abajo, amplio, para aprender el recorrido.', 'Sayū-men: diagonales alternas a los lados de la cabeza.', 'Zenshin-kōtai-suburi: avanzando y retrocediendo con okuri-ashi.', 'Haya-suburi: rápido y pequeño, con las muñecas.', 'Siempre: kiai, hasuji, tenouchi y mirada al frente.'],
  steps: ['Calienta y estira muñecas y hombros.', 'Empieza por jōge-buri para fijar el recorrido.', 'Sigue con sayū-men y zenshin-kōtai.', 'Termina con haya-suburi, que cansa más.', 'Estira al terminar.'],
  warn: 'Entrena suburi en un sitio con espacio y techo alto. Ten cuidado con lámparas, ventanas y compañeros. Si notas dolor en muñecas o codos, para.',
  check: ['Conozco los cuatro tipos de suburi.', 'Hago kiai en cada golpe.', 'Mi postura se mantiene durante toda la serie.'],
  terms: [['Suburi', 'golpes al aire'], ['Jōge-buri', 'arriba y abajo'], ['Sayū-men', 'diagonales'], ['Zenshin-kōtai-suburi', 'avance y retroceso'], ['Haya-suburi', 'suburi rápido'], ['Furikaburi', 'subir el shinai']]
});

KD.add({
  id: 'joge-buri', t: 'Jōge-buri', jp: '上下振り', sub: 'Arriba y abajo',
  art: ['anim:joge-buri', 'seq:joge'],
  intro: 'Jōge-buri es el suburi más básico y el que mejor te enseña el recorrido del shinai: sube por el centro hasta sobre la cabeza y baja hasta la altura de chūdan.',
  why: 'Enseña a mover el shinai por el centro con la mano izquierda, a frenar el golpe a la altura correcta y a coordinar respiración y kiai.',
  steps: ['Desde chūdan, sube el shinai por el centro del cuerpo, con las manos al frente y los codos estirándose.', 'Llega hasta sobre la cabeza con los brazos casi estirados; el kensen cae hacia atrás sobre un ángulo de unos 45°.', 'Baja el shinai de golpe hasta que el kensen quede a la altura de chūdan (la garganta del rival).', 'Aprieta tenouchi justo al llegar y haz kiai ("men!"); luego relaja.', 'Para sin pasar de esa altura: el control forma parte del golpe.', 'Repite con el mismo ritmo: subir inspirando, bajar espirando.'],
  keys: ['El shinai sube y baja por el centro, sin desviarse.', 'La mano izquierda manda: la derecha acompaña.', 'No te quedes sin respiración: el kiai es la espiración.', 'Los pies pueden estar quietos al principio; después añade okuri-ashi.'],
  errors: [['El shinai pasa por debajo de chūdan', 'Frena con la mano izquierda: el golpe termina con el kensen a la altura de la garganta.'], ['Subes inclinado o con el codo hacia fuera', 'Sube por el centro, con los codos hacia delante y abajo.'], ['Hombros tensos', 'Exhala al bajar y suéltalos.'], ['Sin kiai o kiai flojo', 'Grita "men" justo en el instante del impacto.']],
  drills: ['30 jōge-buri lentos con kiai y mirada al frente.', '3 series de 20, descansando 30 segundos.', 'Frente al espejo de lado para comprobar el recorrido.'],
  check: ['El shinai sube y baja por el centro.', 'Termino en chūdan con el kensen a la altura correcta.', 'Hago kiai en el impacto.'],
  terms: [['Jōge-buri', 'arriba y abajo'], ['Furikaburi', 'subir el shinai'], ['Tenouchi', 'agarre']]
});

KD.add({
  id: 'sayu-men', t: 'Sayū-men', jp: '左右面', sub: 'Diagonales a ambos lados',
  art: ['seq:sayu'],
  intro: 'En sayū-men el shinai baja en diagonal a la izquierda y a la derecha de la cabeza del rival, alternando. Es la base del kirikaeshi y entrena el filo (hasuji) y el control de las muñecas.',
  why: 'Enseña a cortar en diagonal con el filo correcto y a que el shinai suba y baje por el centro con ángulo, no solo recto.',
  steps: ['Desde chūdan, sube el shinai por el centro hasta sobre la cabeza (furikaburi).', 'Baja en diagonal, a unos 45°, hacia el lado izquierdo del rival (su yokomen izquierdo).', 'El golpe termina con el kensen más o menos a la altura de chūdan, desplazado hacia ese lado. Tu sensei concretará el punto de parada.', 'Vuelve a subir por el centro hasta sobre la cabeza.', 'Baja ahora hacia el lado derecho del rival.', 'Repite alternando, con kiai en cada golpe.'],
  keys: ['Siempre subes por el centro, nunca por el lado.', 'El filo (tsuru arriba) corta en diagonal con hasuji correcto.', 'Mano izquierda en el centro del cuerpo al terminar el golpe.'],
  errors: [['Subes el shinai hacia un lado', 'Sube siempre por el centro; solo baja en diagonal.'], ['El golpe sale plano (no corta)', 'Recuerda: tsuru arriba y filo abajo; el golpe "corta" como una espada real.'], ['El kensen se queda colgando', 'Frena con la mano izquierda; que termine a una altura constante.']],
  drills: ['20 sayū-men lentos sin pies, concentrándote en el centro y el filo.', 'Después, añade okuri-ashi: un golpe, un paso.', 'Mírate de frente y de lado con un espejo o una grabación.'],
  check: ['Subo siempre por el centro.', 'Bajo en diagonal con el filo correcto.', 'Mantengo la mano izquierda en el centro.'],
  terms: [['Sayū-men', 'diagonales'], ['Yokomen', 'lateral de la cabeza'], ['Hasuji', 'dirección del filo']]
});

KD.add({
  id: 'zenshin-kotai', t: 'Zenshin-kōtai-suburi', jp: '前進後退素振り', sub: 'Golpear avanzando y retrocediendo',
  art: ['seq:zenshin'],
  intro: 'Une el golpe de suburi con el trabajo de pies: avanzas golpeando men, y retrocedes golpeando de nuevo. Es el ejercicio que más se parece a un golpe real.',
  why: 'Enseña a coordinar pies y espada (ki-ken-tai-ichi) y a mantener la postura mientras te desplazas.',
  steps: ['Desde chūdan, empieza a subir el shinai a la vez que el pie derecho comienza a avanzar con okuri-ashi.', 'El golpe termina cuando el pie derecho llega a su sitio y el pie izquierdo lo sigue (sin pisar fuerte salvo que tu dōjō practique fumikomi en este ejercicio).', 'Haz kiai en el impacto.', 'Para retroceder, sube el shinai mientras el pie izquierdo sale hacia atrás.', 'Golpea al completar el paso y vuelve a chūdan.', 'Repite avanzando y retrocediendo en una línea.'],
  keys: ['Pies y espada se mueven a la vez, no uno detrás de otro.', 'La cabeza se mantiene a la misma altura.', 'Mantén el tamaño del golpe constante: ni más pequeño al cansarte.'],
  errors: [['Primero golpeas y después mueves los pies', 'Mueve el pie y el shinai a la vez; piensa en ellos como una unidad.'], ['La cabeza sube y baja', 'Desliza los pies; flexiona poco las rodillas.'], ['El golpe es más corto al retroceder', 'Mantén el mismo recorrido de suburi: sube hasta arriba.']],
  drills: ['10 repeticiones adelante y atrás, 3 series.', 'A 60 pulsaciones por minuto con metrónomo: un golpe por pitido.', 'Con la grabación, comprueba que no hay pausa entre pies y golpe.'],
  check: ['Pies y golpe coinciden.', 'Mi cabeza no sube ni baja.', 'El golpe tiene el mismo tamaño avanzando que retrocediendo.'],
  terms: [['Zenshin-kōtai-suburi', 'avance y retroceso'], ['Okuri-ashi', 'pies que se siguen']]
});

KD.add({
  id: 'haya-suburi', t: 'Haya-suburi', jp: '早素振り', sub: 'Rápido y pequeño',
  art: ['seq:haya'],
  intro: 'Haya-suburi son golpes rápidos con un movimiento corto de muñecas. Entrena la velocidad, el ritmo y el control sin perder el filo.',
  why: 'Desarrolla la velocidad de las muñecas, la resistencia y la capacidad de golpear sin una subida grande, algo muy útil para ataques rápidos y combinaciones.',
  steps: ['Desde chūdan, sube el shinai solo hasta un poco por encima de la frente (unos 45°) con las muñecas.', 'Baja de golpe hasta la altura de chūdan con kiai; el filo corta limpio.', 'Sube de nuevo sin pausa y repite, manteniendo el ritmo.', 'Cuando domines el golpe quieto, añade okuri-ashi: un golpe, un paso (adelante y atrás).', 'Cuenta en voz alta de 1 a 10 y repite.'],
  keys: ['El movimiento sale de las muñecas y de la mano izquierda, no de los hombros.', 'Rápido pero limpio: la calidad antes que la velocidad.', 'Mantén el centro y el filo en cada golpe.'],
  errors: [['Mueves los hombros y los codos', 'Relájalos; el golpe sale de las muñecas.'], ['El golpe sale torcido por la prisa', 'Baja el ritmo hasta que sea limpio y vuelve a acelerar poco a poco.'], ['Te canas rápido', 'Empieza con series cortas (10–20) y aumenta poco a poco.']],
  drills: ['3 series de 20, con 30 segundos de descanso.', 'Metrónomo: sube de 60 a 90 por minuto durante varias semanas.', 'Grábate de frente para ver que el shinai sube y baja por el centro.'],
  warn: 'Es un ejercicio exigente para muñecas y codos. Calienta antes y para si sientes dolor.',
  check: ['Mi golpe sale de las muñecas.', 'El filo es correcto aunque vaya rápido.', 'Mantengo el ritmo sin tensar los hombros.'],
  terms: [['Haya-suburi', 'suburi rápido']]
});

KD.add({
  id: 'suburi-plan', t: 'Programa de suburi', jp: '素振りの計画', sub: 'Cómo progresar semana a semana',
  intro: 'Suburi mejora con regularidad, no con sesiones heroicas. Este programa te da una progresión suave de 8 semanas para casa. Si te saltas un día no pasa nada: retomas donde estabas.',
  steps: ['Semanas 1–2: 20 jōge-buri, 20 sayū-men y 10 zenshin-kōtai, 3 días por semana.', 'Semanas 3–4: 30 jōge-buri, 30 sayū-men, 20 zenshin-kōtai y 20 haya-suburi.', 'Semanas 5–6: añade series: 2 vueltas de lo anterior con 1 minuto de descanso.', 'Semanas 7–8: 50 haya-suburi, 30 zenshin-kōtai y un ejercicio de kote-men en el aire.', 'Cada semana, graba una serie y compara con la anterior.'],
  keys: ['Descansa al menos un día entre sesiones largas.', 'Aumenta como máximo un 10-20% por semana.', 'Si el golpe empeora (torcido, sin kiai), baja la cantidad.', 'Pide a tu sensei que revise tu suburi: es lo más corregible del kendō.'],
  warn: 'Dolor agudo en muñecas, codos o espalda: para y descansa. El dolor no es progreso.',
  check: ['He hecho las sesiones de esta semana.', 'Me he grabado.', 'He aplicado la última corrección de mi sensei.'],
  tip: 'Después de cada sesión, anota en el diario (Dōjō) qué cambiarías mañana. Un pequeño cambio por sesión suma muchísimo.'
});
