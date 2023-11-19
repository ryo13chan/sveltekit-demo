import { render, screen } from '@testing-library/svelte'
import Page from './+page.svelte'
import type { User } from '$lib/types/user'

beforeEach(() => {
	const users: User[] = Array.from({ length: 10 }, (_, i) => ({
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
	render(Page, { props: { data: { users } } })
})

describe('Users', () => {
	it('Heading', () => {
		const h1 = screen.getByRole('heading', { level: 1 })
		expect(h1).toBeTruthy()
		expect(h1.textContent).toBe('Users')
	})
	it('UserList', () => {
		const userList = screen.getByRole('list')
		expect(userList).toBeTruthy()
	})
})
