<template>
  <v-container>
    <h2 class="mb-4">Manage Forum Topics</h2>

    <v-table class="elevation-1">
      <thead>
        <tr>
          <th class="text-left">Title</th>
          <th class="text-left">Author</th>
          <th class="text-left">Comments</th>
          <th class="text-left">Likes</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="topic in paginatedTopics" :key="topic.id">
          <td>{{ topic.title }}</td>
          <td>{{ topic.author }}</td>
          <td>{{ topic.comments.length }}</td>
          <td>{{ topic.likes.length }}</td>
          <td>
            <v-btn icon variant="text" @click="deleteForum(topic.id)">
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
import { useTopicsStore } from "@/stores/forum";
import { useUsersStore } from "@/stores/users";

export default {
  data() {
    return {
      forumStore: useTopicsStore(),
      usersStore: useUsersStore(),
      page: 1,
      itemsPerPage: 10, // Define o número de tópicos por página
    };
  },
  computed: {
    forumTopics() {
      return this.forumStore.topics || [];
    },
    // Obtém os tópicos paginados
    paginatedTopics() {
      const start = (this.page - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.forumTopics.slice(start, end);
    },
    // Calcula o total de páginas necessárias
    totalPages() {
      return Math.ceil(this.forumTopics.length / this.itemsPerPage);
    },
  },
  methods: {
    deleteForum(id) {
      if (confirm("Tem a certeza que deseja eliminar este tópico?")) {
        this.forumStore.removeTopic(id);
        if (this.page > this.totalPages) this.page--; // Ajusta a página após eliminação
      }
    },
    prevPage() {
      if (this.page > 1) this.page--;
    },
    nextPage() {
      if (this.page < this.totalPages) this.page++;
    },
  },
};
</script>

<style scoped>
.icon-style {
  width: 24px;
  height: 24px;
  color: #888;
  cursor: pointer;
}

.v-table {
  border-radius: 10px;
}

th {
  font-weight: bold;
  background-color: #f5f5f5;
  padding: 12px;
}

td {
  padding: 12px;
}

.v-btn {
  margin: 0 4px;
}

.v-alert {
  text-align: center;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
}
</style>
