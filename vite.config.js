import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          // لو حابب تستخدم الـ Compiler الجديد (React 19+)
          ["babel-plugin-react-compiler", { target: '18' }], 
        ],
      },
    }),
  ],
  server: {
    // ضيف ده لو التغييرات لسه مش بتسمع تلقائياً
    watch: {
      usePolling: true,
    },
  },
})