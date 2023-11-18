import { render, screen } from '@testing-library/svelte'
import UserList from './UserList.svelte'
import type { User } from '$lib/types/user'

const users10: User[] = Array.from({ length: 10 }, (_, i) => ({
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
const users1 = users10.slice(0, 1)

describe('UserList', () => {
	describe('1 user', () => {
		beforeEach(() => {
			render(UserList, { props: { users: users1 } })
		})
		it('users', () => {
			expect(screen.getAllByRole('listitem').length).toEqual(1)
		})
	})
	describe('10 users', () => {
		beforeEach(() => {
			render(UserList, { props: { users: users10 } })
		})
		it('users', () => {
			expect(screen.getAllByRole('listitem').length).toEqual(10)
		})
	})
	describe('UserData', () => {
		beforeEach(() => {
			render(UserList, { props: { users: users1 } })
		})
		it('name', () => {
			const name = screen.getByText('name1')
			expect(name).toBeTruthy()
			expect(name.getAttribute('href')).toEqual('/users/1')
		})
		it('email', () => {
			expect(screen.getByText('email1@test.com')).toBeTruthy()
		})
		it('phone', () => {
			expect(screen.getByText('090-0000-0001')).toBeTruthy()
		})
		it('link', () => {
			const link = screen.getByRole('link', { name: '' })
			expect(link).toBeTruthy()
			expect(link.getAttribute('href')).toEqual('/users/1')
		})
	})
})
