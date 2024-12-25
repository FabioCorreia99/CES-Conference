<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-btn 
            :to="{ name: route }"
            elevation="4" 
            size="large" 
            :color="isHovering ? '#6590D0' : '#EEF6F2'"
            class="rounded-lg Orangebtn"
            style="color: red;"
            v-bind="props"
            ><span>{{ value }}</span>
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
     },   
    }
</script>

<style>
span{
    color: var(--color-white) !important;
}
</style>