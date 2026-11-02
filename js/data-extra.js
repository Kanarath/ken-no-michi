/* Datos extra: partes interactivas, quiz, rutinas, consejos, niveles */
window.KD = window.KD || {};

/* ---------- Partes (ilustraciones interactivas) ---------- */
KD.parts = {
  bogu: {
    men: { n: 'Men', jp: '面', d: 'Casco. Protege cabeza, cara y cuello. Es también la zona de golpe más importante.' },
    mengane: { n: 'Men-gane', jp: '面金', d: 'Rejilla metálica del men. Deja una ventana (mono-mi) para ver al rival.' },
    menbuton: { n: 'Men-buton', jp: '面布団', d: 'Faldones acolchados que protegen hombros y cuello (y el borde del casco).' },
    menhimo: { n: 'Men-himo', jp: '面紐', d: 'Cordones del men: se atan detrás de la cabeza con un nudo firme.' },
    tsukidare: { n: 'Tsuki-dare', jp: '突き垂', d: 'Pieza colgante bajo la rejilla que protege la garganta: el objetivo del tsuki.' },
    kote: { n: 'Kote', jp: '小手', d: 'Guantes acolchados que protegen manos y muñecas.' },
    do: { n: 'Dō', jp: '胴', d: 'Coraza del torso. Protege costillas y abdomen. Su lado derecho es la zona de golpe de dō.' },
    tare: { n: 'Tare', jp: '垂れ', d: 'Faldón de cintura con tres paneles. El central lleva una etiqueta (nafuda) con tu nombre.' },
    keikogi: { n: 'Keikogi', jp: '稽古着', d: 'Chaqueta de entrenamiento, bajo el bōgu.' },
    hakama: { n: 'Hakama', jp: '袴', d: 'Falda-pantalón de pliegues, sobre la que se ata el tare.' }
  },
  wear: {
    keikogi: { n: 'Keikogi', jp: '稽古着', d: 'Chaqueta de algodón. Se cierra con la solapa izquierda sobre la derecha.' },
    hakama: { n: 'Hakama', jp: '袴', d: 'Cinco pliegues delanteros (se asocian tradicionalmente a virtudes) y una placa rígida trasera (koshi-ita).' },
    himo: { n: 'Himo', jp: '紐', d: 'Cordones del hakama. El atado es un pequeño arte: pídele a tu sensei que te lo enseñe en persona.' }
  },
  shinai: {
    take: { n: 'Take', jp: '竹', d: 'Cada una de las cuatro tiras de bambú que forman el shinai.' },
    tsuka: { n: 'Tsuka', jp: '柄', d: 'Empuñadura de cuero.' },
    tsukagashira: { n: 'Tsuka-gashira', jp: '柄頭', d: 'Extremo posterior de la empuñadura; la mano izquierda se apoya en él.' },
    tsuba: { n: 'Tsuba', jp: '鍔', d: 'Guarda circular que protege las manos.' },
    tsubadome: { n: 'Tsuba-dome', jp: '鍔止め', d: 'Aro de goma que fija la tsuba en su sitio.' },
    tsuru: { n: 'Tsuru', jp: '弦', d: 'Cuerda que recorre un lado del shinai. Va siempre arriba: marca el lomo. El filo es el lado contrario.' },
    nakayui: { n: 'Nakayui', jp: '中結', d: 'Cordón de cuero que une las cuatro tiras hacia un cuarto de la longitud desde la punta.' },
    sakigawa: { n: 'Saki-gawa', jp: '先革', d: 'Capuchón de cuero de la punta. Contiene el saki-gomu.' },
    datotsubu: { n: 'Datotsu-bu', jp: '打突部', d: 'Tercio superior del shinai (de la punta hacia el nakayui): la parte con la que se golpea.' },
    monouchi: { n: 'Monouchi', jp: '物打ち', d: 'Zona óptima de impacto dentro del datotsu-bu, hacia la punta.' }
  },
  zones: {
    men: { n: 'Men (shōmen)', jp: '面', d: 'Parte central superior de la cabeza.' },
    yokomen: { n: 'Yokomen', jp: '横面', d: 'Laterales de la cabeza (izquierdo y derecho). Se golpea en diagonal.' },
    kote: { n: 'Kote', jp: '小手', d: 'Muñeca derecha del rival (y la izquierda cuando está al descubierto, por ejemplo en jōdan).' },
    do: { n: 'Dō', jp: '胴', d: 'Costado del torso: sobre todo el derecho (migi-dō).' },
    tsuki: { n: 'Tsuki', jp: '突き', d: 'Garganta (tsuki-dare). Solo con nivel y supervisión.' }
  }
};
KD.partsTitles = { bogu: 'Toca una parte del bōgu', wear: 'Toca una prenda', shinai: 'Toca una parte del shinai', zones: 'Toca una zona de golpeo' };

