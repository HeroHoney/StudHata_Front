/* eslint-disable */

const { precacheAndRoute } = require('workbox-precaching');

if (process.env.NODE_ENV === 'production') {
  precacheAndRoute(self.__WB_MANIFEST);
}

const cacheName = 'studhata-cache';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/static/js/main.chunk.js',
  '/static/js/vendors~main.chunk.js',
  '/static/js/bundle.js',
  '/static/css/main.chunk.css',
  '/favicon.ico',
  '/icon.png',
];

// Установка Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// Активация Service Worker
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
/* eslint-disable */