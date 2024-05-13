<script lang="ts">
	import { buttons, backgrounds } from '$lib/upgrades';
	import { button as buttonStore, background as backgroundStore, coins } from '$lib/stores';
	import { base } from '$app/paths';

	$: btn = $buttonStore;
	$: bg = $backgroundStore;

	function buyButton(index: number, price: number) {
		buttonStore.set(index);
		coins.update((n) => n - price);
	}

	function buyBackground(index: number, price: number) {
		backgroundStore.set(index);
		coins.update((n) => n - price);
	}
</script>

<section class="grid gap-4 p-4 text-xl font-bold text-white md:p-8">
	<div class="flex items-center justify-between text-xl font-bold text-white">
		<div class="flex items-center gap-3">
			<a
				class="rounded-lg bg-white px-2 py-1 text-black transition-all duration-100 hover:scale-105"
				href="{base}/">{'<'}</a
			>
			<span>Магазин</span>
		</div>
		<span>{$coins}</span>
	</div>
	<div class="mb-8 grid gap-4">
		<h2 class="w-min rounded-xl bg-white px-3 py-2 text-black">Кнопки</h2>
		{#each buttons as button}
			<hr class="opacity-50" />
			<div
				class="grid grid-cols-2 grid-rows-3 items-center gap-2 font-normal md:grid-cols-4 md:grid-rows-1"
			>
				<span class="col-span-2 font-bold md:col-span-1">{button.name}</span>
				<span>{button.price} монет</span>
				<span>{button.clicks} монет/клик</span>
				{#if btn === button.index - 1}
					{#if $coins >= button.price}
						<button
							class="w-28 rounded-xl bg-green-500 px-2 py-2 text-center text-white transition-all duration-100 hover:scale-105 active:scale-95"
							on:click={() => buyButton(button.index, button.price)}
						>
							Купить
						</button>
					{:else}
						<div class="w-28 rounded-xl bg-red-700 px-2 py-2 text-center text-white opacity-75">
							Купить
						</div>
					{/if}
				{:else if btn >= button.index}
					<div class="w-28 rounded-xl bg-gray-500 px-2 py-2 text-center text-white">Куплено</div>
				{:else}
					<div></div>
				{/if}
			</div>
		{/each}
	</div>
	<div class="grid gap-4">
		<h2 class="w-min rounded-xl bg-white px-3 py-2 text-black">Локации</h2>
		{#each backgrounds as background}
			<hr class="opacity-50" />
			<div
				class="grid grid-cols-2 grid-rows-3 items-center gap-2 font-normal md:grid-cols-4 md:grid-rows-1"
			>
				<span class="col-span-2 font-bold md:col-span-1">{background.name}</span>
				<span>{background.price} монет</span>
				<span>+{background.clicks} монет/с</span>
				{#if bg === background.index - 1}
					{#if $coins >= background.price}
						<button
							class="w-28 rounded-xl bg-green-500 px-2 py-2 text-center text-white transition-all duration-100 hover:scale-105 active:scale-95"
							on:click={() => buyBackground(background.index, background.price)}
						>
							Купить
						</button>
					{:else}
						<div class="w-28 rounded-xl bg-red-700 px-2 py-2 text-center text-white opacity-75">
							Купить
						</div>
					{/if}
				{:else if bg >= background.index}
					<div class="w-28 rounded-xl bg-gray-500 px-2 py-2 text-center text-white">Куплено</div>
				{:else}
					<div></div>
				{/if}
			</div>
		{/each}
	</div>
</section>
