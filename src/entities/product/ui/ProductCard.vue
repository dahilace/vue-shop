<script setup lang="ts">
import type { ShopProduct } from '@/shared/assets/types/types';
import AppButton from '@/shared/ui/app-button/AppButton.vue';
import { RouterLink } from 'vue-router';
import SvgIcon from '@/shared/ui/SvgIcon/SvgIcon.vue';

import { useCartStore } from '@/features/cart/model/cartStore';
import { useShopStore } from '@/entities/shop/model/shopStore';

const productsStore = useShopStore();
const cartStore = useCartStore();

const props = withDefaults(
  defineProps<{
    data: ShopProduct;
    list?: boolean;
  }>(),
  {
    list: true,
  },
);

const wrapperTag = props.list ? 'li' : 'article';
</script>

<template>
  <component
    :is="wrapperTag"
    class="card flex flex-col p-2 max-w-80 mx-auto overflow-hidden rounded cursor-pointer"
  >
    <router-link :to="`/shop/${props.data.id}`">
      <div class="img-box m-2 overflow-hidden">
        <img
          class="card__img p-2 w-80 object-contain object-center m-auto aspect-1/1"
          :src="data.image"
          alt=""
        />
      </div>
      <div class="card__manual flex flex-col">
        <div>
          <p class="title line-clamp-1">{{ data.title }}</p>
          <p class="price">{{ data.price.toFixed(2) }}</p>
        </div>
        <div class="btn-box flex justify-around gap-2">
          <app-button
            class="cart-btn btn p-2"
            @click.self="cartStore.addToCart(data)"
            ><svg-icon class="w-full max-w-6 max-h-6" name="cart" />
          </app-button>
          <app-button
            :class="{ liked: data.isLiked }"
            class="btn p-2"
            @click="[
              data.isLiked
                ? cartStore.removeFromFavs(data)
                : cartStore.addToFavs(data),
              (data.isLiked = !data.isLiked),
            ]"
            ><svg-icon class="w-full max-w-6 max-h-6" name="heart" />
          </app-button>
        </div>
      </div>
    </router-link>
  </component>
</template>

<style lang="scss" scoped>
.card {
  background-color: var(--main-bg);
  box-shadow: var(--card-shadow);
  &__img {
    background-color: var(--main-bg-alt);
  }
  &:hover {
    background-color: #fff;
    .card__img {
      transform: scale(1.07);
    }
  }
  &:hover:has(.btn:hover) {
    background-color: aqua;
  }
}
.card__img {
  transition: 0.25s ease transform;
}
.btn:not(.liked) {
  box-shadow: var(--btn-shadow);
  transition: 0.25s ease opacity;
  &:hover,
  &:focus {
    opacity: 0.65;
  }
  &:before {
    bottom: -15%;
    right: -5%;
    content: '+';
    position: absolute;
    font-size: 1.2rem;
    text-shadow: 0px 0px 1px black;
  }
}
.btn.liked {
  fill: red;
  background-color: red;
}
</style>
