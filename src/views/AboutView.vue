<template>
  <v-app>
    <header  class="position-absolute">
      <Navbar />
    </header>

    <v-main>
        <v-row class="bg-intro mx-0 pt-10 w-100">
          <v-col>
            <h1 class="introTitle my-12">About</h1>
            <h6 class="textTitle my-12 w-75">CES® is the world's most impactful tech event — the launchpad for
              groundbreaking ideas and visionary creators.</h6>
            <div class="d-flex justify-space-around w-50">
            </div>
          </v-col>
        </v-row>
      <v-container>

        <v-row class="aboutContainer">
        </v-row>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
}

</script>

<style scoped>

</style>
