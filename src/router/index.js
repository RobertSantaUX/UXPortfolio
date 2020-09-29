import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from "@/views/Welcome";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/Projects')
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: () => import('@/views/Introduction')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
