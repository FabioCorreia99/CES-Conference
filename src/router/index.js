import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ScheduleView from "@/views/ScheduleView.vue";
import SpeakersView from "@/views/SpeakersView.vue";
import PartnersView from "@/views/PartnersView.vue";
import BuyTicketView from "@/views/BuyTicketView.vue";
import LoginView from "@/views/LoginView.vue";
import PanelDiscussionView from "@/views/PanelDiscussionView.vue";
import ProfileSettingsView from "@/views/ProfileSettingsView.vue";
import FavouritesTalksView from "@/views/FavouritesTalksView.vue";
import PersonalAgendaView from "@/views/PersonalAgendaView.vue";
import TicketClientsView from '@/views/TicketClientsView.vue';
import TicketCompaniesView from '@/views/TicketCompaniesView.vue';

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
      children: [
        {
          path: "panel-discussion", // Rota filha
          name: "panelDiscussion",
          component: PanelDiscussionView,
          meta: { requiresAuth: true }, // login para participar no fórum
        },
      ],
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
      children: [
        {
          path: "clients",
          name: "ticketClients",
          component: TicketClientsView,
        },
        {
          path: "companies",
          name: "ticketCompanies",
          component: TicketCompaniesView,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      children: [
        {
          path: "profile-settings", // Rota para perfil
          name: "profileSettings",
          component: ProfileSettingsView,
        },
        {
          path: "favourites-talks", // Rota para talks favoritas
          name: "favouritesTalks",
          component: FavouritesTalksView,
        },
        {
          path: "personal-agenda", // Rota para agenda pessoal
          name: "personalAgenda",
          component: PersonalAgendaView,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ path: "/login", query: { from: to.path } });
  } else {
    next();
  }
});

export default router;
