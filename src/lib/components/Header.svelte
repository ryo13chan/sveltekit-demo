<script lang="ts">
	import ThemeSelect from './ThemeSelect.svelte'
</script>

<header class="sticky top-0 dark:text-stone-300 bg-white dark:bg-stone-900">
	<nav class="flex justify-between items-center p-6 border-b dark:border-b-0">
		<div class="text-2xl font-bold">
			<a href="/">SvelteKit Demo</a>
		</div>
		<div class="flex gap-4">
			<a href="/">Home</a>
			<a href="/users">Users</a>
			<a href="/albums">Albums</a>
			<ThemeSelect />
		</div>
	</nav>
</header>
