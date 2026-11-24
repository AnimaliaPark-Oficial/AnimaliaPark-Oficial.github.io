// Service worker do Mapa Animália Park: guarda o site no celular para funcionar sem internet.
// Quando mudar qualquer arquivo do site, aumente o número da VERSAO (v1 -> v2) para o celular atualizar.
const VERSAO = 'v2';
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
  './icon-512.png',
  // ícones do mapa (guardados na instalação para aparecerem sem internet)
  './icons/1.png',
  './icons/10.png',
  './icons/11.png',
  './icons/12.png',
  './icons/13.png',
  './icons/14.png',
  './icons/15.png',
  './icons/16.png',
  './icons/17.png',
  './icons/18.png',
  './icons/19.png',
  './icons/2.png',
  './icons/20.png',
  './icons/21.png',
  './icons/22.png',
  './icons/23.png',
  './icons/24.png',
  './icons/25.png',
  './icons/26.png',
  './icons/27.png',
  './icons/28.png',
  './icons/29.png',
  './icons/3.png',
  './icons/30.png',
  './icons/31.png',
  './icons/32.png',
  './icons/33.png',
  './icons/34.png',
  './icons/35.png',
  './icons/36.png',
  './icons/37.png',
  './icons/38.png',
  './icons/39.png',
  './icons/4.png',
  './icons/40.png',
  './icons/41.png',
  './icons/42.png',
  './icons/43.png',
  './icons/44.png',
  './icons/45.png',
  './icons/46.png',
  './icons/47.png',
  './icons/48.png',
  './icons/49.png',
  './icons/5.png',
  './icons/50.png',
  './icons/6.png',
  './icons/7.png',
  './icons/8.png',
  './icons/9.png',
  './icons/ambulatorio.png',
  './icons/aviario.png',
  './icons/aviario2.png',
  './icons/banheiro.png',
  './icons/cabramontes.png',
  './icons/cachorrovinagre.png',
  './icons/cafecaverna.png',
  './icons/caferecepcao.png',
  './icons/cafevila.png',
  './icons/canguru.png',
  './icons/carrinho.png',
  './icons/carrosel.png',
  './icons/cesta.png',
  './icons/deck.png',
  './icons/divindoor.png',
  './icons/divoutdoor.png',
  './icons/dromedario.png',
  './icons/ema.png',
  './icons/estacao.png',
  './icons/estacionamento.png',
  './icons/fazenda.png',
  './icons/foodchicken.png',
  './icons/foodespeto.png',
  './icons/foodpastel.png',
  './icons/foodyakisoba.png',
  './icons/foto.png',
  './icons/girafa.png',
  './icons/gorila.png',
  './icons/hambestacao.png',
  './icons/hambvila.png',
  './icons/hipopotamo.png',
  './icons/hotdog.png',
  './icons/jacare.png',
  './icons/leao.png',
  './icons/lego.png',
  './icons/lobo.png',
  './icons/macacoaranha.png',
  './icons/mandril.png',
  './icons/mobile.png',
  './icons/mobileiglu.png',
  './icons/mundodoce.png',
  './icons/onca.png',
  './icons/ponto.png',
  './icons/pontocanguru.png',
  './icons/pontocantinho.png',
  './icons/pontofazendinha.png',
  './icons/pontoleao.png',
  './icons/pontolobomarinho.png',
  './icons/pontoshake.png',
  './icons/pontosucuarana.png',
  './icons/pontotamandua.png',
  './icons/quiosque.png',
  './icons/recepcao.png',
  './icons/restbaoba.png',
  './icons/restsavana.png',
  './icons/rino.png',
  './icons/selvasabores.png',
  './icons/souvenir.png',
  './icons/splash.png',
  './icons/sucuarana.png',
  './icons/tamandua.png',
  './icons/tratoria.png',
  './icons/urso.png',
  './icons/viking.png',
  './icons/zebra.png'
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
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  // O Painel de Atendimento (outro site na mesma conta) não é mexido por este service worker
  if (url.pathname.startsWith('/PainelAtendimento')) return;

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
