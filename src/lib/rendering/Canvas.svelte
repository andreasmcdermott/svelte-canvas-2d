<script lang="ts">
	import { onMount } from 'svelte';
	import { globals } from '$lib/globals';

	export let width: number;
	export let height: number;

	let node: HTMLCanvasElement;

	onMount(() => {
		globals.canvas = node;
		globals.context2d = node.getContext('2d')!;
	});
</script>

<canvas bind:this={node} {width} {height} />

{#if node}
	<slot />
{/if}