/* ---------- Quiz de texto ---------- */
KD.quizCats = { vocab: 'Vocabulario', equipo: 'Equipo', postura: 'Postura y pies', tecnica: 'Técnicas', shiai: 'Shiai', etiqueta: 'Etiqueta', mente: 'Mente', visual: 'Visual' };
(function () {
  const out = [];
  const hash = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; return h.toString(36); };
  const Q = (cat, q, correct, wrong, why, lesson) => out.push({ id: 'q' + hash(q), cat, q, a: [correct].concat(wrong), why: why || '', lesson: lesson || '' });
  // Vocabulario
  Q('vocab', '¿Qué significa "kendō"?', 'El camino de la espada', ['El arte de la guerra', 'La lucha con bastón', 'La danza con espada'], 'Ken = espada, dō = camino.', 'que-es-kendo');
  Q('vocab', '¿Qué es el shinai?', 'La espada de bambú', ['La armadura', 'La espada de madera', 'El pantalón tradicional'], 'Shinai (竹刀) significa "espada de bambú".', 'shinai');
  Q('vocab', '¿Qué es el bokutō (o bokken)?', 'La espada de madera', ['La espada de bambú', 'El casco', 'La guarda del shinai'], 'Se usa sobre todo para los kata.', 'kata');
  Q('vocab', '¿Qué es el "men"?', 'El casco (y la cabeza como zona de golpe)', ['El guante', 'La coraza', 'El faldón'], '', 'bogu');
  Q('vocab', '¿Qué es el "kote"?', 'El guante (y la muñeca como zona de golpe)', ['El casco', 'La coraza', 'El pantalón'], '', 'bogu');
  Q('vocab', '¿Qué es el "dō"?', 'La coraza del torso', ['El casco', 'El guante', 'La guarda del shinai'], '', 'bogu');
  Q('vocab', '¿Qué es el "tare"?', 'El faldón de la cintura', ['El guante', 'El paño de la cabeza', 'La cinta de la coraza'], '', 'bogu');
  Q('vocab', '¿Qué significa "sensei"?', 'Maestro, instructor', ['Compañero', 'Alumno nuevo', 'Árbitro'], 'Literalmente "el que nació antes".', 'etiqueta-dojo');
  Q('vocab', '¿Qué es el dōjō?', 'El lugar donde se practica el camino', ['Un tipo de golpe', 'Un saludo', 'Una competición'], '', 'etiqueta-dojo');
  Q('vocab', '¿Qué significa "rei"?', 'Saludo, respeto', ['Golpe', 'Guardia', 'Distancia'], '', 'saludos');
  Q('vocab', '¿Qué es "seiza"?', 'Estar sentado sobre los talones', ['Un saludo de pie', 'Una guardia', 'Un tipo de golpe'], '', 'saludos');
  Q('vocab', '¿Qué es "mokusō"?', 'Una breve meditación en silencio', ['Un golpe', 'Un tipo de armadura', 'Una orden del árbitro'], '', 'saludos');
  Q('vocab', '¿Qué es el "kiai"?', 'El grito de energía que acompaña al golpe', ['La guardia', 'El tipo de agarre', 'El saludo'], '', 'kiai-zanshin');
  Q('vocab', '¿Qué es el "zanshin"?', 'La alerta que se mantiene tras el golpe', ['El golpe a la garganta', 'El saludo final', 'La distancia larga'], '', 'kiai-zanshin');
  Q('vocab', '¿Qué es el "ma-ai"?', 'La distancia entre los combatientes', ['La guardia', 'El agarre', 'El paso de pies'], '', 'maai');
  Q('vocab', '¿Qué es el "kamae"?', 'La guardia', ['El saludo', 'El golpe', 'La armadura'], '', 'chudan');
  Q('vocab', '¿Qué es el "suburi"?', 'Golpes al aire sin compañero', ['Golpes con un compañero', 'Un saludo', 'Una competición'], '', 'suburi');
  Q('vocab', '¿Qué es "kirikaeshi"?', 'Serie de golpes alternos a yokomen con avance y retroceso', ['Un golpe a la garganta', 'Una esquiva', 'Un tipo de guardia'], '', 'kirikaeshi');
  Q('vocab', '¿Quién es el "motodachi"?', 'Quien recibe los ataques y guía al compañero', ['Quien ataca', 'El árbitro', 'El maestro del dōjō'], '', 'tipos-practica');
  Q('vocab', '¿Qué es el "hakama"?', 'La falda-pantalón con pliegues', ['La chaqueta', 'El casco', 'El guante'], '', 'keikogi-hakama');
  Q('vocab', '¿Qué es el "keikogi"?', 'La chaqueta de entrenamiento', ['El pantalón', 'El faldón', 'El casco'], '', 'keikogi-hakama');
  Q('vocab', '¿Qué es el "kata"?', 'Una forma preestablecida de dos personas', ['Un tipo de golpe', 'Una competición', 'Un ejercicio de suburi'], '', 'kata');
  Q('vocab', '¿Qué es el "seme"?', 'La presión que se ejerce sobre el rival', ['Un golpe', 'Un saludo', 'Una armadura'], '', 'seme');
  Q('vocab', '¿Qué significa "keiko"?', 'Práctica, entrenamiento', ['Competición', 'Saludo', 'Armadura'], '', 'tipos-practica');
  Q('vocab', '¿Qué significa "kensen"?', 'La punta de la espada', ['La guarda', 'La empuñadura', 'La cuerda del shinai'], '', 'chudan');
  Q('vocab', '¿Qué número es "san"?', '3', ['2', '5', '8'], 'Ichi 1, ni 2, san 3, shi/yon 4, go 5…', '');
  Q('vocab', '¿Qué número es "go"?', '5', ['4', '6', '10'], '', '');
  Q('vocab', '¿Qué número es "roku"?', '6', ['7', '9', '3'], '', '');
  Q('vocab', '¿Qué número es "hachi"?', '8', ['7', '9', '10'], '', '');
  Q('vocab', '¿Qué número es "jū"?', '10', ['9', '100', '5'], '', '');
  Q('vocab', '¿Qué se dice al empezar con un compañero?', 'Onegaishimasu', ['Arigatō gozaimashita', 'Hajime', 'Yame'], 'Es una forma de pedir practicar juntos.', 'etiqueta-dojo');
  Q('vocab', '¿Qué se dice al terminar con un compañero?', 'Arigatō gozaimashita', ['Onegaishimasu', 'Hajime', 'Mate'], '', 'etiqueta-dojo');
  // Equipo
  Q('equipo', '¿Cuántas tiras de bambú tiene un shinai?', '4', ['2', '6', '8'], '', 'shinai');
  Q('equipo', '¿Qué lado del shinai es el lomo?', 'El lado del tsuru (la cuerda)', ['El lado opuesto al tsuru', 'El lado de la tsuba', 'Ninguno: es simétrico'], 'El tsuru va arriba, y el filo es el lado contrario.', 'shinai');
  Q('equipo', '¿Qué parte del shinai se usa para golpear?', 'El tercio superior (datotsu-bu)', ['La empuñadura', 'La tsuba', 'El nakayui'], 'Su zona óptima es el monouchi.', 'shinai');
  Q('equipo', '¿Para qué sirve la tsuba?', 'Para proteger las manos', ['Para aguantar el shinai', 'Para golpear', 'Para decorar'], '', 'shinai');
  Q('equipo', '¿Qué es el nakayui?', 'El cordón de cuero que une las tiras', ['La empuñadura', 'El capuchón de la punta', 'La guarda'], '', 'shinai');
  Q('equipo', '¿Qué protege el tsuki-dare?', 'La garganta', ['La nuca', 'La muñeca', 'El costado'], '', 'bogu');
  Q('equipo', '¿Cuál es el orden habitual para vestirse el bōgu?', 'Tare, dō, men, kote', ['Kote, men, dō, tare', 'Men, kote, tare, dō', 'Dō, tare, kote, men'], 'El kote se pone el último.', 'vestirse');
  Q('equipo', '¿Cómo se cierra el keikogi?', 'Solapa izquierda sobre la derecha', ['Solapa derecha sobre la izquierda', 'Da igual', 'Con botones'], 'Al revés se reserva para funerales.', 'keikogi-hakama');
  Q('equipo', '¿Cuántos pliegues tiene la parte delantera del hakama?', '5', ['3', '7', '9'], '', 'keikogi-hakama');
  Q('equipo', '¿Dónde se lleva el tenugui?', 'Sobre la cabeza, bajo el men', ['En la cintura', 'Sobre el hombro', 'En la mano'], '', 'vestirse');
  Q('equipo', '¿Qué hay que revisar antes de usar un shinai?', 'Astillas y que no se muevan nakayui, tsuru y tsuba', ['Que huela bien', 'Que pese 2 kg', 'Que sea de colores'], '', 'shinai');
  Q('equipo', '¿Cómo se debe guardar el bōgu húmedo tras clase?', 'Abierto y ventilado, a la sombra', ['Dentro de la bolsa cerrada', 'Al sol directo', 'Sobre un radiador'], '', 'cuidado-equipo');
  // Postura y pies
  Q('postura', '¿Cuáles son las cuatro zonas válidas de golpeo?', 'Men, kote, dō y tsuki', ['Men, hombro, dō y pierna', 'Kote, pierna, pecho y espalda', 'Men, kote, nuca y pie'], '', 'datotsu-yuko');
  Q('postura', '¿Qué guardia es la base de casi todo el kendō?', 'Chūdan-no-kamae', ['Jōdan-no-kamae', 'Gedan-no-kamae', 'Waki-gamae'], '', 'chudan');
  Q('postura', '¿A dónde apunta el kensen en chūdan?', 'A la garganta del rival', ['Al suelo', 'A la cabeza del rival', 'Al cielo'], '', 'chudan');
  Q('postura', '¿Cuántas guardias tradicionales hay?', '5', ['3', '4', '7'], 'Chūdan, jōdan, gedan, hassō y waki.', 'kamae-5');
  Q('postura', '¿Qué pie va delante en chūdan?', 'El derecho', ['El izquierdo', 'Ninguno: los dos igual', 'Depende del día'], '', 'chudan');
  Q('postura', '¿Qué talón se levanta ligeramente en chūdan?', 'El izquierdo', ['El derecho', 'Los dos', 'Ninguno'], '', 'chudan');
  Q('postura', '¿Qué mano manda en el agarre del shinai?', 'La izquierda', ['La derecha', 'Las dos igual', 'Ninguna'], '', 'tenouchi');
  Q('postura', '¿Qué dedos sujetan con más firmeza?', 'Meñique y anular', ['Índice y pulgar', 'Pulgar y corazón', 'Índice y corazón'], '', 'tenouchi');
  Q('postura', '¿Qué es okuri-ashi?', 'El pie delantero avanza y el trasero le sigue', ['Caminar normal', 'Un paso en diagonal', 'Un salto'], '', 'ashi-sabaki');
  Q('postura', '¿Qué es fumikomi-ashi?', 'La pisada fuerte con el pie delantero al golpear', ['Un paso hacia atrás', 'Un paso lateral', 'Caminar normal'], '', 'ashi-sabaki');
  Q('postura', '¿Qué es tsugi-ashi?', 'El pie trasero se acerca al delantero y éste avanza', ['Un salto', 'Un paso en diagonal', 'Caminar'], '', 'ashi-sabaki');
  Q('postura', '¿Qué es hiraki-ashi?', 'Un paso en diagonal para esquivar', ['La pisada al golpear', 'Caminar normal', 'Un paso atrás'], '', 'ashi-sabaki');
  Q('postura', '¿Qué es issoku-ittō-no-ma-ai?', 'La distancia desde la que con un paso se golpea', ['La distancia larga', 'La distancia corta', 'El saludo'], '', 'maai');
  Q('postura', '¿Qué significa ki-ken-tai-ichi?', 'Espíritu, espada y cuerpo como uno', ['Cuerpo, mente y alma', 'Fuerza, velocidad y técnica', 'Golpe, esquiva y respuesta'], '', 'shisei');
  // Técnicas
  Q('tecnica', '¿Qué es "furikaburi"?', 'Subir el shinai sobre la cabeza antes de golpear', ['Un golpe a la garganta', 'Un saludo', 'Un paso lateral'], '', 'men');
  Q('tecnica', '¿Cuál de estos NO es requisito del golpe válido (yūkō-datotsu)?', 'Que el rival retroceda', ['Que el golpe sea con la parte correcta', 'Que haya zanshin', 'Que haya kiai'], '', 'datotsu-yuko');
  Q('tecnica', '¿Qué es "kote-men"?', 'Un kote seguido de un men', ['Un golpe a la garganta', 'Un saludo', 'Una guardia'], '', 'kote-men');
  Q('tecnica', '¿Qué es "hiki-waza"?', 'Golpes que se hacen mientras te retiras', ['Golpes en avance', 'Golpes al aire', 'Esquivas'], '', 'hiki-waza');
  Q('tecnica', '¿Qué es "debana-waza"?', 'Golpear justo cuando el rival empieza a moverse', ['Golpear tras su ataque', 'Golpear al aire', 'Esquivar'], '', 'harai-debana');
  Q('tecnica', '¿Qué es "harai-waza"?', 'Apartar el shinai del rival y golpear', ['Esquivar', 'Golpear al aire', 'Retirarse'], '', 'harai-debana');
  Q('tecnica', '¿Qué es "nuki-waza"?', 'Esquivar el golpe y contraatacar', ['Desviar con el shinai', 'Golpear hacia abajo', 'Atacar primero'], '', 'oji-waza');
  Q('tecnica', '¿Qué es "suriage-waza"?', 'Desviar el golpe subiendo el shinai y contraatacar', ['Esquivar con el cuerpo', 'Golpear al suelo', 'Retroceder'], '', 'oji-waza');
  Q('tecnica', '¿Qué es "kaeshi-waza"?', 'Bloquear y devolver el golpe con otro por otro lado', ['Esquivar', 'Golpear el shinai del rival hacia abajo', 'Atacar primero'], '', 'oji-waza');
  Q('tecnica', '¿Qué es "go-no-sen"?', 'Responder tras el ataque del rival', ['Anticiparse a su intención', 'Atacar cuando empieza a moverse', 'Retirarse'], '', 'sen');
  Q('tecnica', '¿Qué es "sen-no-sen"?', 'Atacar justo cuando el rival se mueve para atacar', ['Responder tras su ataque', 'No atacar nunca', 'Esquivar'], '', 'sen');
  Q('tecnica', '¿Qué es "kakari-geiko"?', 'Ataque continuo y enérgico, sin pausa', ['Práctica libre entre iguales', 'Golpes al aire', 'Ejercicio de kata'], '', 'tipos-practica');
  Q('tecnica', '¿Qué es "tsubazeriai"?', 'Empuje con las tsuba en contacto', ['Un golpe a la garganta', 'Un saludo', 'Un tipo de guardia'], '', 'tai-atari');
  Q('tecnica', '¿Cuántas formas tiene el Nihon Kendō Kata?', '10 (7 con tachi y 3 con kodachi)', ['5', '12', '3'], '', 'kata');
  Q('tecnica', '¿Quién ataca y "enseña" en el kata?', 'Uchidachi', ['Shidachi', 'Motodachi', 'Sensei'], '', 'kata');
  // Shiai
  Q('shiai', '¿Cuánto dura normalmente un combate de adultos?', '5 minutos', ['1 minuto', '15 minutos', '30 minutos'], '', 'reglas-shiai');
  Q('shiai', '¿Cuántos árbitros hay en un combate?', '3', ['1', '2', '5'], 'Un principal (shushin) y dos auxiliares (fukushin).', 'arbitraje');
  Q('shiai', '¿Cuántos árbitros deben levantar la bandera para un ippon?', '2 de 3', ['1 de 3', '3 de 3', 'El principal solo'], '', 'reglas-shiai');
  Q('shiai', '¿Qué sucede con dos faltas (hansoku)?', 'El rival recibe un punto', ['Se pierde el combate', 'No pasa nada', 'Se repite el combate'], '', 'reglas-shiai');
  Q('shiai', '¿Qué es "jōgai"?', 'Salir del área de combate', ['Un golpe', 'Una guardia', 'Un saludo'], '', 'reglas-shiai');
  Q('shiai', '¿Qué significa "yame"?', 'Parad', ['Comenzad', 'Esperad', 'Separaos'], '', 'arbitraje');
  Q('shiai', '¿Qué significa "hajime"?', 'Comenzad', ['Parad', 'Fin', 'Separaos'], '', 'arbitraje');
  Q('shiai', '¿Qué significa "wakare"?', 'Separaos', ['Comenzad', 'Parad', 'Empate'], '', 'arbitraje');
  Q('shiai', '¿Qué es "enchō"?', 'La prórroga', ['El empate', 'La falta', 'El saludo'], '', 'reglas-shiai');
  Q('shiai', '¿Qué es "hantei"?', 'Decisión de los árbitros por votación', ['Una falta', 'Una guardia', 'Un saludo'], '', 'arbitraje');
  // Etiqueta
  Q('etiqueta', '¿Hacia dónde se saluda al entrar al dōjō?', 'Hacia el shōmen (frente del dōjō)', ['Hacia la puerta', 'Hacia el sensei solo', 'No se saluda'], '', 'etiqueta-dojo');
  Q('etiqueta', '¿Qué rodilla baja primero al sentarte en seiza?', 'La izquierda', ['La derecha', 'Las dos a la vez', 'Da igual'], '', 'saludos');
  Q('etiqueta', '¿Qué haces cuando oyes "yame"?', 'Paras de inmediato y vuelves a tu posición', ['Terminas el golpe', 'Sigues', 'Te vas'], '', 'arbitraje');
  Q('etiqueta', '¿Se puede usar el shinai como bastón?', 'No, nunca', ['Sí, si no hay nadie', 'Sí, en el calentamiento', 'Solo los veteranos'], '', 'etiqueta-dojo');
  Q('etiqueta', '¿Qué haces si te corrigen algo en clase?', 'Escuchas, respondes "hai" y lo aplicas', ['Discutes', 'Lo ignoras', 'Te vas'], '', 'etiqueta-dojo');
  // Mente
  Q('mente', '¿Cuál NO es uno de los cuatro males (shikai)?', 'Orgullo', ['Sorpresa', 'Miedo', 'Duda'], 'Son sorpresa, miedo, duda y confusión.', 'mentalidad');
  Q('mente', '¿Qué es "fudōshin"?', 'La mente inmóvil y firme', ['La mente en blanco', 'La mente curiosa', 'La mente alegre'], '', 'mentalidad');
  Q('mente', '¿Qué es "mushin"?', 'Una mente sin ataduras', ['Una mente enfadada', 'Una mente dormida', 'Una mente rápida'], '', 'mentalidad');
  Q('mente', '¿Qué significa "shu-ha-ri"?', 'Obedecer, romper los moldes y crear lo propio', ['Atacar, defender y huir', 'Saludar, practicar y despedir', 'Golpear, esquivar y devolver'], '', 'consejos');
  // Técnica: postura y guardias
  Q('postura', '¿A qué distancia lateral van los pies en chūdan?', 'Aproximadamente un puño', ['Un paso entero', 'Pegados', 'El ancho de los hombros'], '', 'chudan');
  Q('postura', '¿Cuánto se levanta el talón izquierdo en chūdan?', 'Lo justo para pasar una hoja de papel (1–2 cm)', ['Todo lo que se pueda', 'Nada, va apoyado', 'Unos 10 cm'], '', 'chudan');
  Q('postura', '¿Dónde va la mano izquierda en chūdan?', 'En el centro, a un puño del ombligo', ['A un lado del cuerpo', 'A la altura del pecho', 'Pegada al abdomen'], '', 'chudan');
  Q('postura', '¿Hacia dónde queda el tsuru en la guardia?', 'Hacia arriba', ['Hacia abajo', 'Hacia el rival', 'Hacia ti'], '', 'chudan');
  Q('postura', '¿Qué mano manda el shinai?', 'La izquierda', ['La derecha', 'Ambas igual', 'Depende del golpe'], '', 'tenouchi');
  Q('postura', '¿Qué se mira al rival en kendō?', 'Los ojos, con visión amplia', ['El shinai', 'Los pies', 'El blanco que vas a golpear'], '', 'metsuke');
  Q('postura', '¿Qué es enzan-no-metsuke?', 'Mirar al rival como a una montaña lejana', ['Mirar solo el kensen', 'Cerrar los ojos', 'Mirar el suelo'], '', 'metsuke');
  Q('postura', '¿Por dónde respiras en kendō?', 'Por el abdomen (tanden)', ['Por los hombros', 'Solo por la boca', 'Por el pecho alto'], '', 'respiracion');
  Q('postura', '¿Cuándo se espira con fuerza?', 'En el golpe, con el kiai', ['Al subir el shinai', 'Al saludar', 'Nunca'], '', 'respiracion');
  Q('postura', '¿Para qué sirve gedan?', 'Para provocar, esperar o recuperar iniciativa', ['Para atacar men', 'Para golpear tsuki', 'Para descansar'], '', 'gedan');
  Q('postura', '¿A dónde apunta el kensen en gedan?', 'A las rodillas del rival', ['A su garganta', 'Al cielo', 'A sus ojos'], '', 'gedan');
  Q('postura', '¿Cómo se sube el shinai en jōdan?', 'Por el centro hasta sobre la cabeza', ['Por un lado', 'Solo hasta el pecho', 'Hacia atrás de la espalda'], '', 'jodan');
  Q('postura', '¿Qué guardia mantiene el shinai vertical junto al lado derecho de la cara?', 'Hassō', ['Waki', 'Gedan', 'Chūdan'], '', 'hasso');
  Q('postura', '¿Qué guardia esconde la longitud del shinai?', 'Waki-gamae', ['Chūdan', 'Jōdan', 'Hassō'], '', 'waki');
  Q('postura', '¿Qué es taitō?', 'El shinai en la mano izquierda, al cinto', ['La guardia media', 'Un tipo de golpe', 'El saludo sentado'], '', 'taito-sonkyo');
  Q('postura', '¿Qué es nuki-tō?', 'Desenvainar (sacar el shinai)', ['Envainar', 'Un golpe', 'Una esquiva'], '', 'taito-sonkyo');
  Q('postura', '¿Qué es osame-tō?', 'Envainar (guardar el shinai)', ['Desenvainar', 'Un golpe', 'Un saludo'], '', 'taito-sonkyo');
  Q('postura', '¿Cómo debe ir la espalda en sonkyō?', 'Recta', ['Inclinada hacia delante', 'Arqueada', 'Apoyada en los talones'], '', 'taito-sonkyo');
  Q('postura', '¿Qué es hidari-jōdan?', 'Jōdan con el pie izquierdo delante', ['Jōdan con el pie derecho delante', 'Una guardia baja', 'Un golpe'], '', 'jodan');
  // Pies
  Q('postura', '¿Qué pie sale primero en okuri-ashi al avanzar?', 'El derecho (delantero)', ['El izquierdo', 'Los dos a la vez', 'Depende'], '', 'okuri-ashi');
  Q('postura', '¿Qué no debe pasar con los pies en okuri-ashi?', 'Que se crucen', ['Que se deslicen', 'Que el izquierdo siga al derecho', 'Que mantengan la distancia'], '', 'okuri-ashi');
  Q('postura', '¿Qué pasa con la cabeza al hacer okuri-ashi?', 'Se mantiene a la misma altura', ['Sube y baja', 'Se inclina', 'Se gira'], '', 'okuri-ashi');
  Q('postura', '¿Cuándo se usa hiraki-ashi?', 'Para salir de la línea de ataque (esquivar)', ['Para golpear men', 'Para saludar', 'Para retroceder'], '', 'hiraki-ashi');
  Q('postura', '¿Cuándo se usa tsugi-ashi?', 'Para cubrir una distancia larga', ['Para caminar', 'Para esquivar', 'Para saludar'], '', 'tsugi-ashi');
  Q('postura', '¿Con qué parte del pie se pisa en fumikomi?', 'Con la planta entera', ['Con el talón', 'Con la punta', 'Con el borde exterior'], '', 'fumikomi-ashi');
  Q('postura', '¿Qué es hikitsuke?', 'Tirar rápido del pie trasero tras el fumikomi', ['Un golpe', 'Un tipo de guardia', 'La pisada delantera'], '', 'fumikomi-ashi');
  Q('postura', '¿Cuándo se usa ayumi-ashi?', 'Para caminar al entrar, salir y en kata', ['Para golpear', 'Para esquivar', 'Para pisar'], '', 'ayumi-ashi');
  Q('postura', '¿Qué hay que evitar en tsugi-ashi?', 'Saltar', ['Deslizar', 'Mantener la mano izquierda en el centro', 'Acercar el pie trasero'], '', 'tsugi-ashi');
  // Suburi
  Q('tecnica', '¿Hasta dónde baja el shinai en jōge-buri?', 'Hasta que el kensen queda a la altura de chūdan', ['Hasta el suelo', 'Hasta la cadera', 'Hasta la rodilla'], '', 'joge-buri');
  Q('tecnica', '¿Por dónde sube el shinai en sayū-men?', 'Siempre por el centro', ['Por el lado izquierdo', 'Por el lado derecho', 'Por detrás'], '', 'sayu-men');
  Q('tecnica', '¿En qué ángulo baja el shinai en sayū-men?', 'Unos 45° en diagonal', ['Totalmente vertical', 'Totalmente horizontal', 'Hacia atrás'], '', 'sayu-men');
  Q('tecnica', '¿De dónde sale el movimiento en haya-suburi?', 'De las muñecas', ['De los hombros', 'De la cintura', 'De las rodillas'], '', 'haya-suburi');
  Q('tecnica', '¿Qué se entrena en zenshin-kōtai-suburi?', 'La coordinación de pies y golpe', ['Solo la fuerza', 'Solo la velocidad', 'Solo la mirada'], '', 'zenshin-kotai');
  Q('tecnica', '¿Cuánto se debería aumentar el suburi por semana?', 'Un 10–20% como máximo', ['El doble', 'Nada, nunca', 'Lo que aguante'], '', 'suburi-plan');
  Q('tecnica', '¿Qué haces si sientes dolor agudo en muñecas o codos?', 'Paro y descanso', ['Sigo con más fuerza', 'Aumento la serie', 'Lo ignoro'], '', 'suburi-plan');
  // Golpes
  Q('tecnica', '¿Cuál es la subida en men?', 'Por el centro hasta sobre la cabeza', ['Solo hasta la frente', 'Por un lado', 'Hasta la cintura'], '', 'men');
  Q('tecnica', '¿Con qué zona del shinai se golpea men?', 'Con el monouchi', ['Con la tsuba', 'Con el nakayui', 'Con la empuñadura'], '', 'men');
  Q('tecnica', '¿Qué ocurre a la vez en un golpe correcto?', 'Impacto, kiai y pisada', ['Solo el impacto', 'El impacto y luego la pisada', 'La pisada y luego el kiai'], '', 'men');
  Q('tecnica', '¿Qué hace el pie izquierdo tras la pisada?', 'Llega rápido (hikitsuke)', ['Se queda atrás', 'Se cruza', 'Se levanta mucho'], '', 'men');
  Q('tecnica', '¿Cuánto se sube el shinai en kote?', 'Solo lo justo, hasta la frente', ['Hasta sobre la cabeza y atrás', 'Nada', 'Hasta la cintura'], '', 'kote');
  Q('tecnica', '¿Qué kote es el blanco habitual?', 'La muñeca derecha del rival', ['La muñeca izquierda siempre', 'El codo', 'El hombro'], '', 'kote');
  Q('tecnica', '¿Con qué se corta el dō?', 'Con el filo del shinai', ['Con el plano', 'Con la tsuba', 'Con la punta'], '', 'do');
  Q('tecnica', '¿Qué indica un "toc" hueco en dō?', 'Que has golpeado con el plano', ['Que ha sido un golpe perfecto', 'Que falta kiai', 'Que has golpeado la tsuba'], '', 'do');
  Q('tecnica', '¿Cómo se mueve el shinai en tsuki?', 'En línea recta hacia la garganta', ['En diagonal', 'De arriba abajo', 'De lado'], '', 'tsuki');
  Q('tecnica', '¿Cuándo se practica tsuki?', 'Con supervisión y cuando el sensei lo indica', ['Siempre sin supervisión', 'Solo en casa', 'Cuando quieras'], '', 'tsuki');
  Q('tecnica', '¿Cuántos yokomen se golpean al avanzar en kirikaeshi?', '4', ['3', '5', '9'], 'Avanzas 4 y retrocedes 5.', 'kirikaeshi');
  Q('tecnica', '¿Cuántos yokomen se golpean al retroceder en kirikaeshi?', '5', ['4', '3', '9'], '', 'kirikaeshi');
  Q('tecnica', '¿Cómo empieza y termina un kirikaeshi?', 'Con un shōmen', ['Con un kote', 'Con un dō', 'Con un tsuki'], '', 'kirikaeshi');
  Q('tecnica', '¿Qué tiene que ser el primer golpe de kote-men?', 'Un golpe real, con intención', ['Un trámite', 'Una amenaza sin golpe', 'Un golpe sin kiai'], '', 'kote-men');
  Q('tecnica', '¿Qué debe suceder entre kote y men?', 'Nada: es un solo movimiento continuo', ['Una pausa para respirar', 'Un paso atrás', 'Un saludo'], '', 'kote-men');
  Q('tecnica', '¿Qué hace el motodachi en kirikaeshi?', 'Recibe los golpes con el shinai y marca la distancia', ['Golpea a su compañero', 'Observa sin moverse', 'Retrocede sin parar'], '', 'kirikaeshi');
  // Waza
  Q('tecnica', '¿Qué es tsubazeriai?', 'Las guardas en contacto, con presión controlada', ['Un tipo de golpe', 'Una guardia', 'Un saludo'], '', 'tsubazeriai');
  Q('tecnica', '¿De dónde sale el empuje en tai-atari?', 'De la cadera', ['De los brazos', 'Del hombro', 'De la cabeza'], '', 'tai-atari');
  Q('tecnica', '¿Qué hiki-waza se hace al dō?', 'Hiki-dō', ['Hiki-men', 'Hiki-kote', 'Hiki-tsuki'], '', 'hiki-do');
  Q('tecnica', '¿Cuándo sube el shinai en hiki-men?', 'Cuando el rival reacciona al empuje', ['Antes del tsubazeriai', 'Al final', 'Nunca'], '', 'hiki-men');
  Q('tecnica', '¿Qué se hace en harai-men?', 'Se aparta con un barrido corto el shinai del rival y se golpea men', ['Se bloquea y se devuelve', 'Se esquiva con un paso', 'Se golpea hacia abajo'], '', 'harai-men');
  Q('tecnica', '¿Cuándo se golpea en debana-kote?', 'Justo cuando el rival empieza a subir el shinai', ['Cuando termina su ataque', 'Antes de que se mueva', 'Cuando retrocede'], '', 'debana-kote');
  Q('tecnica', '¿Qué es maki-waza?', 'Girar el shinai alrededor del del rival para desviarlo y golpear', ['Esquivar con el cuerpo', 'Golpear hacia abajo', 'Un tipo de saludo'], '', 'maki-waza');
  Q('tecnica', '¿Cómo se desvía el golpe en suriage?', 'Subiendo el shinai rozando el del rival', ['Golpeándolo hacia abajo', 'Con un paso atrás', 'Con las manos'], '', 'kote-suriage-men');
  Q('tecnica', '¿Con qué paso se esquiva en men-nuki-dō?', 'Hiraki-ashi', ['Fumikomi-ashi', 'Tsugi-ashi', 'Ayumi-ashi'], '', 'men-nuki-do');
  Q('tecnica', '¿Qué se hace en men-kaeshi-dō?', 'Se bloquea el men, se gira el shinai y se devuelve dō', ['Se esquiva y se corta men', 'Se golpea kote', 'Se retrocede'], '', 'men-kaeshi-do');
  Q('tecnica', '¿Qué familia incluye men-nuki-dō?', 'Nuki-waza', ['Suriage-waza', 'Kaeshi-waza', 'Harai-waza'], '', 'oji-waza');
  Q('tecnica', '¿Qué familia incluye dō-uchiotoshi-men?', 'Uchiotoshi-waza', ['Nuki-waza', 'Suriage-waza', 'Maki-waza'], '', 'do-uchiotoshi-men');
  // Combate: seme, centro, patrones, shiai
  Q('mente', '¿Qué es seme?', 'La presión que ejerces con el espíritu, la postura, el kensen y la distancia', ['Un tipo de golpe', 'Una guardia', 'Una falta'], '', 'seme');
  Q('mente', '¿Qué es ken-zeme?', 'Presionar con el kensen apuntando a la garganta', ['Presionar solo con la voz', 'Golpear el shinai del rival', 'Retroceder'], '', 'seme');
  Q('mente', '¿Qué es ki-zeme?', 'Presionar con el espíritu y la actitud', ['Presionar con el kensen', 'Un tipo de golpe', 'Una esquiva'], '', 'seme');
  Q('mente', '¿Qué es tai-zeme?', 'Presionar con el cuerpo avanzando sin prisa', ['Chocar con el rival', 'Retroceder rápido', 'Gritar'], '', 'seme');
  Q('mente', '¿Cuándo golpeas tras un buen seme?', 'Cuando el rival reacciona', ['Antes de que se mueva', 'Nunca', 'Cuando termina el combate'], '', 'seme');
  Q('mente', '¿Qué es el nakasen?', 'La línea imaginaria entre tú y el rival', ['Un tipo de guardia', 'Un golpe', 'Una parte del shinai'], '', 'nakasen');
  Q('mente', '¿Quién "tiene el centro"?', 'Quien mantiene el kensen apuntando a la garganta del otro', ['Quien grita más', 'Quien retrocede', 'Quien levanta el shinai'], '', 'nakasen');
  Q('mente', '¿Cómo se recupera el centro si te desvían el shinai?', 'Con un movimiento corto de muñecas', ['Con un gran movimiento de hombros', 'Retrocediendo', 'Soltando el shinai'], '', 'nakasen');
  Q('mente', '¿Qué es kake-hiki?', 'Entrar y salir de la distancia para leer al rival', ['Un golpe', 'Una guardia', 'Un saludo'], '', 'kake-hiki');
  Q('mente', '¿Por qué conviene cambiar el ritmo de las entradas?', 'Porque lo predecible se lee', ['Para cansar al rival', 'Para hacer ruido', 'No conviene'], '', 'kake-hiki');
  Q('tecnica', 'El rival sube los brazos para cubrir men. ¿Qué haces?', 'Men-dō: el dō queda abierto', ['Kote', 'Tsuki', 'Retrocedes'], '', 'patrones-combate');
  Q('tecnica', 'El rival baja las manos para cubrir kote. ¿Qué haces?', 'Kote-men o men directo', ['Dō', 'Hiki-dō', 'Esperas'], '', 'patrones-combate');
  Q('tecnica', 'El rival se mueve para atacar. ¿Qué haces?', 'Debana-kote o debana-men', ['Retrocedes', 'Saludas', 'Soltas el shinai'], '', 'patrones-combate');
  Q('tecnica', 'El rival protege muy bien el centro. ¿Qué haces?', 'Harai-men o maki-waza', ['Insistes con el mismo golpe', 'Tsuki sin supervisión', 'Retrocedes siempre'], '', 'patrones-combate');
  Q('tecnica', 'El rival se pega a ti en tsubazeriai. ¿Qué haces?', 'Hiki-dō o hiki-men al separar', ['Empujas con los brazos', 'Lo agarras', 'Sueltas el shinai'], '', 'patrones-combate');
  Q('tecnica', 'El rival ataca kote. ¿Qué haces?', 'Kote-nuki-men o kote-suriage-men', ['Tsuki', 'Dō directo siempre', 'Nada'], '', 'patrones-combate');
  Q('tecnica', '¿Cuántas técnicas necesitas para empezar a combatir?', 'Unas pocas, bien afianzadas', ['Todas las que conozcas', 'Cuarenta', 'Ninguna'], '', 'patrones-combate');
  Q('shiai', '¿Qué llevas en la espalda para identificarte en el combate?', 'Una cinta (tasuki) roja o blanca', ['Un número', 'Tu nombre en un papel', 'Nada'], '', 'flujo-shiai');
  Q('shiai', '¿Cuántos pasos se avanzan tras el saludo en el tachiai?', 'Tres', ['Uno', 'Cinco', 'Diez'], 'Confírmalo con tu sensei: puede variar.', 'flujo-shiai');
  Q('shiai', '¿Qué puede pasar si celebras un punto?', 'Que se anule', ['Que te den otro', 'Nada', 'Que ganes el combate'], '', 'flujo-shiai');
  Q('shiai', '¿Cómo termina el combate cuando alguien gana?', 'Con "shōbu-ari"', ['Con "hajime"', 'Con "mate"', 'Con "wakare"'], '', 'flujo-shiai');
  Q('shiai', '¿Qué es osame-tō en el combate?', 'Guardar el shinai al terminar', ['Sacarlo', 'Golpear', 'Saludar'], '', 'flujo-shiai');
  Q('shiai', '¿Qué hace "wakare"?', 'Separa a los combatientes', ['Termina el combate', 'Da un punto', 'Pide prórroga'], '', 'faltas-shiai');
  Q('shiai', '¿Qué es jōgai?', 'Salir del área de combate', ['Un golpe', 'Un saludo', 'Una prórroga'], '', 'faltas-shiai');
  Q('shiai', '¿Qué ocurre con un golpe sin zanshin?', 'Puede no contar', ['Cuenta doble', 'Siempre cuenta', 'Se repite el combate'], '', 'faltas-shiai');
  Q('shiai', '¿Qué hay que revisar antes de un torneo?', 'Que el shinai cumple el reglamento y está en buen estado', ['Solo el color de la cinta', 'Nada', 'Que pese más'], '', 'preparacion-torneo');
  Q('shiai', '¿Qué objetivo es mejor para tu primer torneo?', 'Atacar con claridad, con kiai y zanshin', ['Ganar a toda costa', 'No atacar', 'Evitar el contacto'], '', 'preparacion-torneo');
  Q('shiai', '¿Cuándo conviene cambiar de equipo para un torneo?', 'Semanas antes, no el mismo día', ['El mismo día', 'En mitad del combate', 'Nunca'], '', 'preparacion-torneo');
  // Práctica en pareja y defensa
  Q('tecnica', '¿Quién es el motodachi?', 'Quien recibe los ataques y guía al compañero', ['Quien ataca', 'El árbitro', 'El maestro del dōjō'], '', 'motodachi');
  Q('tecnica', '¿Qué hace un buen motodachi?', 'Ofrece los blancos en el momento correcto y controla la distancia', ['Esquiva siempre', 'Golpea más fuerte', 'Se queda quieto sin moverse'], '', 'motodachi');
  Q('tecnica', '¿Qué se entrena en uchikomi-geiko?', 'Precisión, distancia y potencia con golpes repetidos', ['Solo resistencia', 'Solo esquivas', 'Kata'], '', 'uchikomi-geiko');
  Q('tecnica', '¿Cómo es un ataque en kakari-geiko?', 'Continuo y enérgico, sin pausas largas', ['Lento y con pausas', 'Solo a men', 'Sin kiai'], '', 'kakari-geiko');
  Q('tecnica', '¿Qué haces si te mareas en kakari-geiko?', 'Paras y avisas', ['Sigues más fuerte', 'Cierras los ojos', 'Ignoras el mareo'], '', 'kakari-geiko');
  Q('tecnica', '¿Qué es ji-geiko?', 'Práctica libre con un compañero', ['Un tipo de golpe', 'Un saludo', 'Una competición oficial'], '', 'ji-geiko');
  Q('tecnica', '¿Qué conviene hacer en cada ji-geiko?', 'Elegir una idea y aplicarla', ['Probar todas las técnicas', 'Esperar sin atacar', 'Solo defender'], '', 'ji-geiko');
  Q('tecnica', '¿Qué es ukeru?', 'Recibir o parar el golpe con el shinai', ['Esquivar con el cuerpo', 'Golpear hacia abajo', 'Un saludo'], '', 'ukeru');
  Q('tecnica', '¿Qué haces con los ojos al recibir un golpe?', 'Los mantienes abiertos', ['Los cierras', 'Miras al suelo', 'Miras el shinai'], '', 'ukeru');
  Q('tecnica', '¿Qué debes hacer tras recibir?', 'Volver a chūdan o contraatacar', ['Quedarte quieto', 'Retroceder siempre', 'Soltar el shinai'], '', 'ukeru');
  Q('tecnica', '¿Qué es lo más peligroso tras un ataque?', 'Quedarte parado tras fallar', ['Ser demasiado rápido', 'Hacer kiai', 'Mirar al rival'], '', 'tras-el-ataque');
  Q('tecnica', '¿Cómo te giras tras pasar al rival?', 'De cara a él, sin dar la espalda', ['Dándole la espalda', 'Corriendo', 'Sin girarte'], '', 'tras-el-ataque');
  // Cuerpo
  Q('postura', '¿Cuánto dura un buen calentamiento específico?', 'Unos 10 minutos', ['1 minuto', '45 minutos', 'No hace falta'], '', 'calentamiento-kendo');
  Q('postura', '¿Qué va primero: estirar con fuerza o movilidad?', 'Movilidad', ['Estirar con fuerza en frío', 'Saltar la movilidad', 'Golpear fuerte'], '', 'calentamiento-kendo');
  Q('postura', '¿Qué se estira para mejorar el talón izquierdo en chūdan?', 'Gemelos y tobillos', ['Cuello', 'Dedos de la mano', 'Orejas'], '', 'movilidad');
  Q('postura', '¿Cuántas sesiones de fuerza por semana al empezar?', 'Dos', ['Siete', 'Ninguna', 'Diez'], '', 'fuerza-kendo');
  Q('postura', '¿Qué zonas conviene fortalecer para kendō?', 'Piernas, core, antebrazos y espalda', ['Solo bíceps', 'Solo pecho', 'Solo cuello'], '', 'fuerza-kendo');
  Q('postura', '¿Qué haces con una ampolla en el pie?', 'La limpias y la cubres, y reduces la intensidad', ['La revientas y sigues', 'La ignoras', 'Entrenas más fuerte'], '', 'cuidado-pies');
  Q('postura', '¿Cuándo consultas con un médico por un dolor en el talón?', 'Si dura más de una o dos semanas', ['Nunca', 'Al primer segundo', 'Solo si es nocturno'], '', 'cuidado-pies');
  Q('postura', '¿Qué haces ante un dolor agudo que no cede?', 'Paras y consultas con un profesional', ['Aprietas los dientes', 'Entrenas más', 'Lo ignoras'], '', 'prevencion-lesiones');
  Q('postura', '¿Para qué sirve una "semana suave" cada cuatro semanas?', 'Para recuperarte y evitar el agotamiento', ['Para no entrenar nunca', 'Para ganar peso', 'Para saltar clases'], '', 'prevencion-lesiones');
  Q('postura', '¿Cuántas horas de sueño son recomendables?', '7–9', ['2–3', '4–5', '12–14'], '', 'resistencia');
  // Kata
  Q('tecnica', '¿Cuántas formas tiene el Nihon Kendō Kata con tachi?', 'Siete', ['Tres', 'Diez', 'Cinco'], '', 'kata');
  Q('tecnica', '¿Cuántas formas tiene con kodachi?', 'Tres', ['Siete', 'Una', 'Diez'], '', 'kata');
  Q('tecnica', '¿Qué rol inicia la acción en el kata?', 'Uchidachi', ['Shidachi', 'Motodachi', 'El árbitro'], '', 'kata');
  Q('tecnica', '¿Cuántos pasos grandes se dan al empezar cada forma?', 'Tres', ['Uno', 'Cinco', 'Siete'], '', 'kata-etiqueta');
  Q('tecnica', '¿Cuántos pasos pequeños hacia atrás se dan al terminar una forma?', 'Cinco', ['Tres', 'Siete', 'Dos'], '', 'kata-etiqueta');
  Q('tecnica', '¿Con qué pie se empieza a retroceder al final de cada forma?', 'Con el izquierdo', ['Con el derecho', 'Con los dos', 'Da igual'], '', 'kata-etiqueta');
  Q('tecnica', '¿Qué es "kamae wo toku"?', 'Bajar el bokutō al final de la forma', ['Adoptar la guardia', 'Un golpe', 'Un saludo'], '', 'kata-etiqueta');
  Q('tecnica', '¿Qué guardias toman ambos en el kata 1?', 'Jōdan', ['Chūdan', 'Gedan', 'Hassō'], '', 'kata-1');
  Q('tecnica', '¿Qué técnica muestra el kata 1?', 'Men-nuki-men', ['Kote-nuki-kote', 'Men-nuki-dō', 'Tsuki'], '', 'kata-1');
  Q('tecnica', '¿Qué técnica muestra el kata 2?', 'Kote-nuki-kote', ['Men-nuki-men', 'Suriage-men', 'Maki-kaeshi'], '', 'kata-2');
  Q('tecnica', '¿Con qué guardia parten ambos en el kata 3?', 'Gedan', ['Jōdan', 'Chūdan', 'Hassō'], '', 'kata-3');
  Q('tecnica', '¿Qué es kurai-zeme?', 'Presión sin golpe, avanzando con la punta en distintas alturas', ['Un golpe fuerte', 'Un tipo de saludo', 'Una falta'], '', 'kata-3');
  Q('tecnica', '¿Qué guardias toman en el kata 4?', 'Hassō y waki-gamae', ['Jōdan y gedan', 'Chūdan y chūdan', 'Gedan y hassō'], '', 'kata-4');
  Q('tecnica', '¿Qué es hiraseigan?', 'Una chūdan con la punta dirigida a la mano izquierda del rival', ['Una guardia alta', 'Un golpe', 'Un saludo'], '', 'kata-5');
  Q('tecnica', '¿Qué es furiage?', 'Subir el bokutō tras el suriage sin dejar caer el kensen', ['Un golpe a men', 'Un saludo', 'Una falta'], '', 'kata-5');
  Q('tecnica', '¿Qué técnica muestra el kata 6?', 'Kote-suriage-kote', ['Men-suriage-men', 'Men-nuki-dō', 'Tsuki-kaeshi'], '', 'kata-6');
  Q('tecnica', '¿Cómo termina el kata 7?', 'Shidachi arrodillado en waki-gamae y luego se levanta', ['Con una estocada', 'En jōdan', 'Con un saludo'], '', 'kata-7');
  Q('tecnica', '¿Qué técnica muestra el kata 7?', 'Men-nuki-dō', ['Kote-nuki-kote', 'Suriage-men', 'Maki-kaeshi'], '', 'kata-7');
  Q('tecnica', '¿Qué espada usa shidachi en las formas 8 a 10?', 'Kodachi (espada corta)', ['Tachi', 'Dos tachi', 'Ninguna'], '', 'kata-kodachi');
  Q('tecnica', '¿Qué es ukenagashi?', 'Un desvío flexible del corte, no un bloqueo', ['Un golpe fuerte', 'Un saludo', 'Una guardia'], '', 'kata-kodachi');
  // Examen de kyū (programa estatal)
  Q('shiai', '¿Cuál es el primer grado del programa oficial de kyū?', '5.º kyū', ['6.º kyū', '1.er dan', '3.er kyū'], '', 'ex-programa');
  Q('shiai', '¿Qué kata pide el 5.º kyū?', 'El kata 1', ['Los kata 1 a 3', 'Ninguno', 'Los kata 1 a 5'], '', 'ex-5kyu');
  Q('shiai', '¿Cuánto es la permanencia mínima orientativa entre 5.º y 4.º kyū?', '4 meses', ['1 mes', '1 año', '2 años'], '', 'ex-programa');
  Q('shiai', '¿Exige el 5.º kyū bōgu completo?', 'No obligatoriamente', ['Sí, siempre', 'Solo el men', 'Solo el dō'], '', 'ex-5kyu');
  Q('shiai', '¿Qué suburi pide el 5.º kyū?', 'Jōge-buri y naname-buri', ['Solo haya-suburi', 'Zenshin-kōtai y haya', 'Ninguno'], '', 'ex-5kyu');
  Q('shiai', '¿Qué kata se piden para el 3.er kyū?', 'Del 1 al 3', ['Solo el 1', 'Del 1 al 5', 'Ninguno'], '', 'ex-3kyu');
  Q('shiai', '¿Qué se añade en 4.º kyū?', 'Mantenimiento del equipo, motodachi y kakari, ma-ai, uchikomi y uke', ['Shiai completo', 'Kata 5', 'Jōdan'], '', 'ex-4kyu');
  Q('shiai', '¿Qué se añade en 3.er kyū?', 'Yūkō-datotsu, ki-ken-tai-ichi, nidan y sandan-waza y tai-atari', ['Suriage', 'Kaeshi', 'Kata 7'], '', 'ex-3kyu');
  Q('shiai', '¿Qué se añade en 2.º kyū?', 'Hiki-waza, harai, debana, kakari-geiko, ji-geiko y shiai inicial', ['Solo kata 1', 'Solo suburi', 'Kodachi'], '', 'ex-2kyu');
  Q('shiai', '¿Qué se añade en 1.er kyū?', 'Tai-sabaki, suriage, kaeshi y nuki', ['Solo kirikaeshi', 'Solo jōdan', 'Solo kata 1'], '', 'ex-2kyu');
  Q('shiai', '¿Cuántos ejercicios tiene el kihon-waza con bokutō del programa?', 'Nueve', ['Tres', 'Siete', 'Doce'], '', 'ex-bokuto');
  Q('shiai', '¿Qué ejercicios con bokutō corresponden al 3.er kyū?', 'Del 1 al 3', ['Del 4 al 6', 'Del 7 al 9', 'Ninguno'], '', 'ex-bokuto');
  Q('shiai', '¿Qué ejercicios con bokutō corresponden al 1.er kyū?', 'Del 7 al 9', ['Del 1 al 3', 'Del 4 al 6', 'Todos'], '', 'ex-bokuto');
  Q('shiai', '¿Qué técnica es el ejercicio 5 con bokutō?', 'Men-nuki-dō', ['Debana-kote', 'Hiki-dō', 'Harai-men'], '', 'ex-bokuto');
  Q('shiai', '¿Qué técnica es el ejercicio 7 con bokutō?', 'Debana-kote', ['Men-kaeshi-dō', 'Kote-suriage-men', 'Men-nuki-dō'], '', 'ex-bokuto');
  Q('shiai', '¿Qué es "naname-buri"?', 'El suburi en diagonal (sayū-men)', ['El suburi rápido', 'El suburi hacia atrás', 'Un golpe a la garganta'], '', 'ex-5kyu');
  Q('shiai', '¿Cuál es la edad mínima para examinarse de dan según la EKF?', '14 años', ['10 años', '18 años', '21 años'], '', 'ex-dan');
  Q('shiai', '¿En qué consiste el examen de dan?', 'En dos combates y los kata correspondientes', ['Solo en kata', 'Solo en kirikaeshi', 'En un examen escrito'], '', 'ex-dan');
  Q('shiai', '¿Qué debe requerir siempre un examen de kyū?', 'Protocolo y vestimenta, kata, kirikaeshi y uchikomi', ['Solo combate', 'Solo suburi', 'Solo kata'], '', 'ex-programa');
  Q('shiai', '¿Qué se recomienda hacer con los ejercicios de bokutō desde el principio?', 'Ir intercalándolos aunque su dominio llegue más tarde', ['Dejarlos para el dan', 'No practicarlos', 'Practicarlos solo en combate'], '', 'ex-programa');
  Q('tecnica', '¿Qué es el "men con pase"?', 'Un men tras el cual sigues avanzando junto al compañero, te giras y vuelves a chūdan', ['Un men sin fumikomi', 'Un men con un paso atrás', 'Un men desde jōdan'], '', 'men-pasante');
  Q('tecnica', '¿Cómo te giras tras pasar al compañero?', 'Mirándole, sin darle la espalda', ['Dándole la espalda', 'Sin girarte', 'Corriendo'], '', 'men-pasante');
  Q('tecnica', '¿Cuál es el error más común tras el men?', 'Frenar justo después del impacto', ['Hacer demasiado kiai', 'Mirar al rival', 'Subir mucho el shinai'], '', 'men-pasante');
  Q('tecnica', '¿Cómo se llama la secuencia men, choque de cuerpo y men al retroceder?', 'Men, tai-atari y hiki-men', ['Kote-men', 'Men-nuki-dō', 'Harai-men'], '', 'men-tai-hiki');
  Q('tecnica', '¿Con qué se empuja en el tai-atari?', 'Con la cadera', ['Con los brazos', 'Con los hombros', 'Con la cabeza'], '', 'men-tai-hiki');
  Q('tecnica', '¿Cuándo sube el shinai para el hiki-men?', 'Cuando el compañero cede o reacciona al empuje', ['Antes del choque', 'Al terminar', 'Nunca'], '', 'men-tai-hiki');
  KD.quiz = out;
})();

