const cacheName = 'kursy-piac-v1';
const filesToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/js/router.js',
    '/js/main.js',
    '/manifest.json'
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
