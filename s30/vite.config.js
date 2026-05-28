import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main:         resolve(__dirname, 's30.html'),
        about:        resolve(__dirname, 'arise_about.html'),
        achievements: resolve(__dirname, 'arise_achievements.html'),
        news:         resolve(__dirname, 'arise_news.html'),
        partners:     resolve(__dirname, 'arise_partners.html'),
        programs:     resolve(__dirname, 'arise_programs.html'),
        roadmap:      resolve(__dirname, 'arise_roadmap.html'),
      }
    }
  }
})
