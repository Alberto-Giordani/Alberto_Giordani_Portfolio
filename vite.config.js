import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Configuration du base path pour déployer sur GitHub Pages
export default defineConfig({
  base: '/',
  plugins: [react()],
})
