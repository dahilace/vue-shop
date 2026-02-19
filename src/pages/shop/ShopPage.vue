<script setup lang="ts">
import ProductList from '@/entities/product/ui/ProductList.vue';
import CategoryList from '@/entities/shop/ui/CategoryList.vue';
import { useShopStore } from '@/entities/shop/model/shopStore';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const productsStore = useShopStore();

async function init() {
  try {
    await productsStore.loadProducts();
    productsStore.changeCurrentList(route.fullPath);
  } catch {
    console.error('error');
  }
}

onMounted(() => {
  init();
});
onUnmounted(() => {
  productsStore.changeCurrentList('');
});
</script>

<template>
  <category-list is-all-exists class="mb-10" />
  <product-list :products-list="productsStore.currentList" />
  <!-- <button v-if="productsStore.productsList.length > countOfItems" @click="">
    Загрузить ещё
  </button> -->
</template>

<style lang="scss" scoped></style>
