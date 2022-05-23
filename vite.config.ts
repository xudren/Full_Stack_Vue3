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
      compressPlugin({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz'
      })
    ],
    build: {
      brotliSize: false,//启用/禁用 brotli 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
      chunkSizeWarningLimit: 500,//大小警告的限制（以 kbs 为单位）
      outDir: "dist-" + loadEnv(mode, process.cwd()).VITE_APP_NAME, //打包名称
      terserOptions: {
        compress: { //处理打包去掉console.log
          drop_console: true,
          drop_debugger: true
        }
      }
      // rollupOptions: {
      //   output: {
      //     manualChunks: {
      //       'ant-design-vue': ['ant-design-vue'],
      //       'vue-i18n': ['vue-i18n'],
      //       'nprogress': ['nprogress'],
      //     }
      //   }
      //  }
    },

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
