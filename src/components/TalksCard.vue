<template>
    <v-card
        class="mx-1 titleCard"
        rounded="lg"
        width="24.8125rem"
        color='var(--color-dark-blue)'
        :title="title"
        :subtitle='"by "+speaker.firstName + " "  + speaker.lastName'
        :append-avatar="speaker.image"
    >
        <v-divider class="mx-4 mt-0" thickness="3" color="var(--color-light-blue)"></v-divider>
        <v-card-text>{{ summary }}</v-card-text>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            talkId: {
                type: Number,
            },
            title: {
                type: String,
            },
            summary: {
                type: String,
            },
            speaker:{
                type: Object,
            }
        },
    }
    
</script>

<style scoped>
.titleCard{
    color: var(--color-white);
}
</style>