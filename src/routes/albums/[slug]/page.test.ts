import { render, screen } from '@testing-library/svelte'
import Page from './+page.svelte'
import type { Album } from '$lib/types/album'

beforeEach(() => {
	const album: Album = {
		userId: 1,
		id: 1,
		title: 'quidem molestiae enim'
	}
	const photos = Array.from({ length: 50 }, (_, i) => ({
		albumId: 1,
		id: i + 1,
		title: `title${i + 1}`,
		url: `https://via.placeholder.com/${i + 1}`,
		thumbnailUrl: `https://via.placeholder.com/${i + 1}`
	}))
	render(Page, { props: { data: { album, photos } } })
})

describe('Album', () => {
	it('Heading', () => {
		const h1 = screen.getByRole('heading', { level: 1, name: 'quidem molestiae enim' })
		expect(h1).toBeTruthy()
	})
	it('AlbumInfo', () => {
		const albumInfo = screen.getByText('Album Info')
		expect(albumInfo).toBeTruthy()
	})
	describe('Photos', () => {
		it('Heading', () => {
			const h2 = screen.getByRole('heading', { level: 2, name: 'Photos' })
			expect(h2).toBeTruthy()
		})
		it('PhotoList', () => {
			const photos = screen.getAllByRole('img')
			expect(photos.length).equal(50)
		})
	})
})
