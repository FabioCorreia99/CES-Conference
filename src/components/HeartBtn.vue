<template>
    <v-btn variant="text" 
        icon 
        @click="toggleIcon">
        <v-icon 
            size="x-large"
            color="red"
            >{{ icon }}</v-icon>
    </v-btn>

<link href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css" rel="stylesheet">
</template>

<script>
    export default {
        emits: ["clicked"], // Declara o evento
        props: {
            isActive: {
                type: Boolean,
                default: false, 
            },
        },
        data() {
            return {
                icon: "mdi-heart-plus-outline"
            }
        },
        methods: {
            toggleIcon() {
                if (this.icon === 'mdi-heart-plus-outline') {
                    this.icon = 'mdi-heart';
                    this.$emit("clicked", true)
                } else {
                    this.icon = 'mdi-heart-plus-outline';
                    this.$emit("clicked", false)
                }
            },
        },
        beforeMount () {
            if (this.isActive) {
                this.icon = 'mdi-heart';
            };
        },

    }
</script>

<style scoped>

</style>