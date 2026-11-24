// Service worker do Mapa Animália Park: guarda o site no celular para funcionar sem internet.
// Quando mudar qualquer arquivo do site, aumente o número da VERSAO (v1 -> v2) para o celular atualizar.
const VERSAO = 'v1';
const CACHE = 'animalia-mapa-' + VERSAO;

const ARQUIVOS_BASE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './rota.js',
  './logo-animalia.png',
  './mapa.zoo.webp',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ARQUIVOS_BASE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((nomes) => Promise.all(nomes.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

  const ehCodigo = req.mode === 'navigate' || /\.(html|js|css|json)$/.test(new URL(req.url).pathname);

  if (ehCodigo) {
    // Código: tenta a internet (pega a versão nova); sem internet, usa a guardada.
    e.respondWith(
      fetch(req)
        .then((res) => { const copia = res.clone(); caches.open(CACHE).then((c) => c.put(req, copia)); return res; })
        .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
    );
  } else {
    // Imagens (mapa, ícones): usa a guardada primeiro, que é mais rápido.
    e.respondWith(
      caches.match(req).then((r) => r || fetch(req).then((res) => {
        const copia = res.clone(); caches.open(CACHE).then((c) => c.put(req, copia)); return res;
      }))
    );
  }
});
