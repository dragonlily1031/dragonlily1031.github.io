import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store";
import vuetify from "./plugins/vuetify";
import MtApi from "./api/MtApi.js";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(vuetify);
app.config.globalProperties.$mtapi = MtApi;
app.mount("#app");
