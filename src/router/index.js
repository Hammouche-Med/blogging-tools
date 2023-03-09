import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PwdGen from "../views/AuthTools.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/password-generator",
      name: "password-generator",
      component: PwdGen,
    },
  ],
});

export default router;
