import { adapter, standardGetLast } from 'sveltekit-adapter-versioned-worker';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isTestBuild = process.env.IS_TEST_BUILD === 'true';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true,
			lastInfo: standardGetLast(
				'https://sotsgum.github.io/sotscoin/versionedWorker.json',
				isTestBuild
			)
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;
