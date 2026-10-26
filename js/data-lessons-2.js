/* Módulos 4–7: golpes, técnicas, avanzado y combate */
window.KD = window.KD || {};
KD.modules = KD.modules || [];

KD.modules.push(
  {
    id: 'kihon-waza', name: 'Kihon-waza · Golpes básicos', jp: '基本技', seal: '技', icon: 'shinai',
    desc: 'Los cuatro blancos, el golpe válido, los suburi y los golpes fundamentales: men, kote, dō y tsuki.',
    lessons: [
      {
        id: 'datotsu-yuko', t: 'Zonas válidas y yūkō-datotsu', jp: '打突部位・有効打突', sub: 'Qué se golpea y cuándo cuenta',
        art: ['zones'],
        intro: 'En kendō solo se golpean cuatro zonas, y solo cuenta un golpe que cumpla cinco requisitos. Toca la figura para ver cada zona.',
        blocks: [
          { h: 'Datotsu-bui · las cuatro zonas', ul: ['Men: la parte superior de la cabeza (shōmen) y los laterales (yokomen izquierdo y derecho).', 'Kote: la muñeca derecha del rival (y la izquierda cuando está al descubierto, por ejemplo en jōdan).', 'Dō: el costado del torso, sobre todo el derecho (también se admite el izquierdo).', 'Tsuki: la estocada a la garganta (tsuki-dare), que solo se practica con un nivel avanzado y con supervisión.'] },
          { h: 'Yūkō-datotsu · lo que hace válido un golpe', p: 'La definición habla de un golpe hecho con espíritu y buena postura, con la parte correcta del shinai (datotsu-bu), sobre una zona válida, con filo correcto (hasuji), y seguido de zanshin.' },
          { ol: ['Zona válida: men, kote, dō o tsuki.', 'Parte correcta del shinai: el datotsu-bu (monouchi).', 'Dirección del filo (hasuji) correcta: el golpe corta.', 'Ki-ken-tai-ichi: espíritu (kiai), espada y cuerpo a la vez.', 'Zanshin: alerta tras el golpe.'] },
          { warn: 'Un golpe a una zona válida no vale si el shinai llega torcido, si falta kiai, o si el golpeador se relaja de inmediato. Por eso la técnica pesa más que la velocidad.' }
        ],
        terms: [['Datotsu-bui', 'zonas válidas'], ['Yūkō-datotsu', 'golpe válido'], ['Men', 'cabeza'], ['Kote', 'muñeca'], ['Dō', 'costado'], ['Tsuki', 'garganta'], ['Hasuji', 'dirección del filo'], ['Zanshin', 'alerta']],
        practice: ['Toca cada zona de la figura y di su nombre.', 'Antes de cada golpe de suburi, repasa mentalmente los cinco requisitos.']
      },
      {
        id: 'suburi', t: 'Suburi: golpes al aire', jp: '素振り', sub: 'El ejercicio que más vas a hacer',
        art: ['strip:men'],
        intro: 'Suburi es el ejercicio base: golpes sin compañero. Puedes hacerlo en casa y es donde se forman la postura, el agarre y el filo.',
        blocks: [
          { h: 'Jōge-buri · arriba y abajo', ol: ['Desde chūdan, sube el shinai por encima de la cabeza, con los brazos estirados y el shinai en diagonal hacia atrás (furikaburi).', 'Baja el shinai de golpe hasta que la punta quede a la altura de chūdan, no más abajo.', 'En el golpe, aprieta tenouchi y haz kiai. Después relaja.', 'Repite: arriba y abajo, con el mismo ritmo.'] },
          { h: 'Sayū-men · diagonales', p: 'Igual que jōge-buri, pero el golpe baja en diagonal hacia el lado izquierdo y el derecho de la cabeza (yokomen), alternando.' },
          { h: 'Zenshin-kōtai-suburi', p: 'Golpeas men mientras avanzas con okuri-ashi, y retrocedes con otro golpe. Une pies y golpe, que es lo más importante.' },
          { h: 'Haya-suburi', p: 'Golpes rápidos y pequeños, con un movimiento más corto de muñecas, para ganar velocidad y fluidez.' },
          { h: 'Cuántos y cómo', ul: ['Calidad antes que cantidad: 30 bien hechos valen más que 200 con prisas.', 'Estira bien antes y después, sobre todo hombros y muñecas.', 'Pide a tu sensei que mire tus suburi: es lo que más corrige.'] },
          { warn: 'Entrena suburi en un sitio con espacio y techo alto. Ten cuidado con lámparas, ventanas y compañeros. Si notas dolor en muñecas o codos, para.' }
        ],
        terms: [['Suburi', 'golpes al aire'], ['Jōge-buri', 'arriba y abajo'], ['Sayū-men', 'diagonales'], ['Zenshin-kōtai-suburi', 'avance y retroceso'], ['Haya-suburi', 'suburi rápido'], ['Furikaburi', 'subir el shinai']],
        practice: ['30 jōge-buri con kiai y mirada al frente.', '20 zenshin-kōtai-suburi cuidando que los pies siguen al golpe.']
      },
      {
        id: 'men', t: 'Men-uchi', jp: '面打ち', sub: 'El golpe principal',
        art: ['strip:men'],
        intro: 'Men es el golpe más importante, el más usado y el que más se practica. Si lo haces bien, todos los demás golpes mejoran.',
        blocks: [
          { h: 'Cómo se hace', ol: ['Desde chūdan, a distancia de issoku-ittō-no-ma-ai.', 'Entra con okuri-ashi, subiendo el shinai por el centro hasta sobre la cabeza (furikaburi).', 'Cuando el pie delantero avanza, estira los brazos hacia delante y golpea el shōmen con el monouchi.', 'El fumikomi y el golpe ocurren a la vez, con kiai: "Men!".', 'Pasa por el lado del rival (tu sensei te indicará hacia qué lado), mantén zanshin y termina en chūdan.'] },
          { h: 'Errores muy comunes', ul: ['Subir demasiado el shinai y bajar demasiado tarde.', 'Golpear con los brazos sin mover el cuerpo.', 'Dejar el pie trasero atrás (lo que hace que el golpe no llegue).', 'Cerrar los ojos o bajar la cabeza al golpear.', 'Golpear con la mano derecha: mueve el shinai la izquierda.'] },
          { h: 'Cómo se practica', ul: ['Suburi de men sin moverte, luego avanzando.', 'Uchikomi-geiko de men sobre un compañero con bōgu.', 'Kirikaeshi para fortalecer el ritmo.'] },
          { tip: 'Una buena imagen: estás cortando la cabeza del rival "de arriba abajo, pasando por el centro". Si imaginas ese corte, tu mano izquierda dirige y el filo va recto.' }
        ],
        terms: [['Men-uchi', 'golpe a la cabeza'], ['Furikaburi', 'subida'], ['Monouchi', 'zona de golpeo'], ['Fumikomi-ashi', 'pisada'], ['Zanshin', 'alerta']],
        practice: ['20 men-uchi de suburi sin moverte, 20 con okuri-ashi.', 'Con un compañero con bōgu, 10 men sobre el shōmen.']
      },
      {
        id: 'kote', t: 'Kote-uchi', jp: '小手打ち', sub: 'Pequeño, rápido y limpio',
        art: ['strip:kote'],
        intro: 'Kote es un golpe corto a la muñeca. Es más rápido que men porque el recorrido es menor.',
        blocks: [
          { h: 'Cómo se hace', ol: ['Desde chūdan, a issoku-ittō-no-ma-ai.', 'Sube el shinai solo lo justo (hasta la altura de tu frente), no hasta atrás.', 'Avanza con okuri-ashi y al llegar, corta hacia abajo con la punta del shinai sobre la muñeca derecha del rival.', 'Fumikomi y golpe a la vez, con kiai: "Kote!".', 'Pasa junto al rival (o recupera tu distancia, según el ejercicio) y termina con zanshin.'] },
          { h: 'Errores muy comunes', ul: ['Levantar el shinai demasiado (se convierte en un men).', 'Golpear con el "plano" del shinai (no con el filo).', 'Inclinar el cuerpo hacia delante para llegar.', 'Frenar el golpe en el aire por miedo a hacer daño: el kote debe terminar con seguridad.'] },
          { tip: 'El kote se aprende golpeando, no pensando. Dedica tiempo a uchikomi de kote y a kote-men.' }
        ],
        terms: [['Kote-uchi', 'golpe a la muñeca'], ['Kote-men', 'kote seguido de men']],
        practice: ['20 kote-uchi de suburi con el shinai subiendo solo hasta la frente.', 'Con un compañero con bōgu, 10 kote.']
      },
      {
        id: 'do', t: 'Dō-uchi', jp: '胴打ち', sub: 'Un corte al costado',
        art: ['strip:do'],
        intro: 'Dō se golpea en el costado del torso del rival. Se corta con el filo y con un movimiento de "barrido" por el lado.',
        blocks: [
          { h: 'Cómo se hace', ol: ['Desde chūdan, a distancia de issoku-ittō-no-ma-ai.', 'Sube el shinai (furikaburi) de forma algo más corta que en men.', 'Avanza con okuri-ashi y corta hacia el costado derecho del rival (migi-dō), con el filo del shinai.', 'Termina el movimiento con la punta ligeramente hacia delante y arriba, con kiai: "Dō!".', 'Pasa por el lado del rival (tu sensei te indicará hacia cuál), manteniendo zanshin.'] },
          { h: 'Errores muy comunes', ul: ['Golpear con el plano (suena a "toc" hueco).', 'Dejar el shinai demasiado vertical o demasiado horizontal.', 'Mirar el dō y bajar la cabeza.', 'Caerte hacia el lado en lugar de pasar recto.'] },
          { tip: 'Dō se suele aprender después de men y kote. Pide a tu sensei que te corrija el ángulo con un ejemplo físico.' }
        ],
        terms: [['Dō-uchi', 'golpe al costado'], ['Migi-dō', 'costado derecho'], ['Hasuji', 'filo']],
        practice: ['20 dō-uchi de suburi, escuchando que el golpe suene limpio.']
      },
      {
        id: 'tsuki', t: 'Tsuki', jp: '突き', sub: 'La estocada a la garganta',
        art: ['strip:tsuki'],
        intro: 'Tsuki es una estocada a la garganta. Es el golpe más delicado: solo se practica con supervisión y cuando tu sensei lo indique.',
        blocks: [
          { h: 'Cómo se hace', ol: ['Desde chūdan, con la mirada fija en el tsuki-dare del rival.', 'Recoge ligeramente el shinai sin levantarlo, avanza con okuri-ashi y empuja el kensen hacia la garganta.', 'Los brazos se extienden con la mano izquierda empujando y la derecha guiando.', 'Fumikomi y golpe a la vez, con kiai: "Tsuki!".', 'Retira el shinai rápidamente y mantén zanshin.'] },
          { warn: 'El tsuki puede lesionar si se hace mal. No lo practiques sin que tu sensei te lo haya enseñado. Y con tu compañero, comprueba que lleva el tsuki-dare bien atado y controla la fuerza.' },
          { h: 'Cuándo se usa', p: 'Se usa en situaciones concretas (por ejemplo, contra jōdan). En categorías infantiles y de iniciación suele estar limitado o prohibido; consulta las reglas de tu federación.' }
        ],
        terms: [['Tsuki', 'estocada'], ['Tsuki-dare', 'protección de garganta']],
        practice: ['Hasta que tu sensei lo permita, solo estudia la teoría.']
      },
      {
        id: 'kirikaeshi', t: 'Kirikaeshi', jp: '切り返し', sub: 'El ejercicio completo',
        intro: 'Kirikaeshi es una serie de golpes alternos a yokomen, avanzando y retrocediendo. Combina pies, golpe, kiai y resistencia.',
        blocks: [
          { h: 'Cómo es', ol: ['Sonkyō inicial, o guardia chūdan frente al motodachi.', 'Un men (shōmen) de apertura.', 'Avanzas golpeando sayū-men alternos (izquierda, derecha...) con okuri-ashi.', 'Retrocedes golpeando sayū-men con cada paso.', 'Termina con un men final y pasas.'] },
          { h: 'Qué se entrena', ul: ['Ritmo, respiración y kiai continuos.', 'Golpes con el filo bien dirigido y la zona correcta.', 'Distancia: el motodachi controla la distancia y ayuda al kakarite.', 'Resistencia y relajación.'] },
          { h: 'Errores', ul: ['Golpear solo con los brazos.', 'Perder el kiai al cansarte.', 'Golpear con prisa y sin controlar la distancia.', 'Encoger los hombros.'] },
          { tip: 'No se trata de ir rápido. Se trata de mantener la técnica correcta incluso cuando te cansas. Los veteranos hacen kirikaeshi todos los días.' }
        ],
        terms: [['Kirikaeshi', 'serie de golpes'], ['Sayū-men', 'golpes diagonales'], ['Motodachi', 'quien recibe']],
        practice: ['Cuando tengas bōgu, haz kirikaeshi al principio de cada clase.']
      },
      {
        id: 'kote-men', t: 'Kote-men y renzoku-waza', jp: '小手面・連続技', sub: 'Encadenar golpes',
        intro: 'Kote-men es la combinación básica: un kote seguido de un men sin pausa. Se llama renzoku-waza a todo golpe encadenado.',
        blocks: [
          { h: 'Cómo se hace', ol: ['Desde chūdan, a issoku-ittō-no-ma-ai.', 'Golpea kote con kiai ("Kote!") y recoge de inmediato el shinai, sin dar tiempo al rival.', 'Con okuri-ashi sigue avanzando y golpea men ("Men!").', 'Pasa y termina en zanshin.'] },
          { h: 'Claves', ul: ['El segundo golpe debe ser tan bueno como el primero.', 'El pie izquierdo siempre sigue al derecho.', 'El kote no debe ser un trámite: debe tener intención para abrir men.'] },
          { h: 'Otras combinaciones', ul: ['Kote-men-dō: acabando en dō cuando el rival cubre men.', 'Men-men: dos men seguidos.', 'Men-dō: men y dō cuando el rival levanta los brazos.'] },
          { tip: 'La combinación nace de la intención: el primer golpe debe "pedir" al rival que reaccione, y el segundo aprovecha esa reacción.' }
        ],
        terms: [['Kote-men', 'kote seguido de men'], ['Renzoku-waza', 'golpes encadenados']],
        practice: ['20 kote-men de suburi, con los pies siguiendo al golpe.', 'Con un compañero con bōgu, 10 kote-men.']
      }
    ]
  },

  {
    id: 'waza-medio', name: 'Waza · Técnicas intermedias', jp: '応用技', seal: '応', icon: 'swords',
    desc: 'Contacto cuerpo a cuerpo, golpes al retirarse, apartar el shinai y golpear en el inicio del rival.',
    lessons: [
      {
        id: 'tai-atari', t: 'Tai-atari y tsubazeriai', jp: '体当たり・鍔迫り合い', sub: 'Cuerpo a cuerpo con control',
        intro: 'Tras un golpe, los kendōka a menudo se encuentran muy cerca. Tai-atari y tsubazeriai son las respuestas para gestionar esa distancia.',
        blocks: [
          { h: 'Tai-atari', p: 'Es un choque de cuerpo hacia el rival, con el shinai bien sujeto y los codos pegados al cuerpo. Se hace con la cadera, no con los brazos, y con la espalda recta. Rompe el equilibrio y abre una oportunidad para golpear.' },
          { h: 'Tsubazeriai', p: 'Las tsuba (guardas) quedan en contacto y cada uno presiona con control. Se mantiene unos segundos, se suelta con calma y se reinicia la acción. En competición, los árbitros separan si no hay iniciativa.' },
          { h: 'Qué evitar', ul: ['Empujar con los brazos o el hombro.', 'Agarrar el shinai o el cuerpo del rival.', 'Bajar la cabeza o encogerte.', 'Tsubazeriai prolongado sin intención: se considera falta en competición.'] },
          { warn: 'Es una técnica de contacto. Practícala con compañeros de nivel parecido o con tu sensei, y con mucho control.' }
        ],
        terms: [['Tai-atari', 'choque de cuerpo'], ['Tsubazeriai', 'empuje con tsuba']],
        practice: ['Con tu sensei o un compañero de confianza: practica un tai-atari suave desde chika-ma.']
      },
      {
        id: 'hiki-waza', t: 'Hiki-waza', jp: '引き技', sub: 'Golpear al retirarse',
        intro: 'Hiki-waza son golpes que se hacen mientras retrocedes, normalmente desde tsubazeriai: hiki-men, hiki-kote y hiki-dō.',
        blocks: [
          { h: 'Cómo se hace', ol: ['Desde tsubazeriai, empuja ligeramente al rival para que reaccione.', 'En ese momento, sube el shinai y retrocede con okuri-ashi.', 'Golpea mientras el cuerpo se va hacia atrás, con kiai ("Hiki-men!").', 'Mantén zanshin, retrocediendo hasta una distancia segura.'] },
          { h: 'Claves', ul: ['El golpe debe terminar antes de que los pies se detengan.', 'La espalda recta: no te inclines hacia atrás.', 'El hiki-dō es el más común, porque la dirección del movimiento ayuda.'] },
          { tip: 'Un truco: practica el golpe y el retroceso como si fueran una cosa sola, no dos.' }
        ],
        terms: [['Hiki-waza', 'golpes al retirarse'], ['Hiki-men', 'men al retirarse'], ['Hiki-dō', 'dō al retirarse']],
        practice: ['Con un compañero, 10 hiki-dō desde tsubazeriai.']
      },
      {
        id: 'harai-debana', t: 'Harai-waza y debana-waza', jp: '払い技・出ばな技', sub: 'Abrir la guardia y golpear al inicio',
        intro: 'Dos técnicas de iniciativa: apartar el shinai del rival para abrirte camino (harai) y golpear justo cuando el rival empieza a moverse (debana).',
        blocks: [
          { h: 'Harai-waza', ul: ['Con un movimiento corto y firme, el shinai aparta el del rival hacia un lado.', 'En el mismo gesto, golpeas men o kote por el hueco que se abre.', 'Ejemplos: harai-men, harai-kote.'] },
          { h: 'Debana-waza', ul: ['Debana es "el momento en que sale la cabeza": justo cuando el rival se mueve para atacar.', 'Se golpea antes de que su movimiento termine. El rival está "abierto" (el kote o el men, según lo que levante).', 'Ejemplos: debana-kote, debana-men.'] },
          { h: 'Cómo se entrenan', ul: ['Con un compañero que ataque de forma predecible al principio.', 'Fijándote en cuándo cambia el peso, cuándo respira o cuándo se levanta el kensen.', 'Con muchas repeticiones lentas, hasta que el cuerpo lo reconozca.'] },
          { tip: 'Debana-kote es una de las técnicas más típicas y bonitas del kendō: se necesita paciencia para verla venir.' }
        ],
        terms: [['Harai-waza', 'apartar y golpear'], ['Debana-waza', 'golpear al inicio'], ['Maki-waza', 'envolver el shinai']],
        practice: ['Con un compañero, 10 debana-kote ante un ataque de men predecible.']
      },
      {
        id: 'tipos-practica', t: 'Tipos de práctica con compañero', jp: '稽古の種類', sub: 'Cada ejercicio entrena algo distinto',
        intro: 'No todo es combate. Hay ejercicios con nombres concretos, cada uno con su objetivo. Saber cuál estás haciendo te ayuda a sacar partido.',
        blocks: [
          { h: 'Los principales', ul: ['Uchikomi-geiko: golpes repetidos sobre las zonas que ofrece el motodachi. Entrena precisión.', 'Kakari-geiko: ataque continuo, sin pausa y con energía. Entrena espíritu y resistencia.', 'Kirikaeshi: golpes alternos con ritmo, kiai y distancia.', 'Ji-geiko: práctica libre entre dos personas, con intención real.', 'Gokaku-geiko: entre iguales. Es "combate" de entrenamiento.', 'Shiai-geiko: como un combate de torneo.', 'Mawari-geiko: rotación; todos practican con todos.'] },
          { h: 'Roles', ul: ['Motodachi: quien recibe los ataques y guía.', 'Kakarite: quien ataca.', 'Un buen motodachi ayuda al otro, aunque tenga más nivel.'] },
          { tip: 'En ji-geiko con veteranos: no busques ganar, busca atacar con claridad. Cada derrota ahí es una lección gratis.' }
        ],
        terms: [['Uchikomi-geiko', 'golpes repetidos'], ['Kakari-geiko', 'ataque continuo'], ['Ji-geiko', 'práctica libre'], ['Motodachi', 'receptor'], ['Kakarite', 'atacante']],
        practice: ['Identifica en tu próxima clase qué tipo de ejercicio estáis haciendo.']
      }
    ]
  },

  {
    id: 'avanzado', name: 'Ōji-waza · Respuesta y estrategia', jp: '応じ技', seal: '極', icon: 'chart',
    desc: 'Esquivar, desviar y devolver golpes; iniciativa (sen); presión (seme); jōdan; kata.',
    lessons: [
      {
        id: 'oji-waza', t: 'Ōji-waza: técnicas de respuesta', jp: '応じ技', sub: 'Dejar que el rival abra tu golpe',
        art: ['topview:nuki'],
        intro: 'Ōji-waza son técnicas en las que esperas el ataque del rival y respondes con un golpe propio. Hay cuatro familias.',
        blocks: [
          { h: 'Nuki-waza · esquivar', p: 'Esquivas el golpe moviendo el cuerpo y contraatacas. Ejemplos: men-nuki-dō (esquivas un men y cortas dō) y kote-nuki-men.' },
          { h: 'Suriage-waza · desviar', p: 'Con el shinai subes hacia arriba desviando el golpe y respondes en el mismo gesto. Ejemplos: kote-suriage-men, men-suriage-men.' },
          { h: 'Kaeshi-waza · devolver', p: 'Bloqueas el golpe y giras el shinai para golpear por otro lado. Ejemplo: men-kaeshi-dō.' },
          { h: 'Uchiotoshi-waza · golpear hacia abajo', p: 'Golpeas el shinai del rival hacia abajo y sin pausa respondes. Ejemplo: dō-uchiotoshi-men.' },
          { h: 'Qué tienen en común', ul: ['Se necesita un buen kihon (si no, no llegas a tiempo).', 'Se necesita seme: haces que el rival ataque cuando tú quieres.', 'Se necesita calma: no reaccionas, respondes.', 'Se entrena con muchas repeticiones suaves hasta que salga solo.'] },
          { tip: 'No empieces a practicar ōji-waza hasta que tu sensei te lo indique. Primero, kihon y debana.' }
        ],
        terms: [['Ōji-waza', 'técnicas de respuesta'], ['Nuki-waza', 'esquivar'], ['Suriage-waza', 'desviar'], ['Kaeshi-waza', 'devolver'], ['Uchiotoshi-waza', 'golpear hacia abajo']],
        practice: ['Con un compañero y a cámara lenta: ataque de men y esquiva con hiraki-ashi.']
      },
      {
        id: 'sen', t: 'Sen: la iniciativa', jp: '先', sub: 'Cuándo moverte',
        intro: 'En kendō, el momento lo es todo. "Sen" es la iniciativa: la capacidad de moverte en el instante correcto.',
        blocks: [
          { h: 'Los tres sen', ul: ['Sen-sen-no-sen: te anticipas al "pensamiento" de atacar del rival.', 'Sen-no-sen: atacas justo cuando el rival se mueve (debana-waza).', 'Go-no-sen: respondes después de que ataque (ōji-waza).'] },
          { h: 'Cómo se entrena', ul: ['Con ji-geiko y con compañeros veteranos.', 'Fijándote en el rival: su respiración, su peso, su mirada.', 'Sin hacer nada: observa cómo reaccionan cuando haces seme.'] },
          { tip: 'No hace falta que sea perfecto. Con el tiempo, empezarás a "sentir" cuándo golpear sin pensarlo.' }
        ],
        terms: [['Sen', 'iniciativa'], ['Sen-sen-no-sen', 'anticipar'], ['Sen-no-sen', 'atacar al inicio'], ['Go-no-sen', 'responder']],
        practice: ['Observa en un vídeo de combate si los golpes son sen-no-sen, go-no-sen o sen-sen-no-sen.']
      },
      {
        id: 'seme', t: 'Seme: la presión', jp: '攻め', sub: 'Hacer que el rival se abra',
        intro: 'Seme es presión: usas tu espíritu, postura y distancia para obligar al rival a reaccionar. Es lo que diferencia "golpear" de "ganar el punto".',
        blocks: [
          { h: 'Tipos de seme', ul: ['Ki-zeme: con el espíritu (la mirada, la actitud).', 'Ken-zeme: con el kensen, apuntando al centro del rival.', 'Tai-zeme: con el cuerpo, avanzando poco a poco.'] },
          { h: 'Cómo se ve', p: 'Cuando haces seme, el rival "reacciona": levanta el shinai, retrocede, ataca o tiembla. Esa reacción es la oportunidad de golpear. Sin seme, golpear es solo suerte.' },
          { tip: 'Practica entrar en la distancia de golpeo sin atacar. Si el rival se mueve, ya hay seme.' }
        ],
        terms: [['Seme', 'presión'], ['Kensen', 'punta de la espada']],
        practice: ['Con un compañero: 10 entradas a distancia de golpeo sin atacar; observa su reacción.']
      },
      {
        id: 'jodan', t: 'Jōdan', jp: '上段', sub: 'La guardia alta',
        art: ['solo:jodan'],
        intro: 'Jōdan es una guardia ofensiva. Para quien la usa y para quien la enfrenta, es todo un reto.',
        blocks: [
          { h: 'Cómo es', ul: ['Shinai sobre la cabeza, con una mano o con dos.', 'Un pie delante (según la variante: izquierda o derecha).', 'El kensen apunta hacia atrás en diagonal.'] },
          { h: 'Ventajas e inconvenientes', ul: ['Ataca rápido a men, con gran alcance.', 'El torso queda abierto: kote y dō son los blancos más fáciles.', 'Requiere mucha confianza y una buena postura.'] },
          { h: 'Si te enfrentas a jōdan', p: 'Presiona con el kensen, cubre el centro, y busca kote. No te alejes demasiado: la distancia favorece al que ataca desde arriba.' },
          { tip: 'No es tu momento aún: estudia jōdan por curiosidad y cultura.' }
        ],
        terms: [['Jōdan-no-kamae', 'guardia alta']],
        practice: ['Mira vídeos de combates de jōdan y fíjate en dónde ataca el otro.']
      },
      {
        id: 'kata', t: 'Nihon Kendō Kata', jp: '日本剣道形', sub: 'Las diez formas',
        intro: 'El kata es una serie de formas oficiales con bokutō (espada de madera) para dos personas. Enseña distancia, momento, postura y respeto.',
        blocks: [
          { h: 'Estructura', ul: ['Diez formas: siete con tachi (espada larga) y tres con kodachi (espada corta).', 'Uchidachi ataca y "enseña"; shidachi responde y "gana".', 'Cada forma tiene una enseñanza (distancia, ritmo, zanshin).'] },
          { h: 'Qué aporta', ul: ['Correcta postura y mirada.', 'Sentido real de la distancia y del filo.', 'Respeto y compás con el compañero.', 'Un puente con la historia del kendō.'] },
          { h: 'Y para ti, ahora', p: 'El kata se aprende con un sensei y con compañeros, no con un libro ni una pantalla. Aquí solo va esta introducción: cuando llegue el momento, será una de las partes más enriquecedoras.' }
        ],
        terms: [['Kata', 'forma'], ['Nihon Kendō Kata', 'kata oficial'], ['Uchidachi', 'quien ataca'], ['Shidachi', 'quien responde'], ['Bokutō', 'espada de madera']],
        practice: ['Pregunta a tu sensei cuándo empezaréis kata y cómo prepararte.']
      }
    ]
  },

  {
    id: 'shiai', name: 'Shiai · Combate y camino', jp: '試合', seal: '試', icon: 'flag',
    desc: 'Reglas de competición, arbitraje, mentalidad y grados. Todo lo que necesitas para llegar a tu primer torneo con confianza.',
    lessons: [
      {
        id: 'reglas-shiai', t: 'Reglas del shiai', jp: '試合規則', sub: 'Cómo funciona un combate',
        intro: 'Un combate de kendō es breve, intenso y muy reglado. Estos son los puntos esenciales. Las reglas exactas dependen del torneo y de la federación.',
        blocks: [
          { h: 'El combate', ul: ['Se disputa en un área cuadrada marcada en el suelo (de unos 9–11 m de lado).', 'Dura normalmente 5 minutos (menos en categorías infantiles).', 'Se gana al conseguir dos ippon (o uno, si se juega a un punto), o teniendo más puntos al final.', 'Si hay empate, puede haber enchō (prórroga): el primer punto gana.'] },
          { h: 'Ippon', p: 'Un ippon se concede cuando un golpe cumple los requisitos del yūkō-datotsu y, al menos, dos de los tres árbitros levantan la bandera correspondiente (roja o blanca).' },
          { h: 'Faltas (hansoku)', ul: ['Salir del área (jōgai).', 'Soltar el shinai.', 'Hacer zancadillas, empujar, agarrar o golpear sin control.', 'Provocar a propósito situaciones de riesgo o perder el tiempo.', 'Dos faltas dan un punto al rival.'] },
          { h: 'Vestimenta del combate', p: 'Un participante lleva una cinta roja (tasuki) en la espalda y el otro blanca, para que los árbitros los distingan.' },
          { tip: 'Para tu primer torneo, no vayas a ganar: ve a aprender. Mira cómo se mueven, cómo respiran y qué hacen cuando pierden.' }
        ],
        terms: [['Shiai', 'combate'], ['Ippon', 'punto'], ['Hansoku', 'falta'], ['Jōgai', 'fuera del área'], ['Enchō', 'prórroga']],
        practice: ['Mira un combate completo en vídeo e identifica ippon y faltas.']
      },
      {
        id: 'arbitraje', t: 'Árbitros, órdenes y gestos', jp: '審判', sub: 'Qué dicen y qué significa',
        intro: 'En un combate hay tres árbitros (shinpan): un principal (shushin) y dos auxiliares (fukushin). Aprende lo que dicen para no quedarte parado cuando suene.',
        blocks: [
          { h: 'Órdenes del árbitro principal', ul: ['Hajime: ¡comenzad!', 'Yame: ¡parad! (hay que parar el combate).', 'Mate: ¡esperad! (se interrumpe momentáneamente).', 'Wakare: ¡separaos!', 'Moto no ichi: volved a las posiciones iniciales.', 'Shōbu-ari: fin del combate.', 'Hantei: decisión por votación.', 'Enchō: prórroga.'] },
          { h: 'Gestos de los árbitros', ul: ['Bandera levantada (roja o blanca): ese lado ha marcado ippon.', 'Si dos de los tres árbitros levantan la misma bandera, el punto es válido.', 'Banderas cruzadas y agitadas (torikeshi): se anula la decisión anterior.', 'Banderas bajadas: no hay punto.'] },
          { tip: 'Cuando oigas "Yame", detente de inmediato y vuelve a tu posición: es parte del reihō.' }
        ],
        terms: [['Hajime', 'comenzad'], ['Yame', 'parad'], ['Mate', 'esperad'], ['Wakare', 'separaos'], ['Shōbu-ari', 'fin'], ['Hantei', 'decisión']],
        practice: ['Escucha las órdenes en un vídeo de torneo y repítelas en voz alta.']
      },
      {
        id: 'mentalidad', t: 'Mentalidad: los cuatro males', jp: '驚懼疑惑', sub: 'Sorpresa, miedo, duda y confusión',
        intro: 'El kendō tradicional enseña que hay cuatro "enfermedades" de la mente que arruinan al kendōka. Reconocerlas es el primer paso para dominarlas.',
        blocks: [
          { h: 'Los cuatro males (shikai)', ul: ['Kyō (驚): sorpresa. Algo inesperado te paraliza.', 'Ku (懼): miedo. Al golpe, al ridículo, a perder.', 'Gi (疑): duda. No sabes si atacar, y no atacas.', 'Waku (惑): confusión. Demasiadas ideas y ninguna acción.'] },
          { h: 'El antídoto', ul: ['Fudōshin: mente inmóvil, firme.', 'Mushin: mente sin ataduras, que actúa sin pensar demasiado.', 'Heijōshin: la mente de siempre, tranquila.', 'Respiración, kiai y práctica constante.'] },
          { h: 'Y para empezar', p: 'Antes de un combate o clase intensa, respira hondo tres veces, afloja los hombros y repite en tu mente: "voy a atacar con claridad". Un golpe valiente que falla vale más que uno tímido que "casi sale".' },
          { tip: 'Nadie está libre de miedo. Los veteranos también lo sienten; la diferencia es que han aprendido a no obedecerlo.' }
        ],
        terms: [['Shikai', 'los cuatro males'], ['Kyō-ku-gi-waku', 'sorpresa, miedo, duda, confusión'], ['Fudōshin', 'mente inmóvil'], ['Mushin', 'mente sin ataduras']],
        practice: ['Antes de tu próxima clase, respira hondo 3 veces y marca una intención: "atacar con claridad".']
      },
      {
        id: 'grados', t: 'Grados y exámenes', jp: '級・段', sub: 'Kyū, dan y qué se espera',
        intro: 'En kendō hay grados que reconocen el nivel y el compromiso. El sistema exacto depende de cada federación, pero la estructura es parecida en casi todas partes.',
        blocks: [
          { h: 'Kyū y dan', ul: ['Kyū: los grados previos al cinturón negro, de 6.º kyū (principiante) a 1.er kyū (último antes de dan), en orden decreciente.', 'Dan: de 1.er dan (shodan) a 8.º dan (hachidan), en orden creciente.', 'En kendō no hay cinturones de colores: lo que cambia es el reconocimiento.'] },
          { h: 'Qué se evalúa', ul: ['Kihon: postura, golpes, pies.', 'Kiai y actitud.', 'A partir de dan: ji-geiko y kata.', 'Etiqueta (reihō) en todo momento.'] },
          { h: 'Cómo prepararte', ul: ['Pregunta a tu sensei cuál es tu próximo examen y qué se pide.', 'Entrena kihon a diario, sobre todo men, kote y dō.', 'Haz ji-geiko con compañeros variados.', 'No te obsesiones con aprobar: busca que tu kendō sea honesto.'] },
          { warn: 'El programa exacto y los plazos mínimos entre exámenes los marca tu federación: consúltalo con tu sensei. Los rangos de esta app (kyū y dan de estudio) no son grados oficiales; son solo una forma de seguir tu progreso en la web.' }
        ],
        terms: [['Kyū', 'grado previo'], ['Dan', 'grado superior']],
        practice: ['Pregunta a tu sensei qué se pide para tu próximo examen y apúntalo en el diario.']
      },
      {
        id: 'consejos', t: 'Consejos para mejorar más rápido', jp: '上達', sub: 'Lo que dicen los veteranos',
        intro: 'No hay atajos, pero sí hábitos que hacen que mejores más rápido que otros con el mismo tiempo de práctica.',
        blocks: [
          { h: 'Hábitos que funcionan', ul: ['Practica suburi cada día, aunque sean 10 minutos.', 'Pide correcciones y aplícalas al día siguiente.', 'Observa a los veteranos: cómo se mueven, no solo qué hacen.', 'Graba tus suburi para ver tu postura desde fuera.', 'Descansa: los músculos y los tendones crecen en reposo.'] },
          { h: 'Hábitos que frenan', ul: ['Querer ir deprisa: sin kihon sólido, no hay waza.', 'Practicar errores sin que nadie los corrija.', 'Compararte con quien lleva diez años.', 'Entrenar con dolor.'] },
          { h: 'La paciencia', p: 'Verás que algunos días sientes que avanzas y otros que retrocedes. Es normal: el kendō se aprende por oleadas, no en línea recta.' },
          { tip: 'Tu entusiasmo es tu mejor recurso. Cuídalo: lo que hoy te hace levantarte para entrenar es lo que dentro de diez años te mantendrá en el dōjō.' }
        ],
        terms: [['Suburi', 'golpes al aire'], ['Shu-ha-ri', 'obedecer, romper, crear']],
        practice: ['Graba 20 golpes de suburi y revisa tu postura de lado.']
      }
    ]
  }
);
