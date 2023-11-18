import { render, screen } from '@testing-library/svelte'
import PhotoList from './PhotoList.svelte'
import type { Photo } from '$lib/types/photo'

const photos50: Photo[] = Array.from({ length: 50 }, (_, i) => ({
	albumId: i + 1,
	id: i + 1,
	title: `title${i + 1}`,
	url: `https://photos/${i + 1}`,
	thumbnailUrl: `https://photos/${i + 1}`
}))
const photos1 = photos50.slice(0, 1)

describe('PhotoList', () => {
	describe('1 photo', () => {
		beforeEach(() => {
			render(PhotoList, { props: { photos: photos1 } })
		})
		it('photos', () => {
			expect(screen.getAllByRole('link').length).toEqual(1)
		})
	})
	describe('10 photos', () => {
		beforeEach(() => {
			render(PhotoList, { props: { photos: photos50 } })
		})
		it('users', () => {
			expect(screen.getAllByRole('link').length).toEqual(50)
		})
	})
	describe('PhotoData', () => {
		beforeEach(() => {
			render(PhotoList, { props: { photos: photos1 } })
		})
		it('link', () => {
			expect(screen.getByRole('link').getAttribute('href')).equal('https://photos/1')
		})
		it('src', () => {
			expect(screen.getByRole('img').getAttribute('src')).equal('https://photos/1')
		})
		it('alt', () => {
			expect(screen.getByRole('img').getAttribute('alt')).equal('title1')
		})
	})
})
