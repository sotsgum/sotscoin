import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { manifestGeneratorPlugin } from 'sveltekit-adapter-versioned-worker';

export default defineConfig({
	plugins: [sveltekit(), manifestGeneratorPlugin()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
