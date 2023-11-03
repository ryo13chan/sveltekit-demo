<script lang="ts">
	import type { Album } from '$lib/types/album'

	export let album: Album
</script>

<dl class="flex flex-col gap-4 p-8 border rounded-xl">
	<div class="text-lg font-bold pb-4 border-b">Album Info</div>
	<div class="pb-4 border-b grid grid-cols-3">
		<dt class="leading-6">UserID</dt>
		<dd class="text-gray-500 text-sm leading-6 col-span-2">{album.userId}</dd>
	</div>
	<div class="pb-4 border-b grid grid-cols-3">
		<dt class="leading-6">ID</dt>
		<dd class="text-gray-500 text-sm leading-6 col-span-2">{album.id}</dd>
	</div>
	<div class="grid grid-cols-3">
		<dt class="leading-6">Title</dt>
		<dd class="text-gray-500 text-sm leading-6 col-span-2">{album.title}</dd>
	</div>
</dl>
