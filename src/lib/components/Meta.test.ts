import { render } from '@testing-library/svelte'
import Meta from './Meta.svelte'

describe('Meta', () => {
	it('title, description', () => {
		render(Meta, {
			props: {
				metaData: {
					title: 'SvelteKit Demo',
					description: 'Demo App'
				}
			}
		})
		const title = document.title
		const description = document.head
			.querySelector('meta[name="description"]')
			?.getAttribute('content')
		expect(title).toEqual('SvelteKit Demo | SvelteKit Demo')
		expect(description).toEqual('Demo App')
	})
	it('title', () => {
		render(Meta, {
			props: {
				metaData: { title: 'SvelteKit Demo' }
			}
		})
		const title = document.title
		const description = document.head
			.querySelector('meta[name="description"]')
			?.getAttribute('content')
		expect(title).toEqual('SvelteKit Demo | SvelteKit Demo')
		expect(description).toEqual('SvelteKit Demo')
	})
})
