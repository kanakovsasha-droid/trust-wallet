const CACHE = 'wallet-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.png',
  './screenshot.jpg',
  './uploads/ui.jpg',
  './uploads/IMG_9273.PNG',
  './uploads/IMG_9273-5e159e68.PNG',
  './uploads/IMG_9385.JPEG',
  './uploads/draw-02dd4e23-4bac-424f-81ac-05af64ecb670.png',
  './uploads/draw-ecdcc609-7d3c-4e47-b461-e5d7d19c960a.png',
  './uploads/pasted-1778598338422-0.png',
  './uploads/pasted-1778624104671-0.png',
  './uploads/pasted-1778624191276-0.png',
  './uploads/pasted-1778624633522-0.png',
  './uploads/pasted-1778624848336-0.png',
  './uploads/pasted-1778625112938-0.png',
  './uploads/photo_1_2026-05-13_01-07-32.jpg',
  './uploads/photo_1_2026-05-13_01-07-32-b25fd42e.jpg',
  './uploads/photo_2_2026-05-13_01-07-32.jpg',
  './scrap/current.png',
  './scrap/v2.png',
  './scrap/v3.png',
  './scrap/v5.png',
  './scrap/v5-desktop.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
