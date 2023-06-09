import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS()
  ],
  resolve: {
    alias: [
      { find: '@' ,  replacement: `${path.resolve(process.cwd())}/src`}
    ]
  },
  server: {
    proxy: {
      '/service/api/': {
        target: 'http://taitungttgo.cbsdinfo.com.tw/',
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/service^\/^\/api/, '')
        },
      }
    }
  }

})
