<template>
    <v-dialog max-width="60rem" max-height="60rem" min-height="20rem">
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
                    <HeartBtn @clicked="clickedHeart" :isActive="liked"/>
                </v-card-actions>
            </v-card>
        </v-hover>
        </template>
        <!--Dialog-->
        <template v-slot:default="{ isActive }">
            <v-card>

                <div class="w-100 diaTitle mt-8 d-flex justify-center align-center">
                    <h1 class="diaTitle_text">{{ speaker.firstName }} {{ speaker.lastName }}</h1>
                </div>
                <v-container>
                    <v-row >
                        <v-col class="ml-4"  cols="4">
                            <SpeakersCard 
                                :id="speaker.id" 
                                :name="speaker.firstName + ` `+ speaker.lastName" 
                                :subTitle="speaker.company.title"
                                :image="speaker.image"/>
                        </v-col>
                        <v-col class="d-flex flex-column align-center justify-center ga-12 descText">
                            <h3 class="align-self-start ">ROOM:  <span class="roomText">{{ room }}</span></h3>
                            <p class="w-100" v-html="desc"></p>
                            <div class="w-100 d-flex justify-space-around align-center">
                                <div class="d-flex justify-start ga-16">
                                    <span v-for="filter in filters" :key="filter"> {{ filter }}</span>
                                    
                                </div>
                                <OrangeBtn value="check Forum"/>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
    import HeartBtn from '@/components/HeartBtn.vue';
    import SpeakersCard from '@/components/SpeakersCard.vue';
    import OrangeBtn from '@/components/OrangeBtn.vue';

    import { useUsersStore } from '@/stores/users';

    export default {
        components: {
            HeartBtn,
            SpeakersCard,
            OrangeBtn
        },
        data() {
            return {
                store: useUsersStore(),
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
            desc: {
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
            },
            room:{
                type: String,
            },
            filters:{
                type: Array,
            }
        },
        methods: {
            clickedHeart(e) {
                if (e) {
                    this.store.addLikedTalk(this.talkId)
                }
                else{
                    this.store.removeLikedTalk(this.talkId)
                }
            }
        },
    }
    
</script>

<style scoped>
.roomText{
    color: var(--color-dark-blue);
    font-size: 2rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}
.descText{
    color: var(--color-dark-blue);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.0225rem;
}
.diaTitle{
    height: 4.75rem !important;
    background-color: var(--color-light-blue) !important;
}
.diaTitle_text{
    color: var(--color-white);
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
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