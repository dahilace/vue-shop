<script setup lang="ts">
import ProductList from '@/components/ui/ProductList.vue';
import CategoryList from '@/components/ui/CategoryList.vue';

import type { ShopProduct } from '@/assets/types/types';
import router from '@/router';
import { useProductsStore } from '@/stores/productsStore';
import { useRoute } from 'vue-router';
import { onMounted, onUnmounted } from 'vue';

const productsStore = useProductsStore();
const route = useRoute();

async function init() {
  await productsStore.loadProducts();
  productsStore.changeCurrentList(route.fullPath);
}

onMounted(() => {
  init();
});
onUnmounted(() => {
  productsStore.changeCurrentList('');
});
</script>

<template>
  <category-list v-if="productsStore.productsList" />
  <product-list
    :products-list="productsStore.currentList"
    :key="route.fullPath"
  ></product-list>
  <!-- <component :is="wrapperTag" class="card">
    <img class="card__img" :src="data.image" alt="" />
    <div class="card__manual">
      <p class="title">{{ data.title }}</p>
      <p class="description">{{ data.description }}</p>
      <p class="category">{{ data.category }}</p>
      <p class="price">{{ data.price }}</p>
      <p class="rating">{{ data.rating.rate | data.rating.count }}</p>
    </div>
  </component> -->
</template>

<style lang="scss" scoped></style>
