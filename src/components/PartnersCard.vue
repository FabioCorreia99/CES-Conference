<template>
    <v-card class="pa-4 my-4 mx-6" elevation="0" height="26rem" width="18.75rem" rounded="lg" color="rgba(189, 199, 211, 0.20)">
        <v-img :alt="brand" :src="image" aspect-ratio="16/9" cover width="16.5rem" height="11.5625rem" rounded="lg"></v-img>
        <v-card-item density="comfortable" class="w-100 px-1">
            <v-card-title class="PartTitle"> {{ brand }} </v-card-title>
        </v-card-item>
        <div>
            <h3 class="PartSubTitle">{{ desc }}</h3>
        </div>
        <v-card-actions class="d-flex justify-end align-end pa-2 pt-0 mx-0">
            <v-btn
                icon="mdi-arrow-right-thin"
                size="large"
                class="mx-0"
            ></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                image: new URL(this.img, import.meta.url).href,
            }
        },
        props: {
            brand: {
                type: String,
                required: true,
            },
            img: {
                type: String,
                required: true,
            },
            desc: {
                type: String,
                required: true,
            },
        },
    }
</script>

<style scoped>
.PartTitle{
    color: var(--color-dark-blue);
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.PartSubTitle{
    color: var(--color-dark-blue);
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    height: 6.5rem !important;
}
</style>