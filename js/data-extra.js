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
