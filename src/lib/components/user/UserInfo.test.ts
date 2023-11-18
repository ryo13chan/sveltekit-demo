import { render, screen } from '@testing-library/svelte'
import UserInfo from './UserInfo.svelte'
import type { User } from '$lib/types/user'

const user: User = {
	id: 1,
	name: 'Leanne Graham',
	username: 'Bret',
	email: 'Sincere@april.biz',
	address: {
		street: 'Kulas Light',
		suite: 'Apt. 556',
		city: 'Gwenborough',
		zipcode: '92998-3874',
		geo: {
			lat: '-37.3159',
			lng: '81.1496'
		}
	},
	phone: '1-770-736-8031 x56442',
	website: 'hildegard.org',
	company: {
		name: 'Romaguera-Crona',
		catchPhrase: 'Multi-layered client-server neural-net',
		bs: 'harness real-time e-markets'
	}
}

describe('UserInfo', () => {
	beforeEach(() => {
		render(UserInfo, { props: { user } })
	})
	it('ID', () => {
		expect(screen.getByText('ID')).toBeTruthy()
		expect(screen.getByText('1')).toBeTruthy()
	})
	it('Name', () => {
		expect(screen.getAllByText('Name')[0]).toBeTruthy()
		expect(screen.getByText('Leanne Graham')).toBeTruthy()
	})
	it('UserName', () => {
		expect(screen.getByText('UserName')).toBeTruthy()
		expect(screen.getByText('Bret')).toBeTruthy()
	})
	it('Email', () => {
		expect(screen.getByText('Email')).toBeTruthy()
		expect(screen.getByText('Sincere@april.biz')).toBeTruthy()
	})
	describe('Address', () => {
		it('Street', () => {
			expect(screen.getByText('Street')).toBeTruthy()
			expect(screen.getByText('Kulas Light')).toBeTruthy()
		})
		it('Suite', () => {
			expect(screen.getByText('Suite')).toBeTruthy()
			expect(screen.getByText('Apt. 556')).toBeTruthy()
		})
		it('City', () => {
			expect(screen.getByText('City')).toBeTruthy()
			expect(screen.getByText('Gwenborough')).toBeTruthy()
		})
		it('Zipcode', () => {
			expect(screen.getByText('Zipcode')).toBeTruthy()
			expect(screen.getByText('92998-3874')).toBeTruthy()
		})
		describe('Geo', () => {
			it('Lat', () => {
				expect(screen.getByText('Lat')).toBeTruthy()
				expect(screen.getByText('-37.3159')).toBeTruthy()
			})
			it('Lng', () => {
				expect(screen.getByText('Lng')).toBeTruthy()
				expect(screen.getByText('81.1496')).toBeTruthy()
			})
		})
	})
	it('Phone', () => {
		expect(screen.getByText('Phone')).toBeTruthy()
		expect(screen.getByText('1-770-736-8031 x56442')).toBeTruthy()
	})
	it('Website', () => {
		expect(screen.getByText('Website')).toBeTruthy()
		expect(screen.getByText('hildegard.org')).toBeTruthy()
	})
	describe('Company', () => {
		it('Name', () => {
			expect(screen.getAllByText('Name')[1]).toBeTruthy()
			expect(screen.getByText('Romaguera-Crona')).toBeTruthy()
		})
		it('CatchPhrase', () => {
			expect(screen.getByText('CatchPhrase')).toBeTruthy()
			expect(screen.getByText('Multi-layered client-server neural-net')).toBeTruthy()
		})
		it('BS', () => {
			expect(screen.getByText('BS')).toBeTruthy()
			expect(screen.getByText('harness real-time e-markets')).toBeTruthy()
		})
	})
})
