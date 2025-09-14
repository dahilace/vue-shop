<script setup lang="ts">
import type { ShopProduct } from '@/assets/types/types';
import ProductCard from './ProductCard.vue';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useProductsStore } from '@/stores/productsStore';

const productsStore = useProductsStore();

const props = defineProps<{
  productsList: ShopProduct[];
}>();
</script>

<template>
  <!-- <ul class="flex flex-wrap gap-2">
    <li
      @click="currentCategory = category"
      :class="{ active: currentCategory === category }"
      class="category p-1"
      v-for="(category, i) in productsStore.categories"
      :key="i"
    >
      <router-link :to="`${productsStore.createRoute(category)}`">
        {{ category }}
      </router-link>
    </li>
  </ul> -->
  <ul class="flex flex-wrap justify-between gap-1">
    <product-card
      v-for="product in productsList"
      :key="product.id"
      :data="product"
      list
    />
  </ul>
</template>

<style lang="scss" scoped>
.category.active {
  color: green;
}
</style>
