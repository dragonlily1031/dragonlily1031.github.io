import { createRouter, createWebHashHistory } from "vue-router";

import MtHomePage from "@/pages/MtHomePage.vue";
import MtSchedulePage from "@/pages/MtSchedulePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MtHomePage,
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
