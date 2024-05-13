import Sotscoin from './components/buttons/sotscoin.svelte';
import StopBullying from './components/buttons/stop-bullying.svelte';

export const buttons = [
	{
		name: 'Сотскоин',
		index: 1,
		price: 0,
		clicks: 1,
		component: Sotscoin
	},
	{
		name: 'Стоп-буллинг',
		index: 2,
		price: 20,
		clicks: 5,
		component: StopBullying
	}
];

export const backgrounds = [
	{
		name: 'Колледж',
		index: 1,
		price: 0,
		clicks: 0,
		image: 'nsgk.jpg'
	},
	{
		name: 'Студвесна',
		index: 2,
		price: 75,
		clicks: 1,
		image: 'studvesna.jpg'
	}
];
