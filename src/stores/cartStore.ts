import { defineStore } from "pinia";
import type { ShopProduct } from "@/assets/types/types";

export const userCartStore = defineStore('cart', {
  state: () => ({
    cartItems: {} as Record<number, number>,
    // cartItems: [] as ShopProduct[],
    favsItems: new Set as Set<ShopProduct>,
    isCartShown: false as boolean,
    isFavsShown: false as boolean,
  }),
  actions: {
    addToCart(item: ShopProduct) {
      this.cartItems[item.id] = this.cartItems[item.id] ? ++this.cartItems[item.id] : 1
    },
    removeFromCart(id: number) {
      --this.cartItems[id]
      if (!this.cartItems[id]) {
        delete this.cartItems[id]
      }
    },
    addToFavs(item: ShopProduct) {
      this.favsItems.add(item)
    },
    removeFromFavs(item: ShopProduct) {
      this.favsItems.delete(item)
    },
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