import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import stor from './store'

const app = createApp(App)
app.use(stor)
app.use(router)
app.mount('#app')