/* ---------- Rutinas de entrenamiento en casa ---------- */
KD.routines = [
  {
    id: 'calentar', t: 'Calentamiento', min: 5, desc: 'Antes de cualquier práctica: móviles las articulaciones que más trabajan.',
    steps: [['Círculos de cuello', '10 lentos', 'Sin forzar.'], ['Círculos de hombros', '10 adelante y 10 atrás', ''], ['Muñecas y antebrazos', '30 s', 'Gira y estira suave.'], ['Sentadillas suaves', '10', 'Espalda recta.'], ['Estiramiento de isquiotibiales', '30 s por pierna', ''], ['Okuri-ashi sin shinai', '10 adelante y 10 atrás', 'Pies deslizando.']]
  },
  {
    id: 'suburi', t: 'Suburi esencial', min: 15, desc: 'Golpes al aire con calidad. Mejor poco y bien.',
    steps: [['Calentamiento', '3 min', 'Ver rutina "Calentamiento".'], ['Jōge-buri', '30', 'Con kiai y mirada al frente.'], ['Sayū-men', '30', 'Alterna izquierda y derecha.'], ['Zenshin-kōtai-suburi', '20 (10 ciclos)', 'Los pies siguen al golpe.'], ['Haya-suburi', '30', 'Rápidos pero limpios.'], ['Vuelta a la calma', '2 min', 'Respira y estira muñecas y hombros.']]
  },
  {
    id: 'pies', t: 'Pies y postura', min: 15, desc: 'Sin shinai, o con él en la mano izquierda. Base para todo lo demás.',
    steps: [['Shisei contra la pared', '2 min', 'Talones, glúteos, hombros y cabeza rozando.'], ['Chūdan quieto', '1 min × 3', 'Respiración abdominal.'], ['Okuri-ashi adelante y atrás', '10 × 2', 'Cabeza a la misma altura.'], ['Tsugi-ashi', '10', ''], ['Fumikomi suave', '10', 'Solo si tu sensei ya te lo ha enseñado; con el pie plano.'], ['Estiramientos', '3 min', 'Gemelos, cuádriceps, caderas.']]
  },
  {
    id: 'completa', t: 'Sesión completa', min: 30, desc: 'Para días con tiempo: pies, suburi, kiai y mokusō.',
    steps: [['Calentamiento', '5 min', ''], ['Pies y postura', '8 min', 'Okuri-ashi, tsugi-ashi, chūdan.'], ['Suburi', '12 min', 'Jōge-buri, sayū-men, zenshin-kōtai.'], ['Kiai', '2 min', 'Un grito por golpe, firme y desde el abdomen.'], ['Mokusō', '3 min', 'En seiza, ojos cerrados, respiración tranquila.']]
  },
  {
    id: 'mokuso', t: 'Mokusō y calma', min: 5, desc: 'Para días sin ganas o con mucha cabeza.',
    steps: [['Seiza', '1 min', 'Espalda recta, manos en los muslos.'], ['Respiración', '3 min', 'Inspira 4, espira 6, por la nariz.'], ['Zarei', '1 vez', 'Saludo en seiza.']]
  }
];

