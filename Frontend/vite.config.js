import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0', // This ensures Vite binds to the correct host
  },
  plugins: [react()],
})
