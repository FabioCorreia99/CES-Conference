<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-btn 
            :to='{ name: route, params:{speakerId: id} }'
            elevation="4" 
            size="large" 
            :color="isHovering ? '#EEF6F2': '#6590D0'"
            class="rounded-lg "
            v-bind="props"
            ><span 
                class="text-lowercase textBtn"
                :class="{ 'on-hover': isHovering }"
                v-bind="props"
                >/{{ value }}
            </span>
        </v-btn>
    </v-hover>
</template>

<script>
    export default {
    props: {
        value: {
            type: String,
            required: true,
        },
        route: {
            type: String,
            default: "home"
        },
        id:{
            type: Number,
        }
     },   
    }
</script>

<style scoped>
@media only screen and (min-width: 600px) and (max-width: 700px) {
    .textBtn{
        font-size: 0.7rem;
    }
}
span{
    color: var(--color-white) !important;
}
.on-hover {
    color: #F2A714 !important; /* Aplica o estilo ao texto */
}
</style>