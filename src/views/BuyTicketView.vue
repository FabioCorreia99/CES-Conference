<template>
    <v-app>
    
    <header class="position-absolute">
        <Navbar />
    </header>

    <v-main>
        
        <v-container>
            <v-row justify="center">
                <!-- Header -->
                <v-col cols="12" class="mt-12">
                    
                    <h1 class="text-h4 mb-6">Buy tickets</h1>

                </v-col>
            </v-row>

            <v-row justify="center">
                <v-col cols="6">
                    <!-- User info -->
                    <v-form ref="buyTicketForm" v-model="isValid" @submit.prevent="">
                        <!-- First & Last Name -->
                        <v-text-field 
                        v-model="title"
                        label="First and last name" 
                        underlined 
                        dense 
                        required>
                        </v-text-field>
                        
                        


                    </v-form>
                </v-col>
            </v-row>

        </v-container>

        <router-view />
    </v-main>
</v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    name: "BuyTicketView",
    components: {
        Navbar,
    }
};
</script>

<style scoped></style>
