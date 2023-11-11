import { render, screen } from '@testing-library/svelte'
import SubTitle from './SubTitle.svelte'

beforeEach(() => {
	render(SubTitle, {
		props: {
			subTitle: 'Users'
		}
	})
})

describe('SubTitle', () => {
	it('SubTitle', () => {
		const subTitle = screen.getByRole('heading', { level: 2 })
		expect(subTitle.textContent).toEqual('Users')
	})
})
