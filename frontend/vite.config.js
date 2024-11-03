// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Make sure to replace YOUR_BACKEND_PORT with the actual port your backend is running on
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
