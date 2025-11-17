<script setup lang="ts">
import CategoryList from '@/components/ui/CategoryList.vue';
import { useProductsStore } from '@/stores/productsStore';

import ProductList from '@/components/ui/ProductList.vue';
import { onMounted, ref } from 'vue';

const productsStore = useProductsStore();
let randomList = ref<any[]>([]);

function clearLocalStorage() {
  localStorage.clear();
}

async function init() {
  try {
    await productsStore.loadProducts();
    randomList.value = await [...productsStore.productsList]
      .sort((a, b) => Math.random() - Math.random())
      .slice(0, 5);
  } catch {
    console.error('main page error');
  }
}
init();
</script>

<template>
  <button @click="clearLocalStorage">Clear localstorage</button>
  <div v-if="!productsStore.productsList.length && !productsStore.isLoaded">
    Идёт загрузка...
  </div>
  <div v-else>
    <p>5 случайных товаров:</p>
    <button @click="init">refresh</button>
  </div>
  <product-list :products-list="randomList" />
  <!-- <category-list v-if="productsStore.productsList" /> -->
</template>

<style lang="scss" scoped></style>
