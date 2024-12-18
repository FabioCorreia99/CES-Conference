<template>
    <header>

        <Navbar/>

    </header>
    
    <div>
        <h2>Buy Ticket</h2>
        <nav>
            <RouterLink :to="{ name: 'ticketClients' }">Clients</RouterLink>
            <RouterLink :to="{ name: 'ticketCompanies' }">Companies</RouterLink>
        </nav>

        <router-view />
    </div>
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

<style scoped>

</style>
