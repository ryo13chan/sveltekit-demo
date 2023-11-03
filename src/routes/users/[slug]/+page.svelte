<script lang="ts">
	import Title from '$lib/components/Title.svelte'
	import SubTitle from '$lib/components/SubTitle.svelte'
	import UserInfo from '$lib/components/user/UserInfo.svelte'
	import AlbumList from '$lib/components/album/AlbumList.svelte'

	export let data
</script>

<Title title={data.user.name} />
<div class="mb-16">
	<UserInfo user={data.user} />
</div>

<SubTitle subTitle="Albums" />
<div class="mb-16">
	<AlbumList albums={data.albums} />
</div>

<SubTitle subTitle="Todos" />
<SubTitle subTitle="Posts" />