/* ---------- Consejos ---------- */
KD.tips = [
  'Un golpe bien hecho vale más que cien golpes con prisa.',
  'La mano izquierda dirige, la derecha acompaña.',
  'Graba tus suburi de lado: verás lo que nadie te dice.',
  'Dormir bien es parte del entrenamiento.',
  'Cuando dudes, vuelve a chūdan.',
  'Respira por el abdomen: el kiai nace ahí.',
  'No compares tu primer mes con el décimo año de otro.',
  'Pregunta a tu sensei por un ejercicio concreto para esta semana.',
  'Mira a los ojos del rival, no al shinai.',
  'Tras cada golpe: zanshin. Siempre.',
  'Al terminar la clase, anota una cosa que has aprendido.',
  'Si algo te duele de verdad, para y descansa.'
];

/* ---------- Niveles de estudio (no son grados oficiales) ---------- */
KD.levels = [
  { xp: 0, n: 'Mudansha', jp: '無段者', sub: 'Sin grado (nivel de estudio)' },
  { xp: 100, n: '6.º kyū', jp: '六級' }, { xp: 250, n: '5.º kyū', jp: '五級' }, { xp: 450, n: '4.º kyū', jp: '四級' },
  { xp: 700, n: '3.er kyū', jp: '三級' }, { xp: 1000, n: '2.º kyū', jp: '二級' }, { xp: 1350, n: '1.er kyū', jp: '一級' },
  { xp: 1800, n: 'Shodan', jp: '初段' }, { xp: 2400, n: 'Nidan', jp: '二段' }, { xp: 3100, n: 'Sandan', jp: '三段' }
];
KD.XP = { lesson: 20, quiz: 5, card: 2, module: 50, log: 10 };

