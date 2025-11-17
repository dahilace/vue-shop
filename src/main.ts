import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'
import './assets/styles/main.css'

const app = createApp(App)

app.use(createPinia())
// import { useCartStore } from './stores/cartStore'
// const cartStore = useCartStore()
// cartStore.getFromLocalStorage()

app.use(router)

app.mount('#app')
