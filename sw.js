// Minimal service worker — its only job is to satisfy the browser's PWA
// installability checks (a registered service worker with a fetch handler).
// It doesn't cache anything special; it just passes requests straight through.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
