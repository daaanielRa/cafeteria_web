import './assets/css/main.css'

import { browserSessionPersistence, setPersistence } from 'firebase/auth'
import { createPinia } from 'pinia'
import piniaPluginPersistedtate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FirebaseService } from './services/firebaseService'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedtate)

app.use(router)
app.use(pinia)

setPersistence(FirebaseService.auth, browserSessionPersistence).catch((err) => {
  console.error(err)
})

app.mount('#app')
