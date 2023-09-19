import { createRouter, createWebHistory } from "vue-router";

import CtdProject from "../threejs/CtdProject.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "CTD Project",
      component: CtdProject,
    },
  ],

});

export default router;
