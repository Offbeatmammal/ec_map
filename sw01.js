// Choose a cache name
const cacheName = 'cache-v1';
// List the files to precache
const precacheResources = ['/','./index.html','./styles.css','./config.js', "./manifest.json",
'./js/jquery-3.7.0.min.js','./js/jquery-ui.min.js',
'./icons/ambulance.png','./icons/buggy.png','./icons/crash.png','./icons/favicon.ico','./icons/fire.png','./icons/flatbed.png','./icons/jeep.png','./icons/service.png','./icons/trash.png',
'./tracks/TrackMapPhillipIsland.jpg','./tracks/TrackMapSandown.jpg','./tracks/TrackMapSandown2.jpg'];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  //console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
  //console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  //console.log('Fetch intercepted for:', event.request);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});