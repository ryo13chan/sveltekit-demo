<script lang="ts">
	import '../app.css'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
	<script>
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else if (localStorage.theme === 'light') {
			document.documentElement.classList.remove('dark')
		}
	</script>
</svelte:head>
<div class="flex flex-col h-screen">
	<Header />
	<main class="flex-grow p-6">
		<slot />
	</main>
	<Footer />
</div>
