<template>
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
export default {
    name: "BuyTicketView",
};
</script>

<style scoped>

</style>
