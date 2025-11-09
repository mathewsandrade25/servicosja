import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'servicosja';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})
