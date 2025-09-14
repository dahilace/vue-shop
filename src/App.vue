<script setup lang="ts">
import ShellHeader from './components/shell/ShellHeader.vue';
import ShellFooter from './components/shell/ShellFooter.vue';

import AppHero from './components/general/AppHero.vue';
import MyCart from './components/ui/MyCart.vue';
import { userCartStore } from './stores/cartStore';
const cartStore = userCartStore();

import ProductList from './components/ui/ProductList.vue';
import { onMounted, ref } from 'vue';
import type { ShopProduct } from './assets/types/types';

import { useProductsStore } from './stores/productsStore';
import router from './router';
import { useRoute } from 'vue-router';
import { usePostsStote } from './stores/postsStore';

const route = useRoute();

const postsStore = usePostsStote();
const productsStore = useProductsStore();
// fetch('https://fakestoreapi.com/carts')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch('https://fakestoreapi.com/users')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

async function init() {
  await productsStore.loadProducts();
  await productsStore.productsList.map((el) => (el.isLiked = false));
  
  await postsStore.loadPosts();
  // console.log(postsStore.postsList);
}

onMounted(() => {
  init();
});
</script>

<template>
  <div class="wrapper flex flex-col min-h-screen">
    <shell-header />
    <main>
      <router-view />
      <!-- <app-hero />
      <my-cart v-if="cartStore.isShown" />
      <product-list :productsList="productsStore.productsList" /> -->
    </main>
    <shell-footer class="mt-auto" />
  </div>
</template>

<style lang="scss" scoped></style>
