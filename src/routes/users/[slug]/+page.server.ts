import type { PageServerLoad } from './$types'
import type { User } from '$lib/types/user'
import type { Album } from '$lib/types/album'

export const load: PageServerLoad = async ({ fetch, params }) => {
	const [userRes, albumsRes] = await Promise.all([
		fetch(`https://jsonplaceholder.typicode.com/users/${params.slug}`),
		fetch(`https://jsonplaceholder.typicode.com/users/${params.slug}/albums`)
	])
	const [user, albums]: [user: User, albums: Album[]] = await Promise.all([
		userRes.json(),
		albumsRes.json()
	])
	return {
		user,
		albums
	}
}
