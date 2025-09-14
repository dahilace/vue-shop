<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue';
import { userCartStore } from '@/stores/cartStore';
const cartStore = userCartStore();
</script>

<template>
  <button
    @click="cartStore.isCartShown = !cartStore.isCartShown"
    class="cart-button cursor-pointer relative"
    :data-items="
      Object.values(cartStore.cartItems).reduce((acc, v) => +acc + +v, 0)
    "
    :class="{ empty: !Object.values(cartStore.cartItems).length }"
  >
    <svg-icon class="w-8 h-8" name="cart" />
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
