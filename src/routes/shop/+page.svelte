<script lang="ts">
	import { buttons, backgrounds } from '$lib/upgrades';
	import { button as buttonStore, background as backgroundStore, coins } from '$lib/stores';

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
			<a class="rounded-lg bg-white px-2 py-1 text-black" href="/">{'<'}</a>
			<span>Магазин</span>
		</div>
		<span>{$coins}</span>
	</div>
	<hr />
	<div class="grid gap-4">
		<h2 class="w-min rounded-xl bg-white px-3 py-2 text-black">Кнопки</h2>
		{#each buttons as button}
			<div class="flex flex-wrap items-center justify-between gap-4 font-normal">
				<span class="font-bold">{button.name}</span>
				<span>{button.price} монет</span>
				<span>{button.clicks} монет/клик</span>
				{#if btn < button.index}
					{#if $coins >= button.price}
						<button
							class="w-28 rounded-xl bg-green-500 px-2 py-2 text-center text-white"
							on:click={() => buyButton(button.index, button.price)}
						>
							Купить
						</button>
					{:else}
						<div class="w-28 rounded-xl bg-red-700 px-2 py-2 text-center text-white opacity-75">
							Купить
						</div>
					{/if}
				{:else}
					<div class="w-28 rounded-xl bg-gray-500 px-2 py-2 text-center text-white">Куплено</div>
				{/if}
			</div>
		{/each}
	</div>
	<hr />
	<div class="grid gap-4">
		<h2 class="w-min rounded-xl bg-white px-3 py-2 text-black">Локации</h2>
		{#each backgrounds as background}
			<div class="flex flex-wrap items-center justify-between gap-4 font-normal">
				<span class="font-bold">{background.name}</span>
				<span>{background.price} монет</span>
				<span>+{background.clicks} монет/с</span>
				{#if bg < background.index}
					{#if $coins >= background.price}
						<button
							class="w-28 rounded-xl bg-green-500 px-2 py-2 text-center text-white"
							on:click={() => buyBackground(background.index, background.price)}
						>
							Купить
						</button>
					{:else}
						<div class="w-28 rounded-xl bg-red-700 px-2 py-2 text-center text-white opacity-75">
							Купить
						</div>
					{/if}
				{:else}
					<div class="w-28 rounded-xl bg-gray-500 px-2 py-2 text-center text-white">Куплено</div>
				{/if}
			</div>
		{/each}
	</div>
</section>
