<template>
<v-app>
    <header class="position-absolute">
        <Navbar />
    </header>

    <v-main>
        <v-row class="bg-intro mx-0 pt-10 w-100">
            <v-col>
                <h1 class="introTitle my-12">Forum</h1>
                <h6 class="textTitle my-12 w-75">Be part of the action - share your thoughts, and engage with a global community of tech      enthusiasts, all in one place.</h6>
                <div class="d-flex justify-space-around my-1 w-50">
                    <v-text-field
                        class="mt-12 mb-0"
                        rounded="lg"
                        label="/Search..."
                        prepend-inner-icon="mdi-magnify"
                        variant="solo"
                    ></v-text-field>
                </div>
            </v-col>
        </v-row>
      <v-container class="mt-12">
        <v-row>
          
        </v-row>
      </v-container>
    </v-main>
</v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    components: {
        Navbar,
    },
}
</script>

<style>
</style>
