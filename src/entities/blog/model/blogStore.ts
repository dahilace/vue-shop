import { defineStore } from "pinia"
import type { Post } from "@/shared/assets/types/types"

const url = 'https://jsonplaceholder.typicode.com/posts'

export const useBlogStote = defineStore('blog', {
  state: () => ({
    isLoaded: false,
    postsList: [] as Post[]
  }),
  actions: {
    async loadPosts() {
      const rawPosts = localStorage.getItem('vue-shop-posts')

      if (rawPosts) {
        const postsFromLocalStorage: Post[] = rawPosts ? JSON.parse(rawPosts) : []
        this.postsList = postsFromLocalStorage
      } else {
        await fetch(url).then(response => response.json()).then(data => this.postsList = JSON.parse(JSON.stringify(data)))
        localStorage.setItem('vue-shop-posts', JSON.stringify(this.postsList))
      }
      this.isLoaded = true
    },
    saveToLocalStorage() {
      localStorage.setItem('vue-shop-posts', JSON.parse(JSON.stringify(this.postsList)))
    }
  }
})