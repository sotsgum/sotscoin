import Feather from './components/buttons/feather.svelte';
import Ringbell from './components/buttons/ringbell.svelte';
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
		name: 'Перо НСГК',
		index: 2,
		price: 75,
		clicks: 2,
		component: Feather
	},
	{
		name: 'Школьный звонок',
		index: 3,
		price: 200,
		clicks: 3,
		component: Ringbell
	},
	{
		name: 'Кнопка "Стоп-буллинг"',
		index: 4,
		price: 500,
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
		name: 'Холл',
		index: 2,
		price: 100,
		clicks: 2,
		image: 'hall.jpg'
	},
	{
		name: 'Нижневартовск',
		index: 3,
		price: 450,
		clicks: 5,
		image: 'nizhnevartovsk.jpg'
	},
	{
		name: 'Студвесна',
		index: 4,
		price: 800,
		clicks: 10,
		image: 'studvesna.jpg'
	}
];
