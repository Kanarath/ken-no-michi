/* Contenido: práctica en pareja, defensa, cuerpo y kata (se carga antes de data-tech-2) */
(function () {
  const add = KD.add;

  /* =============== PRÁCTICA EN PAREJA Y DEFENSA =============== */
  add({
    id: 'motodachi', t: 'Ser un buen motodachi', jp: '元立ち', sub: 'Recibir también se aprende',
    intro: 'El motodachi es quien recibe los ataques y guía al compañero. Es un papel de responsabilidad: un buen motodachi hace mejorar a quien practica con él, y aprender a serlo te enseña distancia, tiempo y respeto.',
    why: 'Practicar como motodachi afina tu ma-ai y tu lectura del rival, y es la base de uchikomi-geiko, kakari-geiko y kirikaeshi.',
    steps: ['Mantén chūdan firme y la guardia viva: no eres un blanco inerte.', 'Ofrece el blanco en el momento y a la altura correctos: para men, abre ligeramente el shinai; para kote, baja un poco las manos; para dō, levanta los brazos.', 'Controla la distancia retrocediendo con el compañero para que siempre golpee en su ma-ai.', 'Adapta la intensidad al nivel de quien practica: más fácil para principiantes, más exigente para veteranos.', 'Recibe los golpes sin esquivarlos cuando toca recibir; da feedback breve y claro cuando te lo pidan.', 'Cuida de la seguridad: si ves que el compañero va a hacerse daño, para el ejercicio.'],
    keys: ['El motodachi no gana: guía.', 'Ofrecer el blanco bien es más difícil de lo que parece.', 'La mirada al compañero, siempre.', 'Mantén el kiai y el ritmo igual que si fueras tú quien golpea.'],
    errors: [['Ofreces el blanco demasiado pronto o tarde', 'Observa su preparación: ofrece el blanco cuando empiece a entrar.'], ['Retrocedes demasiado rápido y el compañero no llega', 'Ajusta tu paso al suyo; si no llega, afloja el ritmo.'], ['Te quedas rígido o te giras para esquivar', 'Mantén la postura y recibe con control.']],
    drills: ['Pídele a tu sensei que te corrija como motodachi en kirikaeshi.', 'Con un compañero, practicad por turnos: 5 minutos cada uno de motodachi, fijándoos solo en ofrecer bien el blanco.'],
    check: ['Ofrezco el blanco en el momento correcto.', 'Controlo la distancia retrocediendo con mi compañero.', 'Adapto la intensidad a su nivel.'],
    terms: [['Motodachi', 'receptor'], ['Kakarite', 'atacante']]
  });

  add({
    id: 'uchikomi-geiko', t: 'Uchikomi-geiko', jp: '打ち込み稽古', sub: 'Golpes repetidos con compañero',
    art: ['seq:kote-men'],
    intro: 'En uchikomi-geiko golpeas una y otra vez a los blancos que ofrece el motodachi. Es el ejercicio para pulir precisión, distancia y potencia con un compañero real delante.',
    why: 'Convierte el golpe de suburi en un golpe con distancia y blanco reales, y te acostumbra al bōgu, al contacto y al ritmo de la práctica.',
    steps: ['Saludo y chūdan frente al motodachi.', 'El motodachi ofrece el blanco; golpeas con okuri-ashi, fumikomi, kiai y zanshin, y vuelves a chūdan.', 'Repite en series de 5 a 10 golpes: men, kote, dō, kote-men…', 'Entre series, descansa y respira; no encadenes más de lo que tu técnica aguante.', 'Cambio de roles y saludo final.'],
    keys: ['Cada golpe es completo: nada de golpes a medias.', 'Vuelve a chūdan siempre; el zanshin es parte del ejercicio.', 'Calidad antes que velocidad.', 'Pide al motodachi que te diga si el golpe llegó con filo y en el monouchi.'],
    errors: [['Golpes cortos y flojos al cansarte', 'Baja la cantidad y mantén la calidad: es mejor 5 buenos que 20 malos.'], ['No vuelves a chūdan entre golpes', 'Termina cada golpe con zanshin y guardia.'], ['Golpeas el aire cerca del blanco', 'Ajusta la distancia: el monouchi debe tocar el blanco.']],
    drills: ['Men × 10, kote × 10, kote-men × 10, con descansos.', 'En casa: repite los mismos tres ejercicios en el aire antes de la clase.'],
    check: ['Cada golpe es completo.', 'Vuelvo a chūdan siempre.', 'Mantengo el kiai hasta el final de la serie.'],
    terms: [['Uchikomi-geiko', 'golpes repetidos']]
  });

  add({
    id: 'kakari-geiko', t: 'Kakari-geiko', jp: '掛かり稽古', sub: 'Atacar sin pausa',
    intro: 'Kakari-geiko es una serie de ataques continuos y enérgicos contra el motodachi, sin parar y sin pensar demasiado. Entrena el espíritu, la resistencia y la decisión.',
    why: 'Rompe las dudas: aprendes a atacar con todo, a recuperarte y a seguir. Muchos dōjō lo usan como ejercicio final de la clase.',
    steps: ['Saludo y chūdan frente al motodachi.', 'Ataca con decisión: men, kote, dō, kote-men… sin pausas largas, con kiai continuo.', 'El motodachi recibe, ofrece blancos y te empuja a seguir.', 'Cuando tu sensei lo indique (suele ser entre 20 y 30 segundos, o hasta cansarte), termina con tai-atari y pasa.', 'Respira, saluda y cambia de rol.'],
    keys: ['No te detengas tras fallar un golpe: sigue.', 'Mantén la técnica correcta incluso cansado.', 'El kiai continuo es parte del ejercicio.', 'Respeta tus límites: si te mareas, para y avisa.'],
    errors: [['Golpeas sin técnica por ir rápido', 'Prefiere menos golpes bien hechos que muchos sin forma.'], ['Te quedas sin aire y dejas de gritar', 'Respira por el abdomen y sigue con kiai aunque sea más corto.'], ['Te paras a pensar tras un fallo', 'Recupera y golpea otra vez al instante.']],
    drills: ['Con tu motodachi, series de 15 a 30 segundos con descanso, hasta 3 series.', 'Fuera del dōjō, mejora tu resistencia con trabajo de cardio (ver módulo Cuerpo).'],
    warn: 'Es un ejercicio muy exigente: hidrátate, no lo hagas con mareo ni dolor y avisa a tu sensei si te sientes mal.',
    check: ['Atacó sin pausas largas.', 'Mi técnica se mantiene al cansarme.', 'Mantengo el kiai hasta el final.'],
    terms: [['Kakari-geiko', 'ataque continuo']]
  });

  add({
    id: 'ji-geiko', t: 'Ji-geiko: la práctica libre', jp: '地稽古', sub: 'Aplicar todo con un compañero',
    intro: 'Ji-geiko es práctica libre con un compañero, con intención real pero sin puntuar. Es el momento de usar seme, kake-hiki y tus técnicas de confianza, y de aprender de quienes saben más.',
    why: 'Es donde se une todo lo que has estudiado. También es donde más aprendes: cada compañero te enseña algo distinto.',
    steps: ['Saludo ("onegaishimasu"), taitō, sonkyō y chūdan.', 'Empieza con seme y kake-hiki: observa cómo se mueve tu compañero.', 'Elige una idea para esta práctica (por ejemplo, solo kote-men) y aplícala con decisión.', 'Mantén kiai y zanshin en cada golpe, aunque no cuente un punto.', 'Cuando oigas la señal de terminar, saludo y "arigatō gozaimashita".', 'Después, anota en el diario qué has aprendido y qué cambiarías.'],
    keys: ['No se trata de ganar: se trata de atacar con claridad y aprender.', 'Con quien sabe más, ataca con espíritu sin miedo a fallar.', 'Con quien sabe menos, ayuda: no abuses.', 'Respeto siempre, también cuando recibes un golpe fuerte.'],
    errors: [['Te lanzas sin seme', 'Primero presión y lectura, luego golpe.'], ['Te quedas esperando', 'Si el rival no se mueve, entra tú: el seme necesita progresar.'], ['Te frustras tras un golpe fuerte', 'Respira, vuelve a chūdan y sigue: es parte del aprendizaje.'], ['Cambias de idea a cada rato', 'Una idea por práctica: si no, no aprendes nada.']],
    drills: ['Antes de cada ji-geiko, escribe en la mano o en el diario la idea del día.', 'Después, apunta una cosa que has hecho bien y una que cambiarías.'],
    check: ['Elijo una idea para cada práctica.', 'Mantengo el kiai y el zanshin.', 'Anoto lo aprendido al terminar.'],
    terms: [['Ji-geiko', 'práctica libre'], ['Kake-hiki', 'entrar y salir']]
  });

  add({
    id: 'ukeru', t: 'Ukeru: recibir con el shinai', jp: '受ける', sub: 'Defensa básica y sus límites',
    art: ['seq:ukeru'],
    intro: 'Ukeru es recibir o parar el golpe del rival con el shinai. En kendō se defiende sobre todo con la distancia, el seme y las técnicas de respuesta, pero conviene dominar las recepciones básicas para los ejercicios con motodachi y para salir de un apuro.',
    why: 'Te enseña a proteger los tres blancos con el shinai y a no cerrar los ojos cuando alguien te ataca. También es el punto de partida de suriage y kaeshi.',
    steps: ['Men: sube el shinai por encima de la cabeza con el kensen algo adelantado y las muñecas flexibles; el golpe se recibe en el centro del shinai.', 'Kote: baja las manos al frente y apunta el kensen hacia abajo para que el golpe caiga sobre el shinai.', 'Dō: lleva el shinai casi vertical ante tu costado derecho, con el kensen hacia abajo.', 'En todos los casos, mantén los ojos abiertos y la mirada en el rival.', 'Tras recibir, vuelve a chūdan o responde con una técnica (suriage, kaeshi, nuki).'],
    keys: ['Recibir no es esconderse: es controlar.', 'Los ojos abiertos y la postura recta.', 'El shinai recibe; las manos no se interponen.', 'Con la distancia correcta casi nunca hace falta recibir.'],
    errors: [['Cierras los ojos al recibir', 'Mira siempre al rival: así ves el siguiente movimiento.'], ['Recibes con las manos o el cuerpo', 'El shinai recibe; protege tus manos.'], ['Te quedas en la recepción', 'Tras recibir, vuelve a chūdan o contraataca: la defensa pasiva se pierde.']],
    drills: ['Con un compañero y a cámara lenta: recibir men, kote y dō, 10 veces cada uno, con kiai.', 'En kirikaeshi, observa cómo recibe el motodachi: es la recepción más limpia.'],
    check: ['Recibo men, kote y dō sin cerrar los ojos.', 'Vuelvo a chūdan tras recibir.', 'Distingo recibir de bloquear.'],
    terms: [['Ukeru', 'recibir (parar)'], ['Suriage-waza', 'desviar']]
  });

  add({
    id: 'tras-el-ataque', t: 'Después del golpe: cerrar el hueco', jp: '打突後の動き', sub: 'Qué hacer cuando el golpe no cuenta',
    art: ['seq:zanshin'],
    intro: 'Un ataque no termina en el golpe: termina cuando recuperas la distancia y la guardia. Lo que haces después decide si recibes un contraataque o no.',
    why: 'Los puntos se pierden más por descuidos tras el golpe que por el golpe mismo. Cerrar bien el hueco te protege y te prepara para el siguiente ataque.',
    steps: ['Tras el golpe, sigue moviéndote hacia delante o pasa junto al rival; no te detengas en la distancia del golpe.', 'Si el golpe ha sido bloqueado y estás pegado, usa tai-atari o sepárate con control (tsubazeriai, hiki-waza).', 'Si el golpe ha fallado, no te quedes parado: continúa y recupera la guardia.', 'Gírate sin dar la espalda y vuelve a chūdan de cara al rival, con el kensen apuntándole (zanshin).', 'Mantén la mirada y el kiai hasta que el árbitro o tu sensei marquen el final.'],
    keys: ['Zanshin es seguir "presente", no una pose.', 'El hueco más peligroso es el momento tras fallar.', 'Gira siempre de cara al rival.'],
    errors: [['Te paras tras el golpe', 'Sigue avanzando y recupera la guardia.'], ['Te giras dando la espalda', 'Gira en la dirección correcta y mirando al rival.'], ['Te relajas al terminar', 'Mantén la alerta hasta oír la señal.']],
    drills: ['En el aire: golpe + paso + giro + chūdan, 10 repeticiones.', 'Con compañero: golpe, pasa, gira y vuelve a chūdan sin que él te toque.'],
    check: ['Sigo moviéndome tras el golpe.', 'Giro de cara al rival.', 'Mantengo el zanshin hasta el final.'],
    terms: [['Zanshin', 'alerta'], ['Tai-atari', 'choque de cuerpo']]
  });

  /* =============== CUERPO =============== */
  add({
    id: 'calentamiento-kendo', t: 'Calentamiento específico', jp: '準備運動', sub: '10 minutos que evitan semanas de molestias',
    intro: 'Calentar bien no es perder tiempo: prepara muñecas, hombros, caderas y pies, que son lo que más trabaja en kendō. Este calentamiento sirve antes de la clase y antes de entrenar en casa.',
    steps: ['Pulso: 2 minutos de trote suave o de marcha rápida.', 'Cuello, hombros y espalda: círculos suaves (10 de cada), sin forzar.', 'Muñecas y antebrazos: círculos y flexo-extensión, 30 segundos cada una.', 'Caderas y rodillas: círculos de cadera, sentadillas suaves (10).', 'Tobillos y pies: círculos, elevaciones de talón (10) y estiramiento de gemelos.', 'Okuri-ashi suave sin shinai (10 adelante, 10 atrás).', 'Suburi muy suave: 10 jōge-buri sin potencia.'],
    keys: ['Sube la intensidad poco a poco.', 'Si hace frío, calienta más tiempo.', 'Nunca estires con fuerza en frío: primero movilidad.'],
    errors: [['Empiezas a golpear fuerte sin calentar', 'Siempre pulso + movilidad antes de suburi con fuerza.'], ['Te saltas tobillos y pies', 'Son los más castigados: dedícales un minuto.']],
    drills: ['Hazlo antes de cada sesión durante dos semanas hasta que sea automático.'],
    check: ['Caliento antes de cada sesión.', 'Dedico tiempo a muñecas y tobillos.'],
    warn: 'Esta guía es general. Si tienes una lesión o condición médica, consulta con un profesional antes de entrenar.'
  });

  add({
    id: 'movilidad', t: 'Movilidad y flexibilidad', jp: '柔軟性', sub: 'Tobillos, caderas, hombros y muñecas',
    intro: 'El kendō pide tobillos que flexionen, caderas abiertas, hombros sueltos y muñecas ágiles. Con unos pocos ejercicios diarios, tu guardia y tus golpes mejoran.',
    steps: ['Gemelos y tobillos: apoya las manos en la pared y estira la pierna de atrás con el talón en el suelo, 30 segundos por pierna.', 'Cuádriceps: de pie, lleva el talón al glúteo, 30 segundos por pierna.', 'Caderas: zancada profunda con la rodilla trasera en el suelo, 30 segundos por lado.', 'Isquiotibiales: estiramiento sentado, 30 segundos por pierna.', 'Hombros: lleva el brazo cruzado sobre el pecho, 20 segundos por lado.', 'Muñecas y antebrazos: palma abierta hacia delante y atrás, empujando suavemente, 20 segundos por posición.', 'Espalda: gato-camello en cuatro apoyos, 10 repeticiones.'],
    keys: ['Estira sin dolor: sensación de tensión, nunca de pinchazo.', 'Respira lento mientras estiras.', 'Mejor 5 minutos cada día que 30 una vez por semana.'],
    errors: [['Rebotas al estirar', 'Mantén la posición, sin rebotes.'], ['Estiras en frío con fuerza', 'Después del calentamiento o al terminar la sesión.']],
    drills: ['5 minutos de movilidad al terminar cada sesión.', 'Un día a la semana, una sesión más larga de 15 minutos.'],
    check: ['Estiro gemelos y tobillos cada día.', 'Mis hombros están sueltos al hacer suburi.'],
    warn: 'Si sientes dolor agudo o formigueo, para y consulta con un fisioterapeuta.'
  });

  add({
    id: 'fuerza-kendo', t: 'Fuerza para kendō', jp: '筋力', sub: 'Piernas, core, antebrazos y espalda',
    intro: 'No necesitas mucha fuerza, pero sí buena base: piernas estables, abdomen firme, antebrazos resistentes y espalda fuerte. Dos sesiones cortas por semana bastan para notar la diferencia.',
    steps: ['Piernas: sentadillas (3 × 10), zancadas (3 × 8 por pierna) y elevaciones de talón a una pierna (3 × 10).', 'Core: plancha (3 × 20–40 segundos), plancha lateral (2 × 20 segundos por lado) y "dead bug" (2 × 10).', 'Antebrazos: curl de muñeca con peso ligero (2 × 15) y agarre de una toalla retorcida (3 × 20 segundos).', 'Espalda y hombros: remo con goma elástica (3 × 12) y elevaciones laterales ligeras (2 × 12).', 'Descansa 1–2 minutos entre series y estira al terminar.'],
    keys: ['Dos sesiones por semana, no más al principio.', 'Técnica antes que peso.', 'Sube la carga poco a poco.', 'No entrenes fuerza intensa justo antes de una práctica de kendō exigente.'],
    errors: [['Entrenas fuerza el mismo día que una clase dura sin descansar', 'Separa las sesiones o baja la intensidad.'], ['Subes peso demasiado rápido', 'Aumenta como máximo un 5–10% por semana.']],
    drills: ['Sesión A (lunes): piernas y core.', 'Sesión B (jueves): antebrazos, espalda y hombros.'],
    check: ['Hago dos sesiones de fuerza por semana.', 'Mantengo buena técnica en cada ejercicio.'],
    warn: 'Si tienes una lesión o dudas, consulta con un profesional antes de empezar. Esta guía es general.'
  });

  add({
    id: 'cuidado-pies', t: 'Cuidado de los pies', jp: '足のケア', sub: 'Descalzo sobre madera, semana tras semana',
    intro: 'Se practica descalzo y con mucha fricción y pisadas. Los pies son lo que más sufre al empezar: ampollas, callos, grietas y dolor de talón. Cuidarlos permite entrenar sin interrupciones.',
    steps: ['Mantén las uñas cortas y rectas.', 'Hidrata la piel (por la noche) y limpia bien después de entrenar.', 'Si sale una ampolla: no la revientes salvo que moleste mucho; límpiala y cúbrela con un apósito.', 'Para las zonas de fricción (planta del pie izquierdo en deslizamientos), usa cinta o protectores si tu sensei lo permite.', 'Si te duele el talón al hacer fumikomi, reduce la intensidad y revisa que pisas con la planta entera.', 'Estira gemelos y la planta del pie al terminar cada sesión.'],
    keys: ['Un callo es normal; una grieta o ampolla abierta, no.', 'No sigas golpeando con una herida abierta.', 'El dolor de talón persistente no se ignora.'],
    errors: [['Ignoras una ampolla y sigues entrenando', 'Cúbrela y baja la intensidad hasta que mejore.'], ['Arrancas la piel de los callos', 'Lima suavemente; no arranques la piel.']],
    drills: ['Revisa tus pies después de cada práctica.', 'Una vez a la semana, hidratación intensa y estiramientos de planta.'],
    check: ['Reviso mis pies tras cada sesión.', 'Mis uñas están cortas.', 'Sé qué hacer ante una ampolla.'],
    warn: 'Si el dolor en el talón o el pie dura más de una o dos semanas, o si hay signos de infección (enrojecimiento, hinchazón, pus), consulta con un médico o podólogo.'
  });

  add({
    id: 'prevencion-lesiones', t: 'Prevención de lesiones', jp: '怪我の予防', sub: 'Las molestias más comunes y cómo evitarlas',
    intro: 'Con kendō bien enseñado, las lesiones graves son poco frecuentes, pero las molestias por sobrecarga son habituales. Conocerlas ayuda a evitarlas.',
    errors: [
      ['Dolor de talón o planta del pie (fumikomi, pisadas)', 'Pisa con la planta entera, reduce la intensidad, estira gemelos y planta.'],
      ['Dolor de rodilla', 'Revisa que la rodilla delantera no pase de la punta del pie y que los pies no están demasiado abiertos; fortalece piernas.'],
      ['Dolor en muñeca o codo (sobrecarga de suburi)', 'Baja el volumen, relaja el agarre (tenouchi), fortalece antebrazos y descansa.'],
      ['Dolor de espalda baja', 'Mantén la espalda recta, no arquees la zona lumbar y fortalece el core.'],
      ['Tensión en hombros y cuello', 'Suelta los hombros, respira por el abdomen y estira.'],
      ['Calambres o mareo en práctica intensa', 'Hidrátate, no entrenes en ayunas ni deshidratado y descansa.']
    ],
    keys: ['Calienta siempre y estira al terminar.', 'Aumenta el volumen poco a poco.', 'El dolor agudo o que no cede es una señal de parar.', 'Dormir bien es parte de la prevención.'],
    drills: ['Anota en el diario cualquier molestia que dure más de un día.', 'Descansa una semana de cada cuatro con menos volumen ("semana suave").'],
    check: ['Calienta antes y estiro después.', 'Anoto mis molestias.', 'Sé cuándo parar.'],
    warn: 'Esta información es general y no sustituye a un profesional. Ante un dolor persistente o intenso, consulta con un médico o fisioterapeuta.'
  });

  add({
    id: 'resistencia', t: 'Resistencia y recuperación', jp: '持久力・回復', sub: 'Para aguantar kirikaeshi, kakari y combates',
    intro: 'Kirikaeshi, kakari-geiko y los combates piden aguante. Un poco de cardio regular y buena recuperación te permiten mantener la técnica cuando te cansas.',
    steps: ['Cardio suave: 20–30 minutos de trote, bici o comba, 1–2 veces por semana.', 'Intervalos (cuando tengas base): 30 segundos rápido, 90 segundos suave, 6–8 repeticiones, una vez por semana.', 'Kirikaeshi y suburi en series: ya son parte de tu resistencia específica.', 'Descanso: al menos 1–2 días sin entrenamiento duro por semana.', 'Hidratación y comida: bebe agua antes, durante y después; come con tiempo, no con el estómago lleno.', 'Sueño: 7–9 horas en lo posible; es lo que más recupera.'],
    keys: ['Aumenta el volumen poco a poco.', 'La técnica es lo primero que se pierde al cansarte: entrena para mantenerla.', 'Una "semana suave" cada cuatro semanas evita el agotamiento.'],
    errors: [['Entrenas duro todos los días', 'Alterna días duros con días suaves o de descanso.'], ['Te saltas el sueño para entrenar', 'Dormir bien rinde más que una sesión extra.']],
    drills: ['Anota cuántas series de kirikaeshi aguantas con buena técnica y repite cada semana.', 'Bebe agua en los descansos de la clase.'],
    check: ['Hago cardio una o dos veces por semana.', 'Descanso al menos un día.', 'Me hidrato en las clases.'],
    warn: 'Esta guía es general. Si tienes problemas de salud, consulta con un profesional antes de aumentar el esfuerzo.'
  });

  /* =============== KATA =============== */
  const SRC = 'Resumen basado en las descripciones de kendo-guide.com (Nihon Kendo Kata). Los detalles de pies, posiciones y ritual pueden variar según el dōjō y el manual de la AJKF: tu sensei decide.';

  add({
    id: 'kata', t: 'Nihon Kendō Kata: panorama', jp: '日本剣道形', sub: 'Las diez formas oficiales',
    intro: 'El kata es una serie de formas de dos personas con bokutō (espada de madera). Sin bōgu, la distancia, el tiempo, la postura y el control del filo se aprenden de verdad. Hay diez formas: siete con tachi (espada larga) y tres con kodachi (espada corta).',
    why: 'Enseña ma-ai, seme, ritmo y zanshin sin la protección del bōgu, y conecta con la historia del kendō. En muchos sistemas, los primeros kata se piden a partir de ciertos grados.',
    keys: ['Uchidachi (maestro) inicia, marca distancia y tiempo; shidachi (alumno) responde.', 'Siete kata con tachi (1 a 7) y tres con kodachi (8 a 10).', 'Se estudian de uno en uno y siempre con un sensei.', 'Se aprende primero el movimiento y después la respiración.', 'En un examen se evalúa el kata completo y con respeto.'],
    extra: [{ h: 'Las diez formas', ul: ['1 · Ippon-me: ambos en jōdan; men-nuki-men.', '2 · Nihon-me: ambos en chūdan; kote-nuki-kote.', '3 · Sanbon-me: ambos en gedan; tsuki y presión (kurai-zeme).', '4 · Yonhon-me: hassō y waki-gamae; maki-kaeshi y men.', '5 · Gohon-me: jōdan contra hiraseigan; men-suriage-men.', '6 · Roppon-me: chūdan contra gedan; kote-suriage-kote.', '7 · Nanahon-me: chūdan; men-nuki-dō con rodilla al suelo.', '8 a 10 · Kodachi: tachi contra kodachi; ukenagashi, suriage y suri-otoshi.'] }],
    drills: ['Pregunta a tu sensei cuándo empezaréis kata y cuál es el orden en tu dōjō.', 'Observa un kata completo en vídeo antes de aprenderlo.'],
    check: ['Sé qué son uchidachi y shidachi.', 'Conozco el nombre de cada forma.'],
    warn: SRC,
    terms: [['Kata', 'forma'], ['Uchidachi', 'maestro, inicia'], ['Shidachi', 'alumno, responde'], ['Bokutō', 'espada de madera']]
  });

  add({
    id: 'kata-etiqueta', t: 'Cómo se practica el kata', jp: '形の作法', sub: 'Lo que se repite en todas las formas',
    intro: 'Aunque cada forma es distinta, todas comparten un ritmo y unas reglas. Aprenderlas una vez te ayuda en las diez.',
    steps: ['Al inicio de cada forma, ambos dan tres pasos grandes hacia delante, acabando sobre el pie delantero.', 'Cada uno toma su guardia (kamae) según la forma; uchidachi inicia la acción y shidachi responde.', 'Los golpes se hacen con control: el bokutō no se estrella contra el compañero; se para a una distancia segura.', 'Al terminar la acción, ambos vuelven a chūdan en el centro (a veces con zanshin previo de shidachi).', 'Kamae wo toku: ambos bajan el bokutō girándolo hacia la derecha, con el kensen más o menos delante de la rodilla derecha.', 'Cinco pasos pequeños hacia atrás, empezando por el pie izquierdo, y vuelta a chūdan para la siguiente forma.'],
    keys: ['Pasos deslizados, sin saltos ni pisadas (suri-ashi, ayumi-ashi, tsugi-ashi).', 'Mirada al compañero en todo momento.', 'Hay kiai en los golpes: uchidachi y shidachi tienen sus gritos propios.', 'La respiración se coordina con la del compañero.', 'Practica los dos papeles: aprendes más de cada uno.'],
    errors: [['Golpeas con fuerza al compañero', 'El bokutō no toca con fuerza: controla la distancia siempre.'], ['Pisadas fuertes o saltos', 'Usa pasos deslizados y silenciosos.'], ['Pierdes la mirada al girar o al bajar', 'La mirada va con tu cuerpo.']],
    drills: ['Practica en casa solo la secuencia de "kamae wo toku" y los cinco pasos atrás hasta que sea automática.', 'Con tu sensei, repasa una vez por clase solo el comienzo y el final de una forma.'],
    check: ['Conozco el comienzo y el final común.', 'Me muevo con pasos deslizados.', 'Mantengo la mirada al compañero.'],
    warn: 'El protocolo de apertura y cierre del kata (saludos, sonkyō inicial, posiciones) varía según el dōjō. ' + SRC
  });

  add({
    id: 'kata-1', t: 'Kata 1 · Ippon-me', jp: '一本目', sub: 'Jōdan contra jōdan: men-nuki-men',
    art: ['astrip:kata1', 'anim:kata1', 'duo:jodan,jodan'],
    intro: 'La primera forma muestra el principio del kata: dos jōdan, un men decidido de uchidachi y una respuesta de shidachi que evita el golpe y gana el men. Es el nivel de entrada, pero contiene casi todo.',
    steps: ['Uchidachi toma hidari-jōdan y shidachi migi-jōdan. Ambos dan tres pasos grandes.', 'Uchidachi da un paso con el pie derecho y corta men.', 'Shidachi da un paso atrás con el pie izquierdo, sube ligeramente las manos para evitar el corte (nuki) y avanza con el pie derecho cortando men.', 'Uchidachi retrocede un pequeño paso mientras shidachi baja el bokutō hacia el puente de la nariz.', 'Uchidachi da otro pequeño paso atrás y shidachi extiende los brazos como empujándolo con el kensen.', 'Shidachi sube a hidari-jōdan (zanshin), uchidachi sube el bokutō y levanta la cabeza.', 'Ambos vuelven a chūdan, kamae wo toku y cinco pasos pequeños atrás.'],
    keys: ['El corte de uchidachi es completo; el de shidachi, preciso.', 'No flexiones las rodillas al cortar: mantenlas firmes.', 'El pie trasero llega rápido, como en el kendō normal.', 'El kata muestra lo fina que es la línea entre ganar y perder.'],
    errors: [['Cortas con las rodillas dobladas', 'Mantén las piernas firmes al cortar.'], ['Giras el filo tras el corte', 'El bokutō baja recto, sin torcerse.']],
    drills: ['Practica en el aire la parte de shidachi: paso atrás, manos arriba y men.'],
    check: ['Conozco la secuencia.', 'Sé qué hace cada rol.'],
    warn: SRC,
    terms: [['Men-nuki-men', 'evitar el men y devolver men'], ['Kamae wo toku', 'bajar el bokutō al final']]
  });

  add({
    id: 'kata-2', t: 'Kata 2 · Nihon-me', jp: '二本目', sub: 'Chūdan contra chūdan: kote-nuki-kote',
    art: ['astrip:kata2', 'anim:kata2', 'duo:chudan,chudan'],
    intro: 'En la segunda forma, shidachi podría ganar con un golpe mortal, pero elige dejar sin acción la mano del atacante. Es una lección de contención.',
    steps: ['Ambos parten de chūdan y dan tres pasos grandes hacia delante.', 'Uchidachi da un paso con el pie derecho y corta kote.', 'Shidachi baja el bokutō para evitar el corte, retrocede en diagonal hacia la izquierda con el pie izquierdo y, al pasar el golpe, corta el kote derecho de uchidachi avanzando con el pie derecho.', 'Uchidachi retrocede hacia el centro, y shidachi se mueve a la derecha hacia el centro, manteniendo contacto visual.', 'Ambos vuelven a chūdan; kamae wo toku y cinco pasos atrás.'],
    keys: ['El kote de uchidachi es real: debe llegar al kote de shidachi.', 'Shidachi corta cuando el golpe ya ha pasado.', 'La enseñanza: se puede vencer sin acabar con el rival.'],
    errors: [['El kote de uchidachi es demasiado pequeño y rápido', 'Hazlo completo: debe alcanzar el kote.'], ['Shidachi se adelanta', 'Espera a que el golpe pase.']],
    drills: ['Practica en el aire la bajada y la salida en diagonal de shidachi.'],
    check: ['Conozco la secuencia.', 'Sé cuándo corta shidachi.'],
    warn: SRC,
    terms: [['Kote-nuki-kote', 'evitar el kote y devolver kote']]
  });

  add({
    id: 'kata-3', t: 'Kata 3 · Sanbon-me', jp: '三本目', sub: 'Gedan contra gedan: tsuki y presión',
    art: ['astrip:kata3', 'anim:kata3', 'duo:gedan,gedan'],
    intro: 'La tercera forma es un duelo de presión: ambos parten en gedan, hay estocadas y desvíos, y shidachi gana sin golpear, avanzando con su presión (kurai-zeme).',
    steps: ['Ambos toman gedan y dan tres pasos grandes.', 'Ambos suben el bokutō hacia chūdan; shidachi lo mantiene ligeramente por debajo del de uchidachi.', 'Uchidachi lanza una estocada al plexo de shidachi; shidachi la desvía con nayashi retrocediendo con el pie izquierdo y responde con otra estocada al pecho avanzando con el pie derecho.', 'Uchidachi retrocede y bloquea alrededor del bokutō de shidachi; shidachi mantiene el bokutō y lo empuja hacia atrás, sin estocar de nuevo.', 'Shidachi avanza tres pasos aplicando presión (kurai-zeme): la punta apunta primero al pecho, después a la garganta y por último al puente de la nariz.', 'Shidachi retrocede tres pasos, baja el bokutō a la derecha mostrando la derrota de uchidachi y muestra zanshin.', 'Ambos vuelven a chūdan; kamae wo toku y cinco pasos pequeños atrás.'],
    keys: ['La presión de shidachi viene del ki, no de la fuerza.', 'No se aplasta el bokutō de uchidachi durante el nayashi.', 'En kurai-zeme no se golpea: se presiona.', 'Ninguno golpea ni es golpeado: es la meta del kendō.'],
    errors: [['Empujas hacia abajo el bokutō de uchidachi', 'El nayashi desvía, no aplasta.'], ['Aprietas con fuerza en el kurai-zeme', 'La presión es de espíritu.']],
    drills: ['Practica en el aire los tres pasos de kurai-zeme con la punta en tres alturas.'],
    check: ['Conozco la secuencia.', 'Sé qué es kurai-zeme.'],
    warn: SRC,
    terms: [['Kurai-zeme', 'presión sin golpe'], ['Nayashi', 'desvío flexible']]
  });

  add({
    id: 'kata-4', t: 'Kata 4 · Yonhon-me', jp: '四本目', sub: 'Hassō contra waki-gamae: maki-kaeshi',
    art: ['astrip:kata4', 'anim:kata4', 'duo:hasso,waki'],
    intro: 'La cuarta forma usa dos guardias que ya no se emplean en combate pero conservan los orígenes del kendō: hassō para uchidachi y waki-gamae derecho para shidachi.',
    steps: ['Uchidachi avanza con el pie izquierdo y toma hassō (tsuba a la altura de la boca). Shidachi retrocede con el pie derecho y toma waki-gamae derecho.', 'Ambos avanzan tres pasos, más cortos de lo normal.', 'Uchidachi sube el bokutō sobre la cabeza, de cara a shidachi, y corta shōmen con un paso del pie derecho.', 'Uchidachi baja a chūdan luchando por el centro y lanza una estocada al pulmón derecho de shidachi con un grito.', 'Shidachi desvía con maki-kaeshi, avanza en diagonal hacia delante-izquierda subiendo la mano izquierda sobre la cabeza y corta shōmen con hiraki-ashi; parada y golpe son un solo movimiento.', 'Uchidachi vuelve al centro; shidachi muestra zanshin y baja a chūdan.', 'Kamae wo toku y cinco pasos pequeños atrás, empezando por el pie izquierdo.'],
    keys: ['Uchidachi debe juzgar la distancia del men.', 'Shidachi usa hiraki-ashi para recibir el golpe en el monouchi.', 'Esconde el bokutō detrás del cuerpo en la aproximación, con el hombro izquierdo hacia uchidachi.', 'Maki-kaeshi desarrolla la flexibilidad de las muñecas.'],
    errors: [['Separas el bokutō del cuerpo en waki-gamae', 'Mantenlo oculto tras el cuerpo.'], ['Paras y golpeas en dos tiempos', 'El desvío y el corte son un solo movimiento.']],
    drills: ['Practica en el aire la entrada a waki-gamae y el giro de maki-kaeshi.'],
    check: ['Conozco la secuencia.', 'Sé qué guardia toma cada rol.'],
    warn: SRC,
    terms: [['Maki-kaeshi', 'desvío con giro'], ['Hiraki-ashi', 'paso en diagonal']]
  });

  add({
    id: 'kata-5', t: 'Kata 5 · Gohon-me', jp: '五本目', sub: 'Jōdan contra hiraseigan: suriage-men',
    art: ['astrip:kata5', 'anim:kata5', 'duo:jodan,chudan'],
    intro: 'En la quinta forma uchidachi toma hidari-jōdan y shidachi hiraseigan (una chūdan con la punta dirigida a la mano izquierda de uchidachi). Shidachi desvía el men con suriage y sube sin dejar caer el kensen (furiage).',
    steps: ['Uchidachi toma hidari-jōdan; shidachi toma hiraseigan.', 'Uchidachi corta men, solo hasta la cara (no atraviesa la cabeza como en la primera forma), de manera que shidachi pueda hacer el suriage.', 'Shidachi desvía el corte hacia arriba con suriage, usando el lado izquierdo del bokutō (shinogi).', 'Tras el suriage, shidachi sube el bokutō sobre la cabeza sin dejar caer el kensen, subiendo las manos en diagonal hacia atrás a unos 45° (furiage).'],
    keys: ['El men de uchidachi debe permitir el suriage.', 'Furiage es un punto que los jueces miran: el kensen no cae.', 'El kata no es una competición: es respiración, distancia y tiempo.'],
    errors: [['Dejas caer el kensen tras el suriage', 'Sube las manos en diagonal hacia atrás, a unos 45°, manteniendo el kensen alto.'], ['Uchidachi corta demasiado profundo', 'Corta solo hasta la cara.']],
    drills: ['Practica en el aire el suriage seguido del furiage, controlando el kensen.'],
    check: ['Conozco el inicio y el furiage.', 'Sé qué es suriage.'],
    warn: 'Resumen incompleto: no tengo verificados los pasos finales de esta forma (zanshin, regreso al centro). Apréndelos con tu sensei. ' + SRC,
    terms: [['Hiraseigan', 'chūdan dirigida a la mano izquierda'], ['Furiage', 'subir el bokutō tras el suriage'], ['Suriage-waza', 'desviar']]
  });

  add({
    id: 'kata-6', t: 'Kata 6 · Roppon-me', jp: '六本目', sub: 'Chūdan contra gedan: kote-suriage-kote',
    art: ['astrip:kata6', 'anim:kata6', 'duo:chudan,gedan'],
    intro: 'La sexta forma es la versión pequeña de la quinta: uchidachi parte en chūdan, shidachi en gedan, y shidachi gana con un kote tras desviar con suriage.',
    steps: ['Uchidachi toma chūdan; shidachi toma gedan. Ambos dan tres pasos grandes.', 'Shidachi sube el bokutō y presiona el centro de la empuñadura de uchidachi; este lo baja ligeramente para impedir que suba.', 'Uchidachi retrocede a hidari-jōdan para evitar el bokutō que sube; shidachi avanza y toma hiraseigan frente a hidari-jōdan.', 'Uchidachi baja a chūdan retrocediendo con el pie izquierdo; shidachi baja de hiraseigan a chūdan.', 'Uchidachi corta un kote pequeño; shidachi desvía con suriage (usando el lado derecho del bokutō) y corta el kote de uchidachi.', 'Uchidachi retrocede en diagonal con un paso grande y baja el kensen; shidachi toma hidari-jōdan empujando con el kensen.', 'Ambos vuelven a chūdan; kamae wo toku y cinco pasos atrás.'],
    keys: ['Ambos kote son pequeños: ninguno sube por encima de la altura de los ojos.', 'El kote de uchidachi debe ser un corte real, no demasiado pequeño ni rápido.', 'En los kata 5 y 6 se hace suriage con el shinogi: izquierdo en el 5 y derecho en el 6.'],
    errors: [['El kote de uchidachi no llega', 'Hazlo con intención de alcanzar el kote.'], ['Shidachi sube demasiado el bokutō', 'Es un movimiento pequeño.']],
    drills: ['Practica en el aire el kote pequeño y el suriage con el lado derecho del bokutō.'],
    check: ['Conozco la secuencia.', 'Sé en qué lado se hace el suriage en el kata 6.'],
    warn: 'Algunas descripciones de los pasos de pies de shidachi en el kote-suriage no coinciden entre fuentes. Confírmalo con tu sensei. ' + SRC,
    terms: [['Kote-suriage-kote', 'desviar el kote y devolver kote'], ['Shinogi', 'borde del bokutō']]
  });

  add({
    id: 'kata-7', t: 'Kata 7 · Nanahon-me', jp: '七本目', sub: 'Men-nuki-dō con rodilla al suelo',
    art: ['astrip:kata7', 'anim:kata7', 'duo:chudan,gedan'],
    intro: 'La última forma con tachi comienza con una estocada y su desvío, y termina con shidachi cortando el dō de uchidachi y arrodillándose en waki-gamae.',
    steps: ['Ambos parten de chūdan y avanzan tres pasos grandes. Uchidachi se mantiene en chūdan y shidachi baja a gedan.', 'Uchidachi lanza una estocada al pecho de shidachi; este extiende los brazos y gira el bokutō para contener la estocada.', 'Ambos vuelven a chūdan.', 'Uchidachi avanza con el pie izquierdo, sube el bokutō sobre la cabeza y grita; shidachi sube el bokutō hacia el hombro izquierdo y desliza el pie derecho ligeramente en diagonal.', 'Uchidachi da un gran paso con el pie derecho; shidachi avanza con el izquierdo y corta el dō derecho de uchidachi, manteniendo la mirada.', 'Uchidachi corta hacia abajo; shidachi da un gran paso con el pie derecho, se arrodilla sobre la rodilla derecha girando el cuerpo hacia uchidachi y toma waki-gamae.', 'Uchidachi se gira para mirar a shidachi; ambos suben a chūdan, shidachi se levanta con todo su ki empujando a uchidachi, y vuelven al centro.', 'Cinco pasos pequeños atrás, empezando por el pie izquierdo.'],
    keys: ['Shidachi mantiene la mirada durante el corte.', 'Shidachi espera el movimiento de uchidachi antes de seguir.', 'La subida final se hace con ki.', 'La posición exacta de la rodilla en el suelo se discute: pregunta a tu sensei.'],
    errors: [['Shidachi actúa antes de tiempo', 'Espera la señal de uchidachi.'], ['Pierdes el contacto visual en el corte', 'La mirada va siempre al compañero.']],
    drills: ['Practica en el aire el corte y la bajada a la rodilla, con control y sin brusquedad.'],
    check: ['Conozco la secuencia.', 'Sé qué hace cada rol.'],
    warn: 'Resumen con dudas: la posición exacta de las rodillas y algunos pasos varían entre fuentes. Apréndelo con tu sensei. ' + SRC,
    terms: [['Men-nuki-dō', 'esquivar men y cortar dō']]
  });

  add({
    id: 'kata-kodachi', t: 'Kata 8 a 10 · Kodachi', jp: '小太刀', sub: 'Tachi contra kodachi',
    art: ['duo:jodan,chudan'],
    intro: 'Las tres últimas formas enfrentan a uchidachi con tachi y a shidachi con kodachi, la espada corta. Shidachi se coloca de lado (hanmi) y se acerca (irimi) para entrar en la distancia del atacante.',
    steps: ['Kata 8 (kodachi 1): uchidachi toma hidari-jōdan y shidachi chūdan en hanmi. Ambos avanzan tres pasos.', 'Shidachi presiona amagando entrar (irimi). Uchidachi da un paso con el pie derecho y corta men.', 'Shidachi desvía el corte con ukenagashi y responde de inmediato con un men y kiai.', 'Shidachi muestra zanshin en jōdan; ambos vuelven a chūdan al centro.', 'Kamae wo toku y cinco pasos atrás.', 'Kata 9 y 10: uchidachi parte de otra guardia y shidachi vuelve a desviar o a controlar el bokutō de uchidachi (la décima forma incluye suriage, suri-otoshi y suri-komi).'],
    keys: ['Ukenagashi es un desvío, no un bloqueo: desvía el corte ligeramente hacia la izquierda.', 'La mano derecha del kodachi queda sobre la cabeza con el bokutō inclinado hacia abajo y a la izquierda.', 'Agarre del kodachi flexible, ni demasiado flojo ni rígido.', 'Uchidachi corta con decisión, sin dudar, sin bajar el cuerpo ni inclinarse.'],
    errors: [['Bloqueas en lugar de desviar', 'Gira el kodachi y deja que el golpe resbale.'], ['Uchidachi duda o llega tarde', 'Corta con decisión cuando shidachi empieza a entrar.']],
    drills: ['Cuando vuestro dōjō llegue a esta parte, practica solo la forma 8 antes de las otras dos.'],
    check: ['Sé la diferencia entre tachi y kodachi.', 'Sé qué es ukenagashi.'],
    warn: 'La secuencia completa de las formas 9 y 10 no la tengo verificada: aprende estas dos con tu sensei y el manual de la AJKF. ' + SRC,
    terms: [['Kodachi', 'espada corta'], ['Ukenagashi', 'desvío flexible'], ['Hanmi', 'media postura de lado'], ['Irimi', 'entrar en la distancia']]
  });
})();
