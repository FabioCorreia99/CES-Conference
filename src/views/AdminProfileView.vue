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
            title="Users"
            class="nav-item"
            :class="{ 'active-item': currentContent === 'Users' }"
            @click="currentContent = 'Users'"
          ></v-list-item>
          <v-list-item
            title="Partners"
            class="nav-item"
            :class="{ 'active-item': currentContent === 'Partners' }"
            @click="currentContent = 'Partners'"
          ></v-list-item>
          <v-list-item
            title="Forum Topic"
            class="nav-item"
            :class="{ 'active-item': currentContent === 'Forum Topic' }"
            @click="currentContent = 'Forum Topic'"
          ></v-list-item>
          <v-list-item
            title="Talks"
            class="nav-item"
            :class="{ 'active-item': currentContent === 'Talks' }"
            @click="currentContent = 'Talks'"
          ></v-list-item>
        </v-list>

        <div class="logout-container">
          <v-btn block color="error" @click="logoutUser"> Logout </v-btn>
        </div>
      </v-navigation-drawer>
      <v-main class="admin-content">
        <UsersAdminContent v-if="currentContent === 'Users'" />
        <PartnersAdminContent v-if="currentContent === 'Partners'" />
        <ForumAdminContent v-if="currentContent === 'Forum Topic'" />
        <TalksAdminContent v-if="currentContent === 'Talks'" />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import UsersAdminContent from "@/components/UsersAdminContent.vue";
import PartnersAdminContent from "@/components/PartnersAdminContent.vue";
import ForumAdminContent from "@/components/ForumAdminContent.vue";
import TalksAdminContent from "@/components/TalksAdminContent.vue";
import { useUsersStore } from "@/stores/users";
export default {
  components: {
    Navbar,
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
  mounted() {},
};
</script>

<style scoped>
.logout-container {
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 0 16px;
}

.admin-content {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 20px;
  padding: 20px;
  margin-top: 100px;
}

.v-main {
  overflow-y: auto;
}
</style>
