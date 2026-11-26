// Garde l'app disponible hors ligne : réseau d'abord, copie locale sinon.
const C='repas-v15';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'])));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.hostname.endsWith('supabase.co'))return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok&&(u.origin===location.origin||u.hostname==='cdn.jsdelivr.net'||u.hostname.endsWith('gstatic.com')||u.hostname.endsWith('googleapis.com'))){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r}).catch(()=>caches.match(e.request)))});
