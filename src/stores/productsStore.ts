import { defineStore } from "pinia";
import type { ShopProduct } from "@/assets/types/types";
import { useRoute } from "vue-router";

const route = useRoute()

export const useProductsStore = defineStore('products', {
  state: () => ({
    isLoaded: false,
    productsList: [] as ShopProduct[],
    categories: [] as string[],
    currentList: [] as ShopProduct[]
  })
  ,
  // getters: {
  //   getCategories: (state) => Array.from(new Set(state.productsList.map((el) => el.category)))
  // },
  actions: {
    async loadProducts() {
      if (localStorage.getItem('vue-shop-products')) {
        this.productsList = JSON.parse(localStorage.getItem('vue-shop-products'))
      }
      else {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        this.productsList = JSON.parse(JSON.stringify(data))
        if (localStorage.getItem('vue-store-favs')) {
          const favsFromLocalStorage = JSON.parse(localStorage.getItem('vue-store-favs'))
          this.productsList.forEach(el => favsFromLocalStorage.find((elem: number | string) => +elem === el.id) ? el.isLiked = true : el.isLiked = false)
        }
        this.computeParameters()
        this.saveToLocalStorage()
        this.isLoaded = true
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