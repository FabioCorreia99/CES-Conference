<template>
    <v-card class="pa-4 my-4 " elevation="8" max-height="400" max-width="225" rounded="lg">
        <v-img alt="" :src="image" cover max-width="193" max-height="250" rounded="lg"></v-img>
        <v-card-item density="comfortable" class="w-100 px-1">
            <v-card-title>{{ name }}</v-card-title>
            <v-card-subtitle>{{ subTitle }}</v-card-subtitle>
        </v-card-item>
        <div class="d-flex justify-center">
        <BlueBtn value="check profile"/>
        </div>
    </v-card>
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