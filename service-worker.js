const CACHE_NAME = 'dialysis-app-v2';
const urlsToCache = [
  'https://sanaeih1.github.io/Dialysis03/',
  'https://sanaeih1.github.io/Dialysis03/index.html',
  'https://sanaeih1.github.io/Dialysis03/manifest.json',
  'https://sanaeih1.github.io/Dialysis03/foods.json',
  'https://sanaeih1.github.io/Dialysis03/contact.html',
  'https://sanaeih1.github.io/Dialysis03/mums_logo.png',
  'https://sanaeih1.github.io/Dialysis03/assets/icon-512x512.png',
  'https://sanaeih1.github.io/Dialysis03/assets/icon-192x192.png',
  'https://sanaeih1.github.io/Dialysis03/assets/home.png',
  'https://sanaeih1.github.io/Dialysis03/assets/history.png',
  'https://sanaeih1.github.io/Dialysis03/assets/video.png',
  'https://sanaeih1.github.io/Dialysis03/assets/book.png',
  'https://sanaeih1.github.io/Dialysis03/assets/settings.png',
  'https://sanaeih1.github.io/Dialysis03/assets/info.png',
  'https://sanaeih1.github.io/Dialysis03/assets/back.png',
  'https://sanaeih1.github.io/Dialysis03/assets/trash-alt.png',
  'https://sanaeih1.github.io/Dialysis03/assets/food.png',
  'https://sanaeih1.github.io/Dialysis03/assets/search.png',
  'https://sanaeih1.github.io/Dialysis03/assets/list.png',
  'https://sanaeih1.github.io/Dialysis03/assets/weight.png',
  'https://sanaeih1.github.io/Dialysis03/assets/clock.png',
  'https://sanaeih1.github.io/Dialysis03/assets/plus.png',
  'https://sanaeih1.github.io/Dialysis03/assets/water-glass.png',
  'https://sanaeih1.github.io/Dialysis03/assets/water-drop.png',
  'https://sanaeih1.github.io/Dialysis03/assets/urine.png',
  'https://sanaeih1.github.io/Dialysis03/assets/flask.png',
  'https://sanaeih1.github.io/Dialysis03/assets/drumstick.png',
  'https://sanaeih1.github.io/Dialysis03/assets/fire.png',
  'https://sanaeih1.github.io/Dialysis03/assets/font.png',
  'https://sanaeih1.github.io/Dialysis03/assets/save.png',
  'https://sanaeih1.github.io/Dialysis03/assets/trash.png',
  'https://cdn.jsdelivr.net/npm/vazir-font@28.0.0/dist/font-face.css',
  'https://cdn.jsdelivr.net/npm/shabnam-font@5.0.0/dist/font-face.css',
  'https://cdn.jsdelivr.net/npm/persian-date@1.1.0/dist/persian-date.min.js',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});