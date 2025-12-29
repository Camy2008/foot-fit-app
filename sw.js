self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("foot-fit-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json"
      ]);
    })
  );
});
