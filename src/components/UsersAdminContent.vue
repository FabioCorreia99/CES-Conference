<template>
  <v-container fluid class="pa-0 ma-0">
    <h3 class="mb-4">Manage Users</h3>

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
        <tr v-for="user in paginatedUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.Email }}</td>
          <td>
            <v-text-field
              v-model="user.name"
              density="compact"
              variant="plain"
              placeholder="Indefinido"
              class="no-border"
            ></v-text-field>
          </td>
          <td>
            <v-btn icon variant="text" @click="deleteUser(user.id)">
              <v-icon class="icon-style">mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <!-- Paginação -->
    <div class="pagination">
      <v-btn :disabled="page === 1" @click="prevPage">Anterior</v-btn>
      <span>Página {{ page }} de {{ totalPages }}</span>
      <v-btn :disabled="page === totalPages" @click="nextPage">Seguinte</v-btn>
    </div>
  </v-container>
</template>

<script>
import { useUsersStore } from "@/stores/users";

export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      store: useUsersStore(), // Instância da store dos utilizadores
      page: 1, // Página atual
      itemsPerPage: 10, // Número de utilizadores por página
    };
  },
  computed: {
    // Filtra apenas os utilizadores que não são administradores
    nonAdminUsers() {
      return this.users.filter((user) => user.role !== "admin");
    },
    // Obtém os utilizadores da página atual
    paginatedUsers() {
      const start = (this.page - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.nonAdminUsers.slice(start, end);
    },
    // Calcula o total de páginas necessárias
    totalPages() {
      return Math.ceil(this.nonAdminUsers.length / this.itemsPerPage);
    },
  },
  methods: {
    // Retrocede uma página na lista de utilizadores
    prevPage() {
      if (this.page > 1) this.page--;
    },
    // Avança para a próxima página na lista de utilizadores
    nextPage() {
      if (this.page < this.totalPages) this.page++;
    },
    // Remove um utilizador da lista
    deleteUser(userId) {
      if (confirm("Tem a certeza que deseja eliminar este utilizador?")) {
        this.store.users = this.store.users.filter(
          (user) => user.id !== userId
        );
        alert("Utilizador eliminado com sucesso!");
        if (this.page > this.totalPages) this.page--; // Ajusta a página após eliminação
      }
    },
  },
};
</script>

<style scoped>
.icon-style {
  width: 24px;
  height: 24px;
  color: var(--vt-c-text-light-2);
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
  background-color: var(--vt-c-text-dark-2);
  font-weight: bold;
}

.v-table {
  border-radius: 10px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
}
</style>
