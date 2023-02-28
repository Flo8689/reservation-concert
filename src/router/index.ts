import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/event/:id",
      name: "event",
      component: () => import("../views/EventView.vue"),
      props: true,
    },
    {
      path: "/event/:id/booking",
      name: "booking",
      component: () => import("../views/BookingView.vue"),
      props: true,
    },
    {
      path: "/event/:id/booking/summary",
      name: "summary",
      component: () => import("../views/SummaryView.vue"),
      props: true,
    },
    {
      path: "/event/:id/booking/summary/thanks",
      name: "thanks",
      component: () => import("../views/ThanksView.vue"),
      props: true,
    }
  ],
});

export default router;
