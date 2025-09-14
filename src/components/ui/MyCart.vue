<script setup lang="ts">
import ProductCardMini from './ProductCardMini.vue';

import { userCartStore } from '@/stores/cartStore';
const cartStore = userCartStore();
</script>

<template>
  <div class="flex flex-col gap-1">
    <product-card-mini
      v-for="product in cartStore.favsItems"
      :key="product.id"
      :data="product"
    ></product-card-mini>
  </div>
</template>

<style lang="scss" scoped></style>
