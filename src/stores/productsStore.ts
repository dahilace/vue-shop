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
      // fetch('https://fakestoreapi.com/products')
      //   .then((response) => response.json())
      //   .then((data) => (this.productsList = JSON.parse(JSON.stringify(data)))).then(
      //     () => this.computeParameters()
      //   )

      if (!this.isLoaded) {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()

        this.productsList = JSON.parse(JSON.stringify(data))
        this.productsList.forEach(el => el.isLiked = false)
        this.computeParameters()

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
      this.currentList = this.productsList.filter(el => route === this.createRoute(el.category))
    }
  }
})