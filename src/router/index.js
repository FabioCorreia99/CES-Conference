import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ScheduleView from '@/views/ScheduleView.vue';
import SpeakersView from '@/views/SpeakersView.vue';
import PartnersView from '@/views/PartnersView.vue';
import BuyTicketView from '@/views/BuyTicketView.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/schedule",
      name: "schedule",
      component: ScheduleView,
    },
    {
      path: "/speakers",
      name: "speakers",
      component: SpeakersView,
    },
    {
      path: "/partners",
      name: "partners",
      component: PartnersView,
    },
    {
      path: "/buy-ticket",
      name: "buyTicket",
      component: BuyTicketView,
      meta: { requiresAuth: true }, // login para comprar bilhetes
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   // const isAuthenticated = localStorage.getItem("isAuthenticated");

//   if (to.meta.requiresAuth && !isAuthenticated) {
//     // next("/login")
//     next({ path: "/login", query: { from: to.path } });
//   } else {
//     next();
//   }
// });

export default router;
