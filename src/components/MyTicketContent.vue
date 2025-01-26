<template>
    <div>
        <h3 class="mb-4">My Ticket</h3>

        <Ticket
        :primaryColor="user.ticket.primaryColor"
        :secondaryColor="user.ticket.secondaryColor"
        :hasLogo="user.ticket.hasLogo"
        :name="user.ticket.name ? user.name : ''"
        :occupation="user.ticket.occupation ? user.ticket.occupation : ''"
        v-if="user.ticket.bought"
        />
    </div>
</template>

<script>
import { useUsersStore } from '@/stores/users';
import Ticket from './Ticket.vue';

    export default {
        components: {
            Ticket,
        },
        data() {
            const usersStore = useUsersStore();
            return {
                user: usersStore.getUserLogged,
                usersStore,
            }
        },
    }
</script>

<style scoped>

</style>
