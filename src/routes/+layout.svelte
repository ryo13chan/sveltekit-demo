<script lang="ts">
	import '../app.css'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<div class="flex flex-col h-screen">
	<Header />
	<main class="flex-grow m-6">
		<slot />
	</main>
	<Footer />
</div>
