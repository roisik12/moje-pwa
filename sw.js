const cacheName = 'kursy-piac-v1';
const filesToCache = [
    '/',
    '/moje-pwa/index.html',
    '/moje-pwa/style.css',
    '/moje-pwa/js/router.js',
    '/moje-pwa/js/main.js',
    '/moje-pwa/manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => cache.addAll(filesToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});
