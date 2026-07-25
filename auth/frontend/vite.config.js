import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '',
  root: './',
  build: {
    outDir: 'dist', 
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'index.js', 
        chunkFileNames: 'chunk-[name].js', 
        assetFileNames: 'assets/[name].[ext]', 
      }
    }
  },
  publicDir: 'public',
  plugins: [react()],
})
