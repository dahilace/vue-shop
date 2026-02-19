<script setup lang="ts">
import ShellFooter from '@/widgets/footer/ShellFooter.vue';
import ShellHeader from '@/widgets/header/ShellHeader.vue';
import AppHero from './components/general/AppHero.vue';
import MyCart from './components/ui/MyCart.vue';

import ProductList from './components/ui/ProductList.vue';
import { onMounted, ref } from 'vue';
import type { ShopProduct } from '../shared/assets/types/types';

import { useShopStore } from '../entities/shop/model/shopStore';
import router from './router';
import { useRoute } from 'vue-router';
import { useBlogStote } from '../entities/blog/model/blogStore';
import { useCartStore } from '../features/cart/model/cartStore';

const route = useRoute();

const postsStore = useBlogStote();
const productsStore = useShopStore();
const cartStore = useCartStore();
// fetch('https://fakestoreapi.com/carts')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch('https://fakestoreapi.com/users')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

async function init() {
  try {
    await cartStore.getFromLocalStorage();
  } catch {
    console.error('Ошибка загрузки данных 1');
  }
  try {
    await productsStore.loadProducts();
  } catch (e) {
    console.error('Ошибка загрузки данных 2', e);
  }
}

onMounted(() => {
  init();
});
</script>

<template>
  <div class="wrapper flex flex-col min-h-screen">
    <shell-header />
    <main class="my-10">
      <router-view />
      <!-- <app-hero />
      <my-cart v-if="cartStore.isShown" />
      <product-list :productsList="productsStore.productsList" /> -->
    </main>
    <shell-footer class="mt-auto" />
  </div>
</template>

<style lang="scss" scoped></style>
