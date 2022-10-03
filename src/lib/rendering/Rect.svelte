<script lang="ts">
	import { onMount } from 'svelte';
	import { add, remove } from '$lib/entities';
	import { Rect } from '$lib/entities/rect';

	export let fillStyle: string;
	export let x: number;
	export let y: number;
	export let w: number;
	export let h: number;

	const entity = new Rect({ x, y, w, h, fillStyle });

	onMount(() => {
		add(entity);
		return () => {
			remove(entity);
		};
	});
</script>
