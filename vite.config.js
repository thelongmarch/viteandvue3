import {
  defineConfig
} from 'vite'
const {
  resolve
} = require('path')
import path from "path";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [ //配置别名
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      {
        find: 'comps',
        replacement: resolve(__dirname, 'src/components')       
      }
      
    ]
  },
})