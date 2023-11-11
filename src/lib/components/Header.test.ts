import { render, screen } from '@testing-library/svelte'
import Header from './Header.svelte'

beforeEach(() => {
	render(Header)
})

describe('Header', () => {
	it('Header', () => {
		const header = screen.getByRole('banner')
		expect(header.tagName).toEqual('HEADER')
	})
	it('Title', () => {
		const title = screen.getByRole('link', { name: 'SvelteKit Demo' })
		expect(title).toBeTruthy()
		expect(title.getAttribute('href')).toEqual('/')
	})
	describe('Menu', () => {
		it('Menu', () => {
			const menu = screen.getAllByRole('link')
			expect(menu.length).toBe(1 + 3) // title + 3links
		})
		it('Home', () => {
			const home = screen.getAllByRole('link')[1]
			expect(home.textContent).toEqual('Home')
			expect(home.getAttribute('href')).toEqual('/')
		})
		it('Users', () => {
			const users = screen.getAllByRole('link')[2]
			expect(users.textContent).toEqual('Users')
			expect(users.getAttribute('href')).toEqual('/users')
		})
		it('Albums', () => {
			const albums = screen.getAllByRole('link')[3]
			expect(albums.textContent).toEqual('Albums')
			expect(albums.getAttribute('href')).toEqual('/albums')
		})
	})
})