/* ---------- Plan de 8 semanas (técnica) ---------- */
KD.plan = [
  { n: 1, t: 'Semana 1 · Postura, mirada y agarre', focus: 'Construir una base limpia antes de golpear: espalda, chūdan, tenouchi y respiración.',
    lessons: ['shisei', 'metsuke', 'respiracion', 'tenouchi', 'chudan', 'chudan-ajustes'],
    tasks: ['Estudiar las lecciones de la semana.', 'Sesión A (10 min): shisei contra la pared 2 min + chūdan frente al espejo 3 × 1 min.', 'Sesión B (10 min): respiración abdominal 3 min + 20 golpes lentos solo para sentir el agarre (tenouchi).', 'Sesión C (10 min): repasa los 4 errores de chūdan con el espejo y corrige uno.', 'Preguntar a tu sensei: "¿cómo ves mi chūdan y mi agarre?" y anotar la respuesta en el diario.'] },
  { n: 2, t: 'Semana 2 · Pies', focus: 'Okuri-ashi limpio y programa de pies diario.',
    lessons: ['ashi-sabaki', 'okuri-ashi', 'ayumi-ashi', 'maai', 'ashi-ejercicios'],
    tasks: ['Estudiar las lecciones de la semana.', 'Programa de pies (lección "Programa de pies") 3 veces esta semana.', 'Okuri-ashi con shinai en chūdan: 3 series de 10 adelante y atrás.', 'Grabarte de lado y comprobar que la cabeza no sube ni baja.', 'Pedir a tu sensei que revise tu okuri-ashi.'] },
  { n: 3, t: 'Semana 3 · Suburi base', focus: 'Jōge-buri y sayū-men con el recorrido central y el filo correcto.',
    lessons: ['suburi', 'joge-buri', 'sayu-men', 'suburi-plan'],
    tasks: ['Estudiar las lecciones de la semana.', 'Sesión A: 30 jōge-buri lentos con kiai.', 'Sesión B: 30 sayū-men lentos, subiendo siempre por el centro.', 'Sesión C: 20 jōge-buri + 20 sayū-men + estiramientos de muñecas.', 'Grabar 20 golpes y comparar con la semana anterior.'] },
  { n: 4, t: 'Semana 4 · Men completo', focus: 'Men con pies, kiai y zanshin.',
    lessons: ['men', 'fumikomi-ashi', 'zenshin-kotai', 'kiai-zanshin'],
    tasks: ['Estudiar las lecciones de la semana.', 'Zenshin-kōtai-suburi: 3 series de 10.', 'Men sin rival con fumikomi suave: 3 series de 10 (solo si tu sensei ya te lo ha enseñado).', 'Fijarte solo en que golpe, kiai y pisada coincidan.', 'En el dōjō: 10 men a un compañero y pedir una corrección.'] },
  { n: 5, t: 'Semana 5 · Kote y yokomen', focus: 'Golpes cortos y diagonales.',
    lessons: ['kote', 'yokomen', 'haya-suburi', 'kirikaeshi'],
    tasks: ['Estudiar las lecciones de la semana.', 'Kote en el aire: 3 series de 15, con subida pequeña.', 'Haya-suburi: 3 series de 20.', 'Kirikaeshi en el aire: 5 series (4 adelante, 5 atrás).', 'Hacer kirikaeshi con tu motodachi en el dōjō.'] },
  { n: 6, t: 'Semana 6 · Dō y combinaciones', focus: 'Corte al dō y kote-men.',
    lessons: ['do', 'kote-men', 'tsuki'],
    tasks: ['Estudiar las lecciones de la semana.', 'Dō en el aire: 3 series de 15, escuchando el sonido del corte.', 'Kote-men en el aire: 3 series de 15, sin pausa.', 'Revisar la lección de tsuki (solo teoría salvo indicación del sensei).', 'En el dōjō: pedir hacer kote-men con un compañero.'] },
  { n: 7, t: 'Semana 7 · Iniciativa y contacto', focus: 'Hiki-waza, debana-kote y tai-atari.',
    lessons: ['tai-atari', 'tsubazeriai', 'hiki-men', 'hiki-do', 'debana-kote', 'harai-men'],
    tasks: ['Estudiar las lecciones de la semana.', 'Hiki-men e hiki-dō en el aire: 3 series de 10.', 'Debana-kote en el aire: 3 series de 10, imaginando el instante.', 'En el dōjō: tsubazeriai y hiki-waza con tu sensei.', 'Ver un combate completo en vídeo e identificar tres debana.'] },
  { n: 8, t: 'Semana 8 · Repaso y respuesta', focus: 'Consolidar y mirar hacia ōji-waza.',
    lessons: ['oji-waza', 'men-nuki-do', 'kote-suriage-men', 'sen', 'seme'],
    tasks: ['Estudiar las lecciones de la semana.', 'Repasar todas las autoevaluaciones y repetir las que no tengas marcadas.', 'Hacer un quiz visual de secuencias.', 'Hacer una serie completa grabada: suburi + kirikaeshi + kote-men.', 'Escribir en el diario tus tres mejoras y tus tres puntos a trabajar; enseñárselos a tu sensei.'] }
];

