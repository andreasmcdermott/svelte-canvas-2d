<script lang="ts">
	import { onMount } from 'svelte';
	import { add, remove } from '$lib/entities';
	import { Tile } from '$lib/entities/tile';

	export let image: string;
	export let x: number;
	export let y: number;
	export let w: number;
	export let h: number;
	export let ts: number;
	export let tx: number;
	export let ty: number;

	const entity = new Tile({ x, y, w, h, image, ts, tx, ty });

	onMount(() => {
		add(entity);
		return () => {
			remove(entity);
		};
	});
</script>
