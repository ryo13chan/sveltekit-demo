import { render, screen } from '@testing-library/svelte'
import AlbumList from './AlbumList.svelte'
import type { Album } from '$lib/types/album'

const albums10: Album[] = Array.from({ length: 10 }, (_, i) => ({
	userId: i + 1,
	id: i + 1,
	title: `title${i + 1}`
}))
const albums1 = albums10.slice(0, 1)

describe('AlbumList', () => {
	describe('1 album', () => {
		beforeEach(() => {
			render(AlbumList, { props: { albums: albums1 } })
		})
		it('albums', () => {
			expect(screen.getAllByRole('listitem').length).toEqual(1)
		})
	})
	describe('10 albums', () => {
		beforeEach(() => {
			render(AlbumList, { props: { albums: albums10 } })
		})
		it('albums', () => {
			expect(screen.getAllByRole('listitem').length).toEqual(10)
		})
	})
	describe('AlbumData', () => {
		beforeEach(() => {
			render(AlbumList, { props: { albums: albums1 } })
		})
		it('title', () => {
			const title = screen.getByText('title1')
			expect(title).toBeTruthy()
			expect(title.getAttribute('href')).toEqual('/albums/1')
		})
		it('link', () => {
			const link = screen.getByRole('link', { name: '' })
			expect(link).toBeTruthy()
			expect(link.getAttribute('href')).toEqual('/albums/1')
		})
	})
})
