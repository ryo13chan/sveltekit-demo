import { expect, test } from '@playwright/test'

test.describe('Header', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/')
	})
	test('heading', async ({ page }) => {
		await expect(page.getByRole('heading', { name: 'SvelteKit Demo' })).toBeVisible()
	})
	test.describe('Link', () => {
		test.afterEach(async ({ page }) => {
			await page.goto('/')
		})
		test('Home', async ({ page }) => {
			await page.goto('/users')
			const link = page.getByRole('link', { name: 'Home' })
			expect(link).toBeVisible()
			await link.click()
			await expect(page).toHaveURL('/')
		})
		test('Users', async ({ page }) => {
			const link = page.getByRole('link', { name: 'Users' })
			expect(link).toBeVisible()
			await link.click()
			await expect(page).toHaveURL('/users')
		})
		test('Albums', async ({ page }) => {
			const link = page.getByRole('link', { name: 'Albums' })
			expect(link).toBeVisible()
			await link.click()
			await expect(page).toHaveURL('/albums')
		})
	})
	test.describe('ThemeSelect', () => {
		test('dark', async ({ page }) => {
			const themeSelect = page.getByRole('combobox')
			await themeSelect.click()
			await themeSelect.selectOption({ label: 'Dark' })
			const header = page.getByRole('banner')
			await expect(header).toHaveCSS('color', 'rgb(214, 211, 209)')
			await expect(header).toHaveCSS('background-color', 'rgb(28, 25, 23)')
		})
		test('light', async ({ page }) => {
			const themeSelect = page.getByRole('combobox')
			await themeSelect.click()
			await themeSelect.selectOption({ label: 'Light' })
			const header = page.getByRole('banner')
			await expect(header).toHaveCSS('color', 'rgb(0, 0, 0)')
			await expect(header).toHaveCSS('background-color', 'rgb(255, 255, 255)')
		})
	})
})
