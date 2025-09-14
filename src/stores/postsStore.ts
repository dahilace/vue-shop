import { defineStore } from "pinia"
import type { BlogPost } from "@/assets/types/types"

// 'https://jsonplaceholder.typicode.com/posts'

export const usePostsStote = defineStore('posts', {
  state: () => ({
    isLoaded: false,
    postsList: [] as BlogPost[]
  }),
  actions: {
    async loadPosts() {
      if (!this.isLoaded) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()

        this.postsList = JSON.parse(JSON.stringify(data))
        
        this.isLoaded = true
      }
    }
  }
})