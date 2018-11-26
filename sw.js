var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/web-pwa2/',
  '/web-pwa2/index.html',
  '/web-pwa2/css/styles.css',
  '/web-pwa2/js/main.js',
  '/web-pwa2/images/user.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache){
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});