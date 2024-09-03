import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'
import vuetify from "./plugins/vuetify";

createApp(App).use(store).use(router).use(vuetify).mount('#app')
