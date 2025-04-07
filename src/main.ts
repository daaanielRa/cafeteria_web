import './assets/css/main.css'

import { createPinia } from 'pinia'
import piniaPluginPersistedtate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setPersistence, browserSessionPersistence } from 'firebase/auth'
import { FirebaseService } from './services/firebase/firebaseService'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedtate)

app.use(router)
app.use(pinia)

setPersistence(FirebaseService.auth, browserSessionPersistence).catch((err) => {
  console.error(err)
})

app.mount('#app')
