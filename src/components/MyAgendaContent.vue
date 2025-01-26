<template>
  <div>
    <h3 class="mb-4">Personal Agenda</h3>
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
          <td>{{ getSpeakerName(talk.speaker) }}</td>
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
</template>

<script>
import { useTalksStore } from "@/stores/talks";
import { useUsersStore } from "@/stores/users";
import { useSpeakersStore } from "@/stores/speakers";

export default {
  data() {
    const talksStore = useTalksStore();
    const usersStore = useUsersStore();
    const speakersStore = useSpeakersStore();

    return {
      talksStore,
      usersStore,
      speakersStore,
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
    // Obtém o nome do speaker
    getSpeakerName(speakerId) {
      const speaker = this.speakersStore.getSpeakerById(speakerId);
      if (speaker) {
        return speaker.firstName + " " + speaker.lastName;
      }
    },
  },
  async mounted() {
    await this.speakersStore.fetchPersons();
  },
};
</script>

<style scoped>
.my-agenda-table {
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
}

th {
  font-weight: bold;
  padding: 12px;
  background-color: var(--vt-c-text-dark-2);
}

td {
  padding: 12px;
}

.delete-btn {
  color: var(--vt-c-text-light-2);
  cursor: pointer;
}
</style>
