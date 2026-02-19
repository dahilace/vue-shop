<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue';
import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore();
</script>

<template>
  <button
    class="cart-button cursor-pointer relative"
    :data-items="cartStore.favsItems.length"
    :class="{ empty: !cartStore.favsItems.length }"
  >
    <svg-icon class="w-8 h-8" name="heart" />
  </button>
</template>

<style lang="scss" scoped>
.cart-button:not(.empty) {
  &::before {
    bottom: -25%;
    right: -50%;
    background-color: wheat;
    border-radius: 50%;
    padding: 0.05rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    content: attr(data-items);
  }
}
</style>
