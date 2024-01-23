import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig((config) => ({
	plugins: [sveltekit()],
	resolve: {
		alias: config.mode === 'production' ? {} : {
			'@qderoubaix/headless': path.join(__dirname, '../headless/src/lib'),
		}
	},
	optimizeDeps: {
		include: ['@amadeus-it-group/tansu']
	}
}));
