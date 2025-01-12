<template>

    <nav id="navbar">

        <RouterLink :to="{ name: 'home' }" id="LogoLink" :class="{active: isCurrentRoute('home')}">
            <img src="../assets/media/Logo.svg" alt="CES logo" class="nav-logo" />
        </RouterLink>
        <div class="links">
            <RouterLink :to="{ name: 'schedule'}" :class="{active: isCurrentRoute('schedule')}">Schedule</RouterLink>
            <RouterLink :to="{ name: 'speakers'}" :class="{active: isCurrentRoute('speakers')}">Speakers</RouterLink>
            <RouterLink :to="{ name: 'forum'}" :class="{active: isCurrentRoute('forum')}">Forum</RouterLink>
            <RouterLink :to="{ name: 'partners'}" :class="{active: isCurrentRoute('partners')}">Partners</RouterLink>
            <RouterLink :to="{ name: 'about'}" :class="{active: isCurrentRoute('about')}">About</RouterLink>
            <div class="profile" v-if="this.user">
                <v-avatar size="x-small" :image="avatar"></v-avatar>
                
                <div id="menu"  @mouseover="hoverColor = '#F2A714'" @mouseleave="hoverColor = '#ffff'" @click="goToProfile()">
                    <Bars3Icon :style="{color: hoverColor}" />
                    <!-- <v-select
                        id="profileDropdown"
                        :items="['profile', 'logout']"
                        variant="default"
                    ></v-select> -->
                </div>
            </div>
            <RouterLink v-else :to="{ name: 'login'}" id="LoginLink" :class="{active: isCurrentRoute('login')}">Register</RouterLink>
            
        </div>

        <!-- <div id="menu" @click="toggleNAV()" @mouseover="hoverColor = '#F2A714'" @mouseleave="hoverColor = '#ffff'">
            <Bars3Icon :style="{color: hoverColor}" />
        </div> -->

    </nav>

</template>

<script>
import { useRoute } from 'vue-router'
import { Bars3Icon } from '@heroicons/vue/24/solid'
import { useUsersStore } from '@/stores/users';

export default {
    components: {
        Bars3Icon,
    },
    data() {
        return {
            isNavOpen: JSON.parse(sessionStorage.getItem("isNavOpen")) || true,
            hoverColor: "#ffff",
            avatar: (this.user? new URL(this.user.picture, import.meta.url).href : ""),
        }
    },
    setup() {
        const route = useRoute();
        const isCurrentRoute = (name) => route.name === name;

        const userStore = useUsersStore();
        const userID = userStore.currentUserId
        const user = userStore.getUserById(userID)

        return {isCurrentRoute, user};
    },
    methods: {
        toggleNAV() {
            this.isNavOpen = !this.isNavOpen;
            sessionStorage.setItem("isNavOpen", JSON.stringify(this.isNavOpen));

            const links = document.querySelector(".links");

            if (this.isNavOpen) {
                links.style.display = "flex";
            } else {
                links.style.display = "none";
            }

        },
        goToProfile() {
            this.$router.push({name: "profileSettings", params: { userId: this.user.id }});
        }
    },
    mounted() {
        document.querySelector(".links").style.display = this.isNavOpen ? "flex" : "none";
    }
}
</script>

<style scoped>
#navbar {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    height: fit-content;
    width: fit-content;
    padding: 8px 16px 8px 16px;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(100px);
    border-radius: 20px;
    z-index: 9999;
}

.nav-logo {
    display: flex;
    height: 30px;
    width: 121px;
    align-self: center;
}

#menu {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 30px;
    cursor: pointer;
}

#LogoLink {
    width: 137px;
}

#LoginLink {
    background-color: rgba(255,255,255, 0.3);
    border-radius: 10px;
    width: fit-content;
    height: 32px;
    padding: 8px;
    gap: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile {
    background-color: rgba(255,255,255, 0.3);
    border-radius: 10px;
    width: fit-content;
    height: 32px;
    padding: 8px;
    gap: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#profileDropdown {
    position: absolute;
    visibility: hidden;
}

.links {
    display: flex;
    gap: 16px;
}

a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 112px;
    text-align: center;
    position: relative;
}

a::after {
    content: "_";
    opacity: 0;
    transition: opacity 0.25 ease;
}

a:hover::after,
a.active::after {
    /* background-color: hsla(160, 100%, 37%, 0.2); */
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.links RouterLink {
    display: inline-block;
    width: 97px;
    text-align: center;
}

</style>
