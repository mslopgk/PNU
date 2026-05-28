import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'index.html'),
        about:    resolve(__dirname, 'about/index.html'),
        facility: resolve(__dirname, 'facility/index.html'),
        heritage: resolve(__dirname, 'heritage/index.html'),
        news:     resolve(__dirname, 'news/index.html'),
        partners: resolve(__dirname, 'partners/index.html'),
        research: resolve(__dirname, 'research/index.html'),
      }
    }
  }
})
