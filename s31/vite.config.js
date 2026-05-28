import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main:       resolve(__dirname, 'index.html'),
        about:      resolve(__dirname, 'about/index.html'),
        admissions: resolve(__dirname, 'admissions/index.html'),
        depts:      resolve(__dirname, 'depts/index.html'),
        faculty:    resolve(__dirname, 'faculty/index.html'),
        news:       resolve(__dirname, 'news/index.html'),
        programs:   resolve(__dirname, 'programs/index.html'),
      }
    }
  }
})
