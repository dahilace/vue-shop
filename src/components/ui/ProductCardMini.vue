<script setup lang="ts">
import type { ShopProduct } from '@/assets/types/types';
import MyButton from './MyButton.vue';

import { userCartStore } from '@/stores/cartStore';
import { computed, watch } from 'vue';
const cartStore = userCartStore();

const props = defineProps<{
  data: ShopProduct;
  list: boolean;
  quantity: number;
}>();

const emit = defineEmits<{
  (e: 'update-total', id: number, total: number): void;
}>();

const totalPrice = computed(() =>
  (+props.data.price * +props.quantity).toFixed(2)
);

watch(
  totalPrice,
  (newVal) => {
    emit('update-total', props.data.id, +newVal);
  },
  { immediate: true }
);

const wrapperTag = props.list ? 'li' : 'article';
</script>

<template>
  <component :is="wrapperTag" class="card mx-auto flex items-center w-full">
    <div class="img-box p-4 overflow-hidden bg-orange-50 rounded">
      <img
        class="card__img w-10 object-contain m-auto aspect-1/2"
        :src="data.image"
        alt=""
      />
    </div>
    <div class="card__manual">
      <p class="title">
        {{ data.title }}
        {{ data.price + ' $/шт' }}
      </p>
    </div>
    <my-button @click="cartStore.addToCart(data)">+</my-button>
    <slot />
    <my-button @click="cartStore.removeFromCart(data.id)">-</my-button>
    {{ `Итого: ${totalPrice}$` }}
  </component>
</template>

<style lang="scss" scoped></style>
