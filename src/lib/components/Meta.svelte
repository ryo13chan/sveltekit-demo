<script lang="ts">
	export let metaData: { title: string; description?: string }
</script>

<svelte:head>
	<title>{`${metaData.title} | SvelteKit Demo`}</title>
	<meta name="description" content={metaData.description || metaData.title} />
</svelte:head>
