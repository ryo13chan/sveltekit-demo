import { load } from './+page.server'
import type { User } from '$lib/types/user'

const mockUsers = Array.from({ length: 10 }, (_, i) => ({
	id: i + 1,
	name: `name${i + 1}`,
	username: 'Bret',
	email: `email${i + 1}@test.com`,
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
	phone: `090-0000-000${i + 1}`,
	website: 'hildegard.org',
	company: {
		name: 'Romaguera-Crona',
		catchPhrase: 'Multi-layered client-server neural-net',
		bs: 'harness real-time e-markets'
	}
}))

const mockFetch = async () => {
	return {
		json: async () => mockUsers
	}
}

describe('Server', () => {
	it('load', async () => {
		const data = (await load({ fetch: mockFetch } as any)) as { users: User[] }
		expect(data.users).toBeTruthy()
		expect(data.users.length).toEqual(10)
	})
})
