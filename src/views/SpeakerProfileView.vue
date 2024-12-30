<template>
<v-app>
    <header class="position-absolute">
        <Navbar />
    </header>
    
    <v-main>
        <v-row class="bg-intro mx-0 pt-10 w-100">
            <v-col class="mt-16" cols="8">
                <div class="">
                    <h1 class="title">{{sp.firstName }} {{ sp.lastName }}</h1>
                    <p class="subTitle ml-2">{{sp.company.title }}, {{ sp.company.name }}</p>
                </div>
                <h6 class="textTitle my-12 w-75">The CES conference program spotlights technology's most influential leaders as partners and speakers, sharing insights on premier technologies and what will continue to redefine the consumer technology industry in the future.</h6>
            </v-col>
            <v-col cols="4" class="d-flex mt-16 justify-end align-center">
                <v-img :src="sp.image"  max-width="200" max-height="250" rounded="lg"></v-img>
            </v-col>
        </v-row>
    </v-main>
</v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { speakersStore } from '@/stores/speakers.js';


export default {
    components: {
        Navbar,
    },
    data() {
        return {
            speakersStore: speakersStore(),
            sp: {}
        }
    },
    created () {
        const id = this.$route.params.speakerId
        console.log(id);
        console.log(this.speakersStore.speakers);
        
        this.sp = this.speakersStore.getSpeakerById(id)
        console.log(this.sp);
    },
}
</script>

<style scoped>
.title{
  color: #26466D;
  font-family: "Source Code Pro";
  font-size: 5rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
.subTitle{
    color: #26466D;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
</style>
