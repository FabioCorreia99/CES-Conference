import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ScheduleView from "@/views/ScheduleView.vue";
import SpeakersView from "@/views/SpeakersView.vue";
import PartnersView from "@/views/PartnersView.vue";
import LoginView from "@/views/LoginView.vue";
import ProfileSettingsView from "@/views/ProfileSettingsView.vue";
import AdminProfileView from "@/views/AdminProfileView.vue";
import CreateAccountView from "@/views/CreateAccountView.vue";
import PartnersFormView from "@/views/PartnersFormView.vue";
import SpeakerProfileView from "@/views/SpeakerProfileView.vue";
import ForumView from "@/views/ForumView.vue";
import ForumTopicView from "@/views/ForumTopicView.vue";
import ForumCreateView from "@/views/ForumCreateView.vue";
import { useUsersStore } from "@/stores/users";

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
      path: "/:speakerId",
      name: "SpeakerProfile",
      component: SpeakerProfileView,
    },
    {
      path: "/schedule",
      name: "schedule",
      component: ScheduleView,
    },
    {
      path: "/forum",
      name: "forum",
      component: ForumView,
      children: [
        {
          path: "Create",
          name: "forumCreate",
          component: ForumCreateView,
          props: true,
          meta: {requiresAuth: true},
        },
      ],
    },
    {
      path: "/topic/:topicId",
      name: "forumTopic",
      component: ForumTopicView,
      props: true,
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
    },
    {
      path: "/create-account",
      name: "createAccount",
      component: CreateAccountView,
    },
    {
      path: "/profile/:userId",
      name: "profileSettings",
      component: ProfileSettingsView,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: "/admin-profile/:adminId",
      name: "adminProfile",
      component: AdminProfileView,
      props: true,
      meta: { requiresAuth: true, requiresAdmin: true }, // Proteção de rota para admin
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useUsersStore();

  // Verificar autenticação para rotas protegidas
  if (to.meta.requiresAuth && !store.authentication) {
    // Redirecionar para login com a query "from"
    next({ path: "/login", query: { from: to.path } });
  } else if (to.meta.requiresAdmin && !store.isAdmin) {
    // Redirecionar para home com a query "from"
    next({ path: "/", query: { from: to.path, error: "Unauthorized" } });
  } else {
    next();
  }
});

export default router;
