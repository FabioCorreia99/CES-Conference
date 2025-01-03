<template>
<v-app>
  <header class="position-absolute">
    <Navbar />
  </header>

  <v-main>
    <v-row class="bg-intro mx-0 pt-10 w-100 mb-8">
      <v-col>
        <h1 class="introTitle my-12">Schedule</h1>
        <h6 class="textTitle my-12 w-75">Explore your options to connect, learn and be inspired at CES.</h6>
        <div class="d-flex justify-space-around my-1 w-50"></div>
      </v-col>
    </v-row>
            
    <v-row class="mt-16">
      <v-expansion-panels class="w-100" multiple  bg-color="rgba(189, 199, 211, 0.3)" elevation="0" collapse-icon="mdi-chevron-up" expand-icon="mdi-chevron-down">
        <v-expansion-panel v-for="hour in hours" class="scheduleMenu mb-4">
          <v-expansion-panel-title class="text-h6">{{ hour }}</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row>
              <v-col v-for="n in 5" lg="4" md="6" sm="12" class="d-flex justify-center">
                <TalksCard/>
              </v-col>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-main>
<!-- 
   -->
  <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam harum dolor aliquam at incidunt laborum enim officiis magnam commodi soluta voluptatum, aspernatur velit ducimus necessitatibus voluptas aperiam facere fuga?</h6>
</v-app>

<link href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css" rel="stylesheet">
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import SpeakersCard from '@/components/SpeakersCard.vue';
import TalksCard from '@/components/TalksCard.vue';


export default {
    name: "ScheduleView",
    components: {
        Navbar,
        SpeakersCard,
        TalksCard
    },
    data() {
      return {
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
      }
    },
}
</script>

<style >
.scheduleMenu{
  color: var(--color-dark-blue) !important;
  padding: 0 6.5rem !important;
}
.v-expansion-panel .v-icon {
  color: var(--color-orange);
}
</style>
