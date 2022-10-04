<script lang="ts">
	import { add, remove } from '$lib/entities';
	import type { Entity } from '$lib/entities/entity';
	import { onMount } from 'svelte';

	export let instance: Entity;

	onMount(() => {
		add(instance);
		return () => {
			remove(instance);
		};
	});
</script>
