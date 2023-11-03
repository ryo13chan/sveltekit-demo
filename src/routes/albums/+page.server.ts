import type { PageServerLoad } from './$types'
import type { Album } from '$lib/types/album'

export const load: PageServerLoad = async ({ fetch, url }) => {
	const page = Number(url.searchParams.get('page') ?? 1)
	const limit = 10

	const res = await fetch(
		`https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=${limit}`
	)
	const albums: Album[] = await res.json()
	return {
		albums
	}
}
