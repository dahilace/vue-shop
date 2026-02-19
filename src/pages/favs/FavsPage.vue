<script setup lang="ts">
import FavsCardMini from '@/entities/favs/ui/FavsCardMini.vue';

import { useCartStore } from '@/features/cart/model/cartStore';
import { useShopStore } from '@/entities/shop/model/shopStore';

const cartStore = useCartStore();
const productsList = useShopStore();
</script>

<template>
  <div>
    <div v-if="!cartStore.favsItems.length">Добавьте товары в избранное!</div>
    <favs-card-mini
      v-for="value in cartStore.favsItems"
      :key="value"
      :data="productsList.productsList.find((el) => el.id === +value) ?? null"
    />
  </div>
</template>

<style lang="scss" scoped></style>
