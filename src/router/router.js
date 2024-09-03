import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import MtSchedulePage from "../views/MtSchedulePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/schedule",
    name: "schedule",
    component: MtSchedulePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
