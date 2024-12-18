<script>
  
  import Navbar from '@/components/Navbar.vue';
  
  export default {
    components: {
    Navbar,
  },
  }
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
              <span>This is the Homepage.</span>
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
