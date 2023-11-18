import { render, screen } from '@testing-library/svelte'
import AlbumInfo from './AlbumInfo.svelte'
import type { Album } from '$lib/types/album'

const album: Album = {
	userId: 11,
	id: 1,
	title: 'quidem molestiae enim'
}

describe('AlbumInfo', () => {
	beforeEach(() => {
		render(AlbumInfo, { props: { album } })
	})
	it('UserID', () => {
		expect(screen.getByText('UserID')).toBeTruthy()
		expect(screen.getByText('11')).toBeTruthy()
	})
	it('ID', () => {
		expect(screen.getByText('ID')).toBeTruthy()
		expect(screen.getByText('1')).toBeTruthy()
	})
	it('Title', () => {
		expect(screen.getByText('Title')).toBeTruthy()
		expect(screen.getByText('quidem molestiae enim')).toBeTruthy()
	})
})
