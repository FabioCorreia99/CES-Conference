<template>
    <nav>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'schedule' }">Schedule</RouterLink>
        <RouterLink :to="{ name: 'speakers' }">Speakers</RouterLink>
        <RouterLink :to="{ name: 'partners' }">Partners</RouterLink>
        <RouterLink :to="{ name: 'buyTicket' }">Buy Ticket</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
        <RouterLink :to="{ name: 'login' }">Login</RouterLink>
        
      </nav>
</template>

<script>
    import { RouterLink } from 'vue-router'
    
    export default {

    }
</script>

<style scoped>

</style>
