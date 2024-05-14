<script lang="ts">
	import { base } from '$app/paths';
	import { coins, button } from '$lib/stores';
	import { buttons } from '$lib/upgrades';

	$: btnIndex = $button ?? 1;
</script>

<section
	class="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-6"
>
	<div
		class="absolute left-0 top-0 flex h-min w-full justify-between p-4 text-xl font-bold text-white md:p-8"
	>
		<a
			class="transition-transform duration-100 hover:scale-105 hover:underline"
			href="{base}/settings">Настройки</a
		>
		<a class="transition-transform duration-100 hover:scale-105 hover:underline" href="{base}/shop"
			>Магазин</a
		>
	</div>
	<span class="rounded-xl bg-white p-4 text-4xl font-bold text-black">{$coins}</span>
	{#key btnIndex}
		<svelte:component this={buttons.find((b) => b.index === btnIndex)?.component} />
	{/key}
</section>
