import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],

  server: {
    port: 9001, // Change to your desired port (e.g., 3001, 4000, etc.)
    open: true, // Optional: Auto-open browser
  },
 
})
