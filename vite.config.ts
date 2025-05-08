import { defineConfig, loadEnv } from 'vite'

import react from '@vitejs/plugin-react'

import { checker } from 'vite-plugin-checker'
import mkcert from 'vite-plugin-mkcert'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'

import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const relativeAlias: Record<string, string> = {
	Components: './src/Components',
	Contexts: './src/Contexts',
	Utils: './src/Utils',
	Hooks: './src/Hooks',
	Constants: './src/Constants',
	Api: './src/Api',
	Pages: './src/Pages',
}

export const resolveAlias = Object.entries(relativeAlias).reduce(
	(prev: Record<string, string>, [key, path]) => {
		prev[key] = resolve(__dirname, path)

		return prev
	},
	{},
)

const base = '/p5-entrepreneurship-2024-2025-website/'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const envPrefix: string[] = ['APP_']

	const { PORT = '3000', OPEN_BROWSER = 'true' } = {
		...loadEnv(mode, process.cwd(), ''),
	}

	return {
		base,
		plugins: [
			react(),
			svgr(),
			mode === 'development'
				? checker({
						typescript: true,
						eslint: {
							useFlatConfig: true,
							lintCommand: 'lint:check',
						},
					})
				: null,
			mode === 'development' ? mkcert() : null,
			VitePWA({
				registerType: 'autoUpdate',
				injectRegister: 'script',
				workbox: {
					globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
					sourcemap: true,
				},
				devOptions: {
					enabled: true,
				},
				includeAssets: [
					'/favicon.ico',
					'/apple-touch-icon.png',
					'/mask-icon.png',
					'/images/Jiglo.png',
					'/images/PeablossomIcedTea.png',
					'/images/PopAndCrumbs.png',
					'/hero.jpg',
				],
				manifest: {
					id: 'sip-and-bites',
					name: 'Sip & Bites',
					short_name: 'Sip & Bites',
					description: 'Sip & Bites',
					background_color: '#000',
					theme_color: '#1b4965',
					start_url: base,
					display: 'standalone',
					icons: [
						{
							src: `${base}pwa-192x192.png`,
							sizes: '192x192',
							type: 'image/png',
						},
						{
							src: `${base}pwa-228x228.png`,
							sizes: '228x228',
							type: 'image/png',
						},
						{
							src: `${base}pwa-512x512.png`,
							sizes: '512x512',
							type: 'image/png',
						},
						{
							src: `${base}pwa-512x512.png`,
							sizes: '512x512',
							type: 'image/png',
							purpose: 'any',
						},
						{
							src: `${base}pwa-512x512.png`,
							sizes: '512x512',
							type: 'image/png',
							purpose: 'maskable',
						},
					],
				},
			}),
		],
		resolve: {
			alias: resolveAlias,
		},
		server: {
			port: parseInt(PORT) || 3000,
			open: OPEN_BROWSER === 'true' ? true : false,
		},
		envPrefix,
		build: {
			outDir: 'build',
		},
		define: {
			__PUBLIC_URL__: `'${base}'`,
		},
	}
})
