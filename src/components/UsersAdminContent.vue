<template>
  <v-container fluid class="pa-0 ma-0">
    <h2>Manage Users</h2>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Email</th>
          <th class="text-left">Name</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in nonAdminUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.Email }}</td>
          <td>
            <v-text-field
              v-model="user.name"
              density="compact"
              variant="plain"
              placeholder="Indefinido"
              class="no-border"
              @input="updateUserName(user.id, user.name)"
            ></v-text-field>
          </td>
          <td>
            <v-btn icon color="red" @click="deleteUser(user.id)">
              <TrashIcon class="delete-icon" />
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import { useUsersStore } from "@/stores/users";
import { TrashIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    TrashIcon,
  },
  computed: {
    nonAdminUsers() {
      const store = useUsersStore();
      return store.users.filter((user) => user.role !== "admin");
    },
  },
  methods: {
    deleteUser(userId) {
      if (confirm("Are you sure you want to delete this user?")) {
        const store = useUsersStore();
        store.users = store.users.filter((user) => user.id !== userId);
        alert("User deleted successfully!");
      }
    },
    updateUserName(userId, newName) {
      const store = useUsersStore();
      const user = store.users.find((u) => u.id === userId);
      if (user) {
        user.name = newName.trim() !== "" ? newName : "Indefinido";
      }
    },
  },
};
</script>

<style scoped>
.v-container {
  max-width: 100%;
  padding-left: 16px; /* Ajusta conforme necessário para ficar junto à navbar */
}

h2 {
  margin-bottom: 20px;
  color: #26466d;
}

.delete-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.v-table {
  width: 100%;
  border-collapse: collapse;
}

.v-table th,
.v-table td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

.v-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}
</style>
