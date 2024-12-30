<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card class="pa-4 my-4 speaker-card" :elevation="isHovering ? 16 : 6" max-height="400" max-width="225" rounded="lg" v-bind="props">
            <v-img :alt="name" :src="image" cover max-width="193" max-height="250" rounded="lg"></v-img>
            <v-card-item density="comfortable" class="w-100 px-1">
                <v-card-title>{{ name }}</v-card-title>
                <v-card-subtitle class="pro">{{ subTitle }}</v-card-subtitle>
            </v-card-item>
            <div class="d-flex justify-center">
                <BlueBtn route="SpeakerProfile" :id="id" value="check profile"/>
            </div>
        </v-card>
    </v-hover>
</template>

<script>
import BlueBtn from '@/components/BlueBtn.vue';

    export default {
        components: {
            BlueBtn
        },
        props: {
            id: {
                type: Number, 
            },
            name:{
                type: String
            },
            subTitle:{
                type: String
            },
            image:{
                type: String
            }
        },
    }
</script>

<style>
</style>