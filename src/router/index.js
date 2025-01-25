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
import BuyTicketView from "@/views/BuyTicketView.vue";
import { useUsersStore } from "@/stores/users";

const routes =  [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: 'CES Conference' }
    },
    {
      path: "/schedule",
      name: "schedule",
      component: ScheduleView,
      meta: { title: 'CES Schedule' }
    },
    {
      path: "/speakers",
      name: "speakers",
      component: SpeakersView,
      meta: { title: 'CES Speakers' }

    },
    {
      path: "/:speakerId",
      name: "SpeakerProfile",
      component: SpeakerProfileView,
      meta: { title: 'CES Speaker' }
    },
    {
      path: "/forum",
      name: "forum",
      component: ForumView,
      meta: { title: 'CES Forum' },
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
      meta: { title: 'CES Topic' }

    },
    {
      path: "/partners",
      name: "partners",
      component: PartnersView,
      meta: { title: 'CES Partners' },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: { title: 'CES About' }
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { title: 'CES Login' }
    },
    {
      path: "/create-account",
      name: "createAccount",
      component: CreateAccountView,
      meta: { title: 'CES Register' }
    },
    {
      path: "/profile/:userId",
      name: "profileSettings",
      component: ProfileSettingsView,
      props: true,
      meta: { 
        requiresAuth: true,
        title: "CES Profile"
      },
    },
    {
      path: "/admin-profile/:adminId",
      name: "adminProfile",
      component: AdminProfileView,
      props: true,
      meta: { requiresAuth: true, requiresAdmin: true }, // Proteção de rota para admin
    },
    {
      path: "/buyTickets",
      name: "buyTickets",
      component: BuyTicketView,
      meta: { 
        requiresAuth: true,
        title: "CES Ticket"
      },
    },
    {
      path: "/PartnersForm",
      name: "PartnersForm",
      component: PartnersFormView,
    },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Se houver uma posição salva, retorna para ela (ex.: ao usar o botão "voltar")  
    if (savedPosition) {
      return savedPosition;
    }
    // Caso contrário, rola para o topo
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const store = useUsersStore();

  //Actualiza o title
  const defaultTitle = 'CES Conference';
  document.title = to.meta.title || defaultTitle;

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
