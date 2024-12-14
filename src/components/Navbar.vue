<template>
    <v-container grid-list-md>        
        <v-app>
            <v-app-bar :elevation="2">
                <template v-slot:prepend>
                    Hello
                </template>

                <v-app-bar-title>
                    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
                    <RouterLink :to="{ name: 'schedule' }">Schedule</RouterLink>
                    <RouterLink :to="{ name: 'speakers' }">Speakers</RouterLink>
                    <RouterLink :to="{ name: 'partners' }">Partners</RouterLink>
                    <RouterLink :to="{ name: 'buyTicket' }">Buy Ticket</RouterLink>
                    <RouterLink :to="{ name: 'about' }">About</RouterLink>
                    <RouterLink :to="{ name: 'login' }">Login</RouterLink> 
                </v-app-bar-title>
            </v-app-bar>
        </v-app>
    </v-container>
</template>

<script>
    import { RouterLink } from 'vue-router'
    
    export default {

    }
</script>

<style scoped>

</style>
