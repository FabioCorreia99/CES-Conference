<template>
    <v-card
        class="mx-1 titleCard"
        rounded="lg"
        width="24.8125rem"
        color='var(--color-dark-blue)'
        title="Avatars"
        subtitle="prepend-avatar and append-avatar"
        append-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
    >
        <v-divider class="mx-4 mt-0" thickness="3" color="var(--color-light-blue)"></v-divider>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
    </v-card>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.titleCard{
    color: var(--color-white);
}
</style>