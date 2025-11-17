<script setup lang="ts">
import type { ShopProduct } from '@/assets/types/types';

import MyButton from './MyButton.vue';
import SvgIcon from '../SvgIcon.vue';

import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore();

const props = defineProps<{
  data: ShopProduct;
}>();
</script>

<template>
  <div v-if="props.data">
    {{ data }}
    {{ props.data.title }}
    <my-button
      :class="{ liked: data.isLiked }"
      class="btn p-2"
      @click="
        [
          data.isLiked
            ? cartStore.removeFromFavs(data)
            : cartStore.addToFavs(data),
          (data.isLiked = !data.isLiked),
        ]
      "
      ><svg-icon class="w-full max-w-6 max-h-6" name="heart" />
    </my-button>
  </div>
</template>

<style lang="scss" scoped>
.btn.liked {
  fill: red;
  background-color: red;
}
</style>
