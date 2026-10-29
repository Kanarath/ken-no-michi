/* Iaidō (parte 3): módulos, partes interactivas, quiz, glosario, plan y rutinas */
(function () {
  const byId = id => { const l = KD.pool[id]; if (!l) throw new Error('lección de iaidō no encontrada: ' + id); return l; };
  const mod = (o, ids) => Object.assign({ disc: 'iaido' }, o, { lessons: ids.map(byId) });
  KD.modules.forEach(m => { m.disc = m.disc || 'kendo'; });
  KD.modules.push(
    mod({ id: 'ia-inicio', name: 'Iaidō · Primeros pasos', jp: '居合', seal: '居', icon: 'torii', desc: 'Qué es el iaidō, cómo se relaciona con el kendō, la etiqueta, la seguridad y cómo es una clase.' },
      ['ia-que-es', 'ia-kendo-iaido', 'ia-etiqueta', 'ia-seguridad', 'ia-clase']),
    mod({ id: 'ia-equipo', name: 'Equipo · Katana y ropa', jp: '刀', seal: '刀', icon: 'men', desc: 'La katana y sus partes, bokken e iaitō, la ropa, el obi, cómo colocar la espada y cómo cuidarla.' },
      ['ia-katana', 'ia-iaito', 'ia-vestimenta', 'ia-colocar', 'ia-cuidado']),
    mod({ id: 'ia-base', name: 'Fundamentos · Desenvainar y envainar', jp: '抜刀', seal: '抜', icon: 'shinai', desc: 'Postura, seiza, pies, agarre, nukitsuke, kiritsuke, chiburi, nōtō y la secuencia completa.' },
      ['ia-postura', 'ia-seiza', 'ia-ashi', 'ia-tenouchi', 'ia-nukitsuke', 'ia-kiritsuke', 'ia-chiburi', 'ia-noto', 'ia-zanshin', 'ia-secuencia']),
    mod({ id: 'ia-seitei', name: 'Seitei-gata · Las doce formas', jp: '制定', seal: '制', icon: 'book', desc: 'Las doce formas estándar de la Federación Japonesa de Kendō, con el esquema de oponentes de cada una.' },
      ['ia-seitei', 'ia-seitei-rei', 'ia-s1', 'ia-s2', 'ia-s3', 'ia-s4', 'ia-s5', 'ia-s6', 'ia-s7', 'ia-s8', 'ia-s9', 'ia-s10', 'ia-s11', 'ia-s12']),
    mod({ id: 'ia-eishin', name: 'Eishin-ryū · Escuela tradicional', jp: '英信', seal: '英', icon: 'swords', desc: 'Musō Jikiden Eishin-ryū: su estructura, las series de formas, su significado y cómo estudiarlas.' },
      ['ia-mjer', 'ia-mjer-shoden', 'ia-mjer-chuden', 'ia-mjer-okuden', 'ia-mjer-kumitachi', 'ia-mjer-estudio']),
    mod({ id: 'ia-cuerpo', name: 'Cuerpo · Práctica y camino', jp: '体', seal: '体', icon: 'feet', desc: 'Cuidar rodillas y tobillos, practicar en casa con bokken y entender los exámenes de iaidō.' },
      ['ia-rodillas', 'ia-casa', 'ia-grados'])
  );

  /* ---------- Partes de la katana (interactivo) ---------- */
  KD.parts.katana = {
    kashira: { n: 'Kashira', jp: '頭', d: 'Remate o pomo al final de la empuñadura.' },
    tsuka: { n: 'Tsuka', jp: '柄', d: 'Empuñadura, envuelta con cordón (tsuka-ito) sobre piel de raya.' },
    fuchi: { n: 'Fuchi', jp: '縁', d: 'Casquillo metálico que une la empuñadura con la guarda.' },
    tsuba: { n: 'Tsuba', jp: '鍔', d: 'Guarda circular que protege las manos.' },
    habaki: { n: 'Habaki', jp: '鎺', d: 'Pieza metálica que asegura la hoja en la funda y evita que se salga sola.' },
    ha: { n: 'Ha', jp: '刃', d: 'El filo de la hoja.' },
    mune: { n: 'Mune', jp: '棟', d: 'El lomo, el lado sin filo.' },
    shinogi: { n: 'Shinogi', jp: '鎬', d: 'La línea longitudinal que recorre la hoja.' },
    hamon: { n: 'Hamon', jp: '刃文', d: 'La línea de temple visible en la hoja, junto al filo.' },
    kissaki: { n: 'Kissaki', jp: '切先', d: 'La punta de la espada.' },
    saya: { n: 'Saya', jp: '鞘', d: 'La funda de la espada.' },
    koiguchi: { n: 'Koiguchi', jp: '鯉口', d: 'La boca de la funda, por donde entra la espada.' },
    kurikata: { n: 'Kurikata', jp: '栗形', d: 'Anilla de la funda por la que pasa el cordón.' },
    sageo: { n: 'Sageo', jp: '下緒', d: 'Cordón que sujeta la funda en el obi o se recoge según la escuela.' },
    kojiri: { n: 'Kojiri', jp: '鐺', d: 'Contera, el extremo final de la funda.' }
  };
  KD.partsTitles.katana = 'Toca una parte de la katana o de la saya';

  /* ---------- Preguntas de iaidō ---------- */
  (function () {
    const hash = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; return h.toString(36); };
    const Q = (cat, q, correct, wrong, why, lesson) => KD.quiz.push({ id: 'q' + hash(q), cat, q, a: [correct].concat(wrong), why: why || '', lesson: lesson || '' });
    Q('vocab', '¿Qué significa "iaidō"?', 'El camino de sacar la espada', ['El camino del bastón', 'El arte de la danza', 'El camino del arco'], '', 'ia-que-es');
    Q('tecnica', '¿Qué es nukitsuke?', 'Desenvainar y hacer el primer corte', ['Envainar', 'Sacudir la hoja', 'Saludar'], '', 'ia-nukitsuke');
    Q('tecnica', '¿Qué es kiritsuke?', 'El corte final y decisivo', ['El desenvainado', 'El chiburi', 'El saludo'], '', 'ia-kiritsuke');
    Q('tecnica', '¿Qué es chiburi?', 'La sacudida simbólica de la hoja', ['El envainado', 'Un corte', 'Un saludo'], '', 'ia-chiburi');
    Q('tecnica', '¿Qué es nōtō?', 'Envainar la espada', ['Desenvainar', 'Un corte', 'Un paso'], '', 'ia-noto');
    Q('tecnica', '¿Cuántas acciones básicas tiene una técnica de iaidō?', 'Cuatro', ['Dos', 'Tres', 'Seis'], 'Nukitsuke, kiritsuke, chiburi y nōtō.', 'ia-que-es');
    Q('tecnica', '¿Cómo empiezan todas las técnicas de iaidō?', 'Con la espada envainada', ['Con la espada en la mano', 'Con dos espadas', 'Sin espada'], '', 'ia-que-es');
    Q('vocab', '¿Qué es un "kassoteki"?', 'Un oponente imaginario', ['Un compañero real', 'Un tipo de espada', 'Un saludo'], '', 'ia-zanshin');
    Q('vocab', '¿Qué es el "sayabiki"?', 'Tirar de la funda hacia atrás al desenvainar', ['Envainar', 'Un corte', 'Una postura'], '', 'ia-nukitsuke');
    Q('equipo', '¿Qué es la "saya"?', 'La funda de la espada', ['La hoja', 'La empuñadura', 'La guarda'], '', 'ia-katana');
    Q('equipo', '¿Qué es la "tsuka"?', 'La empuñadura', ['La funda', 'La punta', 'El filo'], '', 'ia-katana');
    Q('equipo', '¿Qué es el "kissaki"?', 'La punta de la espada', ['El filo', 'La guarda', 'El cordón'], '', 'ia-katana');
    Q('equipo', '¿Qué es el "ha"?', 'El filo', ['El lomo', 'La punta', 'La funda'], '', 'ia-katana');
    Q('equipo', '¿Qué es el "mune"?', 'El lomo (el lado sin filo)', ['El filo', 'La guarda', 'La contera'], '', 'ia-katana');
    Q('equipo', '¿Para qué sirve el habaki?', 'Para asegurar la hoja en la funda', ['Para cortar', 'Para decorar la funda', 'Para atar el obi'], '', 'ia-katana');
    Q('equipo', '¿Qué es el "sageo"?', 'El cordón de la funda', ['La hoja', 'La guarda', 'La punta'], '', 'ia-katana');
    Q('equipo', '¿Qué es el "koiguchi"?', 'La boca de la funda', ['La contera', 'La guarda', 'El filo'], '', 'ia-katana');
    Q('equipo', '¿Qué es el "kojiri"?', 'La contera de la funda', ['La boca de la funda', 'La guarda', 'La punta'], '', 'ia-katana');
    Q('equipo', '¿Cómo se coloca el filo en el obi?', 'Hacia arriba', ['Hacia abajo', 'Hacia delante', 'Da igual'], '', 'ia-colocar');
    Q('equipo', '¿En qué lado del cuerpo se lleva la espada en el obi?', 'El izquierdo', ['El derecho', 'En la espalda', 'En el pecho'], '', 'ia-colocar');
    Q('equipo', '¿Qué es un iaitō?', 'Una espada de entrenamiento sin filo, con forma de katana', ['Una espada de madera', 'Una espada real con filo', 'Un tipo de funda'], '', 'ia-iaito');
    Q('equipo', '¿Qué es un bokken?', 'Una espada de madera', ['Una espada sin filo de metal', 'Una espada real', 'Una funda'], '', 'ia-iaito');
    Q('equipo', '¿Qué es un shinken?', 'Una espada real con filo', ['Una espada de madera', 'Una espada sin filo', 'Una funda'], '', 'ia-iaito');
    Q('equipo', '¿Qué se debe evitar hacer con un bokken en casa sin guía de tu sensei?', 'Practicar el desenvainado real', ['Practicar la postura', 'Practicar los pies', 'Practicar cortes lentos'], '', 'ia-casa');
    Q('etiqueta', '¿Qué es el tō-rei?', 'El saludo a la espada', ['Un tipo de corte', 'Una postura', 'Una forma del seitei'], '', 'ia-etiqueta');
    Q('etiqueta', '¿Qué rodilla baja primero al sentarte en seiza con la espada?', 'La izquierda', ['La derecha', 'Las dos a la vez', 'Da igual'], '', 'ia-seiza');
    Q('etiqueta', '¿Qué no debes hacer nunca con la espada?', 'Pasarla por encima de nadie', ['Guardarla en su funda', 'Limpiarla', 'Revisarla'], '', 'ia-etiqueta');
    Q('etiqueta', '¿Qué debes hacer antes de empezar a practicar?', 'Revisar el equipo (la clavija, la tsuka y la hoja)', ['Nada', 'Probar el filo con el dedo', 'Aflojar la tsuka'], '', 'ia-seguridad');
    Q('etiqueta', '¿Se puede probar el filo con el dedo?', 'No, nunca', ['Sí, con cuidado', 'Solo con guantes', 'Solo los veteranos'], '', 'ia-seguridad');
    Q('postura', '¿Qué es tatehiza?', 'Una postura con una rodilla levantada', ['Sentado sobre los talones', 'De pie', 'Tumbado'], '', 'ia-seiza');
    Q('postura', '¿Qué es seiza?', 'Sentado sobre los talones', ['Una rodilla levantada', 'De pie', 'En cuclillas'], '', 'ia-seiza');
    Q('postura', '¿Cómo se mueven los pies en iaidō?', 'Deslizando (suri-ashi)', ['Pisando fuerte', 'Saltando', 'De puntillas'], '', 'ia-ashi');
    Q('postura', '¿Por dónde se respira en iaidō?', 'Por el abdomen (tanden)', ['Por los hombros', 'Solo por la boca', 'Por el pecho alto'], '', 'ia-postura');
    Q('tecnica', '¿Qué es el "hasuji" en iaidō?', 'La dirección del filo al cortar', ['El saludo', 'La funda', 'La postura'], '', 'ia-tenouchi');
    Q('tecnica', '¿Qué dedos agarran con firmeza la tsuka?', 'Meñique y anular', ['Índice y pulgar', 'Pulgar y corazón', 'Todos con fuerza'], '', 'ia-tenouchi');
    Q('mente', '¿Qué es el zanshin?', 'La atención que se mantiene tras el corte', ['La velocidad del corte', 'La potencia', 'Un saludo'], '', 'ia-zanshin');
    Q('tecnica', '¿Cuántas formas tiene el seitei-gata?', 'Doce', ['Siete', 'Diez', 'Cinco'], '', 'ia-seitei');
    Q('tecnica', '¿Qué forma es la primera del seitei?', 'Mae', ['Ushiro', 'Ukenagashi', 'Nukiuchi'], '', 'ia-seitei');
    Q('tecnica', '¿Qué forma es la última del seitei?', 'Nukiuchi', ['Mae', 'Sōgiri', 'Shihōgiri'], '', 'ia-seitei');
    Q('tecnica', '¿Cuántos oponentes hay en Shihōgiri?', 'Cuatro', ['Dos', 'Tres', 'Uno'], '', 'ia-s10');
    Q('tecnica', '¿Cuántos oponentes hay en Sanpōgiri?', 'Tres', ['Cuatro', 'Dos', 'Uno'], '', 'ia-s7');
    Q('tecnica', '¿Dónde está el oponente en Ushiro?', 'Detrás', ['Delante', 'A la izquierda', 'A la derecha'], '', 'ia-s2');
    Q('tecnica', '¿Dónde está el oponente en Ukenagashi?', 'A la izquierda', ['Delante', 'Detrás', 'A la derecha'], '', 'ia-s3');
    Q('tecnica', '¿Con qué postura empieza Tsuka-ate?', 'Tatehiza', ['Seiza', 'De pie', 'Sonkyō'], '', 'ia-s4');
    Q('tecnica', '¿Qué se usa para golpear en Tsuka-ate?', 'La empuñadura (tsuka)', ['La punta', 'El puño solo', 'La funda'], '', 'ia-s4');
    Q('tecnica', '¿Qué forma incluye una estocada con las dos manos?', 'Morote-tsuki', ['Mae', 'Kesagiri', 'Nukiuchi'], '', 'ia-s6');
    Q('tecnica', '¿Qué forma se llama así por el corte diagonal?', 'Kesagiri', ['Mae', 'Ushiro', 'Soete-tsuki'], '', 'ia-s5');
    Q('tecnica', '¿Qué forma incluye cinco cortes completos?', 'Sōgiri', ['Mae', 'Ushiro', 'Nukiuchi'], '', 'ia-s11');
    Q('tecnica', '¿Qué forma evita un ataque desenvainando hacia atrás y arriba?', 'Nukiuchi', ['Mae', 'Ukenagashi', 'Sōgiri'], '', 'ia-s12');
    Q('tecnica', '¿Qué es el ukenagashi del seitei 3?', 'Un desvío flexible del corte del oponente', ['Un bloqueo rígido', 'Un saludo', 'Un tipo de postura'], '', 'ia-s3');
    Q('tecnica', '¿A qué zona se dirige la estocada en muchas formas del seitei?', 'Al plexo (suigetsu)', ['A la rodilla', 'Al pie', 'A la nuca'], '', 'ia-s6');
    Q('mente', '¿Qué federación creó el seitei-gata?', 'La Federación Japonesa de Kendō', ['Una escuela local', 'Una federación de judo', 'Una universidad'], '', 'ia-seitei');
    Q('tecnica', '¿Qué escuela es "Musō Jikiden Eishin-ryū"?', 'Una escuela tradicional de iaidō', ['Una forma del seitei', 'Un tipo de espada', 'Un dōjō'], '', 'ia-mjer');
    Q('tecnica', '¿Qué serie de MJER se practica desde seiza?', 'Shoden (Seiza no bu)', ['Chūden', 'Okuden', 'Bangai'], '', 'ia-mjer-shoden');
    Q('tecnica', '¿Cuántas formas tiene la serie Shoden?', 'Once', ['Diez', 'Siete', 'Trece'], '', 'ia-mjer-shoden');
    Q('tecnica', '¿Cuántas formas tiene la serie Chūden?', 'Diez', ['Once', 'Ocho', 'Trece'], '', 'ia-mjer-chuden');
    Q('tecnica', '¿Qué postura usa la serie Chūden?', 'Tatehiza', ['Seiza', 'De pie siempre', 'Sonkyō'], '', 'ia-mjer-chuden');
    Q('tecnica', '¿Qué significa "Mae" en la serie Shoden?', 'Frente', ['Derecha', 'Izquierda', 'Detrás'], '', 'ia-mjer-shoden');
    Q('tecnica', '¿Qué significa "Ushiro" en la serie Shoden?', 'Detrás', ['Frente', 'Derecha', 'Izquierda'], '', 'ia-mjer-shoden');
    Q('tecnica', '¿Qué son los kumitachi?', 'Formas por parejas', ['Formas en solitario', 'Un tipo de espada', 'Un saludo'], '', 'ia-mjer-kumitachi');
    Q('tecnica', '¿Qué son los battō-hō?', 'Ejercicios de desenvainado', ['Formas por parejas', 'Una escuela', 'Un tipo de saludo'], '', 'ia-mjer-kumitachi');
    Q('mente', '¿Cómo conviene estudiar una escuela tradicional?', 'Paso a paso, con un maestro y respetando el orden', ['Rápido y por internet', 'Saltándote series', 'Sin maestro'], '', 'ia-mjer-estudio');
    Q('postura', '¿Qué haces si te duele la rodilla en seiza?', 'Paras y reduces el tiempo', ['Aprietas los dientes', 'Aumentas el tiempo', 'Lo ignoras'], '', 'ia-rodillas');
    Q('mente', '¿Se examina el iaidō igual que el kendō?', 'No, tiene sus propios exámenes', ['Sí, el mismo examen', 'No se examina', 'Solo en Japón'], '', 'ia-grados');
  })();

  /* ---------- Glosario de iaidō ---------- */
  (function () {
    const slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const rows = [
      ['Iaidō', '居合道', 'El camino de sacar la espada y cortar en un solo movimiento.', 'base'],
      ['Iaijutsu', '居合術', 'Arte tradicional de desenvainar, antecesor del iaidō.', 'base'],
      ['Battōjutsu', '抜刀術', 'Técnica de desenvainar y cortar.', 'base'],
      ['Kassoteki', '仮想敵', 'Oponente imaginario.', 'mente'],
      ['Katana', '刀', 'Espada larga japonesa.', 'equipo'],
      ['Iaitō', '居合刀', 'Espada de entrenamiento sin filo, con forma de katana.', 'equipo'],
      ['Shinken', '真剣', 'Espada real con filo.', 'equipo'],
      ['Saya', '鞘', 'Funda de la espada.', 'equipo'],
      ['Koiguchi', '鯉口', 'Boca de la funda.', 'equipo'],
      ['Kurikata', '栗形', 'Anilla de la funda por la que pasa el cordón.', 'equipo'],
      ['Sageo', '下緒', 'Cordón de la funda.', 'equipo'],
      ['Kojiri', '鐺', 'Contera de la funda.', 'equipo'],
      ['Tsuka-ito', '柄糸', 'Cordón que envuelve la empuñadura.', 'equipo'],
      ['Fuchi', '縁', 'Casquillo entre la guarda y la empuñadura.', 'equipo'],
      ['Kashira', '頭', 'Remate de la empuñadura.', 'equipo'],
      ['Habaki', '鎺', 'Pieza metálica que asegura la hoja en la funda.', 'equipo'],
      ['Mekugi', '目釘', 'Clavija que sujeta la hoja a la empuñadura.', 'equipo'],
      ['Ha', '刃', 'Filo de la hoja.', 'equipo'],
      ['Mune', '棟', 'Lomo de la hoja.', 'equipo'],
      ['Hamon', '刃文', 'Línea de temple de la hoja.', 'equipo'],
      ['Kissaki', '切先', 'Punta de la espada.', 'equipo'],
      ['Obi', '帯', 'Cinturón donde se coloca la espada.', 'equipo'],
      ['Tō-rei', '刀礼', 'Saludo a la espada.', 'etiqueta'],
      ['Embu', '演武', 'Demostración.', 'etiqueta'],
      ['Nukitsuke', '抜付', 'Desenvainar y hacer el primer corte.', 'waza'],
      ['Kiritsuke', '切付', 'Corte final.', 'waza'],
      ['Chiburi', '血振り', 'Sacudida simbólica de la hoja.', 'waza'],
      ['Yoko-chiburi', '横血振り', 'Chiburi lateral.', 'waza'],
      ['Ō-chiburi', '大血振り', 'Chiburi amplio.', 'waza'],
      ['Chinugui', '血拭い', 'Limpiar la hoja con la mano o un paño (simbólico).', 'waza'],
      ['Nōtō', '納刀', 'Envainar la espada.', 'waza'],
      ['Gyaku-nōtō', '逆納刀', 'Envainado invertido.', 'waza'],
      ['Sayabiki', '鞘引き', 'Tirar de la funda hacia atrás al desenvainar.', 'waza'],
      ['Kirioroshi', '斬り下ろし', 'Corte descendente.', 'waza'],
      ['Kesa-giri', '袈裟切り', 'Corte diagonal.', 'waza'],
      ['Tsuka-ate', '柄当て', 'Golpe con la empuñadura.', 'waza'],
      ['Suigetsu', '水月', 'Plexo solar.', 'golpe'],
      ['Tatehiza', '立膝', 'Postura con una rodilla levantada.', 'postura'],
      ['Wakigamae', '脇構え', 'Guardia lateral.', 'postura'],
      ['Seitei-gata', '制定形', 'Las doce formas estándar de la Federación Japonesa de Kendō.', 'base'],
      ['Mae', '前', 'Seitei 1: oponente de frente (desde seiza).', 'waza'],
      ['Ushiro', '後ろ', 'Seitei 2: oponente por detrás (desde seiza).', 'waza'],
      ['Ukenagashi (iai)', '受け流し', 'Seitei 3: desvío del corte.', 'waza'],
      ['Morote-tsuki', '諸手突き', 'Seitei 6: estocada con las dos manos.', 'waza'],
      ['Sanpō-giri', '三方切り', 'Seitei 7: corte en tres direcciones.', 'waza'],
      ['Ganmen-ate', '顔面当て', 'Seitei 8: golpe a la cara.', 'waza'],
      ['Soete-tsuki', '添え手突き', 'Seitei 9: estocada con la mano de apoyo.', 'waza'],
      ['Shihō-giri', '四方切り', 'Seitei 10: corte en cuatro direcciones.', 'waza'],
      ['Sō-giri', '総切り', 'Seitei 11: cinco cortes completos.', 'waza'],
      ['Nukiuchi (iai)', '抜き打ち', 'Seitei 12: evitar y cortar.', 'waza'],
      ['Koryū', '古流', 'Escuela tradicional.', 'base'],
      ['Musō Jikiden Eishin-ryū', '無雙直傳英信流', 'Escuela tradicional de iaidō.', 'base'],
      ['Musō Shinden-ryū', '無雙神傳流', 'Otra escuela tradicional de iaidō.', 'base'],
      ['Seiza no bu', '正座の部', 'Serie Shoden de MJER, desde seiza.', 'base'],
      ['Tatehiza no bu', '立膝の部', 'Serie Chūden de MJER, desde tatehiza.', 'base'],
      ['Okuden', '奥伝', 'Serie avanzada de MJER.', 'base'],
      ['Bangai', '番外', 'Formas extra de MJER.', 'base'],
      ['Kumitachi', '組太刀', 'Formas por parejas.', 'base'],
      ['Battō-hō', '抜刀法', 'Ejercicios de desenvainado.', 'base'],
      ['Sōke', '宗家', 'Maestro principal de una escuela.', 'base'],
      ['Itomagoi', '暇乞', 'Despedida: formas de MJER desde seiza.', 'waza']
    ];
    rows.forEach(r => KD.glossary.push({ id: slug(r[0]), t: r[0], k: r[1], e: r[2], c: r[3], d: 'iaido' }));
  })();

  /* ---------- Plan, rutinas y consejos de iaidō ---------- */
  KD.planIai = [
    { n: 1, t: 'Semana 1 · Qué es y cómo comportarse', focus: 'Entender el iaidō, su etiqueta y la seguridad antes de sacar nada.', lessons: ['ia-que-es', 'ia-kendo-iaido', 'ia-etiqueta', 'ia-seguridad'], tasks: ['Estudiar las lecciones de la semana.', 'Practicar sentarte y levantarte de seiza 10 veces con calma.', 'Preguntar a tu sensei cómo se hace el saludo a la espada en vuestro dōjō.', 'Anotar en el diario tres dudas para tu sensei.'] },
    { n: 2, t: 'Semana 2 · Equipo', focus: 'Conocer la katana, la ropa y cómo llevar la espada.', lessons: ['ia-katana', 'ia-iaito', 'ia-vestimenta', 'ia-colocar', 'ia-cuidado'], tasks: ['Estudiar las lecciones de la semana.', 'Aprender los nombres de las partes de la katana con la ilustración.', 'Practicar vestirte y atar el obi.', 'Preguntar a tu sensei cuándo y qué iaitō comprar.'] },
    { n: 3, t: 'Semana 3 · Postura y seiza', focus: 'Postura, respiración y seiza con control.', lessons: ['ia-postura', 'ia-seiza', 'ia-rodillas'], tasks: ['Estudiar las lecciones de la semana.', 'Seiza 1–2 minutos al día.', 'Respiración abdominal 3 minutos.', 'Estiramientos de tobillos y rodillas tras cada sesión.'] },
    { n: 4, t: 'Semana 4 · Pies y agarre', focus: 'Suri-ashi, giros, tenouchi y filo.', lessons: ['ia-ashi', 'ia-tenouchi'], tasks: ['Estudiar las lecciones de la semana.', 'Suri-ashi y giros 10 minutos al día.', '20 cortes lentos con bokken y filo alineado.', 'Grabarte de frente para comprobar la línea del corte.'] },
    { n: 5, t: 'Semana 5 · Nukitsuke y kiritsuke', focus: 'El desenvainado y el corte final (con guía de tu sensei).', lessons: ['ia-nukitsuke', 'ia-kiritsuke', 'ia-zanshin'], tasks: ['Estudiar las lecciones de la semana.', 'Practicar el gesto de las manos sin espada, lento.', 'Con tu sensei: probar el nukitsuke con iaitō cuando lo indique.', 'Visualizar al oponente antes de cada práctica.'] },
    { n: 6, t: 'Semana 6 · Chiburi y nōtō', focus: 'La sacudida y la envainada, con calma.', lessons: ['ia-chiburi', 'ia-noto', 'ia-secuencia'], tasks: ['Estudiar las lecciones de la semana.', 'Practicar el chiburi con bokken, lento.', 'Practicar el gesto de la saya sin espada.', 'Repasar la secuencia completa en seco.'] },
    { n: 7, t: 'Semana 7 · Primeras formas del seitei', focus: 'Mae, Ushiro y Ukenagashi, con tu sensei.', lessons: ['ia-seitei', 'ia-seitei-rei', 'ia-s1', 'ia-s2', 'ia-s3'], tasks: ['Estudiar las lecciones de la semana.', 'Repasar el esquema de oponentes de cada forma.', 'Practicar con tu sensei las formas que os toquen.', 'Anotar las correcciones del sensei.'] },
    { n: 8, t: 'Semana 8 · Escuela tradicional y camino', focus: 'Conocer Eishin-ryū y el sistema de exámenes.', lessons: ['ia-mjer', 'ia-mjer-shoden', 'ia-grados', 'ia-casa'], tasks: ['Estudiar las lecciones de la semana.', 'Aprender el orden de las once formas de Shoden.', 'Hablar con tu sensei sobre el primer examen.', 'Repasar todas las autoevaluaciones.'] }
  ];
  KD.routinesIai = [
    { id: 'ia-r-postura', t: 'Postura y seiza', min: 10, desc: 'Respiración, postura y seiza.', steps: [['Respiración abdominal', '3 min', 'De pie, hombros sueltos.'], ['Seiza', '1–2 min', 'Con calma.'], ['Sentarte y levantarte', '10 veces', 'Rodilla izquierda primero para bajar.'], ['Estiramientos de tobillos', '2 min', '']] },
    { id: 'ia-r-pies', t: 'Pies y giros', min: 10, desc: 'Suri-ashi y giros sin espada.', steps: [['Suri-ashi adelante y atrás', '10 × 2', ''], ['Giros de 90°', '10', ''], ['Giros de 180°', '10', ''], ['Estiramientos', '2 min', '']] },
    { id: 'ia-r-bokken', t: 'Bokken: filo y recorrido', min: 15, desc: 'Cortes lentos con bokken, filo alineado.', steps: [['Calentamiento', '3 min', ''], ['Tenouchi: revisión', '2 min', ''], ['Cortes verticales lentos', '20', 'Filo alineado.'], ['Cortes diagonales lentos', '20', ''], ['Estiramientos de muñecas', '2 min', '']] },
    { id: 'ia-r-secuencia', t: 'Secuencia en seco', min: 10, desc: 'Las ocho fases, sin espada o con bokken.', steps: [['Taitō y postura', '1 min', ''], ['Nukitsuke (manos)', '10', 'Lento.'], ['Kiritsuke', '10', ''], ['Chiburi', '10', ''], ['Nōtō (manos)', '10', 'Sin mirar.'], ['Zanshin', '1 min', 'Mirada abierta.']] },
    { id: 'ia-r-memoria', t: 'Memoria de formas', min: 10, desc: 'Repaso del orden y los oponentes del seitei.', steps: [['Repasar los nombres del seitei', '3 min', ''], ['Esquema de oponentes de 3 formas', '3 min', ''], ['Repaso de Shoden (orden)', '2 min', ''], ['Anotar dudas', '2 min', '']] }
  ];
  KD.tipsIai = [
    'Calma antes que velocidad: la envainada importa tanto como el corte.',
    'El oponente imaginario hace tu práctica real.',
    'Una forma bien hecha vale más que diez a medias.',
    'Nunca toques el filo con los dedos.',
    'Respira por el abdomen: ahí nace el movimiento.',
    'Anota cada corrección de tu sensei: es oro.',
    'Si te duele la rodilla, para: la seiza se gana poco a poco.',
    'La espada se respeta: nunca la pases por encima de nadie.'
  ];
})();
