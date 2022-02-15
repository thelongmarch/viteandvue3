import {
  defineConfig
} from 'vite'
const {
  resolve
} = require('path')
import path from "path";
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),viteMockServe({ supportTs: false })],
  resolve: {
    alias: [ //配置别名
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      {
        find: 'comps',
        replacement: resolve(__dirname, 'src/components')
      },
      {
        find: 'views',
        replacement: resolve(__dirname, 'src/views')
      },
      {
        find: 'styles',
        replacement: resolve(__dirname, 'src/styles')
      },

    ]
  },  
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "src"),
  //     comps: path.resolve(__dirname, "src/components"),
  //     styles: path.resolve(__dirname, "src/styles"),
  //     plugins: path.resolve(__dirname, "src/plugins"),
  //     views: path.resolve(__dirname, "src/views"),
  //     layouts: path.resolve(__dirname, "src/layouts"),
  //     utils: path.resolve(__dirname, "src/utils"),
  //     apis: path.resolve(__dirname, "src/apis"),
  //     dirs: path.resolve(__dirname, "src/directives"),
  //   }
  // },
})