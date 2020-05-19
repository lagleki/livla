var CACHE_NAME = "sutysisku";
var urlsToCache = [
  "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js",
  "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff",
  "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff",
  "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Zero.woff",
  "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js",
  "./",
  "./index.html",
  "./index.js?detri={now}",
  "./index.css?detri={now}",
  "./bangu.js?sisku={now}",
  "../data/parsed-{lang}.js?sisku={now}",
  "../sisku.js?sisku={now}",
  "./worker.js?sisku={now}",
  "../assets/fonts/tanbo-regular.otf?sisku={now}",
  "../pixra/cll.png",
  "../pixra/cmalu_snime.svg",
  "../pixra/snime.svg",
  "../pixra/menu.svg",
  "../pixra/x.svg",
  "../pixra/16.png",
  "../pixra/32.png",
  "../pixra/jbotcan.svg",
  "../pixra/taplasance.svg",
  "../pixra/taplamuplis.svg",
  "../pixra/snime-1.svg",
  "../pixra/selsku_lanci_eng.svg",
  "../pixra/selsku_lanci_zho.svg",
  "../pixra/lanci_jbo.svg",
  "../pixra/selsku_lanci_jpn.svg",
  "../pixra/selsku_lanci_fra.svg",
  "../pixra/selsku_lanci_rus.svg",
  "../pixra/lanci_epo.svg",
  "../pixra/selsku_lanci_spa.svg",
  "../pixra/cogwheel-5.svg"
];

self.addEventListener("install", function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", function(event) {
  // delete any caches that aren't in expectedCaches
  // which will get rid of static-v1
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys.map(key => {
            if (CACHE_NAME !== key) {
              return caches.delete(key);
            }
          })
        )
      )
      .then(() => {
        console.log("V2 now ready to handle fetches!");
      })
  );
});
