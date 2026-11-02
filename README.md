# Ken no Michi · 剣の道

Web para aprender **kendō** de básico a avanzado: lecciones ilustradas, glosario con kanji, quizzes (con imágenes), tarjetas de vocabulario, rutinas para entrenar en casa y diario de correcciones.

- Sin rachas, sin energía, sin límites: el XP y los niveles de estudio (kyū → dan) solo suman.
- Todo el progreso se guarda en el navegador (`localStorage`); se puede exportar/importar desde la pestaña *Progreso*.
- Todas las ilustraciones son SVG generados por código (`js/art.js`): no hay imágenes externas.
- Funciona sin conexión una vez cargada (service worker).

## Estructura

| Archivo | Qué contiene |
|---|---|
| `index.html` | Página única, carga los scripts |
| `css/style.css` | Estilos (claro/oscuro automático) |
| `js/art.js` | Motor de figuras y todas las ilustraciones |
| `js/data-lessons-1.js`, `js/data-lessons-2.js` | Lecciones de la base (equipo, etiqueta, reglas…) |
| `js/data-tech-1.js` … `js/data-tech-4.js` | Lecciones de técnica con plantilla (`KD.T`): guardias, pies, suburi, golpes, waza, ōji-waza, combate, práctica en pareja, cuerpo y kata |
| `js/data-tech-2.js` | Se carga el último de los tech: define el orden final de los módulos de kendō |
| `js/data-iai-1.js` … `js/data-iai-3.js` | Iaidō: lecciones (primeros pasos, equipo, fundamentos, seitei-gata, Musō Jikiden Eishin-ryū), módulos, partes de la katana, quiz, glosario, plan y rutinas |
| `js/data-glossary.js` | Glosario (término, kanji, significado, categoría) |
| `js/data-extra.js` | Quiz, partes interactivas, rutinas, consejos, niveles |
| `js/app.js` | Router, estado, vistas, quiz, tarjetas, entrenar |
| `sw.js`, `manifest.webmanifest` | Uso sin conexión e instalación como app |

## Probar en local

No necesita build. Sirve la carpeta con cualquier servidor estático, por ejemplo:

```bash
npx serve .
```

## Añadir contenido

- **Nueva lección:** añade un objeto a `lessons` de un módulo en `js/data-lessons-*.js` (`id`, `t`, `jp`, `intro`, `blocks`, `terms`, `practice`, y `art` con claves de `KArt.get`).
- **Nueva pregunta:** añade una línea `Q(...)` en `js/data-extra.js`. El id se calcula con un hash del enunciado, así que no cambies enunciados ya publicados si no quieres perder su progreso.
- **Nuevo término:** añade una fila a `KD.glossary`.

## Aviso

Es una ayuda de estudio y no sustituye a un sensei. Los niveles de la web no son grados oficiales.

## Instalar en el móvil (Android)

Abre la web en Chrome → menú ⋮ → **Instalar app** (o *Añadir a pantalla de inicio*). Los iconos están en `icons/` (192, 512, maskable y Apple) y se generan a partir del logo de `js/art.js`. El diseño usa botones 3D, camino de lecciones y navegación inferior (Camino · Repaso · Colección · Dōjō).

## Técnica: cómo añadir una lección

En `js/data-tech-*.js`, `KD.add({ id, t, jp, sub, art, intro, why, steps, keys, errors, drills, check, terms })` genera automáticamente las secciones (cómo se hace, puntos clave, errores y cómo corregirlos, ejercicios, autoevaluación). Las ilustraciones salen de `KArt.get`: `seq:<clave>` (secuencias en `SEQ` de `js/art.js`, con `touch` para que el golpe alcance el blanco), `vs:<pose>`, `solo:<pose>`, `footwork:<tipo>`, `kirikaeshi`, etc. Después añade el id a su módulo al final de `data-tech-2.js`.

## Funciones de la app

- **Repaso espaciado:** cada pregunta guarda su "caja" (0–5) y la fecha de la última respuesta; el modo *Toca repasar* trae las que vencen según 0, 1, 3, 7, 14 y 30 días.
- **Puntos débiles:** en Progreso, las lecciones con más fallos y el acierto por categoría.
- **Pronunciación:** botón 🔊 en glosario y tarjetas, con la voz japonesa del dispositivo (Web Speech API).
- **Plan de 12 semanas**, rutinas de técnica, cuerpo y combate, y diario de correcciones.

## Dos disciplinas: kendō e iaidō

Un selector arriba cambia toda la app (Camino, Repaso, Colección, Plan y rutinas). Cada módulo lleva `disc: 'iaido'` (si no, es kendō); las preguntas heredan la disciplina de su lección; el glosario usa `d: 'iaido'` y una lista de términos comunes (`SHARED` en `js/app.js`). El XP, el diario y la copia de seguridad son compartidos. El iaidō usa un color de acento azul.

Las descripciones de los kata de seitei-gata y de las series de Eishin-ryū son resúmenes de fuentes públicas: cada lección avisa de lo que debe confirmarse con el sensei.

## Técnica en movimiento

`KArt.get('anim:<clave>')` inserta un reproductor en cámara lenta (0,25×, 0,5×, 1×) con línea de tiempo, saltos entre fases y **líneas guía** (trayectoria del kensen, recorrido de la mano izquierda, eje vertical del cuerpo y blanco). Las animaciones están en `js/data-anim.js` como fotogramas clave (`pose`, `dx`, `touch`, `cap`, `note`, `g`); el motor interpola entre poses en `js/art.js`. Hay animaciones de men, yokomen, kote, dō, tsuki, kote-men, men con pase, jōge-buri, okuri-ashi, fumikomi, kirikaeshi completo y los kata 1, 2 y 3.
