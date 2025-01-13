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
        <div class="d-flex justify-space-between my-1 w-100">
          <!-- Seleção dos dias -->
          <v-chip-group mandatory class="chips" v-model="daySelected" selected-class="scheduleSelected">
              <v-chip class="scheduleDays" rounded="lg" value="7" >/day 7</v-chip>
              <v-chip class="scheduleDays" rounded="lg" value="8" >/day 8</v-chip>
              <v-chip class="scheduleDays" rounded="lg" value="9">/day 9</v-chip>
          </v-chip-group>

          <!-- <v-speed-dial
            location="bottom right"
            transition="fade-transition"
            :close-on-content-click=false
            no-click-animation
          >
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn 
                v-bind="activatorProps"
                elevation="4" 
                size="large" 
                color='#6590D0'
                class="rounded-lg "
                ><span 
                    class="text-lowercase textBtn"
                    >/filters
                </span>
              </v-btn>
            </template>

            <v-chip-group v-for="line in talksStore.filters" multiple filter class="chips" selected-class="scheduleSelected" >
              <div class="d-flex justify-end	flex-wrap">
                <v-chip v-for="filter in line" class="scheduleDays" rounded="lg" :value="filter" >{{ filter }}</v-chip>
              </div>
            </v-chip-group> -->
            <!-- <v-chip-group multiple filter class="chips" selected-class="scheduleSelected" >
              <div class="d-flex justify-center	flex-wrap">
                <v-chip class="scheduleDays" rounded="lg" value="71" >filter5</v-chip>
                <v-chip class="scheduleDays" rounded="lg" value="34" >filter6</v-chip>
                <v-chip class="scheduleDays" rounded="lg" value="95">filter7</v-chip>
                <v-chip class="scheduleDays" rounded="lg" value="7653" >filter8</v-chip>
              </div>
            </v-chip-group> -->
          <!-- </v-speed-dial> -->
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
            <v-row> <!-- Criação dos Cards -->
              <v-col v-for="talk in talksStore.getTalksByDayandHourFilted(daySelected,hour,selected)" lg="4" md="6" sm="12" class="d-flex justify-center" >
                <!-- Criação da Dialog  -->
                <v-dialog max-width="25rem">
                  <!--Card-->
                  <template v-slot:activator="{ props: activatorProps }"> 
                    <TalksCard 
                      v-bind="activatorProps" 
                      :talkId="talk.id" 
                      :title="talk.title" 
                      :summary="talk.summary" 
                      :speaker="speakersStore.getSpeakerById(talk.speaker)"
                    /> 
                  </template>
                  <!--Dialog-->
                  <template v-slot:default="{ isActive }">
                    <v-card
                      prepend-icon="mdi-package"
                      text="When using the activator slot, you must bind the slot props to the activator element."
                      title="Slot Activator"
                    >
                      <template v-slot:actions>
                        <v-btn
                          class="ml-auto"
                          text="Close"
                          @click="isActive.value = false"
                        ></v-btn>
                      </template>
                    </v-card>
                  </template>
                </v-dialog>
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

import { useTalksStore } from '@/stores/talks.js';
import { useSpeakersStore } from '../stores/speakers';


export default {
    name: "ScheduleView",
    components: {
        Navbar,
        SpeakersCard,
        TalksCard,
    },
    data() {
      return {
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

.scheduleSelected{
  background-color: var(--color-orange) !important;
  color: black !important;
}
.chips span{
  color: var(--color-white) !important;
}
</style>
