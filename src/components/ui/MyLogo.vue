<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <router-link to="/" class="logo text-xl flex items-center ">
    <img class="max-w-20" src="/public/logo.png" alt="logo" />
    <p>cannyCat</p>
  </router-link>
</template>

<style lang="scss" scoped>
.logo {
  filter: drop-shadow(2px 2px 4px rgba(84, 215, 227, 0.67));
}
</style>
