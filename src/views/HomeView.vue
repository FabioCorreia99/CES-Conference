<script>

import Navbar from '@/components/Navbar.vue';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  components: {
    Navbar,
  },
}

gsap.registerPlugin(ScrollTrigger);


</script>

<template>


  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <!-- Navbar Column -->
          <v-col>
            <header>
              <Navbar />
            </header>
          </v-col>

        </v-row>

        <v-row>

          <v-col>
            <img class="masterImg left">
            <img class="masterImg center">
            <img class="masterImg right">
          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>

</template>



<style>
span {
  color: white;
}
</style>
