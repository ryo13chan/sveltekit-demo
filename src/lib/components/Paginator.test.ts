import { render, screen } from '@testing-library/svelte'
import Paginator from './Paginator.svelte'

describe('Paginator', () => {
	const pathname = '/test'
	it('paginator', () => {
		render(Paginator, { props: { page: 1, pathname } })
		expect(screen.getAllByRole('link').length).toEqual(1 + 10 + 1)
	})
	describe('Page 1', () => {
		beforeEach(() => {
			render(Paginator, { props: { page: 1, pathname } })
		})
		it('prev', () => {
			const prev = screen.getAllByRole('link')[0]
			expect(prev.getAttribute('href')).toEqual('#')
		})
		it('page1', () => {
			const page1 = screen.getAllByRole('link')[1]
			expect(page1.getAttribute('href')).toEqual('#')
		})
		it('page2', () => {
			const page2 = screen.getAllByRole('link')[2]
			expect(page2.getAttribute('href')).toEqual('/test?page=2')
		})
		it('next', () => {
			const next = screen.getAllByRole('link')[11]
			expect(next.getAttribute('href')).toEqual('/test?page=2')
		})
	})
	describe('Page 2', () => {
		beforeEach(() => {
			render(Paginator, { props: { page: 2, pathname } })
		})
		it('prev', () => {
			const prev = screen.getAllByRole('link')[0]
			expect(prev.getAttribute('href')).toEqual('/test?page=1')
		})
		it('page1', () => {
			const page1 = screen.getAllByRole('link')[1]
			expect(page1.getAttribute('href')).toEqual('/test?page=1')
		})
		it('page2', () => {
			const page2 = screen.getAllByRole('link')[2]
			expect(page2.getAttribute('href')).toEqual('#')
		})
		it('page3', () => {
			const page3 = screen.getAllByRole('link')[3]
			expect(page3.getAttribute('href')).toEqual('/test?page=3')
		})
		it('next', () => {
			const next = screen.getAllByRole('link')[11]
			expect(next.getAttribute('href')).toEqual('/test?page=3')
		})
	})
	describe('Page 10', () => {
		beforeEach(() => {
			render(Paginator, { props: { page: 10, pathname } })
		})
		it('prev', () => {
			const prev = screen.getAllByRole('link')[0]
			expect(prev.getAttribute('href')).toEqual('/test?page=9')
		})
		it('page9', () => {
			const page9 = screen.getAllByRole('link')[9]
			expect(page9.getAttribute('href')).toEqual('/test?page=9')
		})
		it('page10', () => {
			const page10 = screen.getAllByRole('link')[10]
			expect(page10.getAttribute('href')).toEqual('#')
		})
		it('next', () => {
			const next = screen.getAllByRole('link')[11]
			expect(next.getAttribute('href')).toEqual('#')
		})
	})
	describe('Page undefined', () => {
		beforeEach(() => {
			render(Paginator, { props: { pathname } })
		})
		it('prev', () => {
			const prev = screen.getAllByRole('link')[0]
			expect(prev.getAttribute('href')).toEqual('#')
		})
		it('page1', () => {
			const page1 = screen.getAllByRole('link')[1]
			expect(page1.getAttribute('href')).toEqual('#')
		})
		it('page2', () => {
			const page2 = screen.getAllByRole('link')[2]
			expect(page2.getAttribute('href')).toEqual('/test?page=2')
		})
		it('next', () => {
			const next = screen.getAllByRole('link')[11]
			expect(next.getAttribute('href')).toEqual('/test?page=2')
		})
	})
})
