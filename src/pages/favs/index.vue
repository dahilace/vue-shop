<script setup lang="ts">
import ProductCard from '@/components/ui/ProductCard.vue';
import { userCartStore } from '@/stores/cartStore';

const cartsStore = userCartStore();
</script>

<template>
  <product-card v-for="item in cartsStore.favsItems" :data="item" />
</template>

<style lang="scss" scoped></style>
