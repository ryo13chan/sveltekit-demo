<script lang="ts">
	import { onMount } from 'svelte'

	let theme = 'light'

	onMount(() => (theme = localStorage.theme || 'light'))

	const changeTheme = () => {
		localStorage.theme = theme
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else if (theme === 'light') {
			document.documentElement.classList.remove('dark')
		}
	}
</script>

<select bind:value={theme} on:change={changeTheme} class="dark:text-stone-300 dark:bg-stone-900">
	<option value="light">Light</option>
	<option value="dark">Dark</option>
</select>
