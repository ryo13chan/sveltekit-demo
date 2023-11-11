import { render, screen } from '@testing-library/svelte'
import ThemeSelect from './ThemeSelect.svelte'

beforeEach(() => {
	render(ThemeSelect)
})

describe('ThemeSelect', () => {
	it('Selectbox', () => {
		const select = screen.getByRole('combobox')
		expect(select).toBeTruthy()
	})
	it('Light', () => {
		const light = screen.getByRole('option', { name: 'Light' })
		expect(light.getAttribute('value')).toEqual('light')
	})
	it('Dark', () => {
		const dark = screen.getByRole('option', { name: 'Dark' })
		expect(dark.getAttribute('value')).toEqual('dark')
	})
})
