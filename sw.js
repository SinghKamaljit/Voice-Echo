/* Voice Echo — Service Worker */
const CACHE = 'voice-echo-v6';
const ASSETS = [
'./',
'./index.html',
'./manifest.json',
'./icon-192.png',
'./icon-512.png'
];

self.addEventListener('install', e => {
e.waitUntil(
caches.open(CACHE)
.then(cache => cache.addAll(ASSETS))
.then(() => self.skipWaiting()) // inside waitUntil — activates immediately
);
});

self.addEventListener('activate', e => {
e.waitUntil(
caches.keys()