/* Examen de kyū: programa oficial y preparación. Se carga antes de data-tech-2. */
(function () {
  const add = KD.add;
  const L = (id, t) => `<a href="#/leccion/${id}">${t}</a>`;
  const FUENTE = 'Basado en el "Programa de kyū de kendō" (RFEJYDA, 2023), el programa estatal. La Federació Catalana de Kendo normalmente aplica el programa estatal, pero fechas, tribunal y detalles de la convocatoria los confirma tu sensei o la federación.';
  const PREG = { h: 'Preguntas para tu sensei', ul: ['¿Cuándo es el próximo examen y qué grado me corresponde?', '¿Hace falta bōgu completo para mi examen?', '¿Qué kata y qué ejercicios con bokutō me van a pedir exactamente?', '¿Qué es lo que más debo mejorar de aquí al examen?'] };

  add({
    id: 'ex-programa', t: 'El programa oficial de kyū', jp: '級の審査', sub: 'Qué se pide en cada grado',
    intro: 'En España existe un programa oficial de kyū (del 5.º al 1.er kyū) y, a partir de ahí, los grados dan. Conocerlo te permite saber siempre qué te falta.',
    extra: [
      { h: 'Resumen por grado (adolescentes y adultos)', ul: [
        '<b>5.º kyū</b> · mínimo orientativo 4 meses · kata 1 · protocolo y etiqueta (saludo y vestimenta), agarre del shinai, posiciones básicas, guardias, desplazamientos, suburi (jōge-buri y naname-buri) y kirikaeshi.',
        '<b>4.º kyū</b> · 4 meses · kata 1 y 2 · además: mantenimiento del bōgu y del shinai, motodachi y kakari, ma-ai, uchikomi, uke (recibir), uchikomi-geiko y metsuke.',
        '<b>3.º kyū</b> · 4 meses · kata 1, 2 y 3 · ejercicios con bokutō 1 a 3 · además: yūkō-datotsu (datotsu-bu y datotsu-bui), ki-ken-tai-ichi, técnicas de dos y tres golpes (nidan y sandan-waza), tai-atari y noción de ji-geiko.',
        '<b>2.º kyū</b> · 6 meses · kata 1 a 4 · ejercicios con bokutō 4 a 6 · además: zanshin, tsubazeriai, hiki-waza, harai, debana, kakari-geiko, ji-geiko e introducción al shiai.',
        '<b>1.er kyū</b> · 6 meses · kata 1 a 5 · ejercicios con bokutō 7 a 9 · además: tai-sabaki, suriage, kaeshi, nuki y desarrollo del shiai.'] },
      { h: 'Reglas generales del programa', ul: [
        'Todos los exámenes requieren protocolo y vestimenta adecuados, las kata correspondientes, kirikaeshi, uchikomi y el uchikomi-geiko que corresponda.',
        'El 5.º kyū no exige obligatoriamente el bōgu completo.',
        'Para 3.º kyū se puede añadir ji-geiko; en 2.º y 1.er kyū se debe añadir, salvo excepciones.',
        'Los tiempos de permanencia son orientativos; los contenidos son los mínimos y conviene entrenar más.',
        'Conviene ir intercalando los ejercicios con bokutō desde el principio, aunque su dominio llegue más tarde.'] },
      { h: 'Lecciones para cada parte', ul: [L('ex-5kyu', 'Tu primer examen: 5.º kyū'), L('ex-4kyu', '4.º kyū'), L('ex-3kyu', '3.º kyū'), L('ex-2kyu', '2.º y 1.er kyū'), L('ex-bokuto', 'Ejercicios con bokutō (nueve)'), L('ex-dan', 'Y después: los grados dan')] }
    ],
    check: ['Sé cuál es mi próximo grado.', 'Sé qué se pide en él.', 'Sé que el programa mínimo se puede ampliar.'],
    warn: FUENTE,
    terms: [['Kyū', 'grado previo al dan'], ['Dan', 'grado superior']]
  });

  add({
    id: 'ex-5kyu', t: 'Tu primer examen: 5.º kyū', jp: '五級', sub: 'Lo que pide el programa y cómo prepararlo',
    intro: 'El 5.º kyū es el primer grado. Pide lo esencial: protocolo, agarre, postura, guardias, pies, suburi, kirikaeshi y el primer kata. No exige bōgu completo.',
    why: 'Es un examen para comprobar que has entendido los fundamentos y que te mueves con respeto y control. No es una prueba de fuerza ni de combate.',
    stepsH: 'Qué te piden (según el programa)',
    steps: ['Protocolo y etiqueta: saludo y vestimenta.', 'Agarre del shinai (tenouchi).', 'Posiciones básicas y las cinco guardias (kamae).', 'Desplazamientos (ashi-sabaki), sobre todo okuri-ashi.', 'Suburi: jōge-buri y naname-buri (sayū-men).', 'Kirikaeshi y uchikomi.', 'Kata de kendō número 1 (Ippon-me).'],
    extra: [
      { h: 'Un plan de unos 4 meses', ul: ['Mes 1: protocolo, vestimenta, agarre, postura y guardias.', 'Mes 2: desplazamientos y suburi con calidad (jōge-buri y sayū-men).', 'Mes 3: kirikaeshi y uchikomi (con bōgu cuando tu sensei lo indique) y el kata 1.', 'Mes 4: repaso completo, simulacros y pulir lo que más te cueste.'] },
      { h: 'Lecciones para prepararlo', ul: [L('saludos', 'Saludos'), L('tenouchi', 'Agarre'), L('chudan', 'Chūdan'), L('kamae-5', 'Las cinco guardias'), L('okuri-ashi', 'Okuri-ashi'), L('joge-buri', 'Jōge-buri'), L('sayu-men', 'Sayū-men'), L('kirikaeshi', 'Kirikaeshi'), L('kata-1', 'Kata 1')] },
      PREG
    ],
    keys: ['El examen premia lo básico bien hecho, con respeto y atención.', 'Si tu dōjō te ha enseñado más kata de los que pide el grado, mejor: el programa son los mínimos.', 'La calma y la actitud pesan tanto como la técnica.'],
    check: ['Conozco el protocolo de saludo y vestimenta.', 'Mi agarre es correcto.', 'Hago las cinco guardias.', 'Mis desplazamientos son limpios.', 'Hago jōge-buri y naname-buri con calidad.', 'Sé hacer el kirikaeshi.', 'Sé el kata 1.'],
    warn: FUENTE,
    terms: [['Kirikaeshi', 'serie de golpes'], ['Naname-buri', 'suburi en diagonal']]
  });

  add({
    id: 'ex-4kyu', t: '4.º kyū', jp: '四級', sub: 'Más kata, más contacto y cuidar tu equipo',
    intro: 'El 4.º kyū añade el kata 2 y empieza a pedir cosas de práctica con compañero: motodachi, kakari, uchikomi, recibir (uke) y atención a la mirada.',
    stepsH: 'Qué te piden además del 5.º kyū',
    steps: ['Kata 1 y 2.', 'Mantenimiento del bōgu y del shinai.', 'Motodachi y kakari.', 'Ma-ai (distancia).', 'Uchikomi y uchikomi-geiko.', 'Uke: recibir un golpe con el shinai.', 'Metsuke (la mirada).'],
    extra: [{ h: 'Lecciones para prepararlo', ul: [L('cuidado-equipo', 'Cuidado del equipo'), L('motodachi', 'Motodachi'), L('kakari-geiko', 'Kakari-geiko'), L('maai', 'Ma-ai'), L('uchikomi-geiko', 'Uchikomi-geiko'), L('ukeru', 'Ukeru'), L('metsuke', 'Metsuke'), L('kata-2', 'Kata 2')] }, PREG],
    check: ['Cuido mi bōgu y mi shinai.', 'Sé hacer de motodachi.', 'Entiendo el ma-ai.', 'Hago uchikomi con calidad.', 'Sé recibir un golpe.', 'Sé el kata 2.'],
    warn: FUENTE
  });

  add({
    id: 'ex-3kyu', t: '3.er kyū', jp: '三級', sub: 'Yūkō-datotsu, combinaciones y primeros bokutō',
    intro: 'El 3.er kyū exige el kata 3, los tres primeros ejercicios con bokutō y entender qué es un golpe válido, además de combinar golpes y empezar con el ji-geiko.',
    stepsH: 'Qué te piden además del 4.º kyū',
    steps: ['Kata 1, 2 y 3.', 'Ejercicios con bokutō 1 a 3.', 'Yūkō-datotsu: datotsu-bu y datotsu-bui.', 'Ki-ken-tai-ichi.', 'Técnicas de dos y tres golpes (nidan y sandan-waza).', 'Tai-atari.', 'Noción de ji-geiko.'],
    extra: [{ h: 'Lecciones para prepararlo', ul: [L('kata-3', 'Kata 3'), L('ex-bokuto', 'Ejercicios con bokutō'), L('datotsu-yuko', 'Zonas válidas y yūkō-datotsu'), L('shisei', 'Ki-ken-tai-ichi'), L('kote-men', 'Kote-men y combinaciones'), L('tai-atari', 'Tai-atari'), L('ji-geiko', 'Ji-geiko')] }, PREG],
    check: ['Sé los kata 1, 2 y 3.', 'Sé los tres primeros ejercicios con bokutō.', 'Sé qué es un golpe válido.', 'Hago combinaciones de dos y tres golpes.', 'Practico tai-atari con control.'],
    warn: FUENTE
  });

  add({
    id: 'ex-2kyu', t: '2.º y 1.er kyū', jp: '二級・一級', sub: 'Iniciativa, respuesta y shiai',
    intro: 'Los dos últimos kyū piden técnicas de iniciativa, de respuesta y un primer contacto con el combate de competición.',
    stepsH: '2.º kyū (6 meses)',
    steps: ['Kata 1 a 4 y ejercicios con bokutō 4 a 6.', 'Zanshin y tsubazeriai.', 'Hiki-waza, harai y debana.', 'Kakari-geiko y ji-geiko.', 'Introducción al shiai.'],
    extra: [
      { h: '1.er kyū (6 meses)', ul: ['Kata 1 a 5 y ejercicios con bokutō 7 a 9.', 'Tai-sabaki, suriage, kaeshi y nuki.', 'Desarrollo del shiai.'] },
      { h: 'Lecciones para prepararlo', ul: [L('hiki-waza', 'Hiki-waza'), L('harai-men', 'Harai-men'), L('debana-kote', 'Debana-kote'), L('kakari-geiko', 'Kakari-geiko'), L('oji-waza', 'Ōji-waza'), L('reglas-shiai', 'Reglas del shiai'), L('flujo-shiai', 'El combate de principio a fin')] },
      PREG
    ],
    check: ['Sé los kata 1 a 4 (y el 5 para 1.er kyū).', 'Sé los ejercicios con bokutō que corresponden.', 'Hago hiki-waza, harai y debana.', 'Conozco las técnicas de respuesta.', 'Conozco el protocolo del shiai.'],
    warn: FUENTE
  });

  add({
    id: 'ex-bokuto', t: 'Ejercicios con bokutō (nueve)', jp: '木刀による剣道基本技稽古法', sub: 'Kihon-waza con espada de madera',
    intro: 'El "Bokutō ni yoru kendō kihon-waza keiko-hō" son nueve ejercicios con bokutō en pareja que la Federación Japonesa de Kendō presentó en 2001 para principiantes. Preparan para el Nihon Kendō Kata. El programa de kyū los reparte por grados.',
    stepsH: 'Los nueve ejercicios',
    steps: ['Golpes sueltos: men, kote, dō y tsuki.', 'Dos golpes seguidos: kote-men.', 'Harai-waza: harai-men (con el lado omote).', 'Hiki-waza: hiki-dō (dō derecho).', 'Nuki-waza: men-nuki-dō (dō derecho).', 'Suriage-waza: kote-suriage-men (con el lado ura).', 'Debana-waza: debana-kote.', 'Kaeshi-waza: men-kaeshi-dō (dō derecho).', 'Uchiotoshi-waza: dō-uchiotoshi-men (dō derecho).'],
    extra: [{ h: 'Cómo se reparten por grados (según el programa)', ul: ['5.º y 4.º kyū: toma de contacto.', '3.er kyū: ejercicios 1 a 3.', '2.º kyū: ejercicios 4 a 6.', '1.er kyū: ejercicios 7 a 9.'] }, { h: 'Lecciones relacionadas', ul: [L('men', 'Men'), L('kote', 'Kote'), L('do', 'Dō'), L('tsuki', 'Tsuki'), L('kote-men', 'Kote-men'), L('harai-men', 'Harai-men'), L('hiki-do', 'Hiki-dō'), L('men-nuki-do', 'Men-nuki-dō'), L('kote-suriage-men', 'Kote-suriage-men'), L('debana-kote', 'Debana-kote'), L('men-kaeshi-do', 'Men-kaeshi-dō'), L('do-uchiotoshi-men', 'Dō-uchiotoshi-men')] }],
    keys: ['Es una forma "algo flexible", a diferencia de un kata: sirve para aprender, no para memorizar.', 'El filo (hasuji) debe mantenerse correcto, con la dirección de la hoja controlada.', 'Facilita después el Nihon Kendō Kata.'],
    check: ['Conozco los nueve ejercicios.', 'Sé a qué grado corresponde cada uno.'],
    warn: 'Los detalles de cada ejercicio (papeles de cada compañero, pies, kiai, distancia) los enseña tu sensei: esta lección te da la lista y el contexto. ' + FUENTE,
    terms: [['Keiko-hō', 'método de práctica'], ['Omote', 'lado frontal'], ['Ura', 'lado posterior']]
  });

  add({
    id: 'ex-dan', t: 'Y después: los grados dan', jp: '段', sub: 'Qué cambia con el primer dan',
    intro: 'Al terminar los kyū llega el primer dan. El examen cambia: combates y kata, con tribunal. Aún queda tiempo, pero conviene saber hacia dónde vas.',
    steps: ['El examen de dan consiste en dos combates y, si eres apto, los kata correspondientes.', 'La edad mínima para examinarse de dan es de 14 años según las normas europeas (EKF).', 'El tribunal valora que lleves bien el equipo, el saludo, el desenvainado, la postura, el agarre del shinai, la guardia, los desplazamientos y una actitud respetuosa.', 'En el combate se busca un kendō correcto, con ataques propios y no limitarse a bloquear o evitar.', 'Los kata que se piden aumentan con el grado.'],
    stepsH: 'Cómo es el examen de dan',
    keys: ['Gran kiai, actitud de combate y voluntad de ataque.', 'Datotsu-bu y datotsu-bui correctos.', 'Las decisiones del tribunal son secretas y confidenciales.'],
    extra: [PREG],
    warn: FUENTE
  });

  add({
    id: 'ex-dia', t: 'El día del examen', jp: '審査当日', sub: 'Antes, durante y después',
    intro: 'Un examen se gana con lo entrenado, pero también con una buena preparación del día: equipo, calma y actitud.',
    stepsH: 'Antes, durante y después',
    steps: ['Prepara la víspera: equipo revisado, ropa limpia, shinai sin astillas, cordones de repuesto.', 'Llega con tiempo, vístete sin prisa y calienta con calma.', 'Haz el protocolo con atención: saludo, vestimenta, entrada y salida.', 'Durante la prueba: mirada abierta, kiai firme y calma; si te equivocas, recompón y sigue.', 'Termina con el saludo, agradece y no te quedes en el error.', 'Después: apunta en el diario qué ha ido bien y qué mejorar, y comenta con tu sensei.'],
    keys: ['El tribunal mira la actitud tanto como la técnica.', 'Nadie espera perfección: esperan control y respeto.', 'La mejor preparación es repetir lo básico con calidad.'],
    errors: [['Estrenas equipo el mismo día', 'Usa lo que conoces; los cambios, semanas antes.'], ['Te apresuras con el protocolo', 'Es parte de lo que se evalúa: hazlo con calma.']],
    drills: ['Haz un simulacro completo en el dōjō: protocolo, kirikaeshi, uchikomi y kata.', 'Practica tu rutina de respiración antes del simulacro.'],
    check: ['Tengo el equipo listo.', 'Sé el protocolo de entrada y salida.', 'Tengo una rutina de calma.'],
    warn: 'El desarrollo exacto del examen lo marca la convocatoria y el tribunal. ' + FUENTE
  });

  add({
    id: 'ex-tus-kata', t: 'Pulir los kata 1, 2 y 3', jp: '形を磨く', sub: 'Qué mira un examinador',
    intro: 'Los tres primeros kata se repiten tanto que se pulen durante años. Hay detalles que marcan la diferencia desde el primer día.',
    stepsH: 'Qué cuidar en los tres',
    steps: ['Los tres pasos grandes iniciales y el final (kamae wo toku y cinco pasos pequeños) se hacen con calma y sin prisa.', 'Pasos deslizados, sin saltos ni pisadas fuertes.', 'La mirada al compañero en todo momento.', 'Respeta tu papel: uchidachi inicia y marca distancia y tiempo; shidachi responde.', 'Kiai claro en los momentos que corresponden.', 'Zanshin: no te relajes tras el último corte.'],
    keys: ['Kata 1: rodillas firmes al cortar y pie trasero que llega rápido; no giras el filo.', 'Kata 2: shidachi corta cuando el golpe ya ha pasado; el kote de uchidachi es real.', 'Kata 3: la presión de shidachi viene del espíritu, no de la fuerza; no se aplasta el bokutō.'],
    extra: [{ h: 'Lecciones', ul: [L('kata-etiqueta', 'Cómo se practica el kata'), L('kata-1', 'Kata 1'), L('kata-2', 'Kata 2'), L('kata-3', 'Kata 3')] }],
    errors: [['Golpeas con fuerza al compañero', 'El bokutō se controla: nunca se estrella.'], ['Pierdes la mirada', 'Mira siempre al compañero, incluso al girar.']],
    drills: ['Practica en casa solo el comienzo y el final de cada kata.', 'Pídele a tu sensei que te diga qué papel te cuesta más.'],
    check: ['Hago el comienzo y el final sin pensar.', 'Mantengo la mirada.', 'Hago los dos papeles con calidad.'],
    warn: 'Los detalles finos de cada kata te los corrige tu sensei. ' + 'Basado en descripciones públicas del Nihon Kendō Kata.'
  });

  add({
    id: 'ex-mejor', t: 'Quiero la mejor técnica: las 12 prioridades', jp: '上達の道', sub: 'Cómo mejorar más rápido siendo principiante',
    intro: 'Querer ser el mejor es una gran energía. En kendō la forma más rápida de acercarse es pulir lo básico mejor que nadie y escuchar. Aquí van las doce prioridades, en orden de importancia.',
    stepsH: 'Las doce prioridades',
    steps: ['Postura: espalda recta, mentón recogido, hombros sueltos.', 'Agarre: la mano izquierda manda; meñique y anular firmes.', 'Chūdan: talón izquierdo, mano izquierda en el centro y kensen a la garganta.', 'Pies: okuri-ashi con la cabeza a la misma altura.', 'Suburi diario de calidad: poco, bien hecho y con kiai.', 'Respiración abdominal y kiai desde el tanden.', 'Mirada abierta a los ojos del rival.', 'Filo (hasuji) y corte limpio, con el monouchi.', 'Fumikomi y hikitsuke: golpe, grito y pisada a la vez.', 'Zanshin tras cada golpe.', 'Escuchar y aplicar las correcciones del sensei, y apuntarlas.', 'Cuidar el cuerpo: calentar, dormir y descansar.'],
    extra: [{ h: 'Lecciones de cada una', ul: [L('shisei', 'Postura'), L('tenouchi', 'Agarre'), L('chudan', 'Chūdan'), L('okuri-ashi', 'Okuri-ashi'), L('joge-buri', 'Jōge-buri'), L('respiracion', 'Respiración'), L('metsuke', 'Mirada'), L('men', 'Men'), L('fumikomi-ashi', 'Fumikomi'), L('kiai-zanshin', 'Kiai y zanshin'), L('calentamiento-kendo', 'Calentamiento')] }, { h: 'Cómo medir tu progreso', ul: ['Grábate cada dos semanas haciendo el mismo ejercicio y compara.', 'Anota en el diario una mejora y un punto a corregir tras cada clase.', 'Compárate solo con tu versión de hace un mes.', 'Pide a tu sensei un único objetivo para la semana.'] }],
    keys: ['El "mejor" principiante es quien repite lo básico con más calidad y más ganas de corregirse.', 'Los avances llegan por escalones: habrá semanas sin mejoras visibles y otras de salto.', 'La técnica limpia llega antes que la velocidad o la fuerza.'],
    check: ['Reviso mi postura al empezar cada práctica.', 'Hago suburi con calidad cada día que puedo.', 'Anoto las correcciones de mi sensei.', 'Me grabo cada dos semanas.'],
    tip: 'No hay atajos, pero sí un orden: postura, agarre, pies, corte. Si algo falla, casi siempre es el eslabón anterior.'
  });

  add({
    id: 'men-pasante', t: 'Men con pase y vuelta', jp: '面・抜けて残心', sub: 'Golpear, seguir hacia delante y girar',
    art: ['anim:men-pasante', 'seq:zanshin'],
    intro: 'En el men "pasante" golpeas con fumikomi y no frenas: sigues avanzando unos pasos junto al compañero, te giras y vuelves a la guardia mirándole. Es la forma habitual de practicar el golpe en el dōjō y enseña a no detenerte tras el impacto.',
    why: 'Evita el error más común del principiante: frenar justo después de golpear. Seguir en movimiento da potencia al golpe, protege tu espalda y entrena el zanshin.',
    steps: ['Men con okuri-ashi, fumikomi y kiai, sin parar tras el impacto.', 'Sigues avanzando unos pasos pequeños y rápidos, pasando junto al compañero (tu sensei te indica por qué lado).', 'Mantén el shinai delante de ti y los brazos recogidos mientras pasas.', 'Cuando ya hay distancia, gírate hacia el compañero sin dar la espalda.', 'Vuelve a chūdan, mirando al compañero, con zanshin.'],
    keys: ['El golpe no termina en el impacto: termina cuando recuperas la guardia.', 'Pasar junto al compañero (sin chocar) exige un buen control de la línea.', 'Los pasos tras el golpe son cortos y rápidos, sin saltos.', 'Mantén los ojos en el compañero al girar.'],
    errors: [['Frenas tras el golpe', 'Sigue avanzando: el golpe se acompaña con el cuerpo.'], ['Chocas con el compañero', 'Mantén tu línea y pasa a su lado, sin cruzar su espacio.'], ['Te giras dando la espalda', 'Gira mirando hacia el compañero.'], ['Pierdes la guardia al girar', 'Recoge el shinai y termina en chūdan.']],
    drills: ['10 men con pase y vuelta con motodachi, sin prisa, cuidando el giro.', 'En casa: golpe, 4 pasos pequeños, giro y chūdan, 10 repeticiones.'],
    check: ['No freno tras el golpe.', 'Paso sin chocar.', 'Me giro mirando al compañero.', 'Termino en chūdan con zanshin.'],
    warn: 'En combate real no siempre se puede pasar de largo (el rival puede estar en medio). El detalle de hacia qué lado se pasa depende de tu sensei.',
    terms: [['Zanshin', 'alerta tras el golpe']]
  });

  add({
    id: 'men-tai-hiki', t: 'Men, tai-atari y hiki-men', jp: '面・体当たり・引き面', sub: 'Golpear, chocar y golpear de nuevo al retroceder',
    art: ['seq:men-tai-hiki'],
    intro: 'Es una secuencia clásica de práctica: haces un men, sigues hacia delante hasta el choque de cuerpo (tai-atari), los shinai quedan cruzados junto a las manos (tsubazeriai) y al echarte hacia atrás golpeas otro men (hiki-men).',
    why: 'Une tres cosas que se usan mucho: el golpe, el contacto cuerpo a cuerpo y el golpe al retirarse. También enseña a no quedarte parado en la distancia corta.',
    steps: ['Men con fumikomi y kiai, sin frenar.', 'Sigue avanzando con la cadera hasta el contacto: tai-atari. Los kote y los shinai quedan cruzados delante de ti.', 'Mantén la espalda recta, los codos pegados y el centro; empuja con la cadera, no con los brazos.', 'Cuando el compañero cede o reacciona, sube el shinai y empieza a retroceder con okuri-ashi.', 'Golpea men mientras te echas hacia atrás (hiki-men), con kiai.', 'Sigue retrocediendo unos pasos con la guardia y el zanshin.'],
    keys: ['Se suele llamar "men – tai-atari – hiki-men" (en el dōjō también "men, tsubazeriai y hiki-men").', 'El golpe de hiki-men termina antes de que los pies se detengan.', 'La cadera empuja; las manos solo sostienen.', 'Espalda recta durante el retroceso: no te dejes caer hacia atrás.'],
    errors: [['Empujas con los brazos en el choque', 'Empuja con la cadera, con los codos pegados.'], ['Bajas la cabeza en el contacto', 'Mentón recogido y mirada al frente.'], ['Subes tarde y el hiki-men sale flojo', 'Sube justo cuando el compañero reacciona al empuje.'], ['Te quedas pegado sin golpear', 'No te quedes en la distancia corta: golpea o sepárate.']],
    drills: ['En el aire: golpe, un paso de empuje y hiki-men, 10 repeticiones.', 'Con motodachi y a cámara lenta primero, luego a velocidad normal.'],
    check: ['Mi men inicial no frena.', 'Empujo con la cadera en el tai-atari.', 'Mi hiki-men sale mientras retrocedo.', 'Mantengo la espalda recta.'],
    extra: [{ h: 'Lecciones relacionadas', ul: [L('men', 'Men'), L('tai-atari', 'Tai-atari'), L('tsubazeriai', 'Tsubazeriai'), L('hiki-men', 'Hiki-men')] }],
    warn: 'Los nombres y los detalles (cuándo se empuja, cuántos pasos) varían según el dōjō. Confirma con tu sensei.',
    terms: [['Tai-atari', 'choque de cuerpo'], ['Tsubazeriai', 'empuje con las guardas'], ['Hiki-men', 'men al retirarse']]
  });
})();
