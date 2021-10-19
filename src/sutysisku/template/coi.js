var CACHE_NAME = 'sutysisku'
var urlsToCache = [
	'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js',
	'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff',
	'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff',
	'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Zero.woff',
	'https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.2/socket.io.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js',
	'./',
	'./bangu.js?sisku={now}',
	'./index.html',
	'../assets/scripts/aws-sdk.min.js',
	'./coi.js',
	'./index.js?detri={now}',
	'./index.css?detri={now}',
	'./worker.js?sisku={now}',
	'../assets/fonts/linux-libertine/LinLibertine_R.otf?sisku={now}',
	'../assets/fonts/linux-libertine/LinLibertine_RI.otf?sisku={now}',
	'../assets/fonts/linux-libertine/LinLibertine_RB.otf?sisku={now}',
	'../assets/fonts/linux-libertine/LinLibertine_RBI.otf?sisku={now}',
	'../assets/fonts/crisa-regular.otf?sisku={now}',
	'../assets/scripts/leader-line.min.js',
	'../pixra/144.png',
	'../pixra/32.png',
	'../pixra/cukta.svg',
	'../pixra/certu.svg',
	'../pixra/fanva.svg',
	'../pixra/cll.png',
	'../pixra/cmalu_snime.svg',
	'../pixra/snime.svg',
	'../pixra/menu.svg',
	'../pixra/x.svg',
	'../pixra/jbotcan.svg',
	'../pixra/taplamuplis.svg',
	'../pixra/plise.svg',
	'../pixra/pelxuplise.svg',
	'../pixra/crinoplise.svg',
	'../pixra/blabiplise.svg',
	'../pixra/cicnaplise.svg',
	'../pixra/selsku_lanci_eng.svg',
	'../pixra/selsku_lanci_zho.svg',
	'../pixra/lanci_jbo.svg',
	'../pixra/selsku_lanci_jpn.svg',
	'../pixra/selsku_lanci_fra.svg',
	'../pixra/selsku_lanci_rus.svg',
	'../pixra/lanci_epo.svg',
	'../pixra/selsku_lanci_spa.svg',
	'../pixra/cogwheel-5.svg',
	'../sance/lerfu/a.ogg',
	'../sance/lerfu/ai.ogg',
	'../sance/lerfu/aia.ogg',
	'../sance/lerfu/au.ogg',
	'../sance/lerfu/aua.ogg',
	'../sance/lerfu/b.ogg',
	'../sance/lerfu/c.ogg',
	'../sance/lerfu/d.ogg',
	'../sance/lerfu/e.ogg',
	'../sance/lerfu/ei.ogg',
	'../sance/lerfu/f.ogg',
	'../sance/lerfu/g.ogg',
	"../sance/lerfu/'.ogg",
	'../sance/lerfu/i.ogg',
	'../sance/lerfu/j.ogg',
	'../sance/lerfu/k.ogg',
	'../sance/lerfu/l.ogg',
	'../sance/lerfu/m.ogg',
	'../sance/lerfu/n.ogg',
	'../sance/lerfu/o.ogg',
	'../sance/lerfu/oi.ogg',
	'../sance/lerfu/p.ogg',
	'../sance/lerfu/r.ogg',
	'../sance/lerfu/s.ogg',
	'../sance/lerfu/t.ogg',
	'../sance/lerfu/u.ogg',
	'../sance/lerfu/v.ogg',
	'../sance/lerfu/x.ogg',
	'../sance/lerfu/y.ogg',
	'../sance/lerfu/z.ogg',
]

if (typeof window === 'undefined') {
	// self.addEventListener("install", () => self.skipWaiting());
	// self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

	self.addEventListener('install', function (event) {
		self.skipWaiting()
		// event.waitUntil(
		// 	caches.open(CACHE_NAME).then(function (cache) {
		// 		console.log('Opened cache')
		// 		return cache.addAll(urlsToCache)
		// 	})
		// )
	})

	self.addEventListener('activate', function (event) {
		event.waitUntil(self.clients.claim());
		// delete any caches that aren't in expectedCaches
		// which will get rid of static-v1
		event.waitUntil(
			caches
				.keys()
				.then((keys) =>
					Promise.all(
						keys.map((key) => {
							if (CACHE_NAME !== key) {
								return caches.delete(key)
							}
						})
					)
				)
				.then(() => {
					self.clients.matchAll().then(function (clients) {
						// if (clients && clients.length) {
						//   clients.map(function (client) {
						//     client.postMessage({ teminde: 'ei ningau le sorcu' })
						//   })
						// }
					})
				})
		)
	})

	self.addEventListener("message", (ev) => {
		if (ev.data && ev.data.type === "deregister") {
			self.registration
				.unregister()
				.then(() => {
					return self.clients.matchAll();
				})
				.then(clients => {
					clients.forEach((client) => client.navigate(client.url));
				});
		}
	});

	self.addEventListener("fetch", function (event) {
		if (event.request.cache === "only-if-cached" && event.request.mode !== "same-origin") {
			return;
		}

		event.respondWith(
			fetch(event.request)
				.then((response) => {
					// console.log({res: response, req: event.request});
					if (response.status === 0) {
						return response;
					}

					const extension = response.url.split('.').pop()
					const newHeaders = new Headers(response.headers);
					newHeaders.set("Cross-Origin-Embedder-Policy", "require-corp");
					newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");

					if (extension === 'wasm') newHeaders.set('content-type', 'application/wasm');

					return new Response(response.body, {
						status: response.status,
						statusText: response.statusText,
						headers: newHeaders,
					});
				})
				.catch((e) => { })
		);
	});

} else {
	(() => {
		// You can customize the behavior of this script through a global `coi` variable.
		const coi = {
			shouldRegister: () => true,
			shouldDeregister: () => false,
			doReload: () => window.location.reload(),
			quiet: false,
			...window.coi
		}

		const n = navigator;
		if (coi.shouldDeregister() && n.serviceWorker && n.serviceWorker.controller) {
			n.serviceWorker.controller.postMessage({ type: "deregister" });
		}

		// If we're already coi: do nothing. Perhaps it's due to this script doing its job, or COOP/COEP are
		// already set from the origin server. Also if the browser has no notion of crossOriginIsolated, just give up here.
		if (window.crossOriginIsolated !== false || !coi.shouldRegister()) return;

		if (!window.isSecureContext) {
			!coi.quiet && console.log("COOP/COEP Service Worker not registered, a secure context is required.");
			return;
		}

		// In some environments (e.g. Chrome incognito mode) this won't be available
		if (n.serviceWorker) {
			n.serviceWorker.register(window.document.currentScript.src).then(
				(registration) => {
					!coi.quiet & console.log("COOP/COEP Service Worker registered", registration.scope);

					registration.addEventListener("updatefound", () => {
						!coi.quiet && console.log("Reloading page to make use of updated COOP/COEP Service Worker.");
						coi.doReload()
					});

					// If the registration is active, but it's not controlling the page
					if (registration.active && !n.serviceWorker.controller) {
						!coi.quiet && console.log("Reloading page to make use of COOP/COEP Service Worker.");
						coi.doReload()
					}
				},
				(err) => {
					!coi.quiet && console.error("COOP/COEP Service Worker failed to register:", err);
				}
			);
		}
	})();
}