<script lang="ts">
	import Meta from '$lib/components/Meta.svelte'
	import Title from '$lib/components/Title.svelte'
	import SubTitle from '$lib/components/SubTitle.svelte'
	import AlbumInfo from '$lib/components/album/AlbumInfo.svelte'
	import PhotoList from '$lib/components/photo/PhotoList.svelte'

	export let data
</script>

<Meta metaData={{ title: data.album.title }} />
<Title title={data.album.title} />
<div class="mb-16">
	<AlbumInfo album={data.album} />
</div>

<SubTitle subTitle="Photos" />
<PhotoList photos={data.photos} />