KD.routines.push(
  { id: 'tec-kamae', t: 'Kamae y postura', min: 10, desc: 'Chūdan limpio y respiración.',
    steps: [['Shisei contra la pared', '2 min', 'Talones, glúteos, hombros y cabeza.'], ['Chūdan frente al espejo', '3 × 1 min', 'Mano izquierda, talón, kensen.'], ['Respiración abdominal', '3 min', 'Inspira 4, espira 6.'], ['Taitō → sonkyō → chūdan', '5 veces', 'Con calma.']] },
  { id: 'tec-pies', t: 'Pies en profundidad', min: 15, desc: 'Los cinco desplazamientos.',
    steps: [['Okuri-ashi adelante y atrás', '10 × 3', 'Cabeza a la misma altura.'], ['Hiraki-ashi', '10 a cada lado', ''], ['Tsugi-ashi', '10', 'Primer movimiento discreto.'], ['Fumikomi suave', '10', 'Solo si tu sensei ya te lo enseñó.'], ['Estiramientos', '3 min', 'Gemelos y tobillos.']] },
  { id: 'tec-golpes', t: 'Golpes básicos en el aire', min: 20, desc: 'Men, kote, dō y combinaciones sin rival.',
    steps: [['Calentamiento', '3 min', ''], ['Jōge-buri', '20', 'Con kiai.'], ['Men con pies', '20', 'Golpe, kiai y pisada coinciden.'], ['Kote', '20', 'Subida corta.'], ['Dō', '20', 'Escucha el corte.'], ['Kote-men', '15', 'Sin pausa.'], ['Estiramientos', '2 min', 'Muñecas y hombros.']] },
  { id: 'tec-kirikaeshi', t: 'Kirikaeshi en el aire', min: 10, desc: 'Resistencia y ritmo.',
    steps: [['Calentamiento', '2 min', ''], ['Kirikaeshi', '5 series', '4 yokomen adelante, 5 atrás, shōmen final.'], ['Descanso', '1 min entre series', ''], ['Estiramientos', '2 min', '']] },
  { id: 'tec-waza', t: 'Waza en la sombra', min: 15, desc: 'Iniciativa y respuesta, sin rival y a cámara lenta.',
    steps: [['Debana-kote', '10', 'Imagina el instante del rival.'], ['Harai-men', '10', 'Barrido corto.'], ['Hiki-men / hiki-dō', '10 + 10', ''], ['Men-nuki-dō', '10', 'Hiraki-ashi y corte.'], ['Kote-suriage-men', '10', 'Desvío y men en un gesto.']] }
);

