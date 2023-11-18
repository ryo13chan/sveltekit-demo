<script lang="ts">
	import ChevronRight from 'svelte-material-icons/ChevronRight.svelte'
	import Email from 'svelte-material-icons/Email.svelte'
	import Phone from 'svelte-material-icons/Phone.svelte'
	import type { User } from '$lib/types/user'

	export let users: User[]
</script>

<ul class="flex flex-col gap-4 p-8 border rounded-xl">
	{#each users as user}
		<li class="pb-4 last:pb-0 border-b last:border-b-0 flex justify-between items-center">
			<div>
				<a href={`/users/${user.id}`} class="text-lg font-bold">{user.name}</a>
				<div class="flex gap-3 mt-2">
					<div class="flex items-center gap-1">
						<Email />
						<span class="text-sm text-gray-500">{user.email}</span>
					</div>
					<div class="flex items-center gap-1">
						<Phone />
						<span class="text-sm text-gray-500">{user.phone}</span>
					</div>
				</div>
			</div>
			<a href={`/users/${user.id}`} class="text-lg">
				<ChevronRight />
			</a>
		</li>
	{/each}
</ul>
