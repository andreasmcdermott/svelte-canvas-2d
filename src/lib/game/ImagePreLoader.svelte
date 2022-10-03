<script lang="ts">
	import { preloadImages } from '$lib/utils/images';

	export let images: Record<string, string>;

	const preload = preloadImages(images);
</script>

{#await preload}
	<div>Loading...</div>
{:then}
	<slot />
{/await}
