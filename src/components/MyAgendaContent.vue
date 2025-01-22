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
            <span @click="removeFromAgenda(talk.id)" class="delete-icon">
              <TrashIcon />
            </span>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import { useTalksStore } from "@/stores/talks";
import { useUsersStore } from "@/stores/users";
import { TrashIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    TrashIcon,
  },
  setup() {
    const talksStore = useTalksStore();
    const usersStore = useUsersStore();

    const userLogged = usersStore.getUserLogged;
    const likedTalksIds = userLogged?.likedTalks || [];
    const likedTalks = talksStore.getLikedTalks(likedTalksIds);

    console.log("User logged:", userLogged);
    console.log("Liked Talks IDs:", likedTalksIds);
    console.log("Liked Talks:", likedTalks);

    // Remove uma talk dos favoritos
    const removeFromAgenda = (id) => {
      usersStore.removeLikedTalk(id);
    };

    return {
      likedTalks,
      removeFromAgenda,
    };
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

.delete-icon svg {
  width: 24px;
  height: 24px;
  color: #888;
  cursor: pointer;
}
</style>
