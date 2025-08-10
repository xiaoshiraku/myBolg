import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
for(const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key, component)
}

app.use(router).use(ElementPlus).use(pinia).mount('#app')
