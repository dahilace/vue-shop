<script setup lang="ts">
import type { NavItem } from '@/assets/types/types';
import MyCartButton from '../ui/MyCartButton.vue';
import MyFavsButton from '../ui/MyFavsButton.vue';
import SvgIcon from '../SvgIcon.vue';
import { RouterLink } from 'vue-router';

import MyNav from '../ui/MyNav.vue';
import MyLogo from '../ui/MyLogo.vue';

import { userCartStore } from '@/stores/cartStore';
const cartStore = userCartStore();

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
</script>

<template>
  <header class="mx-auto w-full flex flex-col items-center gap-2">
    <my-logo class="inline-block" />
    <my-nav :nav-list="navData" />
    <div class="btns-box flex gap-2">
      <router-link class="flex items-center gap-1" to="/shop/cart">Корзина <my-cart-button /></router-link>
      <router-link class="flex items-center gap-1" to="/shop/favs">Избранное <my-favs-button /></router-link>
    </div>
    <slot />
  </header>
</template>

<style lang="scss" scoped></style>
