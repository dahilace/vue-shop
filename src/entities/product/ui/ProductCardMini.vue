<script setup lang="ts">
import type { ShopProduct } from '@/shared/assets/types/types';
import AppButton from '@/shared/ui/app-button/AppButton.vue';

import { useCartStore } from '@/features/cart/model/cartStore';
import { computed, watch } from 'vue';
const cartStore = useCartStore();

const props = defineProps<{
  data: ShopProduct | null;
  list: boolean;
  quantity: number;
}>();

const emit = defineEmits<{
  (e: 'update-total', id: number, total: number): void;
}>();

const totalPrice = computed(() =>
  (+props.data.price * +props.quantity).toFixed(2),
);

watch(
  totalPrice,
  (newVal) => {
    emit('update-total', props.data.id, +newVal);
  },
  { immediate: true },
);

const wrapperTag = props.list ? 'li' : 'article';
</script>

<template>
  <component
    v-if="data"
    :is="wrapperTag"
    class="card mx-auto w-full max-w-3xl flex items-center justify-between"
  >
    <div class="flex flex-1 items-center justify-between gap-4">
      <div class="flex items-center gap-1">
        <div
          class="img-box w-full max-w-32 p-4 overflow-hidden bg-orange-50 rounded"
        >
          <img
            class="card__img max-w-20 w-full object-contain m-auto aspect-1/2"
            :src="data.image"
            alt=""
          />
        </div>
        <div class="card__manual">
          <p class="title">
            {{ data.title }}
          </p>
          {{ data.price.toFixed(2) + ' $/шт' }}
          <p></p>
        </div>
      </div>
      <div class="min-w-28 flex items-center justify-between">
        <app-button class="min-w-8" @click="cartStore.addToCart(data)"
          >+</app-button
        >
        <slot />
        <app-button class="min-w-8" @click="cartStore.removeFromCart(data.id)"
          >-</app-button
        >
      </div>
    </div>
    <p class="ml-4 min-w-40 text-right">{{ `Итого: ${totalPrice}$` }}</p>
  </component>
</template>

<style lang="scss" scoped></style>
