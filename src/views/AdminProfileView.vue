<template>
  <!-- Navbar -->
  <header>
    <Navbar />
  </header>

  <v-app>
    <!-- Layout Principal -->
    <v-container>
      <v-app-bar title="Admin Settings" dark app class="mt-0"></v-app-bar>

      <!-- Navegação Lateral -->
      <v-navigation-drawer app width="180">
        <v-list>
          <v-list-item
            title="Users"
            class="nav-item"
            @click="currentContent = 'Users'"
          ></v-list-item>
          <v-list-item
            title="Partners"
            class="nav-item"
            @click="currentContent = 'Partners'"
          ></v-list-item>
          <v-list-item
            title="Forum Topic"
            class="nav-item"
            @click="currentContent = 'Forum Topic'"
          ></v-list-item>
          <v-list-item
            title="Talks"
            class="nav-item"
            @click="currentContent = 'Talks'"
          ></v-list-item>
        </v-list>

        <div class="logout-container">
          <RedBtnToWhite :handleClick="logoutUser" :value="'logout'" />
        </div>
      </v-navigation-drawer>

      <v-main class="admin-content">
        <UsersAdminContent v-if="currentContent === 'Users'" :users="users" />

        <PartnersAdminContent v-if="currentContent === 'Partners'" />
        <ForumAdminContent v-if="currentContent === 'Forum Topic'" />
        <TalksAdminContent v-if="currentContent === 'Talks'" />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import RedBtnToWhite from "@/components/RedBtnToWhite.vue";
import UsersAdminContent from "@/components/UsersAdminContent.vue";
import PartnersAdminContent from "@/components/PartnersAdminContent.vue";
import ForumAdminContent from "@/components/ForumAdminContent.vue";
import TalksAdminContent from "@/components/TalksAdminContent.vue";
import { useUsersStore } from "@/stores/users";
export default {
  components: {
    Navbar,
    RedBtnToWhite,
    UsersAdminContent,
    PartnersAdminContent,
    ForumAdminContent,
    TalksAdminContent,
  },
  data() {
    return {
      currentContent: "Users",
      store: useUsersStore(),
    };
  },
  computed: {
    users() {
      return this.store.users || []; // Verifica se existe a propriedade users
    },
  },
  props: {
    adminId: {
      type: String,
      required: true,
    },
  },
  methods: {
    logoutUser() {
      this.store.logout();
      this.$router.push("/login");
    },
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
