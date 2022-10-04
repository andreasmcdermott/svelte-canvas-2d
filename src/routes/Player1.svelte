<script lang="ts">
	import Entity from '$lib/rendering/Entity.svelte';
	import { Player } from './player';

	const ANIMATIONS = { idle: { frames: 8, speed: 4 } };

	const player = new Player({ x: 80, image: 'hero1', animations: ANIMATIONS, ox: -250, oy: -215 });
</script>

<Entity instance={player} />
