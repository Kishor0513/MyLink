// Service Worker for Kishor Portfolio
const CACHE_PREFIX = 'kishor-portfolio-';
const cacheVersion = (() => {
	try {
		const url = new URL(self.location.href);
		return url.searchParams.get('v') || 'dev';
	} catch {
		return 'dev';
	}
})();
const CACHE_NAME = `${CACHE_PREFIX}${cacheVersion}`;
const urlsToCache = [
	'/',
	'/index.html',
	'/manifest.json',
	'/favicon.svg',
	'/favicon.png',
];

// Install service worker
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
	);
	self.skipWaiting();
});

// Fetch assets
self.addEventListener('fetch', (event) => {
	if (event.request.mode === 'navigate') {
		event.respondWith(
			fetch(event.request)
				.then((response) => {
					if (!response || !response.ok) {
						return response;
					}
					const responseClone = response.clone();
					caches
						.open(CACHE_NAME)
						.then((cache) => cache.put('/index.html', responseClone));
					return response;
				})
				.catch(() => caches.match('/index.html')),
		);
		return;
	}

	event.respondWith(
		caches.match(event.request).then((response) => {
			// Cache hit - return response
			if (response) {
				return response;
			}
			return fetch(event.request);
		}),
	);
});

// Activate and clean up old caches
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (cacheName.startsWith(CACHE_PREFIX) && cacheName !== CACHE_NAME) {
						return caches.delete(cacheName);
					}
				}),
			);
		}),
	);
	self.clients.claim();
});
