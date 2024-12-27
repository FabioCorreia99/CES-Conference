<template>
<div class="bg-intro"></div>
<v-app>
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
        <v-row class="test">
            <v-col>
                <h1 class="introTitle my-12">Speakers</h1>
                <h6 class="textTitle my-12 w-75">The CES conference program spotlights technology's most influential leaders as partners and speakers, sharing insights on premier technologies and what will continue to redefine the consumer technology industry in the future.</h6>
                <div class="d-flex justify-space-around my-12 w-50">
                    <v-text-field
                        label="/Search..."
                        prepend-inner-icon="mdi-magnify"
                        variant="solo"
                    ></v-text-field>
                </div>
            </v-col>
        </v-row>

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


<link href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css" rel="stylesheet">
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

<style>
.bg-intro {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 28rem;
    margin: 0; /* Remove margens */
    background-color: rgba(189, 199, 211, 0.30);
}
.introTitle{
    color: #26466D;
    font-family: "Source Code Pro";
    font-size: 6.25rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
.textTitle{
    color: #26466D;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
</style>