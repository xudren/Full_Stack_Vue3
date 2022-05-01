import { createApp } from 'vue'
import App from './App.vue'
import { createPinia, PiniaPluginContext } from 'pinia'
import router from './router/index'
import './style/global'
type Options = {
  key?: string
}
const piniaPlugin = (option: Options) => {
  return (context: PiniaPluginContext) => {
    console.log(context, 'context')

  }
}

const Store = createPinia()
Store.use(piniaPlugin({
  key: 'xudren'
}))

// console.log(import.meta.env, 'import.meta')
createApp(App).use(Store).use(router).mount('#app')
