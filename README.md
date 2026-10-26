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
| `js/data-lessons-1.js`, `js/data-lessons-2.js` | Lecciones por módulos |
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
