import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	server: {
		fs: {
		  // Allow serving files from one level up to the project root
		  // TODO: change this into the actual endpoint for github pages
		  allow: ['./static'],
		},
	},
	plugins: [
		sveltekit(),
		tailwindcss(),
	]
});
