import { load } from './+page.server'
import type { User } from '$lib/types/user'
import type { Album } from '$lib/types/album'

const mockUser = {
	id: 1,
	name: 'Leanne Graham',
	username: 'Bret',
	email: 'Sincere@april.biz',
	address: {
		street: 'Kulas Light',
		suite: 'Apt. 556',
		city: 'Gwenborough',
		zipcode: '92998-3874',
		geo: {
			lat: '-37.3159',
			lng: '81.1496'
		}
	},
	phone: '1-770-736-8031 x56442',
	website: 'hildegard.org',
	company: {
		name: 'Romaguera-Crona',
		catchPhrase: 'Multi-layered client-server neural-net',
		bs: 'harness real-time e-markets'
	}
}
const mockAlbums = Array.from({ length: 10 }, (_, i) => ({
	userId: 1,
	id: i + 1,
	title: `title${i + 1}`
}))

const mockFetch = async (url: string) => {
	return {
		json: async () => {
			switch (url) {
				case 'https://jsonplaceholder.typicode.com/users/1':
					return mockUser
				case 'https://jsonplaceholder.typicode.com/users/1/albums':
					return mockAlbums
				default:
					break
			}
		}
	}
}

describe('Server', () => {
	describe('load', () => {
		it('truthy', async () => {
			const data = (await load({ fetch: mockFetch, params: { slug: 1 } } as any)) as {
				user: User
				albums: Album[]
			}
			expect(data.user).toBeTruthy()
			expect(data.albums).toBeTruthy()
			expect(data.albums.length).toEqual(10)
		})
		it('falsy', async () => {
			const data = (await load({ fetch: mockFetch, params: { slug: 'falsy' } } as any)) as {
				user: User
				albums: Album[]
			}
			expect(data.user).toBeFalsy()
			expect(data.albums).toBeFalsy()
		})
	})
})
