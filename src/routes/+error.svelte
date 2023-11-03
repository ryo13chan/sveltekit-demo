<script lang="ts">
	import { page } from '$app/stores'
</script>

<div class="h-full flex flex-col justify-center items-center px-6">
	<span class="text-3xl">{$page.status}</span>
	<h1 class="text-6xl font-bold">{$page.error ? $page.error.message : ''}</h1>
</div>
