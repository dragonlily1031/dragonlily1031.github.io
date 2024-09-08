import { createRouter, createWebHashHistory } from "vue-router";

import MtHomePage from "@/pages/MtHomePage.vue";
import MtSchedulePage from "@/pages/MtSchedulePage.vue";
import MtEmergencyPage from "@/pages/MtEmergencyPage.vue";

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
  {
    path: "/emergency",
    name: "emergency",
    component: MtEmergencyPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
