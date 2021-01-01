import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/components/Pages/Home.vue'
import Dashboard from '@/components/Pages/Dashboard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/Pages/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
