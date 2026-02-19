<script setup lang="ts">
import CategoryList from '@/entities/shop/ui/CategoryList.vue';
import { useShopStore } from '@/entities/shop/model/shopStore';

const productsStore = useShopStore();
</script>

<template>
  <footer>
    <nav class="footer__nav">
      <category-list :is-all-exists="false" v-if="productsStore.productsList" />
    </nav>
  </footer>
</template>

<style lang="scss" scoped></style>
