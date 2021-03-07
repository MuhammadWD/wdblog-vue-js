import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/views/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../components/views/Categories.vue')
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('../components/views/Works.vue')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('../components/views/Articles.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
