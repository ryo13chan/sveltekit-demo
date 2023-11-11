import { render, screen } from '@testing-library/svelte'
import Footer from './Footer.svelte'

beforeEach(() => {
	render(Footer)
})

describe('Footer', () => {
	it('Footer', () => {
		const footer = screen.getByRole('contentinfo')
		expect(footer.tagName).toEqual('FOOTER')
		expect(footer.textContent).toEqual('© Ryo 2023')
	})
})
