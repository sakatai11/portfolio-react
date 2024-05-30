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
  // 本番環境では環境変数を含まないようにする
  define: {
    'import.meta.env': process.env.NODE_ENV === 'production' ? {} : import.meta.env
  },
  build: {
    minify: 'esbuild', // esbuildをミニファイアとして使用
    esbuild: {
      drop: ['console', 'debugger'], // 本番ビルドからconsoleとdebuggerを削除
    }
  }

});