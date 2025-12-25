import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import Home from '@/pages/Home.vue'
import Products from '@/pages/Products.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
})

export default router
