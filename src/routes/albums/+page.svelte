<script lang="ts">
	import Title from '$lib/components/Title.svelte'
	import AlbumList from '$lib/components/album/AlbumList.svelte'
	import Paginator from '$lib/components/Paginator.svelte'

	export let data
</script>

<Title title="Albums" />
<div class="mb-8">
	<AlbumList albums={data.albums} />
</div>
<Paginator />
