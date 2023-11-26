import { load } from './+page.server'
import type { Album } from '$lib/types/album'
import type { Photo } from '$lib/types/photo'

const mockAlbum = {
	userId: 1,
	id: 1,
	title: 'quidem molestiae enim'
}
const mockPhotos = Array.from({ length: 50 }, (_, i) => ({
	albumId: 1,
	id: i + 1,
	title: `title${i + 1}`,
	url: `https://via.placeholder.com/${i + 1}`,
	thumbnailUrl: `https://via.placeholder.com/${i + 1}`
}))

const mockFetch = async (url: string) => {
	return {
		json: async () => {
			switch (url) {
				case 'https://jsonplaceholder.typicode.com/albums/1':
					return mockAlbum
				case 'https://jsonplaceholder.typicode.com/albums/1/photos':
					return mockPhotos
				default:
					break
			}
		}
	}
}

describe('Server', () => {
	describe('load', () => {
		it('truthy', async () => {
			const data = (await load({ fetch: mockFetch, params: { slug: 1 } } as any)) as {
				album: Album
				photos: Photo[]
			}
			expect(data.album).toBeTruthy()
			expect(data.photos).toBeTruthy()
			expect(data.photos.length).toEqual(50)
		})
		it('falsy', async () => {
			const data = (await load({ fetch: mockFetch, params: { slug: 'falsy' } } as any)) as {
				album: Album
				photos: Photo[]
			}
			expect(data.album).toBeFalsy()
			expect(data.photos).toBeFalsy()
		})
	})
})
