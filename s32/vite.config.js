import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 's32.html'),
        about:    resolve(__dirname, 'airc_about.html'),
        facility: resolve(__dirname, 'airc_facility.html'),
        heritage: resolve(__dirname, 'airc_heritage.html'),
        news:     resolve(__dirname, 'airc_news.html'),
        partners: resolve(__dirname, 'airc_partners.html'),
        research: resolve(__dirname, 'airc_research.html'),
      }
    }
  }
})
