<script lang="ts">
	import type { Photo } from '$lib/types/photo'

	export let photos: Photo[]
</script>

<div class="p-8 border rounded-xl flex flex-wrap gap-4">
	{#each photos as photo}
		<a href={photo.url} target="_blank">
			<img src={photo.thumbnailUrl} alt={photo.title} />
		</a>
	{/each}
</div>

<style>
	.flex-wrap {
		flex-wrap: wrap;
	}
</style>
