import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        school: resolve(__dirname, 'src/school.html'),
        applicants: resolve(__dirname, 'src/applicants.html'),
        institutes: resolve(__dirname, 'src/institutes.html'),
        schedule: resolve(__dirname, 'src/schedule.html'),
        campus: resolve(__dirname, 'src/campus.html'),
        studentsBrand: resolve(__dirname, 'src/students-brand.html'),
        science: resolve(__dirname, 'src/science.html'),
        partners: resolve(__dirname, 'src/partners.html'),
        media: resolve(__dirname, 'src/media.html'),
        contacts: resolve(__dirname, 'src/contacts.html'),
        pres: resolve(__dirname, 'src/pres.html')
      }
    }
  }
});