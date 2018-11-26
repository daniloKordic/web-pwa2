var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/web-pwa2/',
  '/web-pwa2/index.html',
  '/web-pwa2/css/styles.css',
  '/web-pwa2/js/main.js',
  '/web-pwa2/images/user.jpg',
  'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&lang=en',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://code.getmdl.io/1.3.0/material.cyan-light_blue.min.css',
  'https://code.getmdl.io/1.3.0/material.min.js'
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