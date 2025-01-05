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
                <h6 v-if="desc == 0" class="textTitle my-12 w-75">{{ sp.firstName }} {{ sp.lastName }}, a distinguished {{ sp.company.title }} at {{ sp.company.name }}, 
                    is a pioneer in driving innovation and excellence within the {{ sp.company.department }}. With a degree from {{ sp.university}} and a career spanning over {{ sp.age }} years,
                     {{ sp.firstName }} has consistently delivered groundbreaking solutions that have reshaped {{ sp.company.department }}.
                     Born on {{ sp.birthDate }}, in {{ sp.address.country }}, and currently residing in {{ sp.address.city }}, {{ sp.firstName }} combines technical expertise with a passion for mentoring future leaders. At CES, 
                    {{ sp.firstName }} will share insights on emerging trends and technologies that promise to redefine the future.</h6>
                <h6 v-if="desc == 1" class="textTitle my-12 w-75">{{ sp.firstName }} {{ sp.lastName }} is a {{sp.age}}-year-old {{ sp.company.title }} at {{ sp.company.name }}, renowned for their contributions to {{ sp.company.department }}.
                     With a rich academic background from {{ sp.university }}, {{ sp.firstName }} has seamlessly merged technical acumen with strategic foresight to tackle some of the industry’s most complex challenges.
                      Born on {{ sp.birthDate }} in {{ sp.address.country }}, {{ sp.firstName }} is passionate about innovation and has played a pivotal role in advancing {{ sp.company.department }}. When not shaping the future of {{ sp.company.department}},
                       {{ sp.firstName }}enjoys engaging with global audiences, like at CES, to inspire and collaborate.</h6>
                <h6 v-if="desc >= 2" class="textTitle my-12 w-75">{{ sp.firstName }} {{ sp.lastName }}, a trailblazing {{ sp.company.title }} at {{ sp.company.name }}, has forged a remarkable path in {{ sp.company.department }}. With a strong foundation from {{ sp.university }},
                     {{ sp.firstName }} has applied their {{ sp.age }} years of experience to develop solutions that bridge the gap between innovation and real-world application. Born on {{ sp.birthDate }} in {{ sp.address.country }}, {{sp.firstName}} is driven by a vision to create meaningful change in {{ sp.company.department }}.
                      At CES, {{ sp.firstName }} will offer a compelling perspective on how technology and human ingenuity are converging to shape the future.</h6>
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
import { useSpeakersStore } from '@/stores/speakers.js';


export default {
    components: {
        Navbar,
    },
    data() {
        return {
            speakersStore: useSpeakersStore(),
            sp: {},
            desc: 1
        }
    },
    created () {
        // get the speaker
        const id = this.$route.params.speakerId
        this.sp = this.speakersStore.getSpeakerById(id)
        console.log(this.sp);
        
        
        this.desc = Math.floor(Math.random() * 3);
        console.log(this.desc);
        
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
