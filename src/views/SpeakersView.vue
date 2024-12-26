<template>

<v-app id="inspire">
    <v-row>
      <!-- Navbar Column -->
      <v-col>
        <header>
            <Navbar />
        </header>
      </v-col>
    </v-row>
    
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="sp in speakersStore.speakers" :key="sp.id" sm="3" cols="6">
            <SpeakersCard 
                :id="sp.id" 
                :name="sp.firstName" 
                :subTitle="sp.lastName" 
                :image="sp.image"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
import SpeakersCard from '@/components/SpeakersCard.vue';
import { speakersStore } from '@/stores/speakers.js';
export default {
    name: "SpeakersView",
    components: {
        Navbar,
        SpeakersCard
    },
    data() {
        return {
            speakersStore: speakersStore()
        }
    },
    created () {
        this.speakersStore.fetchPersons()
    },

};
</script>
