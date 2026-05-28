import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main:       resolve(__dirname, 's31.html'),
        about:      resolve(__dirname, 'ai_about.html'),
        admissions: resolve(__dirname, 'ai_admissions.html'),
        depts:      resolve(__dirname, 'ai_depts.html'),
        faculty:    resolve(__dirname, 'ai_faculty.html'),
        news:       resolve(__dirname, 'ai_news.html'),
        programs:   resolve(__dirname, 'ai_programs.html'),
      }
    }
  }
})
