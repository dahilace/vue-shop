<script setup lang="ts">
import FavsCardMini from '@/components/ui/FavsCardMini.vue';

import { useCartStore } from '@/stores/cartStore';
import { useProductsStore } from '@/stores/productsStore';

const cartStore = useCartStore();
const productsList = useProductsStore();
</script>

<template>
  <div>
    <div v-if="!cartStore.favsItems.length">Добавьте товары в избранное!</div>
    <favs-card-mini
      v-for="(value) in cartStore.favsItems"
      :key="value"
      :data="productsList.productsList.find((el) => el.id === +value) ?? null"
    />
  </div>
</template>

<style lang="scss" scoped></style>
