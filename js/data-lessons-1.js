/* Módulos 1–3: primeros pasos, equipo y fundamentos */
window.KD = window.KD || {};
KD.modules = KD.modules || [];

KD.modules.push(
  {
    id: 'shoshin', name: 'Shoshin · Primeros pasos', jp: '初心', seal: '初', icon: 'torii',
    desc: 'Qué es el kendō, cómo comportarte en el dōjō y cómo saludar. Lo primero que se aprende y lo último que se deja de perfeccionar.',
    lessons: [
      {
        id: 'que-es-kendo', t: '¿Qué es el kendō?', jp: '剣道', sub: 'El camino de la espada',
        intro: 'Kendō significa "camino de la espada". Se practica con una espada de bambú (shinai) y una armadura protectora (bōgu), golpeando zonas concretas del compañero con control, espíritu y respeto.',
        blocks: [
          { h: 'Una práctica con propósito', p: ['La Federación Japonesa de Kendō definió su concepto en 1975: perfeccionar el carácter mediante los principios de la espada. El objetivo no es "ganar combates", sino mejorarte como persona usando el kendō como herramienta.', 'Por eso el kendō se practica durante toda la vida. Hay kendōka que empiezan de niños y otros que empiezan pasados los cincuenta, y entrenan juntos en el mismo dōjō.'] },
          { h: 'Un poco de historia', ul: ['Tiene su origen en las escuelas de esgrima samurái (kenjutsu).', 'En el periodo Edo (siglo XVIII) se desarrollaron el shinai y el bōgu para poder practicar golpeando de verdad sin heridas.', 'En el siglo XX se organizó como disciplina moderna. Hoy hay millones de practicantes y campeonatos mundiales.'] },
          { h: 'En qué consiste una práctica', ul: ['Kihon: ejercicios básicos (golpes al aire, desplazamientos, golpes a un compañero).', 'Waza: técnicas más elaboradas, solo o por parejas.', 'Keiko: práctica con un compañero, desde ejercicios guiados hasta combate libre.', 'Kata: formas con espada de madera (bokutō) que transmiten principios del kendō.'] },
          { h: 'Qué se valora de verdad', p: 'En kendō no vale cualquier toque: el golpe tiene que reunir espíritu, espada y cuerpo a la vez (ki-ken-tai-ichi), y después hay que mantener la alerta (zanshin). Esa exigencia es lo que hace al kendō tan distinto de "dar con un palo".' },
          { tip: 'Llevas poco tiempo practicando, así que lo mejor que puedes hacer es observar mucho a los veteranos y hacer preguntas a tu sensei. En kendō, ver cómo se mueve alguien con años de práctica enseña más que cualquier texto.' }
        ],
        terms: [['Kendō', 'camino de la espada'], ['Shinai', 'espada de bambú'], ['Bōgu', 'armadura'], ['Keiko', 'práctica'], ['Kihon', 'fundamentos'], ['Kata', 'formas']],
        practice: ['Observa en tu próxima clase qué hace tu sensei antes de empezar y al terminar.', 'Apunta tres preguntas para hacerle sobre cómo enfocar tu entrenamiento.']
      },
      {
        id: 'etiqueta-dojo', t: 'Etiqueta del dōjō', jp: '礼法', sub: 'Reihō: la cortesía forma parte del entrenamiento',
        intro: 'En kendō empieza y termina todo con respeto. El reihō no es un adorno: la etiqueta es la mitad del entrenamiento y marca cómo te tratan los demás.',
        blocks: [
          { h: 'Al llegar y al irte', ul: ['Llega con tiempo para vestirte sin prisas y calentar.', 'Al entrar al dōjō y al salir, saluda de pie hacia el shōmen (el frente del dōjō).', 'Saluda a tu sensei y a tus compañeros cuando los veas.', 'Si llegas tarde, espera a que te hagan una señal para unirte.'] },
          { h: 'Durante la práctica', ul: ['Descalzo, con el dōgi y hakama bien puestos, sin joyas, relojes ni pulseras.', 'Uñas cortas (la tuya y la ajena te lo agradecerán).', 'Nunca apoyes el shinai en el suelo como bastón, ni pases por encima de un shinai o bōgu ajeno.', 'Escucha sin interrumpir y responde con un "hai" claro cuando el sensei te hable.', 'No te vayas del dōjō sin avisar y evita hablar en medio del entrenamiento.'] },
          { h: 'Con tu compañero', ul: ['Al empezar con cada compañero: "Onegaishimasu".', 'Al terminar: "Arigatō gozaimashita" y un saludo. Aunque te haya "ganado" o te haya molestado.', 'No te quejes de un golpe fuerte: aprende de él y vuelve a la guardia.', 'Si te haces daño o notas que algo está mal con tu equipo, para y avisa.'] },
          { h: 'El equipo es parte de ti', p: 'Cuida tu shinai y tu bōgu, ponlos en orden, y no toques el de otros sin permiso. El estado de tu equipo dice mucho de cómo te tomas el kendō.' },
          { tip: 'Cuando dudes, fíjate en lo que hacen los veteranos y haz lo mismo. Y si hay una costumbre propia de tu dōjō, esa manda sobre cualquier texto.' }
        ],
        terms: [['Reihō', 'etiqueta'], ['Onegaishimasu', 'por favor (al empezar)'], ['Arigatō gozaimashita', 'gracias (al terminar)'], ['Shōmen', 'frente del dōjō'], ['Hai', 'sí / entendido']],
        practice: ['En la próxima clase, practica el saludo al entrar con calma, sin imitar: entiende por qué lo haces.']
      },
      {
        id: 'saludos', t: 'Rei: saludos, seiza y sonkyo', jp: '礼・正座・蹲踞', sub: 'Cómo empezar y terminar con corrección',
        art: ['rei'],
        intro: 'Hay saludos de pie (ritsurei), sentado (zarei) y el saludo con la espada en el combate (tachiai). Cada uno tiene su momento y su forma.',
        blocks: [
          { h: 'Ritsurei · el saludo de pie', ol: ['Colócate en shisei: espalda recta, talones juntos, brazos relajados a los lados (o shinai en taitō).', 'Mira al frente y, sin perder la espalda recta, inclina el tronco desde la cadera de forma suave.', 'La inclinación es de unos 15° para un saludo al dōjō/shōmen y más profunda (unos 30°) para saludar a una persona; tu sensei te dirá cómo lo hacéis en tu escuela.', 'Mantén un instante abajo, sube sin prisa y recupera la mirada.'] },
          { h: 'Seiza y zarei', p: 'Para sentarte, hazlo con calma: la rodilla izquierda baja primero y la derecha después; para levantarte, al revés (primero la derecha). Una vez sentado, la espalda está recta y las manos descansan sobre los muslos. En el zarei, las manos bajan al suelo formando una pequeña ventana y la cabeza se inclina sin sacar el culo hacia atrás.' },
          { h: 'Mokusō', p: 'Al inicio y al final de la clase se hace una breve meditación en seiza: ojos cerrados (o entreabiertos), respiración suave, mente en el presente. Sirve para "cambiar de modo": dejas el día a la puerta y entras en el kendō.' },
          { h: 'Sonkyo y tachiai', ul: ['Antes y después de cada combate o ejercicio con equipo, dos kendōka se saludan, avanzan, desenvainan y se agachan en sonkyō.', 'Sonkyō: talones levantados, rodillas abiertas, espalda recta y shinai cruzados a la altura de los kensen.', 'Se levantan, vuelven a la guardia y empiezan. Al acabar, repiten la ceremonia en sentido inverso.'] },
          { warn: 'Los detalles (ángulo exacto, qué pie primero, cómo se lleva el shinai al sentarse) pueden variar un poco según el dōjō y la federación. Esto es una guía: tu sensei decide.' }
        ],
        terms: [['Ritsurei', 'saludo de pie'], ['Zarei', 'saludo sentado'], ['Seiza', 'sentado sobre talones'], ['Mokusō', 'meditación'], ['Sonkyō', 'cuclillas de saludo'], ['Taitō', 'shinai al cinto']],
        practice: ['En casa: practica sentarte y levantarte de seiza con calma, 5 veces (rodilla izquierda primero para bajar).', 'Practica un saludo lento delante de un espejo: espalda recta, sin doblar el cuello.']
      },
      {
        id: 'clase-tipo', t: 'Cómo es una clase', jp: '稽古の流れ', sub: 'Qué esperar y cómo aprovecharla',
        intro: 'Cada dōjō tiene su ritmo, pero casi todas las clases siguen una estructura parecida. Conocerla te quita nervios y te ayuda a aprovechar cada minuto.',
        blocks: [
          { h: 'Estructura habitual', ol: ['Preparación: vestirse, calentar, preparar el equipo.', 'Saludo y mokusō en seiza.', 'Calentamiento y suburi (golpes al aire) todos juntos.', 'Kihon: desplazamientos, golpes básicos y combinaciones.', 'Con bōgu: kirikaeshi, uchikomi, kakari-geiko, waza.', 'Ji-geiko (práctica libre) o shiai-geiko.', 'Mokusō y saludo final; recoger el dōjō entre todos.'] },
          { h: 'Qué hacer en los primeros meses', ul: ['Al principio se practica sin bōgu, con shinai: suburi, pies y posición. Es lo más importante.', 'Pregunta cuándo empezarás con el bōgu y qué debes comprar y cuándo.', 'Intenta "robar con los ojos": mira cómo hace cada ejercicio un compañero con más experiencia.'] },
          { h: 'Sacar el máximo partido', ul: ['Haz caso a las correcciones aunque te parezcan "pequeñas": son las que te cambian la técnica.', 'Anota al llegar a casa lo que te corrigió el sensei (en la pestaña Entrenar puedes guardarlo).', 'Pide ejercicios para repetir en casa y hazlos tal cual, sin inventar.'] },
          { tip: 'Si llevas poco tiempo, cualquier ejercicio de kihon bien hecho y repetido vale más que cualquier waza espectacular mal ejecutado.' }
        ],
        terms: [['Kihon', 'fundamentos'], ['Suburi', 'golpes al aire'], ['Kirikaeshi', 'golpes alternos'], ['Ji-geiko', 'práctica libre']],
        practice: ['Escribe en el diario de Entrenar qué te corrigió tu sensei en la última clase.']
      }
    ]
  },

  {
    id: 'kendogu', name: 'Kendōgu · El equipo', jp: '剣道具', seal: '具', icon: 'men',
    desc: 'Shinai, keikogi, hakama y bōgu: cómo se llama cada pieza, para qué sirve, cómo se viste y cómo se cuida.',
    lessons: [
      {
        id: 'shinai', t: 'El shinai y sus partes', jp: '竹刀', sub: 'Tu espada de bambú',
        art: ['shinai'],
        intro: 'El shinai está hecho de cuatro tiras de bambú (take) unidas con cuero y cuerdas. Aprende dónde está el filo, dónde se golpea y cómo comprobar que está en buen estado.',
        blocks: [
          { h: 'Las partes', ul: ['Tsuka: la empuñadura, de cuero. Tsuka-gashira es su extremo posterior.', 'Tsuba: la guarda circular. Se fija con la tsuba-dome.', 'Tsuru: la cuerda que recorre un lado del shinai. Marca el lomo (mune): el filo (ha) está en el lado opuesto.', 'Nakayui: el cordón de cuero que ata las tiras, hacia un cuarto de la longitud desde la punta.', 'Saki-gawa: el capuchón de cuero de la punta, con el saki-gomu dentro.', 'Datotsu-bu: el tercio superior del shinai, que es el que golpea. Su zona óptima es el monouchi.'] },
          { h: 'Cómo se sostiene', p: 'El tsuru siempre queda hacia arriba, en el lado del lomo. Si el tsuru está abajo, estás sosteniendo el shinai al revés: el filo (hasuji) quedaría del lado equivocado.' },
          { h: 'Longitud y peso', p: 'Los shinai para adultos mayores de edad miden unos 117–120 cm, aunque hay tallas menores para niños y secundaria. El reglamento de competición fija pesos mínimos. Tu sensei te dirá qué talla y peso te convienen y dónde comprarlo.' },
          { h: 'Revisar tu shinai antes de cada clase', ul: ['Recorre las cuatro tiras con los dedos buscando astillas. Una astilla puede dañar a tu compañero.', 'Comprueba que el nakayui, el tsuru y la tsuba no se mueven.', 'Un shinai agrietado o astillado se desecha o se repara: no se usa.', 'Aceite de cuero o de camelia (con moderación) mantiene el bambú; pregunta a tu sensei qué usan en tu dōjō.'] },
          { warn: 'Nunca golpees el suelo o las paredes con el shinai, ni lo uses como bastón. Se estropea (y es una falta de etiqueta).' }
        ],
        terms: [['Take', 'tira de bambú'], ['Tsuka', 'empuñadura'], ['Tsuba', 'guarda'], ['Tsuru', 'cuerda (lomo)'], ['Nakayui', 'cordón de cuero'], ['Saki-gawa', 'capuchón'], ['Datotsu-bu', 'zona de golpeo'], ['Monouchi', 'zona óptima'], ['Hasuji', 'dirección del filo']],
        practice: ['Coge tu shinai y nombra en voz alta cada parte.', 'Pásale las manos a las cuatro tiras y busca astillas antes de entrenar.']
      },
      {
        id: 'keikogi-hakama', t: 'Keikogi y hakama', jp: '稽古着・袴', sub: 'La ropa de entrenamiento',
        art: ['wear'],
        intro: 'El keikogi (chaqueta) y el hakama (falda-pantalón) se llevan en todas las clases. Vestirlos bien forma parte de la disciplina y del cuidado del cuerpo.',
        blocks: [
          { h: 'Keikogi', ul: ['Chaqueta de algodón grueso, generalmente azul índigo (también blanca).', 'Se cierra solapando el lado izquierdo sobre el derecho (la solapa derecha queda dentro). Al revés se reserva para funerales.', 'Se ata con cuerdas internas y externas, sin dejar bolsas y con el cuello a la altura natural.'] },
          { h: 'Hakama', ul: ['Parte delantera con 5 pliegues y parte trasera con una pieza rígida (koshi-ita) que se apoya en la zona lumbar.', 'Tradicionalmente, los pliegues se asocian a virtudes como la benevolencia, la justicia, la cortesía, la sabiduría y la sinceridad (la interpretación varía según la fuente).', 'La cintura queda por encima de las caderas, ni caída ni demasiado subida. La koshi-ita descansa en la zona lumbar.', 'El largo habitual llega más o menos a la altura de los tobillos; tu sensei te dirá cuál se usa en tu dōjō.'] },
          { h: 'Cuidado y mantenimiento', ul: ['Lava el keikogi según las indicaciones (frío, sin lejía); el índigo suele desteñir las primeras veces.', 'Dobla el hakama respetando los pliegues después de cada uso: es un hábito que se aprende y que tu sensei te enseñará en persona.', 'Seca todo al aire, nunca lo dejes húmedo en la bolsa.'] },
          { tip: 'El nudo del hakama (himo) es lo más difícil de explicar por escrito. Pídele a un compañero o a tu sensei que te lo enseñe en persona; en cuanto lo domines, tardarás 20 segundos.' },
          { warn: 'Muchos detalles (colores, solapas, número de pliegues, el orden de los himo) dependen de la tradición de cada escuela y federación: pregunta en tu dōjō.' }
        ],
        terms: [['Keikogi / Dōgi', 'chaqueta'], ['Hakama', 'falda-pantalón'], ['Koshi-ita', 'placa trasera del hakama'], ['Himo', 'cordón']],
        practice: ['Practica en casa vestirte y doblar el hakama sin prisas, hasta que no necesites pensar.']
      },
      {
        id: 'bogu', t: 'El bōgu: men, kote, dō y tare', jp: '防具', sub: 'La armadura de kendō',
        art: ['bogu'],
        intro: 'El bōgu protege las cuatro zonas donde se golpea. Toca las partes de la ilustración para ver cómo se llaman y para qué sirven.',
        blocks: [
          { h: 'Las cuatro piezas', ul: ['Men: casco con rejilla metálica (men-gane), faldones acolchados (men-buton) y protección de la garganta (tsuki-dare).', 'Kote: guantes acolchados que protegen manos y muñecas.', 'Dō: coraza del torso, con una parte superior (mune) y la inferior.', 'Tare: faldón de tres paneles con una etiqueta (nafuda) con tu nombre.'] },
          { h: 'Cómo se ven desde fuera', p: 'La parte delantera del dō tiene líneas horizontales (listones) y la superior un revestimiento más oscuro. El tare cae en tres paneles: el central lleva el nafuda. Con el bōgu puesto, el kote recubre mano y antebrazo y el men ofrece una rejilla con una ventana abierta (mono-mi) para ver.' },
          { h: 'Elegir el bōgu', p: 'Al principio no necesitas comprar el equipo más caro. Pregunta a tu sensei: muchos dōjō prestan bōgu a principiantes durante unos meses. Cuando compres, que te ayude a elegir talla, tipo de cosido y proveedor fiable.' },
          { warn: 'No te pongas ni te quites el bōgu sin supervisión las primeras veces: un men mal atado o un kote apretado en exceso puede hacerte daño.' }
        ],
        terms: [['Men', 'casco'], ['Men-gane', 'rejilla'], ['Men-buton', 'faldones'], ['Tsuki-dare', 'protección de garganta'], ['Kote', 'guantes'], ['Dō', 'coraza'], ['Tare', 'faldón'], ['Nafuda', 'etiqueta con nombre']],
        practice: ['Toca cada parte de la ilustración y di en voz alta su nombre japonés.']
      },
      {
        id: 'vestirse', t: 'Cómo vestirse y desvestirse', jp: '着装', sub: 'El orden correcto',
        intro: 'Ponerse el bōgu tiene un orden. Seguirlo evita errores y es parte del reihō.',
        blocks: [
          { h: 'Para vestirte', ol: ['Dōgi y hakama, ya bien colocados.', 'Tare: se ata alrededor de la cintura sobre el hakama.', 'Dō: se coloca sobre el pecho y se atan las cuerdas superiores a la espalda y las inferiores por delante.', 'Tenugui: se dobla y se coloca en la cabeza antes del men.', 'Men: se ata con el himo, con el nudo detrás de la cabeza (que no apriete ni se afloje).', 'Kote: es lo último, justo antes de empezar.'] },
          { h: 'Para quitarte el bōgu', p: 'Se hace en orden inverso y, tradicionalmente, en seiza. En muchos dōjō el men se retira primero, después el kote, y por último el dō y el tare. Fíjate en lo que hace tu dōjō y haz lo mismo.' },
          { h: 'Cuidado de los himo', ul: ['Que los himo del men queden del mismo largo y sin cruzarse.', 'Dobla el tenugui con orden y guárdalo seco.', 'Al terminar, coloca el bōgu abierto para que se seque; no lo guardes húmedo.'] },
          { tip: 'La primera vez te llevará 10 minutos. A los dos meses, 2. Lo importante es hacerlo con calma y sin enredarlo todo.' }
        ],
        terms: [['Tare', 'faldón'], ['Dō', 'coraza'], ['Tenugui', 'paño'], ['Men', 'casco'], ['Kote', 'guantes'], ['Himo', 'cordón']],
        practice: ['Pide a un compañero que te enseñe a atar el men y dobla el tenugui en casa 5 veces hasta que te salga bien.']
      },
      {
        id: 'cuidado-equipo', t: 'Cuidado del equipo', jp: '手入れ', sub: 'Que dure y que no huela a gimnasio',
        intro: 'El equipo es caro y se estropea rápido si no se cuida. Unas pocas rutinas lo alargan años.',
        blocks: [
          { h: 'Después de cada clase', ul: ['Saca todo de la bolsa: el bōgu húmedo en una bolsa cerrada se llena de moho.', 'Deja el men boca abajo con los faldones abiertos, y el kote estirado, en un sitio ventilado y a la sombra.', 'No lo secas al sol directo ni sobre un radiador (se agrieta el cuero y se deforma el bambú).', 'Seca bien el interior del men y de los kote antes de guardarlos.'] },
          { h: 'Revisión periódica', ul: ['Cordones del men y del dō: sin deshilachar.', 'Cosido del kote y del men: sin hilos sueltos.', 'Shinai: ver lección del shinai (astillas, nakayui, tsuru).'] },
          { h: 'Limpieza', p: 'La mayoría de los fabricantes aconsejan limpiar el bōgu con un paño ligeramente húmedo y no sumergirlo. El keikogi y el hakama se lavan según instrucciones. Si tienes dudas, pregunta qué recomienda tu dōjō.' },
          { tip: 'Un tenugui limpio en cada clase es la mejor "limpieza" del men: absorbe el sudor antes de que llegue al acolchado.' }
        ],
        terms: [['Tenugui', 'paño'], ['Men-buton', 'faldones']],
        practice: ['Haz un hueco en casa donde pueda secarse el equipo a la sombra y bien ventilado.']
      }
    ]
  },

  {
    id: 'kihon', name: 'Kihon · Base y postura', jp: '基本', seal: '基', icon: 'feet',
    desc: 'Postura, guardia, agarre del shinai, desplazamientos de pies, distancia y espíritu. Aquí se construye todo el kendō.',
    lessons: [
      {
        id: 'shisei', t: 'Shisei: la postura', jp: '姿勢', sub: 'Todo empieza en la espalda',
        art: ['solo:shisei'],
        intro: 'Una buena postura te da equilibrio, potencia y una apariencia de calma. Es lo primero que corrige un sensei y lo último que se termina de pulir.',
        blocks: [
          { h: 'Los puntos clave', ul: ['Cabeza recta, mentón ligeramente recogido, mirada al frente (enzan-no-metsuke: como mirando una montaña lejana).', 'Cuello y hombros relajados, sin encoger.', 'Espalda recta, sin arquear la zona lumbar ni sacar el pecho.', 'Cadera a plomo sobre los pies, abdomen firme.', 'Rodillas suaves, nunca bloqueadas.'] },
          { h: 'Errores muy comunes', ul: ['Inclinarse hacia delante al golpear (mirar el suelo).', 'Subir los hombros cuando te pones nervioso.', 'Dejar caer el trasero hacia atrás.', 'Mirar el shinai o los pies del rival en lugar de a sus ojos.'] },
          { h: 'Ki-ken-tai-ichi', p: 'El kendō exige que el espíritu (ki), la espada (ken) y el cuerpo (tai) vayan a la vez. Sin buena postura, el cuerpo llega tarde o la espada desvía y el golpe no cuenta.' },
          { tip: 'Practica pegado a una pared: talones, glúteos, hombros y cabeza rozan la pared. Así notas lo que es "recto" de verdad. Después da un paso hacia delante conservando esa sensación.' }
        ],
        terms: [['Shisei', 'postura'], ['Metsuke', 'dirección de la mirada'], ['Enzan-no-metsuke', 'mirada de montaña lejana'], ['Ki-ken-tai-ichi', 'espíritu, espada y cuerpo como uno']],
        practice: ['2 minutos contra la pared con postura recta, respirando por el abdomen.', 'Grábate de lado y revisa si espalda y cabeza están alineadas.']
      },
      {
        id: 'tenouchi', t: 'Tenouchi: cómo se agarra el shinai', jp: '手の内', sub: 'La mano izquierda manda',
        art: ['grip'],
        intro: 'El agarre decide si tu golpe corta o solo "pega". El tenouchi correcto se siente suave en reposo y se aprieta solo en el instante del impacto, como al escurrir una toalla.',
        blocks: [
          { h: 'Posición de las manos', ul: ['Mano izquierda: en el extremo de la tsuka, con el dedo meñique pegado al tsuka-gashira (que no sobresalga).', 'Mano derecha: a un puño de distancia de la izquierda, justo por encima.', 'El tsuru queda arriba. El lado de golpe (filo) mira hacia abajo.'] },
          { h: 'Presión', ul: ['Meñique y anular de cada mano: son los que sujetan, con firmeza moderada.', 'Corazón: media presión.', 'Índice y pulgar: sueltos, sin tensión. Si los aprietas, la muñeca se bloquea.', 'La mano izquierda guía y da fuerza; la derecha acompaña. Si la derecha manda, el golpe sale torcido.'] },
          { h: 'El truco de la toalla', p: 'Imagina que tienes una toalla húmeda y la escurres al golpear: el agarre se aprieta en el último instante (tenouchi no shibori), y vuelve a relajarse justo después. Un agarre siempre tenso quema los antebrazos y frena el golpe.' },
          { warn: 'Es lo que más se corrige a principiantes. No te frustres: tus manos aprenden con repetición, no con fuerza. Pide a tu sensei que mire tu agarre cada vez que puedas.' }
        ],
        terms: [['Tenouchi', 'agarre'], ['Tsuka', 'empuñadura'], ['Tsuru', 'cuerda del shinai'], ['Hasuji', 'dirección del filo']],
        practice: ['Coge el shinai en casa y comprueba cada dedo uno a uno: meñique y anular firmes, índice y pulgar sueltos.', 'Haz 20 golpes lentos fijándote solo en apretar al final y relajar después.']
      },
      {
        id: 'chudan', t: 'Chūdan-no-kamae', jp: '中段の構え', sub: 'La guardia base',
        art: ['solo:chudan'],
        intro: 'Chūdan es la guardia fundamental del kendō: equilibrada, lista para atacar y defender. Casi todo lo que hagas parte de ella y vuelve a ella.',
        blocks: [
          { h: 'Cómo colocarte', ol: ['Pie derecho delante, pie izquierdo detrás, con los pies paralelos y separados un puño lateralmente.', 'El talón izquierdo ligeramente levantado (lo justo para pasar una hoja de papel por debajo).', 'Rodillas suaves, peso repartido y cadera al frente.', 'Shinai al frente con ambas manos; el puño izquierdo, a la altura del ombligo y a un puño de distancia del abdomen.', 'El kensen apunta a la garganta del rival (o entre sus ojos, según tu escuela).', 'Codos ligeramente doblados, hombros relajados.'] },
          { h: 'Por qué funciona', p: 'Con el kensen apuntando a la garganta, defiendes tu centro y presionas al rival (seme). Desde ahí, puedes golpear men, kote o dō con un pequeño movimiento. Es una guardia "viva": no es estar parado, es estar preparado.' },
          { h: 'Errores comunes', ul: ['Talón izquierdo demasiado alto o apoyado del todo.', 'Pies demasiado separados o demasiado en línea.', 'Shinai demasiado bajo o demasiado alto.', 'Mano izquierda desplazada hacia un lado.', 'Tensión en los brazos y hombros.'] },
          { tip: 'Cierra los ojos un momento en chūdan y comprueba dónde sientes el peso. Después ábrelos y comprueba que no te has movido: eso es equilibrio.' }
        ],
        terms: [['Chūdan-no-kamae', 'guardia media'], ['Kensen', 'punta de la espada'], ['Seme', 'presión'], ['Kamae', 'guardia']],
        practice: ['Mantén chūdan 1 minuto sin moverte, respirando por el abdomen. Repite 3 veces.', 'Delante del espejo comprueba punta, mano izquierda, talón izquierdo y hombros.']
      },
      {
        id: 'kamae-5', t: 'Los cinco kamae', jp: '五行の構え', sub: 'Chūdan, jōdan, gedan, hassō y waki',
        art: ['kamae5'],
        intro: 'El kendō reconoce cinco guardias tradicionales. Chūdan es la que se usa casi siempre; las demás son variantes con intenciones distintas.',
        blocks: [
          { h: 'Chūdan · media', p: 'Kensen a la garganta. Equilibrada: ni ataca ni defiende en exceso. Es la de todas las clases y la que se enseña primero.' },
          { h: 'Jōdan · alta', p: 'Shinai sobre la cabeza, que invita a atacar el cuerpo con un golpe decidido. Es agresiva y exige una gran confianza. Se enseña a nivel intermedio-avanzado.' },
          { h: 'Gedan · baja', p: 'Kensen hacia las rodillas del rival. Se usa para provocar o recuperar iniciativa. Es poco común en combate.' },
          { h: 'Hassō · de ocho lados', p: 'Shinai vertical junto al lado derecho de la cara, con las manos a la altura del pecho. Prepara un golpe directo y suele usarse en kata.' },
          { h: 'Waki · lateral', p: 'Shinai oculto detrás, en el lado derecho, con la punta baja. Esconde la longitud del arma para engañar la distancia.' },
          { tip: 'Todos los kamae vuelven a chūdan. Como principiante, dedica el 95% a chūdan; el resto es para entender el kendō y para el kata.' }
        ],
        terms: [['Chūdan-no-kamae', 'media'], ['Jōdan-no-kamae', 'alta'], ['Gedan-no-kamae', 'baja'], ['Hassō-no-kamae', 'ocho lados'], ['Waki-gamae', 'lateral']],
        practice: ['Identifica cada guardia en un vídeo de combate o de kata.']
      },
      {
        id: 'ashi-sabaki', t: 'Ashi-sabaki: el trabajo de pies', jp: '足捌き', sub: 'Tus pies hacen el 70% del kendō',
        art: ['footwork:okuri', 'footwork:ayumi', 'footwork:hiraki', 'footwork:tsugi', 'footwork:fumikomi'],
        intro: 'Los pies deciden si llegas, si llegas a tiempo y si puedes volver. En kendō no se camina: se desliza. Aprende estos cinco desplazamientos.',
        blocks: [
          { h: 'Okuri-ashi · el básico', p: 'El pie delantero avanza y el trasero le sigue inmediatamente, manteniendo siempre la misma distancia entre los pies. Se hace deslizando los pies por el suelo con las plantas rozando. Es el desplazamiento de casi todos los golpes.' },
          { h: 'Ayumi-ashi · caminar', p: 'Caminar normal alternando pies. Se usa al entrar y salir del dōjō y en algunas situaciones de kata.' },
          { h: 'Hiraki-ashi · en diagonal', p: 'Para esquivar a un lado: el pie del lado hacia el que te mueves sale en diagonal y el otro le sigue. Se usa en nuki-waza (esquivar) y en kata.' },
          { h: 'Tsugi-ashi · el paso largo', p: 'Cuando la distancia es larga: el pie trasero se acerca al delantero y éste avanza de golpe, y el trasero vuelve a seguirle. Permite acercarte rápido sin mostrar la intención.' },
          { h: 'Fumikomi-ashi · la pisada', p: 'Al golpear, el pie delantero se planta con fuerza y el trasero le sigue de inmediato. Da potencia, ritmo al golpe y el sonido que acompaña al kiai. La pisada se da con la planta plana, no con el talón.' },
          { warn: 'Practica los pies despacio y sin shinai primero. Si fuerzas el fumikomi sin control puedes hacerte daño en el talón o la rodilla.' }
        ],
        terms: [['Ashi-sabaki', 'trabajo de pies'], ['Okuri-ashi', 'pies que se siguen'], ['Ayumi-ashi', 'caminar'], ['Hiraki-ashi', 'pasos en diagonal'], ['Tsugi-ashi', 'paso largo'], ['Fumikomi-ashi', 'pisada']],
        practice: ['10 repeticiones de okuri-ashi hacia delante y 10 hacia atrás, sin shinai, mirando a un punto al frente.', 'Mientras haces okuri-ashi, fíjate en que la cabeza no sube ni baja: debe deslizarse a la misma altura.']
      },
      {
        id: 'maai', t: 'Ma-ai: la distancia', jp: '間合', sub: 'Saber dónde estás respecto al rival',
        art: ['maai'],
        intro: 'La distancia es una de las claves del kendō: la que te permite golpear, y la que te deja sin defensa. Hay tres distancias básicas.',
        blocks: [
          { h: 'Las tres distancias', ul: ['Tō-ma (distancia larga): ninguno puede golpear sin dar al menos dos pasos.', 'Issoku-ittō-no-ma-ai: con un paso, un golpe. Los kensen se cruzan unos centímetros. Es la distancia base de combate.', 'Chika-ma (distancia corta): los shinai se cruzan por la mitad y se puede golpear sin pasos. Es muy peligrosa.'] },
          { h: 'Entrar y salir', p: 'La clave del kendō no es golpear, sino entrar y salir de la distancia de golpeo en el momento correcto. Mover los pies para entrar, y engañar al rival para que se mueva, es lo que se llama seme.' },
          { h: 'Cómo practicarlo', ul: ['Con un compañero, practica entrar y salir de issoku-ittō-no-ma-ai sin golpear, con okuri-ashi.', 'Observa cuándo el rival cambia el peso o se levanta: es el momento de golpear (debana).', 'Para la distancia, la clave es la mirada y la postura, no el shinai.'] },
          { tip: 'Cada persona tiene su "distancia": las de brazos largos pueden golpear desde más lejos. Aprende la tuya pegada a la del compañero.' }
        ],
        terms: [['Ma-ai', 'distancia'], ['Issoku-ittō-no-ma-ai', 'distancia de golpeo'], ['Tō-ma', 'distancia larga'], ['Chika-ma', 'distancia corta'], ['Seme', 'presión']],
        practice: ['Con un compañero: 10 entradas y salidas de issoku-ittō-no-ma-ai sin golpear, sintiendo cuándo "llegas".']
      },
      {
        id: 'kiai-zanshin', t: 'Kiai y zanshin', jp: '気合・残心', sub: 'El espíritu del golpe',
        intro: 'Un golpe sin kiai ni zanshin no cuenta. Son los dos extremos del golpe: la energía con la que empiezas y la atención con la que terminas.',
        blocks: [
          { h: 'Kiai', ul: ['Es un grito corto, grave y desde el abdomen, que acompaña al golpe: "Men!", "Kote!", "Dō!". No es gritar por gritar.', 'Tiene que salir justo cuando golpeas (no antes ni después) y sonar firme.', 'Si no tienes costumbre de gritar, empieza por emitir un sonido suave y ve ganando volumen.'] },
          { h: 'Zanshin', ul: ['"Mente que permanece": tras el golpe, no te relajas. Pasas al lado del rival (o te alejas) y mantienes la postura, la mirada y la alerta.', 'En kendō, un buen golpe sin zanshin puede ser anulado por los árbitros.', 'Termina en chūdan, de cara al rival, con el kensen apuntándole.'] },
          { h: 'Cómo se entrena', ul: ['Practica kiai en suburi: cada golpe con un grito en el momento del impacto.', 'Tras cada golpe, termina con la guardia y mira a tu compañero.', 'No te relajes hasta que el sensei diga "yame".'] },
          { tip: 'Si gritas bien, el golpe sale mejor: el kiai activa el abdomen y alinea tu cuerpo. Quien no grita suele golpear flojo y tarde.' }
        ],
        terms: [['Kiai', 'grito de energía'], ['Zanshin', 'alerta tras el golpe'], ['Ki-ken-tai-ichi', 'espíritu, espada y cuerpo como uno']],
        practice: ['Practica 20 golpes de suburi con kiai firme y mirada al frente.', 'Tras cada golpe imaginario, termina en chūdan y respira.']
      }
    ]
  }
);
