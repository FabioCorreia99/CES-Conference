<template>
<v-app>
    <header class="position-absolute">
        <Navbar />
    </header>

    <v-main>
        <v-row class="bg-intro mx-0 pt-10 w-100">
            <v-col>
                <h1 class="introTitle my-12">Speakers</h1>
                <h6 class="textTitle my-12 w-75">The CES conference program spotlights technology's most influential leaders as partners and speakers, sharing insights on premier technologies and what will continue to redefine the consumer technology industry in the future.</h6>
                <div class="d-flex justify-space-around my-1 w-50">
                    <v-text-field
                        class="mt-12 mb-0"
                        rounded="lg"
                        label="/Search..."
                        prepend-inner-icon="mdi-magnify"
                        variant="solo"
                    ></v-text-field>
                </div>
            </v-col>
        </v-row>
    <v-container class="mt-10">
        <!-- Speakers grid -->
        <v-row class="speakersContainer"> 
          <v-col class="speaker" v-for="sp in speakersStore.speakers" :key="sp.id" sm="3" cols="6" ref="main">
            <SpeakersCard 
                :id="sp.id" 
                :name="sp.firstName + ` `+ sp.lastName" 
                :subTitle="sp.company.title"
                :image="sp.image"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>


<link href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css" rel="stylesheet">
</template>

<script>
import { ref,onBeforeUnmount } from 'vue';
import Navbar from '@/components/Navbar.vue';
import SpeakersCard from '@/components/SpeakersCard.vue';
import { useSpeakersStore } from '@/stores/speakers.js';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;

export default {
    name: "SpeakersView",
    components: {
        Navbar,
        SpeakersCard
    },
    data() {
        return {
            speakersStore: useSpeakersStore()
        }
    },
    created () {
        try {
            this.speakersStore.fetchPersons();
        } catch (error) {
            alert(error.message)
        };
    },
    mounted() {
        const observer = new IntersectionObserver((entries, self) => {
            let targets = entries.map(entry => {
                if (entry.isIntersecting) {
                    return entry.target;
                }
            });
            gsap.to(targets, {
                opacity: 1,
                stagger: 0.2
            })
        });

        // Seleciona todos os cartões e define seu estado inicial
        const cards = document.querySelectorAll('.speaker-card');
        gsap.set(cards, { opacity: 0 }); // Define o estado inicial para todos os cartões

        // Observa cada cartão individualmente
        cards.forEach(card => {
            observer.observe(card); // Vincula o observer a cada cartão
        });
    },
    beforeUnmount() {
        if (ctx) {
            ctx.revert(); // Reverte o contexto GSAP
        }
    },
};
</script>

<style>
.bg-intro {
    padding: 0 8rem;
    background-color: rgba(189, 199, 211, 0.30);
}
.introTitle{
    color: #26466D;
    font-family: "Source Code Pro";
    font-size: 6.25rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
.textTitle{
    color: #26466D;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
</style>