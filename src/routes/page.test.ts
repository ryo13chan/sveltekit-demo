import { render, screen } from '@testing-library/svelte'
import Page from './+page.svelte'

beforeEach(() => {
	render(Page)
})

describe('Home', () => {
	it('Welcome', () => {
		const h1 = screen.getByRole('heading', { level: 1 })
		expect(h1).toBeTruthy()
		expect(h1.textContent).toBe('Welcome to the SvelteKit Demo!')
	})
})
