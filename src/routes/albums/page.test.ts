import { render, screen } from '@testing-library/svelte'
import Page from './+page.svelte'
import type { Album } from '$lib/types/album'

vi.mock('$app/stores', async () => {
	const { readable } = await import('svelte/store')
	const getStores = () => ({
		page: readable({ url: new URL('http://localhost'), params: {} })
	})
	const page = {
		subscribe(fn: any) {
			return getStores().page.subscribe(fn)
		}
	}
	return {
		getStores,
		page
	}
})
const albums: Album[] = Array.from({ length: 10 }, (_, i) => ({
	userId: i + 1,
	id: i + 1,
	title: `title${i + 1}`
}))

beforeEach(() => {
	render(Page, { props: { data: { albums } } })
})

describe('Albums', () => {
	it('Heading', () => {
		const h1 = screen.getByRole('heading', { level: 1, name: 'Albums' })
		expect(h1).toBeTruthy()
	})
	it('AlbumList', () => {
		const albumList = screen.getByRole('list')
		expect(albumList).toBeTruthy()
	})
})
