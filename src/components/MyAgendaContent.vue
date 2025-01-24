<template>
  <div>
    <h3>Personal Agenda</h3>
    <v-table class="my-agenda-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Speaker</th>
          <th>Day</th>
          <th>Time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="talk in likedTalks" :key="talk.id">
          <td>{{ talk.title }}</td>
          <td>{{ talk.speaker }}</td>
          <td>{{ talk.day }}</td>
          <td>{{ talk.hour }}</td>
          <td>
            <v-btn
              icon
              variant="text"
              @click="removeFromAgenda(talk.id)"
              class="delete-btn"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>

  <link
    href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css"
    rel="stylesheet"
  />
</template>

<script>
import { useTalksStore } from "@/stores/talks";
import { useUsersStore } from "@/stores/users";

export default {
  data() {
    const talksStore = useTalksStore();
    const usersStore = useUsersStore();

    return {
      talksStore,
      usersStore,
      userLogged: usersStore.getUserLogged,
    };
  },
  computed: {
    // Obtém as talks favoritas do utilizador logado
    likedTalks() {
      const likedTalksIds = this.userLogged?.likedTalks || [];
      return this.talksStore.getLikedTalks(likedTalksIds);
    },
  },
  methods: {
    // Remove uma talk dos favoritos
    removeFromAgenda(id) {
      this.usersStore.removeLikedTalk(id);
    },
  },
};
</script>

<style scoped>
.my-agenda-table {
  width: 100%;
  margin-top: 20px;
  border: 1px solid #ddd;
}

th {
  text-align: left;
  padding: 10px;
  background-color: #f2f2f2;
  font-weight: bold;
  font-size: 16px;
}

td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.delete-btn {
  color: #888;
  cursor: pointer;
}
</style>
