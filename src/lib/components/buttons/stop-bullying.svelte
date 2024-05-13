<script lang="ts">
	import { base } from '$app/paths';
	import { click } from '$lib/utils';
</script>

<button class="group relative max-w-80 p-4 transition-all md:p-8" on:click={click}>
	<img class="w-full" src="{base}/buttons/stop-bullying-bottom.png" alt="Stop Bullying Bottom" />
	<img
		class="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[.7] duration-100 ease-out group-hover:scale-75 group-active:scale-[.65]"
		src="{base}/buttons/stop-bullying-top.png"
		alt="Stop Bullying Top"
	/>
</button>
