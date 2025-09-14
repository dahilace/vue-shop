<script setup lang="ts">
import type { NavItem } from '@/assets/types/types';
import { RouterLink } from 'vue-router';

defineProps<{
  navList: NavItem[];
}>();
</script>

<template>
  <nav>
    <ul class="nav__list flex flex-wrap gap-4 items-center justify-center">
      <li v-for="(item, i) in navList" :key="i" class="nav__item">
        <router-link :to="item.path">{{ item.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
