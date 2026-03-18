import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
const buildId =
	process.env.VITE_BUILD_ID ??
	process.env.GITHUB_SHA ??
	process.env.VERCEL_GIT_COMMIT_SHA ??
	new Date().toISOString();

export default defineConfig({
	plugins: [react()],
	define: {
		__BUILD_ID__: JSON.stringify(buildId),
	},
	root: 'src',
	publicDir: '../public',
	base: '/',
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		assetsDir: 'assets',
		sourcemap: false,
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
					'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
					'animation-vendor': ['framer-motion'],
				},
			},
		},
		chunkSizeWarningLimit: 1000,
	},
});
