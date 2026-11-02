/* Service worker: red primero, caché como respaldo (para usar sin conexión en el dōjō) */
const CACHE = 'ken-no-michi-v7';
const SHELL = ['./', 'index.html', 'css/style.css', 'js/art.js', 'js/data-glossary.js', 'js/data-lessons-1.js', 'js/data-lessons-2.js', 'js/data-tech-1.js', 'js/data-tech-3.js', 'js/data-tech-4.js', 'js/data-exam.js', 'js/data-tech-2.js', 'js/data-iai-1.js', 'js/data-iai-2.js', 'js/data-iai-3.js', 'js/data-extra.js', 'js/app.js', 'favicon.svg', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});
