<script lang="ts">
	import * as R from '$lib/rendering';
	import * as G from '$lib/game';
	import { Player } from './player';

	const player1 = new Player();
	const player2 = new Player();
</script>

<div class="container">
	<G.ImagePreLoader
		images={{
			bkgd1: '/imgs/scene/background/background_layer_1.png',
			bkgd2: '/imgs/scene/background/background_layer_2.png',
			tileset: '/imgs/scene/oak_woods_tileset.png'
		}}
	>
		<R.Canvas width={1024} height={576}>
			<G.Scene>
				<R.Sprite image="bkgd1" w="canvas" h="canvas" />
				<R.Sprite image="bkgd2" w="canvas" h="canvas" />
				<R.Tile image="tileset" w="canvas" h="canvas" />

				<R.Rect fillStyle="red" x={100} y={100} w={50} h={150} />
				<R.Rect fillStyle="blue" x={400} y={200} w={50} h={150} />
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
