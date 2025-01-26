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
                <div class="inputSp d-flex justify-space-around my-1">
                    <v-text-field
                        class="mt-12 mb-0"
                        rounded="lg"
                        label="/Search..."
                        prepend-inner-icon="mdi-magnify"
                        variant="solo"
                        v-model="searchSpeaker"
                    ></v-text-field>
                </div>
            </v-col>
        </v-row>

        <v-container class="mt-10 pa-xs-0">
            <!-- Speakers grid -->
            <v-row class="speakersContainer pa-xs-0">
                <v-col class="speaker d-flex justify-center " v-for="sp in paginatedTopics" :key="sp.id" xs="6" sm="6" md="4" lg="3" ref="main">
                    <SpeakersCard
                        :id="sp.id"
                        :name="sp.firstName + ` `+ sp.lastName"
                        :subTitle="sp.company.title"
                        :image="sp.image"/>
                </v-col>
            </v-row>
            
            <!-- Paginação -->
            <div class="pagination mt-12">
                <v-btn :disabled="page === 1" @click="prevPage" class="pageBTN">Anterior</v-btn>
                <span id="pageNumber">Página {{ page }} de {{ totalPages }}</span>
                <v-btn :disabled="page === totalPages" @click="nextPage" class="pageBTN">Seguinte</v-btn>
            </div>
      </v-container>

    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import { ref,onBeforeUnmount } from 'vue';
import Navbar from '@/components/Navbar.vue';
import SpeakersCard from '@/components/SpeakersCard.vue';
import { useSpeakersStore } from '@/stores/speakers.js';
import Footer from '@/components/Footer.vue';

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;
let observer;

export default {
    name: "SpeakersView",
    components: {
        Navbar,
        SpeakersCard,
        Footer
    },
    data() {
        const speakersStore = useSpeakersStore();
        
        return {
            speakersStore,
            searchSpeaker: "",
            page: 1,
            itemsPerPage: 16,
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
        ctx = gsap.context(() => {
            observer = new IntersectionObserver((entries) => {
                // Filtra apenas os elementos que estão entrando na viewport
                let targets = entries
                .filter(entry => entry.isIntersecting)
                .map(entry => entry.target);

                // Aplica a animação aos elementos que entraram na viewport
                gsap.to(targets, {
                opacity: 1,
                stagger: 0.2
                });

                // Desconecta os elementos já observados para evitar múltiplas observações
                entries.forEach(entry => {
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target); // Para de observar o elemento
                }
                });
            });

            // Seleciona todos os cartões e define seu estado inicial
            const cards = document.querySelectorAll('.speaker-card');
            gsap.set(cards, { opacity: 0 }); // Define o estado inicial para todos os cartões

            // Observa cada cartão individualmente
            cards.forEach(card => {
                observer.observe(card); // Vincula o observer a cada cartão
            });
            });
    },
    beforeUnmount() {
        if (observer) {
            observer.disconnect(); // Desconecta o IntersectionObserver
        }
        if (ctx) {
            ctx.revert(); // Reverte o contexto GSAP
        }
    },
    computed: {
        filteredSpeakers() {
            const input = this.searchSpeaker.toLowerCase();

            return this.speakersStore.speakers.filter((speaker) => {
                const textSearch = speaker.firstName.toLowerCase().includes(input) || speaker.lastName.toLowerCase().includes(input);
                
                return textSearch;
            });
        },
        paginatedTopics() {
            const start = (this.page - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredSpeakers.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.filteredSpeakers.length / this.itemsPerPage);
        },
    },
    methods: {
        prevPage() {
            if (this.page > 1) this.page--;
        },
        nextPage() {
            if (this.page < this.totalPages) this.page++;
        },
    }
};
</script>

<style>
.inputSp{
    width: 50%;
}
.pageBTN {
    background-color: #F2A714 !important;
}
#pageNumber {
    color: black !important;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}
.bg-intro {
    padding: 0 8rem;
    background-color: rgba(189, 199, 211, 0.30);
}
.introTitle{
    color: var(--color-dark-blue);
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

@media only screen and (max-width: 1024px) {
    .bg-intro {
        padding: 0;
    }
    .introTitle{
        font-size: 4.25rem;
    }
    .inputSp{
    width: 100%;
}

}

</style>
