<script lang="ts">
	import { base } from '$app/paths';
	import { click } from '$lib/utils';
</script>

<button
	class="max-w-80 p-4 transition-all duration-100 ease-out hover:rotate-3 hover:scale-105 active:-rotate-3 active:scale-95 md:p-8"
	on:click={click}
>
	<img class="w-full" src="{base}/buttons/ringbell.png" alt="Sotscoin" />
</button>
