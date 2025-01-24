<template>
    <div>
        My ticket

        <Ticket
        :primaryColor="user.ticket.primaryColor"
        :secondaryColor="user.ticket.secondaryColor"
        :hasLogo="user.ticket.hasLogo"
        :name="user.ticket.name ? user.name : ''"
        :occupation="user.ticket.occupation ? occupation : ''"
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
