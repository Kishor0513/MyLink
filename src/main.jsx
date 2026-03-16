import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const SW_MIGRATION_KEY = 'sw-migration-2026-03-16';

async function runServiceWorkerMigration() {
	if (!('serviceWorker' in navigator) || !('caches' in window)) {
		return;
	}

	if (localStorage.getItem(SW_MIGRATION_KEY) === 'done') {
		return;
	}

	try {
		const registrations = await navigator.serviceWorker.getRegistrations();
		await Promise.all(
			registrations.map((registration) => registration.unregister()),
		);

		const cacheNames = await caches.keys();
		await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));

		localStorage.setItem(SW_MIGRATION_KEY, 'done');
	} catch (error) {
		console.log('Service worker migration failed:', error);
	}
}

runServiceWorkerMigration();

console.log('App mounting...');
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js?v=2026-03-16-2', { updateViaCache: 'none' })
			.then((registration) => {
				console.log('Service Worker registered:', registration);
			})
			.catch((error) => {
				console.log('Service Worker registration failed:', error);
			});
	});
}
