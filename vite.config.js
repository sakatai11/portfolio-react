import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: {
      rewrites: [{ from: /^\/*/, to: '/index.html' }],
    },
  },
  define: {
    'import.meta.env': process.env.NODE_ENV === 'production' ? {} : import.meta.env
  }
});