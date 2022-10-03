<script lang="ts">
	import { onMount } from 'svelte';
	import { globals } from '$lib/globals';
	import { Scene } from '$lib/entities/scene';

	export let boundary: { x: number; y: number; w: number; h: number } = {
		x: 0,
		y: 0,
		w: globals.canvas.width,
		h: globals.canvas.height
	};

	onMount(() => {
		Scene.instance().onBeforeUpdate(() => {
			globals.context2d.fillStyle = 'black';
			globals.context2d.fillRect(0, 0, globals.canvas.width, globals.canvas.height);
		});
		Scene.start();
	});
</script>

<slot />
