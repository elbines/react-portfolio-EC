import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Specify the MIME type for JavaScript modules
    mimeTypes: {
      'application/javascript': ['js', 'jsx']
    }
  }
})
