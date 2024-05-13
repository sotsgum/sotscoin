import { get } from 'svelte/store';
import { coins, button } from './stores';
import { buttons } from './upgrades';

export function click() {
	const btn: (typeof buttons)[number] = buttons.find((b) => b.index === get(button) ?? 1)!;
	coins.update((n) => n + btn.clicks);
}
