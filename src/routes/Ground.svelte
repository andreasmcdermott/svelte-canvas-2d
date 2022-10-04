<script lang="ts">
	import { globals } from '$lib/globals';
	import Rect from '$lib/rendering/Rect.svelte';
	import Tile from '$lib/rendering/Tile.svelte';

	const vw = globals.canvas.width;
	const vh = globals.canvas.height;

	const TILE_SIZE = 504 / 21; // Widht of image divided by number of tiles
	const SIZE = TILE_SIZE * 3;

	const upper = Array.from({ length: Math.ceil(vw / SIZE) }).map((_, i) => i * SIZE);
</script>

{#each upper as x, i}
	<Tile
		image="tileset"
		{x}
		y={vh - SIZE}
		w={SIZE}
		h={SIZE}
		ts={TILE_SIZE}
		tx={6 + (i % 2)}
		ty={0}
	/>
{/each}
<Rect x={0} y={vh - SIZE} w={vw} h={SIZE} fillStyle="rgba(20, 0, 85, 0.36)" />
