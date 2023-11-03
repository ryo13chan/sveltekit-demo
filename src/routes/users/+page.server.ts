import type { PageServerLoad } from './$types'
import type { User } from '$lib/types/user'

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const users: User[] = await res.json()
	return {
		users
	}
}
