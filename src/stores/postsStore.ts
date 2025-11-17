import { defineStore } from "pinia"
import type { Post } from "@/assets/types/types"

// 'https://jsonplaceholder.typicode.com/posts'

export const usePostsStote = defineStore('posts', {
  state: () => ({
    isLoaded: false,
    postsList: [] as Post[]
  }),
  actions: {
    async loadPosts() {
      if (localStorage.getItem('vue-shop-posts')) {
        this.postsList = JSON.parse(localStorage.getItem('vue-shop-posts'))
      } else {
        await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => this.postsList = JSON.parse(JSON.stringify(data)))
        localStorage.setItem('vue-shop-posts', JSON.stringify(this.postsList))
      }
      this.isLoaded = true
    },
    saveToLocalStorage() {
      localStorage.setItem('vue-shop-posts', JSON.parse(JSON.stringify(this.postsList)))
    }
  }
})