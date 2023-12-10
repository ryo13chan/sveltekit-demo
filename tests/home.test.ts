import { expect, test } from '@playwright/test'

test.describe('Home', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/')
	})
	test('heading', async ({ page }) => {
		await expect(
			page.getByRole('heading', { name: 'Welcome to the SvelteKit Demo!' })
		).toBeVisible()
	})
})
