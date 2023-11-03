<script lang="ts">
	import Title from '$lib/components/Title.svelte'
	import UserList from '$lib/components/user/UserList.svelte'

	export let data
</script>

<Title title="Users" />
<UserList users={data.users} />
