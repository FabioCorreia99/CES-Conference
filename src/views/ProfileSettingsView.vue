<template>
  <!-- Navbar -->
  <header>
    <Navbar />
  </header>

  <v-app>
    <!-- Layout Principal -->
    <v-container>
      <v-app-bar title="Profile Settings" dark app></v-app-bar>

      <!-- Navegação Lateral -->
      <v-navigation-drawer app>
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
          <v-btn block color="error" @click="logoutUser"> Logout </v-btn>
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
        <SettingsContent v-if="currentContent === 'Settings'" />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ProfileContent from "@/components/ProfileContent.vue";
import MyAgendaContent from "@/components/MyAgendaContent.vue";
import MyTicketContent from "@/components/MyTicketContent.vue";
import SettingsContent from "@/components/SettingsContent.vue";
import { useUsersStore } from "@/stores/users";

export default {
  components: {
    Navbar,
    ProfileContent,
    MyAgendaContent,
    MyTicketContent,
    SettingsContent,
  },
  data() {
    return {
      currentContent: "Profile", // Conteúdo padrão
      defaultPicture: "https://placehold.co/120",
      store: useUsersStore(),
      profile: {
        picture: null,
        name: "",
        about: "",
      },
    };
  },
  methods: {
    logoutUser() {
      this.store.logout();
      this.$router.push("/login");
    },
    saveChanges(updatedProfile) {
      this.store.updateUser(updatedProfile);
      alert("Profile updated successfully!");
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
  width: 100%;
  padding: 0 16px;
}

.profile-content {
  padding: 20px;
  margin-top: 100px;
}

.v-main {
  overflow-y: auto; /* Para permitir rolagem se necessário */
}
</style>
