import { defineStore } from "pinia";
import type { ShopProduct } from "@/shared/assets/types/types";
import { useRoute } from "vue-router";

const route = useRoute()

export const useShopStore = defineStore('shop', {
  state: () => ({
    isLoaded: false,
    productsList: [] as ShopProduct[],
    categories: [] as string[],
    currentList: [] as ShopProduct[]
  }),

  actions: {
    async loadProducts() {
      const rawProducts = localStorage.getItem('vue-shop-products')

      if (localStorage.getItem('vue-shop-products')) {
        const productsFromLocalStorage: ShopProduct[] = rawProducts ? JSON.parse(rawProducts) : []
        this.productsList = productsFromLocalStorage
        this.computeParameters()
      }
      else {
        const response = await fetch('https://fakestoreapi.com/products'),
          data = await response.json()
          
        this.productsList = JSON.parse(JSON.stringify(data))
        this.computeParameters()
        this.saveToLocalStorage()
        this.isLoaded = true
      }
    },
    async loadFavs() {
      const rawFavsProducts = localStorage.getItem('vue-store-favs')

      if (localStorage.getItem('vue-store-favs')) {
        const favsFromLocalStorage = rawFavsProducts ? JSON.parse(rawFavsProducts) : []
        this.productsList.forEach(el => favsFromLocalStorage.find((elem: number | string) => +elem === el.id) ? el.isLiked = true : el.isLiked = false)
      }
    },
    computeParameters() {
      this.categories = Array.from(new Set(this.productsList.map((el) => el.category))).sort((a, b) => +!a.match('clothing') - +!b.match('clothing'))
    },
    createRoute(category: string) {
      return `/shop/${category.split(/\W/)[0]}`
    },
    changeCurrentList(route: string) {
      this.currentList = (route === '/shop') ? this.productsList : this.productsList.filter(el => route === this.createRoute(el.category));
      (this.currentList.length < 10) ? this.currentList : this.currentList.length = 20
    },
    uploadCurrentList() {
      // (this.currentList.length < this.productsList.length) ? this.currentList.length += 10 : this.currentList.length = this.productsList.length
    },
    saveToLocalStorage() {
      localStorage.setItem('vue-shop-products', JSON.stringify(this.productsList))
    }
  }
})