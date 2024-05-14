<script lang="ts">
	import { base } from '$app/paths';
	import { background, coins } from '$lib/stores';
	import { backgrounds } from '$lib/upgrades';
	import '../app.pcss';
	import { onMount } from 'svelte';

	$: bgImage = backgrounds.find((b) => b.index === $background)?.image ?? 'nsgk.jpg';
	$: bgClicks = backgrounds.find((b) => b.index === $background)?.clicks ?? 0;

	let timer: number | undefined;
	$: bgClicks && updateTimer();
	function updateTimer() {
		clearInterval(timer);
		timer = setInterval(() => {
			coins.update((n) => n + bgClicks);
		}, 1000);
		console.log('Updated timer');
	}

	onMount(() => {});
</script>

<div class="flex h-screen w-full flex-col">
	<main class="relative z-10 flex w-full flex-1 flex-col">
		<div class="absolute left-0 top-0 h-full w-full overflow-hidden">
			<div
				class="absolute left-0 top-0 -z-20 h-full w-full scale-110 bg-cover bg-center blur"
				style="background-image: url('{base}/backgrounds/{bgImage}');"
			/>
			<div class="absolute -z-10 h-full w-full bg-black/30" />
		</div>
		<slot></slot>
	</main>
</div>
