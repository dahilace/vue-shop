<script setup lang="ts">
import { userCartStore } from '@/stores/cartStore';
import { useProductsStore } from '@/stores/productsStore';
import ProductCardMini from '@/components/ui/ProductCardMini.vue';
import { computed, ref } from 'vue';

const cartStore = userCartStore();
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
  <div v-if="!Object.keys(cartStore.cartItems).length">Корзина пуста</div>
  <div v-else>
    <ul>
      <product-card-mini
        v-for="(value, k) in cartStore.cartItems"
        :key="k"
        :quantity="value"
        :data="productsStore.productsList.find((el) => el.id === +k)"
        :list="true"
        @update-total="updateTotals"
        >{{ value }}
      </product-card-mini>
    </ul>
    <p>Итого: {{ cartTotal.toFixed(2) }}$</p>
  </div>
</template>

<style lang="scss" scoped></style>