KD.plan.push(
  { n: 9, t: 'Semana 9 · Presión y centro', focus: 'Aprender a leer y presionar antes de golpear.',
    lessons: ['seme', 'nakasen', 'kake-hiki', 'patrones-combate'],
    tasks: ['Estudiar las lecciones de la semana.', 'Con compañero: 10 entradas a issoku-ittō-no-ma-ai sin atacar, observando su reacción.', 'Practicar harai-men y debana-kote en ji-geiko, una idea por práctica.', 'Elegir tus tres técnicas de confianza y anotarlas en el diario.', 'Hablar con tu sensei sobre cómo ves tu seme.'] },
  { n: 10, t: 'Semana 10 · Tu primer shiai', focus: 'Protocolo, faltas y preparación.',
    lessons: ['flujo-shiai', 'faltas-shiai', 'preparacion-torneo', 'reglas-shiai', 'mentalidad'],
    tasks: ['Estudiar las lecciones de la semana.', 'Practicar la secuencia de entrada y salida (taitō, sonkyō, osame-tō) 5 veces.', 'Simular en el dōjō un combate corto con árbitro.', 'Revisar tu equipo y preparar la lista de repuestos.', 'Escribir tu objetivo de proceso para el primer torneo y comentarlo con tu sensei.'] }
);
KD.routines.push(
  { id: 'tec-combate', t: 'Combate: seme y reacción', min: 15, desc: 'Ejercicios con compañero (o en la sombra) para presionar, leer y golpear.',
    steps: [['Calentamiento', '3 min', ''], ['Entrar y salir (kake-hiki)', '2 min', 'Sin atacar; observa su reacción.'], ['Seme + debana-kote', '10', 'Golpea solo si hay reacción.'], ['Seme + men', '10', 'Con kiai y zanshin.'], ['Una sola técnica en ji-geiko', '3 min', 'Por ejemplo, solo kote-men.'], ['Anotar en el diario', '2 min', 'Qué funcionó y qué no.']] }
);

