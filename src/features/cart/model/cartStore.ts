import { defineStore } from "pinia";
import type { ShopProduct } from "@/shared/assets/types/types";

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: {} as Record<number, number>,
    favsItems: [] as number[],
    // cartItems: [] as ShopProduct[],
  }),
  actions: {
    addToCart(item: ShopProduct) {
      this.cartItems[item.id] = this.cartItems[item.id] ? ++this.cartItems[item.id] : 1
      localStorage.setItem('vue-store-cart', JSON.stringify(this.cartItems))
    },
    removeFromCart(id: number) {
      --this.cartItems[id]
      if (!this.cartItems[id]) {
        delete this.cartItems[id]
      }
      localStorage.setItem('vue-store-cart', JSON.stringify(this.cartItems))
    },
    addToFavs(item: ShopProduct) {
      this.favsItems.push(item.id)
      localStorage.setItem('vue-store-favs', JSON.stringify(this.favsItems))
    },
    removeFromFavs(item: ShopProduct) {
      this.favsItems.splice(this.favsItems.findIndex(el => el === item.id), 1)
      localStorage.setItem('vue-store-favs', JSON.stringify(this.favsItems))
    },
    async getFromLocalStorage() {
      if (localStorage.getItem('vue-store-cart')) {
        this.cartItems = JSON.parse(localStorage.getItem('vue-store-cart'))
      }
      if (localStorage.getItem('vue-store-favs')) {
        this.favsItems = JSON.parse(localStorage.getItem('vue-store-favs'))
      }
    },
    // saveToLocalStorage(sign: 'favs' | 'cart') {
    //   if (sign === 'favs') {
    //     localStorage.setItem('vue-store-favs', JSON.stringify(this.favsItems))
    //   }
    //   if (sign === 'cart') {
    //     localStorage.setItem('vue-store-cart', JSON.stringify(this.cartItems))
    //   }
    // }
    // calcItems(items: ShopProduct[]) {
    //   const counts: Record<number, number> = items.reduce((acc, obj) => {
    //     acc[obj.id] = (acc[obj.id] ?? 0) + 1;
    //     return acc;
    //   }, {} as Record<number, number>);
    //   console.log(counts)
    //   return counts
    // }
  }
})