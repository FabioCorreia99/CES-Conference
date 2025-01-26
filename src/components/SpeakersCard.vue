<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card class="pa-4 my-4 speaker-card" :elevation="isHovering ? 16 : 6" :height="height" :width="width" rounded="lg" v-bind="props">
            
            <div class="imgContainer">
                <img :alt="name" :src="image" class="imgResponsive" ></img>
            </div>
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
            },
            height:{
                type: Number,
                default: 350
            },
            width:{
                type: Number,
                default: 225
            }
        },
    }
</script>

<style>

.imgContainer {
    position: relative;
    width: 100%;
    padding-top: calc(200 / 193 * 100%); /* manter aspect ratio */
    overflow: hidden;
    border-radius: 0.5rem;
}

.imgResponsive {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
}

@media only screen and (min-width: 500px) and (max-width: 700px) {
    .speaker-card{
        width: 175px !important;
        height: 300px !important;
    }
}
</style>