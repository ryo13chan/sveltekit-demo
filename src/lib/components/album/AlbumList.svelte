<script lang="ts">
	import ChevronRight from 'svelte-material-icons/ChevronRight.svelte'
	import type { Album } from '$lib/types/album'

	export let albums: Album[]
</script>

<ul class="flex flex-col gap-4 p-8 border rounded-xl">
	{#each albums as album}
		<li class="pb-4 last:pb-0 border-b last:border-b-0 flex justify-between items-center">
			<a href={`/albums/${album.id}`} class="text-lg font-bold">{album.title}</a>
			<a href={`/albums/${album.id}`} class="text-lg">
				<ChevronRight />
			</a>
		</li>
	{/each}
</ul>
