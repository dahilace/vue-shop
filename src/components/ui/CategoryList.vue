<script setup lang="ts">
import { useProductsStore } from '@/stores/productsStore';

const productsStore = useProductsStore();
</script>

<template>
  <ul>
    <li
      v-for="category in productsStore.categories"
      @click="
        productsStore.changeCurrentList(productsStore.createRoute(category))
      "
    >
      <router-link :to="`${productsStore.createRoute(category)}`">
        {{ category }}
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
