import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'charts-vendor': ['react-google-charts']
        },
      },
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router-dom', 'react-google-charts'],
    mainFields: ['browser', 'module', 'main'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-google-charts'],
  }
})
