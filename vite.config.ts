import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
import compressPlugin from 'vite-plugin-compression'

// import dotenv from 'dotenv' //在node中读取环境变量
// import * as fs from 'fs'
// fs:typeof fs
// import fs from 'fs'
//vite.config.ts 不可以使用process.env 而是用loadEnv
//这应该是webpack读取环境变量的方式
// try {
//   const file = dotenv.parse(fs.readFileSync(`.env.${process.env.NODE_ENV}`))
//   for (const key in (file as Object)) {
//     process.env[key] = file[key]
//   }
// } catch (error) {
//   console.error(error)
// }

// console.log(process, 'path')
// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), 'ENV');
  // console.log(env, mode, command, 'fs');
  return {
    base: env === 'development' ? "./" : "/",
    plugins: [
      vue(),
      vueJsx(),
      PkgConfig(),
      OptimizationPersist(),
      compressPlugin()
    ],
    server: {
      port: 8080,
      proxy: {
        '/api': {
          target: 'http://localhost:3000/',
          changeOrigin: true
          // pathRewrite: {
          //
          // }
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
      },
      extensions: ['.ts', '.js', '.tsx', '.jsx', '.vue', '.json', '.scss']
    },
  }
  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'scss',
  //       patterns: [
  //         './src/style/variable.scss',
  //         './src/style/mixin.scss'
  //       ]
  //   }
  // }
})
