import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
	plugins: [
		react(),
	],
	server: {
		port: 3000,
		open: true,
	},
	build: {
		outDir: path.resolve(__dirname, 'dist'),
		emptyOutDir: true,
		sourcemap: true,
	},
	publicDir: path.resolve(__dirname, 'public'),
})
