import { render, screen } from '@testing-library/svelte'
import Title from './Title.svelte'

beforeEach(() => {
	render(Title, {
		props: {
			title: 'SvelteKit Demo'
		}
	})
})

describe('Title', () => {
	it('Title', () => {
		const title = screen.getByRole('heading', { level: 1 })
		expect(title.textContent).toEqual('SvelteKit Demo')
	})
})
