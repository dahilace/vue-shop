<script setup lang="ts">
import CategoryList from '@/components/ui/CategoryList.vue';
import { useProductsStore } from '@/stores/productsStore';

const productsStore = useProductsStore();
</script>

<template>
  <footer>
    <category-list v-if="productsStore.productsList" />
  </footer>
</template>

<style lang="scss" scoped></style>
