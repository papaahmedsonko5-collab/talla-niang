/* Service worker minimal : rend l'admin installable comme une appli.
   Il ne garde RIEN en cache : toutes les requêtes passent par le réseau,
   donc l'admin affiche toujours les données à jour. */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){ e.respondWith(fetch(e.request)); });
