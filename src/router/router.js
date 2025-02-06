import { createRouter, createWebHashHistory } from "vue-router";

import MtLoginPage from "@/pages/MtLoginPage.vue";
import MtHomePage from "@/pages/MtHomePage.vue";
import MtSchedulePage from "@/pages/MtSchedulePage.vue";
import MtEmergencyPage from "@/pages/MtEmergencyPage.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: MtLoginPage,
  },
  {
    path: "/home",
    name: "home",
    component: MtHomePage,
  },
  {
    path: "/schedule",
    name: "schedule",
    component: MtSchedulePage,
  },
  {
    path: "/emergency",
    name: "emergency",
    component: MtEmergencyPage,
  },
];

const router = createRouter({
  base: process.env.BASE_URL,
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
