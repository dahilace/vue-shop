<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';
import { useProductsStore } from '@/stores/productsStore';
import ProductCardMini from '@/components/ui/ProductCardMini.vue';
import { computed, ref } from 'vue';

const cartStore = useCartStore();
const productsStore = useProductsStore();

const totals = ref<Record<number, number>>({});
function updateTotals(id: number, total: number) {
  totals.value[id] = total;
}

const cartTotal = computed(() => {
  return Object.values(totals.value).reduce((acc, b) => acc + b, 0);
});
</script>

<template>
  <div class="cart p-4">
    <div v-if="!Object.keys(cartStore.cartItems).length">Корзина пуста</div>
    <div v-else>
      <ul class="flex flex-col gap-2">
        <product-card-mini
          v-for="(value, k) in cartStore.cartItems"
          :key="k"
          :quantity="value"
          :data="productsStore.productsList.find((el) => el.id === +k) ?? null"
          :list="true"
          @update-total="updateTotals"
          >{{ value }}
        </product-card-mini>
      </ul>
      <hr class="my-4" />
      <p class="text-center">Итого: {{ cartTotal.toFixed(2) }}$</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  color: var(--main-bg);
}
</style>
