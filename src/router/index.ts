import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

type routerType = RouteRecordRaw & {
  hidden?: Boolean
}
const routes: Array<routerType> = [
  {
    path: "/",
    component: () => import(/*webpackChunkName:'login'*/'@/view/login.vue')
  },
  {
    path: "/index",
    component: () => import(/*webpackChunkName:'login'*/'@/view/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router