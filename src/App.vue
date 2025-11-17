<script setup lang="ts">
import ShellHeader from './components/shell/ShellHeader.vue';
import ShellFooter from './components/shell/ShellFooter.vue';

import AppHero from './components/general/AppHero.vue';
import MyCart from './components/ui/MyCart.vue';

import ProductList from './components/ui/ProductList.vue';
import { onMounted, ref } from 'vue';
import type { ShopProduct } from './assets/types/types';

import { useProductsStore } from './stores/productsStore';
import router from './router';
import { useRoute } from 'vue-router';
import { usePostsStote } from './stores/postsStore';
import { useCartStore } from './stores/cartStore';

const route = useRoute();

const postsStore = usePostsStote();
const productsStore = useProductsStore();
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
