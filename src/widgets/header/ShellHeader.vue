<script setup lang="ts">
import type { NavItem } from '@/shared/assets/types/types';
import OpenCartButton from '@/features/cart/open-cart/ui/OpenCartButton.vue';
import OpenFavsButton from '@/features/favs/open-favs/ui/OpenFavsButton.vue';
import SvgIcon from '@/shared/ui/SvgIcon/SvgIcon.vue';

import { RouterLink } from 'vue-router';

import AppNav from '@/shared/ui/app-nav/AppNav.vue';
import AppLogo from '@/shared/ui/app-logo/AppLogo.vue';

import { computed, ref } from 'vue';

import { useCartStore } from '@/features/cart/model/cartStore';
import { useShopStore } from '@/entities/shop/model/shopStore';

const cartStore = useCartStore();
const productsStore = useShopStore();

const navData: NavItem[] = [
  {
    text: 'Главная',
    path: '/',
  },
  {
    text: 'Товары',
    path: '/shop',
  },
  {
    text: 'Блог',
    path: '/blog',
  },
];

const searchQuery = ref<string>('');

const searchedItems = computed(() => {
  return productsStore.productsList.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
    // item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
});
</script>

<template>
  <header
    class="header py-3 relative overflow-hidden mx-auto w-full flex flex-col items-center gap-2"
  >
    <app-logo class="absolute bottom-0 left-0" />
    <app-nav :nav-list="navData" />
    <div class="btns-box flex gap-2">
      <router-link class="flex items-center gap-1" to="/shop/cart"
        >Корзина <my-cart-button
      /></router-link>
      <router-link class="flex items-center gap-1" to="/shop/favs"
        >Избранное <my-favs-button
      /></router-link>
    </div>
    <!-- <input
      type="text"
      class="border border-red-100 rounded"
      v-model="searchQuery"
    />
    <p>Найдено: {{ searchedItems.length }}</p> -->
    <slot />
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: var(--main-bg);
}
</style>
