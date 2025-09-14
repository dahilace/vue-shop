import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/index.vue'
import ShopPage from '@/pages/shop/index.vue'
import ShopItemPage from '@/pages/shop/[id].vue'
import BlogPage from '@/pages/blog/index.vue'
import CartPage from '@/pages/cart/index.vue'
import FavsPage from '@/pages/favs/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopPage
    },
    {
      path: '/shop/:id',
      name: 'shop-item',
      component: ShopItemPage
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogPage
    },
    {
      path: '/shop/cart',
      name: 'cart',
      component: CartPage
    },
    {
      path: '/shop/favs',
      name: 'favs',
      component: FavsPage
    },
  ],
})

export default router
