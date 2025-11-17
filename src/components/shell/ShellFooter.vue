<script setup lang="ts">
import CategoryList from '@/components/ui/CategoryList.vue';
import { useProductsStore } from '@/stores/productsStore';

const productsStore = useProductsStore();
</script>

<template>
  <footer>
    <nav class="footer__nav">
      <category-list :is-all-exists="false" v-if="productsStore.productsList" />
    </nav>
  </footer>
</template>

<style lang="scss" scoped></style>
