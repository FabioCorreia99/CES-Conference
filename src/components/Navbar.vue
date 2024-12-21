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
            <RouterLink :to="{ name: 'login'}" id="LoginLink" :class="{active: isCurrentRoute('login')}">Sign Up</RouterLink>
        </div>

        <div id="menu" @click="toggleNAV()" @mouseover="hoverColor = '#F2A714'" @mouseleave="hoverColor = '#ffff'">
            <Bars3Icon :style="{color: hoverColor}" />
        </div>

    </nav>

</template>

<script>
import { RouterLink, useRoute } from 'vue-router'
import { Bars3Icon } from '@heroicons/vue/24/solid'

export default {
    components: {
        Bars3Icon,
    },
    data() {
        return {
            isNavOpen: JSON.parse(sessionStorage.getItem("isNavOpen")) || false,
            hoverColor: "#ffff",
        }
    },
    setup() {
        const route = useRoute();
        const isCurrentRoute = (name) => route.name === name;

        return {isCurrentRoute};
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
            
        }
    },
    mounted() {
        document.querySelector(".links").style.display = this.isNavOpen ? "flex" : "none";
    }
}
</script>

<style scoped>
#navbar {
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
