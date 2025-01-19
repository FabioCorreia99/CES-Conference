<template>
<v-app>
  <header class="position-absolute">
    <Navbar />
  </header>

  <v-main>
    <!-- Intro -->
    <v-row class="bg-intro mx-0 pt-10 w-100 mb-8">
      <v-col>
        <h1 class="introTitle my-12">Schedule</h1>
        <h6 class="textTitle my-12 w-75">Explore your options to connect, learn and be inspired at CES.</h6>
        <div class="d-flex justify-start ga-6 my-1 w-100">
          <!-- Seleção dos dias -->
          <v-chip-group mandatory class="chips" v-model="daySelected" selected-class="scheduleSelected">
              <v-chip class="scheduleDays" rounded="lg" value="7" >/day 7</v-chip>
              <v-chip class="scheduleDays" rounded="lg" value="8" >/day 8</v-chip>
              <v-chip class="scheduleDays" rounded="lg" value="9">/day 9</v-chip>
          </v-chip-group class="chips"  color="primary">
          <div v-if="usersStore.authentication">
            <HeartBtn v-on:clicked="active"/>  
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-chip-group :mobile=false multiple filter class="mx-lg-16 chips" selected-class="scheduleSelected" v-model="selected" >
          <v-chip  v-for="filter in talksStore.filters" :key="filter" class="scheduleDays" rounded="lg" :value="filter" >{{ filter }}</v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
    <!-- Secção do calendario -->
    <v-row class="mt-12">
      <v-expansion-panels 
        focusable 
        class="w-100" 
        multiple  
        bg-color="rgba(189, 199, 211, 0.3)" 
        elevation="0" 
        collapse-icon="mdi-chevron-up"
        expand-icon="mdi-chevron-down" 
        v-model="panels"
      >
        <v-expansion-panel v-for="hour in hours" class="scheduleMenu mb-4" :value="hour">
          <!-- Titulo --> 
          <v-expansion-panel-title class="text-h6">{{ hour }}</v-expansion-panel-title> 
          <!-- Corpo -->
          <v-expansion-panel-text>
            <v-row v-if="isFavActive"> <!-- Criação dos Cards com gosto -->
              <v-col v-for="talk in talksStore.getTalksByDayandHourLiked(daySelected,hour,usersStore.getUserLogged.likedTalks)" lg="4" md="6" sm="12" class="d-flex justify-center" >
                  <!--Card-->
                  <TalksCard
                    :liked="usersStore.authentication && usersStore.getUserLogged?.likedTalks.includes(talk.id) || false"
                    :logged="usersStore.authentication"
                    :talkId="talk.id" 
                    :title="talk.title" 
                    :summary="talk.summary" 
                    :speaker="speakersStore.getSpeakerById(talk.speaker)"
                  />
                </v-col>
            </v-row>
            <v-row v-else> <!-- Criação de todos os Cards -->
                  <v-col v-for="talk in talksStore.getTalksByDayandHourFilted(daySelected,hour,selected)" lg="4" md="6" sm="12" class="d-flex justify-center" >
                  <!--Card-->
                  <TalksCard
                    :liked="usersStore.authentication && usersStore.getUserLogged?.likedTalks.includes(talk.id) || false"
                    :logged="usersStore.authentication"
                    :talkId="talk.id" 
                    :title="talk.title" 
                    :summary="talk.summary" 
                    :speaker="speakersStore.getSpeakerById(talk.speaker)"
                  />
                </v-col>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>

    

  </v-main>
  <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam harum dolor aliquam at incidunt laborum enim officiis magnam commodi soluta voluptatum, aspernatur velit ducimus necessitatibus voluptas aperiam facere fuga?</h6>
</v-app>

<link href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css" rel="stylesheet">
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import SpeakersCard from '@/components/SpeakersCard.vue';
import TalksCard from '@/components/TalksCard.vue';
import HeartBtn from '@/components/HeartBtn.vue';

import { useTalksStore } from '@/stores/talks.js';
import { useSpeakersStore } from '../stores/speakers';
import { useUsersStore } from '@/stores/users';


export default {
    name: "ScheduleView",
    components: {
        Navbar,
        SpeakersCard,
        TalksCard,
        HeartBtn
    },
    data() {
      return {
        isFavActive: false,
        usersStore: useUsersStore(),
        likedTalks: [],
        talksStore: useTalksStore(),
        speakersStore: useSpeakersStore(),
        panels: [], // Lista dos índices de painéis ativos
        selected: [],
        hours: [
          "9:00",
          "10:00",
          "11:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
        ],
        daySelected: "7",
      }
    },
    methods: {
      active (e){
        this.isFavActive = e
      }
    },
    mounted () {
      // Preencher activePanels com índices para abrir todos os painéis
      this.panels = this.hours.map((_, index) => index);
    },
    beforeMount () {
      this.talksStore.init();
      try {
        this.speakersStore.fetchPersons();
      } catch (error) {
        alert(error.message)
      };
    },
}
</script>

<style>
.scheduleMenu{
  color: var(--color-dark-blue) !important;
  padding: 0 6.5rem !important;
}
.v-expansion-panel .v-icon {
  color: var(--color-orange) !important;
}
.scheduleDays{
  background-color: var(--color-dark-blue) !important;
  transition: 0.5s all;
}
.v-expansion-panel-title__overlay {
   background-color: transparent !important;
}

.scheduleSelected{
  background-color: var(--color-orange) !important;
  color: black !important;
}
.chips span{
  color: var(--color-white) !important;
}

@media only screen and (max-width: 676px) {
  .scheduleMenu{
      padding: 0 0 !important;
  }
}
</style>
