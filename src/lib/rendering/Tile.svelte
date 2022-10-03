<script lang="ts">
	import { onMount } from 'svelte';
	import { add, remove } from '$lib/entities';
	import { Tile } from '$lib/entities/tile';

	export let image: string;
	export let x: number = 0;
	export let y: number = 0;
	export let w: number | 'canvas';
	export let h: number | 'canvas';

	const entity = new Tile({ x, y, w, h, image });

	onMount(() => {
		add(entity);
		return () => {
			remove(entity);
		};
	});
</script>
