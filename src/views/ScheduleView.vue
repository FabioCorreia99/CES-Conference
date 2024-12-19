<template>
  <Navbar/>

  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="n in 24" :key="n" cols="4">
            <v-card height="200"></v-card>
          </v-col>
        </v-row> 
      </v-container>
    </v-main>
  </v-app>
    
    <div>
        This is the Schedule Page
    </div>
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
