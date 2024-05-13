<script lang="ts">
	import { base } from '$app/paths';
	import { background, coins } from '$lib/stores';
	import { backgrounds } from '$lib/upgrades';
	import '../app.pcss';
	import { onMount } from 'svelte';

	$: bgImage = backgrounds.find((b) => b.index === $background)?.image ?? 'nsgk.jpg';
	$: bgClicks = backgrounds.find((b) => b.index === $background)?.clicks ?? 0;

	let timer: number;
	$: bgClicks && updateTimer();
	function updateTimer() {
		if (timer) {
			clearInterval(timer);
		}
		timer = setInterval(() => {
			coins.update((n) => n + bgClicks);
		}, 1000);
	}

	onMount(() => {});
</script>

<div class="relative flex h-screen w-full flex-col">
	<div class="absolute left-0 top-0 h-full w-full overflow-hidden">
		<div
			class="absolute left-0 top-0 -z-20 h-screen w-full scale-110 bg-cover bg-center blur"
			style="background-image: url('{base}/backgrounds/{bgImage}');"
		/>
		<div class="absolute -z-10 h-full w-full bg-black/30" />
	</div>
	<main class="z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col">
		<slot></slot>
	</main>
</div>
