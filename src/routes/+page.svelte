<script lang="ts">
	import { coins, button } from '$lib/stores';
	import { buttons } from '$lib/upgrades';

	$: btnIndex = $button ?? 1;
</script>

<section class="relative flex flex-1 flex-col items-center justify-center gap-6">
	<div
		class="absolute left-0 top-0 flex h-min w-full justify-between p-4 text-xl font-bold text-white md:p-8"
	>
		<a href="/settings">Настройки</a>
		<a href="/shop">Магазин</a>
	</div>
	<span class="rounded-xl bg-white p-4 text-4xl font-bold text-black">{$coins}</span>
	{#key btnIndex}
		<svelte:component this={buttons.find((b) => b.index === btnIndex)?.component} />
	{/key}
</section>
