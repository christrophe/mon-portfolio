import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Configuration de Vite avec React + Tailwind CSS
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
