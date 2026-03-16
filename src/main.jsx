import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

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
			.register('/service-worker.js?v=2026-03-16')
			.then((registration) => {
				console.log('Service Worker registered:', registration);
			})
			.catch((error) => {
				console.log('Service Worker registration failed:', error);
			});
	});
}
