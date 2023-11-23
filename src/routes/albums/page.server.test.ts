import { load } from './+page.server'
import type { Album } from '$lib/types/album'

const mockAlbums = (page: number, limit: number) => {
	if (page < 1 || page > 10) {
		return []
	}

	return Array.from({ length: limit }, (_, i) => ({
		userId: page,
		id: i + 1 + (page - 1) * limit,
		title: `title${i + 1 + (page - 1) * limit}`
	}))
}

const mockFetch = async (url: string) => {
	const searchParams = new URL(url).searchParams
	const page = Number(searchParams.get('_page'))
	const limit = Number(searchParams.get('_limit'))
	return {
		json: async () => mockAlbums(page, limit)
	}
}

describe('Server', () => {
	it('Page 1', async () => {
		const mockUrl = {
			searchParams: {
				get: (params: string) => {
					switch (params) {
						case 'page':
							return '1'
					}
				}
			}
		}

		const data = (await load({ fetch: mockFetch, url: mockUrl } as any)) as { albums: Album[] }
		expect(data.albums).toBeTruthy()
		expect(data.albums.length).toEqual(10)
		expect(data.albums[0].id).toEqual(1)
		expect(data.albums[0].userId).toEqual(1)
		expect(data.albums[0].title).toEqual('title1')
	})
	it('Page 2', async () => {
		const mockUrl = {
			searchParams: {
				get: (params: string) => {
					switch (params) {
						case 'page':
							return '2'
					}
				}
			}
		}

		const data = (await load({ fetch: mockFetch, url: mockUrl } as any)) as { albums: Album[] }
		expect(data.albums).toBeTruthy()
		expect(data.albums.length).toEqual(10)
		expect(data.albums[0].id).toEqual(11)
		expect(data.albums[0].userId).toEqual(2)
		expect(data.albums[0].title).toEqual('title11')
	})
	it('Page 10', async () => {
		const mockUrl = {
			searchParams: {
				get: (params: string) => {
					switch (params) {
						case 'page':
							return '10'
					}
				}
			}
		}

		const data = (await load({ fetch: mockFetch, url: mockUrl } as any)) as { albums: Album[] }
		expect(data.albums).toBeTruthy()
		expect(data.albums.length).toEqual(10)
		expect(data.albums[9].id).toEqual(100)
		expect(data.albums[9].userId).toEqual(10)
		expect(data.albums[9].title).toEqual('title100')
	})
	it('Page 0', async () => {
		const mockUrl = {
			searchParams: {
				get: (params: string) => {
					switch (params) {
						case 'page':
							return '0'
					}
				}
			}
		}

		const data = (await load({ fetch: mockFetch, url: mockUrl } as any)) as { albums: Album[] }
		expect(data.albums).toBeTruthy()
		expect(data.albums.length).toEqual(0)
	})
	it('Page 999', async () => {
		const mockUrl = {
			searchParams: {
				get: (params: string) => {
					switch (params) {
						case 'page':
							return '999'
					}
				}
			}
		}

		const data = (await load({ fetch: mockFetch, url: mockUrl } as any)) as { albums: Album[] }
		expect(data.albums).toBeTruthy()
		expect(data.albums.length).toEqual(0)
	})
})
