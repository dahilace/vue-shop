<script setup lang="ts">
import CategoryList from '@/components/ui/CategoryList.vue';
import { useProductsStore } from '@/stores/productsStore';

import ProductList from '@/components/ui/ProductList.vue';
import { onMounted, ref } from 'vue';

const productsStore = useProductsStore();
let randomList = ref<any[]>([]);

async function init() {
  await productsStore.loadProducts();
  randomList.value = await [...productsStore.productsList]
    .sort((a, b) => Math.random() - Math.random())
    .slice(0, 5);
}
init();
</script>

<template>
  <p>5 случайных товаров:</p>
  <product-list :products-list="randomList" />
  <!-- <category-list v-if="productsStore.productsList" /> -->
</template>

<style lang="scss" scoped></style>
