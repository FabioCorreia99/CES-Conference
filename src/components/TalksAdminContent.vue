<template>
  <v-container>
    <h3 class="mb-4">Manage Talks</h3>

    <v-table class="elevation-1">
      <thead>
        <tr>
          <th class="text-left">Speaker Name</th>
          <th class="text-left">Talk Name</th>
          <th class="text-left">Description</th>
          <th class="text-left">Room</th>
          <th class="text-left">Date</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="talk in paginatedTalks" :key="talk.id">
          <td>{{ getSpeakerName(talk.speaker) }}</td>
          <td>
            <v-text-field
              v-model="talk.title"
              variant="outlined"
              density="compact"
              hide-details
              class="wide-field"
            ></v-text-field>
          </td>
          <v-textarea
            v-model="talk.summary"
            variant="outlined"
            density="compact"
            hide-details
            class="wide-field"
            rows="3"
          ></v-textarea>

          <td>
            <v-text-field
              v-model="talk.room"
              variant="outlined"
              density="compact"
              hide-details
              class="small-field"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="talk.day"
              type="number"
              variant="outlined"
              density="compact"
              hide-details
              class="small-field"
            ></v-text-field>
          </td>
          <td>
            <v-btn icon variant="text" @click="saveTalk(talk)">
              <v-icon class="icon-style">mdi-content-save</v-icon>
            </v-btn>
            <v-btn icon variant="text" @click="deleteTalk(talk.id)">
              <v-icon class="icon-style">mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <div class="pagination">
      <v-btn :disabled="page === 1" @click="prevPage">Previous</v-btn>
      <span>Page {{ page }} of {{ totalPages }}</span>
      <v-btn :disabled="page === totalPages" @click="nextPage">Next</v-btn>
    </div>
  </v-container>
</template>

<script>
import { useTalksStore } from "@/stores/talks";
import { useSpeakersStore } from "@/stores/speakers";

export default {
  props: {
    users: {
      type: Array,
      required: false,
      usersList: [],
    },
  },
  data() {
    return {
      talksStore: useTalksStore(),
      speakersStore: useSpeakersStore(),
      page: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    paginatedTalks() {
      const start = (this.page - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.talksStore.talks.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.talksStore.talks.length / this.itemsPerPage);
    },
  },
  methods: {
    getSpeakerName(speakerId) {
      const speaker = this.speakersStore.getSpeakerById(speakerId);
      if (speaker) {
        return speaker.firstName + " " + speaker.lastName;
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
      }
    },
    saveTalk(talk) {
      this.talksStore.updateTalk(talk);
      alert("Talk updated successfully!");
    },
    deleteTalk(id) {
      if (confirm("Are you sure you want to delete this talk?")) {
        this.talksStore.removeTalk(id);
      }
    },
  },
  async mounted() {
    await this.speakersStore.fetchPersons();
  },
};
</script>

<style scoped>
.v-table {
  border-radius: 10px;
}

th {
  font-weight: bold;
  background-color: var(--vt-c-text-dark-2);
  padding: 12px;
}

td {
  padding: 12px;
}

.v-btn {
  margin: 0 4px;
}

.icon-style {
  width: 24px;
  height: 24px;
  color: var(--vt-c-text-light-2);
  cursor: pointer;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
}

.wide-field {
  width: 250px;
}

.medium-field {
  width: 150px;
}

.small-field {
  width: 80px;
}
</style>
