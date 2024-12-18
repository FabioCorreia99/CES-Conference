<template>

        <nav id="navbar">
            
            <img src="../assets/media/Logo.svg" alt="CES logo" class="nav-logo">

            <div class="links">
                <RouterLink :to="{ name: 'home' }">Home</RouterLink>
                <RouterLink :to="{ name: 'schedule' }">Schedule</RouterLink>
                <RouterLink :to="{ name: 'speakers' }">Speakers</RouterLink>
                <RouterLink :to="{ name: 'partners' }">Partners</RouterLink>
                <RouterLink :to="{ name: 'about' }">About</RouterLink>
                <RouterLink :to="{ name: 'login' }">Login</RouterLink>  
            </div>

            <div id="menu">
                <Bars3Icon class="text-white"/>
            </div>

        </nav>

</template>

<script>
    import { RouterLink } from 'vue-router'
    import { Bars3Icon } from '@heroicons/vue/24/solid'
    
    export default {
        components: {
            Bars3Icon,
        },
    }
</script>

<style>
    
    
    
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
    }

</style>
