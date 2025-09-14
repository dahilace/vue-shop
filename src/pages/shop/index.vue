<script setup lang="ts">
import ProductList from '@/components/ui/ProductList.vue';
import CategoryList from '@/components/ui/CategoryList.vue';
import { useProductsStore } from '@/stores/productsStore';
const productsStore = useProductsStore();
</script>

<template>
  <category-list />
  <product-list :products-list="productsStore.productsList" />
</template>

<style lang="scss" scoped></style>
