import type { PageServerLoad } from './$types'
import type { Album } from '$lib/types/album'
import type { Photo } from '$lib/types/photo'

export const load: PageServerLoad = async ({ fetch, params }) => {
	const [albumRes, photosRes] = await Promise.all([
		fetch(`https://jsonplaceholder.typicode.com/albums/${params.slug}`),
		fetch(`https://jsonplaceholder.typicode.com/albums/${params.slug}/photos`)
	])
	const [album, photos]: [album: Album, photos: Photo[]] = await Promise.all([
		albumRes.json(),
		photosRes.json()
	])
	return {
		album,
		photos
	}
}
