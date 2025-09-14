<script setup lang="ts"></script>

<template>
  <button class="btn p-1 relative inline-block cursor-pointer">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  border-radius: 4px;
  background-color: wheat;
}
</style>
