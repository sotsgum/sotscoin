import { persisted } from 'svelte-persisted-store';

export const coins = persisted('coins', 0);
export const button = persisted('button', 1);
export const background = persisted('background', 1);
