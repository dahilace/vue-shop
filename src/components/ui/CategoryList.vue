<script setup lang="ts">
import { useProductsStore } from '@/stores/productsStore';
import { useRoute } from 'vue-router';

const route = useRoute();
const productsStore = useProductsStore();

defineProps<{
  isAllExists: boolean;
}>();
</script>

<template>
  <ul class="flex gap-2 items-center justify-center">
    <li
      v-if="isAllExists"
      class="shop-category"
      :class="{
        active: '/shop' === route.fullPath,
      }"
    >
      <router-link class="block w-full" to="/shop"> Всё </router-link>
    </li>
    <li
      class="shop-category"
      :class="{
        active: productsStore.createRoute(category) === route.fullPath,
      }"
      v-for="category in productsStore.categories"
      @click="
        productsStore.changeCurrentList(productsStore.createRoute(category))
      "
    >
      <router-link
        class="block w-full"
        :to="`${productsStore.createRoute(category)}`"
      >
        {{ category }}
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.shop-category {
  color: var(--main-bg);
  &.active {
    color: var(--main-bg-alt);
  }
}
</style>
