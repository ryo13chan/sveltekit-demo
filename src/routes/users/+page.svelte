<script lang="ts">
	import Meta from '$lib/components/Meta.svelte'
	import Title from '$lib/components/Title.svelte'
	import UserList from '$lib/components/user/UserList.svelte'

	export let data
</script>

<Meta metaData={{ title: 'Users' }} />
<Title title="Users" />
<UserList users={data.users} />
