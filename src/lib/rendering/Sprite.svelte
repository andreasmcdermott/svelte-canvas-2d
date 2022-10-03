<script lang="ts">
	import { onMount } from 'svelte';
	import { add, remove } from '$lib/entities';
	import { Sprite } from '$lib/entities/sprite';

	export let image: string;
	export let x: number = 0;
	export let y: number = 0;
	export let w: number | 'canvas';
	export let h: number | 'canvas';

	const entity = new Sprite({ x, y, w, h, image });

	onMount(() => {
		add(entity);
		return () => {
			remove(entity);
		};
	});
</script>
