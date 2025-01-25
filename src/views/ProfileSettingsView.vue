<template>
  <!-- Navbar -->
  <header>
    <Navbar />
  </header>

  <v-app>
    <!-- Layout Principal -->
    <v-container>
      <v-app-bar dark app class="mt-0">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Profile Settings</v-toolbar-title>
      </v-app-bar>

      <!-- Navegação Lateral -->
      <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        :permanent="$vuetify.display.mdAndUp"
        width="180"
      >
        <v-list>
          <v-list-item
            title="Profile"
            class="nav-item"
            @click="currentContent = 'Profile'"
          ></v-list-item>
          <v-list-item
            title="My Agenda"
            class="nav-item"
            @click="currentContent = 'My Agenda'"
          ></v-list-item>
          <v-list-item
            title="My Ticket"
            class="nav-item"
            @click="currentContent = 'My Ticket'"
          ></v-list-item>
          <v-list-item
            title="Settings"
            class="nav-item"
            @click="currentContent = 'Settings'"
          ></v-list-item>
        </v-list>

        <div class="logout-container">
          <RedBtnToWhite :handleClick="logoutUser" :value="'logout'" />
        </div>
      </v-navigation-drawer>

      <!-- Conteúdo Principal -->
      <v-main class="profile-content">
        <ProfileContent
          v-if="currentContent === 'Profile'"
          :profile="profile"
          :defaultPicture="defaultPicture"
          @save="saveChanges"
        />

        <MyAgendaContent v-if="currentContent === 'My Agenda'" />
        <MyTicketContent v-if="currentContent === 'My Ticket'" />

        <SettingsContent
          v-if="currentContent === 'Settings'"
          :settings="settings"
          @save="saveChanges"
        />
      </v-main>
    </v-container>
  </v-app>
  <link
    href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css"
    rel="stylesheet"
  />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import RedBtnToWhite from "@/components/RedBtnToWhite.vue";
import ProfileContent from "@/components/ProfileContent.vue";
import MyAgendaContent from "@/components/MyAgendaContent.vue";
import MyTicketContent from "@/components/MyTicketContent.vue";
import SettingsContent from "@/components/SettingsContent.vue";
import { useUsersStore } from "@/stores/users";

export default {
  components: {
    Navbar,
    RedBtnToWhite,
    ProfileContent,
    MyAgendaContent,
    MyTicketContent,
    SettingsContent,
  },
  data() {
    return {
      currentContent: "Profile", // Conteúdo padrão
      drawer: true, // Controla a visibilidade do drawer
      defaultPicture: "https://placehold.co/120",
      store: useUsersStore(),
      profile: {
        picture: null,
        name: "",
        about: "",
      },
    };
  },
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  methods: {
    logoutUser() {
      this.store.logout();
      this.$router.push("/login");
    },
    saveChanges(updatedData) {
      this.store.updateUser({ id: this.store.currentUserId, ...updatedData });
      alert("Changes saved successfully!");
    },
    changeContent(content) {
      this.currentContent = content;
      this.drawer = false; // Fecha o menu após selecionar
    },
  },
  mounted() {
    const store = useUsersStore();
    const currentUser = store.getUserById(store.currentUserId);
    if (currentUser) {
      this.profile = {
        picture: currentUser.picture,
        name: currentUser.name,
        about: currentUser.about || "",
      };
    }
  },
};
</script>

<style scoped>
.logout-container {
  position: absolute;
  bottom: 20px;
  padding: 0 16px;
}
</style>
