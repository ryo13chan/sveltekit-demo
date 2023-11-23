import { render, screen } from '@testing-library/svelte'
import Page from './+page.svelte'
import type { User } from '$lib/types/user'

beforeEach(() => {
	const user: User = {
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
	const albums = Array.from({ length: 10 }, (_, i) => ({
		userId: 1,
		id: i + 1,
		title: `title${i + 1}`
	}))
	render(Page, { props: { data: { user, albums } } })
})

describe('Users', () => {
	it('Heading', () => {
		const h1 = screen.getByRole('heading', { level: 1 })
		expect(h1).toBeTruthy()
		expect(h1.textContent).toBe('Leanne Graham')
	})
	it('UserInfo', () => {
		const userInfo = screen.getByText('User Info')
		expect(userInfo).toBeTruthy()
	})
	describe('Albums', () => {
		it('Heading', () => {
			const h2 = screen.getByRole('heading', { level: 2, name: 'Albums' })
			expect(h2).toBeTruthy()
		})
		it('AlbumList', () => {
			const albumList = screen.getByRole('list')
			expect(albumList).toBeTruthy()
		})
	})
	describe('Todos', () => {
		it('Heading', () => {
			const h2 = screen.getByRole('heading', { level: 2, name: 'Todos' })
			expect(h2).toBeTruthy()
		})
	})
	describe('Posts', () => {
		it('Heading', () => {
			const h2 = screen.getByRole('heading', { level: 2, name: 'Posts' })
			expect(h2).toBeTruthy()
		})
	})
})