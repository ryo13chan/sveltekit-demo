<script lang="ts">
	import { page } from '$app/stores'
	import ChevronRight from 'svelte-material-icons/ChevronRight.svelte'
	import ChevronLeft from 'svelte-material-icons/ChevronLeft.svelte'

	$: currentPage = Number($page.url.searchParams.get('page') || 1)
	$: href = (index: number) => {
		const pathname = $page.url.pathname
		switch (index) {
			case 0: // prev
				return currentPage === 1 ? '#' : `${pathname}?page=${currentPage - 1}`
			case 11: // next
				return currentPage === 10 ? '#' : `${pathname}?page=${currentPage + 1}`
			case currentPage:
				return '#'
			default:
				return `${pathname}?page=${index}`
		}
	}
</script>

<div class="flex justify-center">
	{#each Array(12) as _, i}
		<a href={href(i)}>
			<div
				class="text-sm border-y border-l w-10 h-10 flex justify-center items-center"
				class:text-white={currentPage === i}
				class:bg-indigo-600={currentPage === i}
				class:hover:bg-gray-50={currentPage !== i}
				class:last:border-r={i === 11}
				class:rounded-l-md={i === 0}
				class:last:rounded-r-md={i === 11}
			>
				{#if i === 0}
					<ChevronLeft class="text-lg text-gray-400" />
				{:else if i === 11}
					<ChevronRight class="text-lg text-gray-400" />
				{:else}
					{i}
				{/if}
			</div>
		</a>
	{/each}
</div>
