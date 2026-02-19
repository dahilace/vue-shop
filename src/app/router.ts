import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ShopPage from '@/pages/shop/ShopPage.vue'
import ShopDetailsPage from '@/pages/shop/ShopDetailsPage.vue'
import BlogPage from '@/pages/blog/BlogPage.vue'
import BlogDetailsPage from '@/pages/blog/BlogDetailsPage.vue'
import CartPage from '@/pages/cart/CartPage.vue'
import FavsPage from '@/pages/favs/FavsPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      component: ShopDetailsPage
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogPage
    },
    {
      path: '/blog/:id',
      name: 'blog-post',
      component: BlogDetailsPage
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
