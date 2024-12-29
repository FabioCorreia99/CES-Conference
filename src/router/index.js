import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ScheduleView from "@/views/ScheduleView.vue";
import SpeakersView from "@/views/SpeakersView.vue";
import PartnersView from "@/views/PartnersView.vue";
import LoginView from "@/views/LoginView.vue";
import SpeakerProfileView from "@/views/SpeakerProfileView.vue";
import ProfileSettingsView from "@/views/ProfileSettingsView.vue";
import PartnersFormView from "@/views/PartnersFormView.vue";
import ForumView from "@/views/ForumView.vue";
import ForumTopicView from "@/views/ForumTopicView.vue";
import ForumCreateView from "@/views/ForumCreateView.vue";
import CreateAccount from "@/views/CreateAccountView.vue";
import { useUsersStore } from "@/stores/users";
import CreateAccountView from "@/views/CreateAccountView.vue";

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
          path: "SpeakerProfile",
          name: "SpeakerProfile",
          component: SpeakerProfileView,
        },
      ],
    },
    {
      path: "/forum",
      name: "forum",
      component: ForumView,
      children: [
        {
          path: ":topicId",
          name: "forumTopic",
          component: ForumTopicView,
          props: true,
        },
        {
          path: "Create",
          name: "forumCreate",
          component: ForumCreateView,
          props: true,
        },
      ],
    },
    {
      path: "/partners",
      name: "partners",
      component: PartnersView,
      children: [
        {
          path: "PartnersForm",
          name: "PartnersForm",
          component: PartnersFormView,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      children: [
        {
          path: ":userId", // Rota para perfil Utilizador
          name: "profileSettings",
          component: ProfileSettingsView,
          props: true,
        },
        {
          path: "admin", // Rota para perfil Admin
          name: "adminProfile",
          component: ProfileSettingsView,
          props: true,
        },
      ],
    },
    {
      path: "/create-account",
      name: "createAccount",
      component: CreateAccountView },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useUsersStore();

  if (to.meta.requiresAuth && !store.authentication) {
    next({ path: "/login", query: { from: to.path } });
  } else {
    next();
  }
});

export default router;
