<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { coins, button, background } from '$lib/stores';

	function reset() {
		if (window.confirm('Вы действительно хотите сбросить прогресс?')) {
			coins.set(0);
			button.set(1);
			background.set(1);
			goto(`${base}/`);
		}
	}
</script>

<svelte:head>
	<title>Настройки - Sotscoin</title>
</svelte:head>

<section class="relative mx-auto grid w-full max-w-7xl gap-4 p-4 md:p-8">
	<div class="flex items-center gap-3 text-xl font-bold text-white">
		<a
			class="rounded-lg bg-white px-2 py-1 text-black transition-all duration-100 hover:scale-105"
			href="{base}/">{'<'}</a
		>
		<span>Настройки</span>
	</div>
	<button class="rounded-lg bg-red-600 p-2 text-xl font-bold text-white" on:click={reset}
		>Сбросить прогресс</button
	>
</section>
