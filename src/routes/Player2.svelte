<script lang="ts">
	import Entity from '$lib/rendering/Entity.svelte';
	import { globals } from '$lib/globals';
	import { Player } from './player';

	const ANIMATIONS = { idle: { frames: 4, speed: 8 } };

	const player = new Player({
		x: globals.canvas.width - 80 - 50,
		image: 'hero2',
		animations: ANIMATIONS,
		ox: -280,
		oy: -235
	});
</script>

<Entity instance={player} />
