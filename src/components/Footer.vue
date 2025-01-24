<template>
    <v-footer height="8.6875rem" color="rgba(189, 199, 211, 0.30)" class="d-flex justify-center align-center ga-16 mt-16">
        <img :src="logo" :width="100"></img>
        <div class="d-flex justify-space-around ga-2">
            <v-btn size="large" icon="mdi-facebook" variant="plain"></v-btn>
            <v-btn size="large" icon="mdi-instagram" variant="plain"></v-btn>
            <v-btn size="large" icon="mdi-youtube" variant="plain"></v-btn>
        </div>
        <v-btn size="large" variant="plain">Terms</v-btn>
        <v-btn size="large" variant="plain">Privacy</v-btn>
        <v-btn size="large" variant="plain">Cookies</v-btn>
    </v-footer>
</template>

<script>
    export default {
        data() {
            return {
                logo: new URL("../assets/media/logo-footer.svg", import.meta.url).href,
            }
        },
    }
</script>

<style scoped>

</style>