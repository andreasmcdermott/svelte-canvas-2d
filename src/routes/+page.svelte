<script lang="ts">
	import * as R from '$lib/rendering';
	import * as G from '$lib/game';
	import Ground from './Ground.svelte';
	import Player1 from './Player1.svelte';
	import Player2 from './Player2.svelte';
	import Background from './Background.svelte';

	const VW = 1024;
	const VH = 576;
</script>

<div class="container">
	<G.ImagePreLoader
		images={{
			bkgd1: '/imgs/scene/background/background_layer_1.png',
			bkgd2: '/imgs/scene/background/background_layer_2.png',
			tileset: '/imgs/scene/oak_woods_tileset.png',
			hero1: { idle: '/imgs/hero1/Idle.png' },
			hero2: { idle: '/imgs/hero2/Idle.png' }
		}}
	>
		<R.Canvas width={VW} height={VH}>
			<G.Scene>
				<Background />
				<Ground />

				<Player1 />
				<Player2 />
			</G.Scene>
		</R.Canvas>
	</G.ImagePreLoader>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
