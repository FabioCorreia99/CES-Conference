<template>
    <div>
        <v-icon v-if="notifications.length >= 1" style="font-size:24px;color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));cursor: pointer;" @click="toggleDropdown">mdi-bell-ring-outline</v-icon>
        <v-icon v-else style="font-size:24px;color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));">mdi-bell-outline</v-icon>

        <div v-if="showDropdown && notifications.length >= 1" class="notificationsDropdown">
            <div v-for="notification in notifications" :key="notification.id" class="notification">
                <p :class="{unread: !notification.isRead}">{{ notification.message }}</p>
                <button v-if="!notification.isRead" class="readBTN" @click="markAsRead(notification.id)"><v-icon>mdi-read</v-icon></button>
            </div>
        </div>
    </div>
</template>

<script>
import { useUsersStore } from '@/stores/users';
import OrangeBtn from './OrangeBtn.vue';

    export default {
        components: {
            OrangeBtn,
        },
        data() {
            const usersStore = useUsersStore();
            return {
                showDropdown: false,
                usersStore,
            }
        },
        computed: {
            notifications() {
                return this.usersStore.getNotifications;
            }
        },
        methods: {
            toggleDropdown() {
                this.showDropdown = !this.showDropdown;
            },
            markAsRead(notificationId) {
                this.usersStore.markAsRead(notificationId);
            },
        },
    }
</script>

<style scoped>

.unread {
    font-weight: bold;
}
.notificationsDropdown {
    position: absolute;
    transform: translate(-90%);
    background: rgba(0, 0, 0, 0.5);
    /* background: rgba(189, 199, 211, 1); */
    color: white;
    border-radius: 10px;
    margin-top: 0.5rem;
    padding: 1rem;
    min-width: 300px;
}
.notification {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 16px;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid white;
}
.readBTN {
    background-color: var(--color-orange);
    font-size: small;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    border-radius: 50%;
    border: 1px solid black;
}

</style>