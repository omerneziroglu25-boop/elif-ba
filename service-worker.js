const CACHE_NAME = 'elifba-kuran-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './audio/10_raa.mp3',
  './audio/11_zaa.mp3',
  './audio/12_seen.mp3',
  './audio/13_sheen.mp3',
  './audio/14_saad.mp3',
  './audio/15_daad.mp3',
  './audio/16_taah.mp3',
  './audio/17_zhaa.mp3',
  './audio/18_ain.mp3',
  './audio/19_ghain.mp3',
  './audio/1_alif.mp3',
  './audio/20_faa.mp3',
  './audio/21_qaaf.mp3',
  './audio/22_kaaf.mp3',
  './audio/23_laam.mp3',
  './audio/24_meem.mp3',
  './audio/25_noon.mp3',
  './audio/26_haah.mp3',
  './audio/27_waw.mp3',
  './audio/28_hamzah.mp3',
  './audio/29_laaa.mp3',
  './audio/2_baa.mp3',
  './audio/30_yaa.mp3',
  './audio/3_taa.mp3',
  './audio/4_thaa.mp3',
  './audio/5_jeem.mp3',
  './audio/6_haa.mp3',
  './audio/7_khaa.mp3',
  './audio/8_daal.mp3',
  './audio/9_zaal.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => k !== CACHE_NAME && caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});