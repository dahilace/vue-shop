<script setup lang="ts">
import type { ShopProduct } from '@/assets/types/types';
import MyButton from './MyButton.vue';
import { RouterLink } from 'vue-router';
import SvgIcon from '../SvgIcon.vue';

import { userCartStore } from '@/stores/cartStore';
import { useProductsStore } from '@/stores/productsStore';

const productsStore = useProductsStore();
const cartStore = userCartStore();

const props = withDefaults(
  defineProps<{
    data: ShopProduct;
    list?: boolean;
  }>(),
  {
    list: true,
  }
);

const wrapperTag = props.list ? 'li' : 'article';
</script>

<template>
  <component
    :is="wrapperTag"
    class="card flex flex-col p-2 max-w-80 mx-auto overflow-hidden"
  >
    <div class="img-box p-4 overflow-hidden">
      <img
        class="card__img w-80 object-contain object-center m-auto aspect-1/1"
        :src="data.image"
        alt=""
      />
    </div>
    <div class="card__manual flex flex-col">
      <div>
        <p class="title line-clamp-1">{{ data.title }}</p>
        <p class="price">{{ data.price }}</p>
      </div>
      <div class="btn-box flex gap-2">
        <my-button class="cart-btn p-2" @click="cartStore.addToCart(data)"
          ><svg-icon class="btn w-full max-w-6 max-h-6" name="cart" />
        </my-button>
        <my-button
          :class="{ liked: data.isLiked }"
          class="p-2"
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
    </div>
  </component>
</template>

<style lang="scss" scoped>
.btn {
  transition: 0.25s ease opacity;
  &:hover,
  &:focus {
    opacity: 0.65;
  }
  &:before {
    bottom: -20%;
    right: -20%;
    content: '+';
    position: absolute;
    font-size: 1.5rem;
  }
}
.btn.liked {
  fill: red;
  background-color: red;
}
</style>
