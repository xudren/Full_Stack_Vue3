import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

type routerType = RouteRecordRaw & {
  hidden?: Boolean
}
const routes: Array<routerType> = [
  {
    path: "/",
    component: () => import(/*webpackChunkName:'login'*/'@/view/login')
  },
  {
    path: "/index",
    component: () => import(/*webpackChunkName:'login'*/'@/view/index')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router