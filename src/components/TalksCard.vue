<template>
    <v-dialog max-width="25rem">
        <!--Card-->
        <template v-slot:activator="{ props: activatorProps }"> 
        <v-hover v-slot="{ isHovering, props }">
            <v-card
                v-bind="activatorProps, props"
                class="mx-1 titleCard"
                rounded="lg"
                width="24.8125rem"
                color='var(--color-dark-blue)'
                :title="title"
                :subtitle='"by "+speaker.firstName + " "  + speaker.lastName'
                :append-avatar="speaker.image"
                :elevation="isHovering ? 16 : 6"
            >
                <v-divider class="mx-4 mt-0" thickness="3" color="var(--color-light-blue)"></v-divider>
                <v-card-text class="cardText pt-2">{{ summary }}</v-card-text>
                <v-card-actions v-if="logged" class="d-flex justify-end align-end pa-2 pt-0" @click.stop>
                    <HeartBtn @clicked="" :isActive="liked"/>
                </v-card-actions>
            </v-card>
        </v-hover>
        </template>
        <!--Dialog-->
        <template v-slot:default="{ isActive }">
            <v-card
            prepend-icon="mdi-package"
            text="When using the activator slot, you must bind the slot props to the activator element."
            title="Slot Activator"
            >
                <template v-slot:actions>
                    <v-btn
                        class="ml-auto"
                        text="Close"
                        @click="isActive.value = false"
                    ></v-btn>
                </template>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
    import HeartBtn from '@/components/HeartBtn.vue';

    export default {
        components: {
            HeartBtn
        },
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
            },
            liked:{
                type: Boolean,
                default: false,
            },
            logged:{
                type: Boolean,
                default: false,
            }
        },
        methods: {
            switchLike() {
                
            }
        },
    }
    
</script>

<style scoped>
.cardText{
    height: 5.5rem !important;
}
.titleCard{
    color: var(--color-white);
}

@media only screen and (max-width: 1112px) {
    .cardText{
    height: 6rem !important;
    }
}

</style>