KD.plan.push(
  { n: 11, t: 'Semana 11 · Compañero y defensa', focus: 'Practicar bien con otros: motodachi, uchikomi, recibir y cerrar el hueco.',
    lessons: ['motodachi', 'uchikomi-geiko', 'kakari-geiko', 'ji-geiko', 'ukeru', 'tras-el-ataque'],
    tasks: ['Estudiar las lecciones de la semana.', 'En el dōjō: hacer de motodachi con tu sensei o un veterano y pedir una corrección.', 'Uchikomi: men × 10, kote × 10, kote-men × 10, con calidad.', 'Practicar recibir men, kote y dō a cámara lenta con un compañero.', 'Anotar en el diario una idea para tu siguiente ji-geiko y cómo te fue.'] },
  { n: 12, t: 'Semana 12 · Cuerpo y kata', focus: 'Cuidar el cuerpo y empezar a conocer el kata.',
    lessons: ['calentamiento-kendo', 'movilidad', 'fuerza-kendo', 'cuidado-pies', 'kata', 'kata-etiqueta'],
    tasks: ['Estudiar las lecciones de la semana.', 'Hacer el calentamiento específico antes de cada sesión.', 'Dos sesiones de fuerza (piernas/core y antebrazos/espalda).', 'Revisar tus pies tras cada práctica.', 'Preguntar a tu sensei cuándo empezaréis kata y ver un kata completo en vídeo.'] }
);
KD.routines.push(
  { id: 'cuerpo-fuerza', t: 'Fuerza para kendō (A)', min: 20, desc: 'Piernas y core, para una sesión de fuerza en casa.',
    steps: [['Calentamiento', '5 min', 'Movilidad y pulso.'], ['Sentadillas', '3 × 10', ''], ['Zancadas', '3 × 8 por pierna', ''], ['Elevaciones de talón a una pierna', '3 × 10', ''], ['Plancha', '3 × 30 s', ''], ['Plancha lateral', '2 × 20 s por lado', ''], ['Estiramientos', '3 min', 'Gemelos y caderas.']] },
  { id: 'cuerpo-brazos', t: 'Fuerza para kendō (B)', min: 15, desc: 'Antebrazos, espalda y hombros.',
    steps: [['Calentamiento', '4 min', ''], ['Curl de muñeca con peso ligero', '2 × 15', ''], ['Agarre de toalla retorcida', '3 × 20 s', ''], ['Remo con goma', '3 × 12', ''], ['Elevaciones laterales ligeras', '2 × 12', ''], ['Estiramientos', '3 min', 'Hombros y muñecas.']] },
  { id: 'pareja-sombra', t: 'Compañero en la sombra', min: 15, desc: 'Ejercicios de uchikomi y recepción sin compañero.',
    steps: [['Calentamiento', '3 min', ''], ['Men + zanshin', '10', 'Vuelve a chūdan cada vez.'], ['Kote-men', '10', 'Sin pausa.'], ['Recibir men, kote y dō', '10 de cada', 'Ojos abiertos.'], ['Kirikaeshi', '3 series', '4 adelante, 5 atrás.']] }
);
