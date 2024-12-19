<template>

    <header>

        <Navbar />

    </header>

    <nav>
        <RouterLink :to="{ name: 'PartnersForm' }">Partners Form</RouterLink>
    </nav>
    <div>

    </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';


export default {
    components: {
        Navbar,
    },
}
</script>

<style scoped></style>
