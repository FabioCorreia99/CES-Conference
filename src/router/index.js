import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ScheduleView from "@/views/ScheduleView.vue";
import SpeakersView from "@/views/SpeakersView.vue";
import PartnersView from "@/views/PartnersView.vue";
import LoginView from "@/views/LoginView.vue";
import SpeakerProfileView from "@/views/SpeakerProfileView.vue";
import ProfileSettingsView from "@/views/ProfileSettingsView.vue";
import PartnersFormView from '@/views/PartnersFormView.vue';
import ForumView from '@/views/ForumView.vue';
import ForumTopicView from '@/views/ForumTopicView.vue';
import ForumCreateView from '@/views/ForumCreateView.vue';


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
          path: ":topciId",
          name: "forumTopic",
          component: ForumTopicView,
          props: true,
        },
        {
          path: "Create",
          name: "forumCreate",
          component: ForumCreateView,
          props: true,
        }
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
      path: "/login",// ver register
      name: "login",
      component: LoginView,
      children: [
        {
          path: ":userId", // Rota para perfil
          name: "profileSettings",
          component: ProfileSettingsView,
          props: true,
        },
        {
          path: "admin", // Rota para perfil
          name: "profileSettings", //+
          component: ProfileSettingsView, //+
          props: true,
        }
      ],
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
