const CACHE_NAME = "lpg-go-safety-v1";
const OFFLINE_URLS = ["/kaligtasan/emergency"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(OFFLINE_URLS)));
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (!OFFLINE_URLS.includes(url.pathname)) return;
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request).then((cached) => cached || caches.match("/kaligtasan/emergency")))
  );
});
