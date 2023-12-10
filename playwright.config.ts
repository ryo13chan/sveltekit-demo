import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	// webServer: {
	// 	command: 'npm run build && npm run preview',
	// 	port: 4173
	// },
	use: {
		baseURL: 'http://localhost:5173'
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
}

export default config
