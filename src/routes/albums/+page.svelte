<script lang="ts">
	import { page } from '$app/stores'
	import Meta from '$lib/components/Meta.svelte'
	import Title from '$lib/components/Title.svelte'
	import AlbumList from '$lib/components/album/AlbumList.svelte'
	import Paginator from '$lib/components/Paginator.svelte'

	export let data
</script>

<Meta metaData={{ title: 'Albums' }} />
<Title title="Albums" />
<div class="mb-8">
	<AlbumList albums={data.albums} />
</div>
<Paginator page={Number($page.url.searchParams.get('page'))} pathname={$page.url.pathname} />
