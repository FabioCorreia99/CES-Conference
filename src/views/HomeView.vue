<script>
import { ref,onBeforeUnmount } from 'vue';

import { useSpeakersStore } from '../stores/speakers';
import { useTalksStore } from '@/stores/talks.js';
import { usePartnersStore } from '@/stores/partners.js';

import Navbar from '@/components/Navbar.vue';
import OrangeBtn from '@/components/OrangeBtn.vue';
import BlueBtnToOrange from '@/components/BlueBtnToOrange.vue';
import SpeakersCard from '@/components/SpeakersCard.vue';
import PartnersCard from '@/components/PartnersCard.vue';
import Footer from '@/components/Footer.vue';

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;

export default {
  components: {
    Navbar,
    OrangeBtn,
    SpeakersCard,
    PartnersCard,
    BlueBtnToOrange,
    Footer,
  },
  data() {
    return {
      partnersStore: usePartnersStore(),
      speakersStore: useSpeakersStore(),
      talksStore: useTalksStore(),
      leftImg: new URL("../assets/media/left.png", import.meta.url).href,
      rightImg: new URL("../assets/media/right.png", import.meta.url).href,
      scheduleImg: new URL("../assets/media/schedule.jpg", import.meta.url).href,
      partnersImg: new URL("../assets/media/partners.jpg", import.meta.url).href,
      feedBacks: [
        {
          name:"John David",
          text: "“Amazing event with great insights into AI and IoT! I learned so much and connected with incredible people.”",
          picture: new URL("../assets/media/speakers/BillGates.jpg", import.meta.url).href,
          stars: 5,
        },
        {
          name:"Emily Carter",
          text: "“Loved the startup fair and meeting innovative founders.”",
          picture: new URL("../assets/media/speakers/Emma Brown.jpg", import.meta.url).href,
          stars: 5,

        },
        {
          name:"Michael Johnson",
          text: "“The workshops were very informative and inspiring. The opportunity to network with such a diverse group of people is unmatched.”",
          picture: new URL("../assets/media/speakers/James Turner.png", import.meta.url).href,
          stars: 4,
        },
        {
          name:"Sophia Lee",
          text: "“Great mix of panels and exhibits, highly recommend! I look forward to attending again.”",
          picture: new URL("../assets/media/speakers/Grace Hall.jpg", import.meta.url).href,
          stars: 5,
        }
      ]
    }
  },
  methods: {
    goToSpeakersPage() {
      this.$router.push({name: "speakers"});
    },
    goToBuyTicketPage() {
      this.$router.push({name: "buyTickets"});
    },
    goToSchedulePage(){
      this.$router.push({name: "schedule"});
    },
    goToPartnerPage(){
      this.$router.push({name: "partners"});
    }
  },
  created () {
    try {
      this.speakersStore.fetchPersons();
    } catch (error) {
      alert(error.message)
    };
    this.talksStore.init();
  },
  mounted () {
      ctx = gsap.context((self) => {
      let tl = gsap.timeline({scrollTrigger: {
        trigger:".box-container",
        start: "top top",
        end: "+=600",
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        pinType: "fixed",
        scrub: 1,
          snap: {
            snapTo: 1, // Encaixa no final do ScrollTrigger (progresso 1)
            duration: { min: 1, max: 2 }, // Duração do snap
            ease: "power1.inOut", // Efeito suave ao ajustar
            delay: 0.5, //  Espera 0.1s antes de fazer o snap
          },
      }})

      tl.to(".left", { display: "none" ,y: "-700" , ease: "power1.out", opacity: 0, duration: 2 });
      tl.to(".right", { display: "none" ,y: "500", ease: "power3.out", opacity: 0, duration: 2 },"<");
      tl.to(".center",{position: "absolute", top: "0" , width: "100vw", height:"150vh", ease: "power2.out"}
      ,">");
      tl.to(".afterAnimation",{opacity: 1, ease: "power2.out"}
      ,">");

      gsap.from(".count", {
        innerText: 0, duration: 4,
        snap: {
          innerText:1
        },
        scrollTrigger: {
          trigger: ".count", // O elemento que aciona o início da animação
          start: "top 80%",
        }
      });

      // Animação : Horizontal Scroll - Speakers
      let sections = gsap.utils.toArray(".panel");
      let slidesContainer = document.querySelector(".speakerContainer");

      gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      x: () => -1 * (slidesContainer.scrollWidth - innerWidth),
      scrollTrigger: {
          trigger: ".speakerContainer",
          start: "center center",
          pin: true,// foca o scroll na animação
          invalidateOnRefresh: true, // Recalcula ao atualizar
          scrub: 1,// associa a minha animação ao scroll
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (slidesContainer.scrollWidth - innerWidth),
        }
      });

      // Animação: Secção schedule
      gsap.utils.toArray(".lft").forEach((element) => {
        gsap.from(element, {
          x: -500 , // Define a direção do movimento com base na classe
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: element, // Cada elemento será seu próprio trigger
            start: "top 75%",
            toggleActions: "play reverse play reverse", // repete a animação
          },
        });
      });

      // Animação: Elementos há esquerda
      gsap.utils.toArray(".rgt").forEach((element) => {
        gsap.from(element, {
          x: 500 , // Define a direção do movimento com base na classe
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: element, // Cada elemento será seu próprio trigger
            start: "top 75%",
            toggleActions: "play reverse play reverse", // repete a animação
          },
        });
      });
    }, main.value); // <- Scope!
  },
  beforeUnmount() {
    if (ctx) {
      ctx.revert(); // Reverte o contexto do GSAP
    }
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  },
}

</script>

<template>
  <v-app>
    <header class="position-absolute">
      <Navbar />
    </header>
    <v-main class="overflow-hidden">
    <v-container fluid class="w-100 mt-0 pt-0">
      <v-row class="mt-0 mx-auto d-flex justify-space-around box-container">
        <!-- Imagem Esquerda -->
        <v-col class="left d-flex justify-end" cols="4">
          <img class="masterImg" :src="leftImg">
        </v-col>
        <!-- Imagem Centro -->
        <v-col class="d-flex justify-center" cols="3">
          <div class="masterImg center d-flex justify-start flex-column align-center ga-16">
            <div class="mainTitles d-flex justify-center flex-column align-center ma-0 afterAnimation">
              <h1 class="textWhite masterTitleDate">JANUARY 7-9</h1>
              <h1 class="textWhite masterTitleLocal">PORTO, PORTUGAL</h1>
            </div>
            <h1 class="textWhite afterAnimation masterDesc">CES: Inspiring <b>developers</b>, shaping tomorrow</h1>
            <div class="afterAnimation">
              <OrangeBtn value="Buy Ticket" @click="goToBuyTicketPage"/>
            </div>
          </div>
        </v-col>
        <!-- Imagem Direita -->
        <v-col class="d-flex justify-start right" cols="4">
          <img class="masterImg" :src="rightImg">
        </v-col>
      </v-row>
    </v-container>

    <!-- Secção de Stats-->
    <div class="py-10 statsBar mb-12 d-flex justify-space-around align-center textWhite">
      <div class="pa-3 d-flex flex-column align-center">
        <h1 class="statsTitle mb-3">+<span class="count">1024</span></h1>
        <h1 class="statsSubTitle mt-3">Attendees</h1>
      </div>
      <div class="pa-3 d-flex flex-column align-center">
        <h1 class="statsTitle ">+<span class="count">100</span></h1>
        <h1 class="statsSubTitle mt-6">Speakers</h1>
      </div>
      <div class="pa-3 d-flex flex-column align-center">
        <h1 class="statsTitle mb-3">+<span class="count">56</span></h1>
        <h1 class="statsSubTitle mt-3">Partners</h1>
      </div>
      <div class="pa-3 d-flex flex-column align-center">
        <h1 class="statsTitle mb-3">+<span class="count">126</span></h1>
        <h1 class="statsSubTitle mt-3">Forum Topics</h1>
      </div>
    </div>

    <!-- Apresentação do Schedule-->
    <v-container class="scheduleSection">
      <h1 class="textDarkBlue mx-auto text-center scheduleTitle lft">Schedule</h1>
      <v-row class="my-16 ">
        <v-col class="lft d-flex justify-space-between align-center flex-column ga-2 " cols="12" lg="6">
          <div class="textDarkBlue d-flex flex-column align-center justify-center mx-6">
            <h1 class="scheduleText mt-4 mb-8 text-center">Plan your perfect CES experience</h1>
            <h2 class="w-75 scheduleSubText text-center"> Experience the pulse of innovation with a schedule designed to highlight the best of tech.</h2>
          </div>
          <BlueBtnToOrange :handle-click="goToSchedulePage" value="View Schedule"/>
        </v-col>
        <v-col class="rgt d-flex justify-start justify-md-center justify-sm-center" cols="12"  lg="6">
          <img class="SchImg" :width="576" :src="scheduleImg"></img>
        </v-col>
      </v-row>
    </v-container>

    <!-- Apresentação dos Speakers -->
    <div class="w-100 SPcontainer textDarkBlue">
      <div class="w-100 speakerContainer d-flex justify-start mt-0">
        <h1 class="panel h-100 speakerTitle speakerMasterTitle">Meet the visionaries shaping the future of technology.</h1>
        <div class="panel w-100 my-0 mx-12" v-for="sp in speakersStore.getFirstTenSpeakers">
          <SpeakersCard
          :id="sp.id"
          :name="sp.firstName + ` `+ sp.lastName"
          :subTitle="sp.company.title"
          :image="sp.image"/>
        </div>
      </div>
      <h1 class="speakerTitle">Click to see all Speakers</h1>
      <div class="w-100 d-flex justify-center my-12">
        <BlueBtnToOrange :handle-click="goToSpeakersPage" value="See all speakers"/>
      </div>
    </div>

    <!-- Feedback carousel-->
    <v-carousel class="mb-16 opinionSection" hide-delimiters>
      <v-carousel-item v-for="feedback in feedBacks" :key="feedback.name">
        <v-sheet color="rgba(189, 199, 211, 0.20)" height="100%" tile>
          <div class="d-flex fill-height flex-column justify-space-around align-center ga-8">
            <h1 class="textDarkBlue feedTitle">
               Feedbacks<v-icon color="red" icon="mdi-heart-circle-outline"></v-icon>
            </h1>
            <h1 class="textDarkBlue feedText">{{ feedback.text }}</h1>
            <div class="d-flex flex-column justitfy-center align-center">
              <v-avatar :image="feedback.picture" size="80"></v-avatar>
              <div  class="d-flex justify-center my-2">
                <v-icon v-for="s in feedback.stars" :key="s" icon="mdi-star" color="orange" size="small"></v-icon>
              </div>
              <h3 class="textDarkBlue feedName">{{ feedback.name }}</h3>
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- Partners Section -->
    <div class="partnersSection">
        <h1 class="mb-12 partTitle textDarkBlue text-center">Premium Partners</h1>
        <v-slide-group mobile>
          <v-slide-group-item v-for="partner in partnersStore.partners" :key="partner.id">
            <PartnersCard
            :brand="partner.brand"
            :img="partner.image"
            :desc="partner.desc"
            :site="partner.site"/>
          </v-slide-group-item>
      </v-slide-group>
    </div>

    <!-- Ticket Cards -->
    <v-container fluid class="ticketSection">
      <div class="text-center ">
        <h1 class="my-2 textDarkBlue text-h2"><span class="textYellow">Flexibe</span>Tickets</h1>
        <h2 class="mb-12 textDarkBlue text-body-1">Choose what works, skip what doesn’t</h2>
        <v-row class="align-center">
          <!-- Card Esquerda -->
          <v-col sm="12" md="4" col="12" class="lft d-flex justify-sm-center justify-center justify-md-end">
            <v-card class="ticketCard" rounded="lg" width="21rem" height="20.6rem">
              <v-card-title class="textWhite text-center mt-2 text-sm-h5 text-h4 font-weight-bold"><u>Dairy Ticket</u></v-card-title>
              <v-card-text class="mt-6">
                <h4 class="textWhite text-caption text-lg-subtitle-2" > <v-icon icon="mdi-check" color="orange" size="small"></v-icon>Access to <strong>all sessions</strong> and <strong>workshops</strong> .</h4>
                <h4 class="textWhite text-caption text-lg-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon><strong>Network</strong> with industry leaders.</h4>
                <h4 class="textWhite text-caption text-lg-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon>Perfect for those with limited time.</h4>
              </v-card-text>
              <h1 class="text-h3 textWhite mb-8"><span class="textYellow">$</span>600</h1>
              <OrangeBtn value="REGISTER NOW"/>
            </v-card>
          </v-col>
          <!-- Card Central -->
          <v-col sm="12" md="4" col="12" class="d-flex justify-center">
            <v-badge content="Popular" offset-x="20" color="orange" text-color="white">
            <v-card class="ticketMaster" rounded="lg" width="20.62313rem" height="24.43788rem">
              <v-card-title class="textWhite text-center mt-2 text-sm-h5 text-h4 font-weight-bold"><u>Full Pass</u></v-card-title>
              <v-card-text class="my-6">
                <h4 class="textWhite text-caption text-md-subtitle-2" > <v-icon icon="mdi-check" color="orange" size="small"></v-icon>Access to <strong>all sessions</strong> and <strong>workshops</strong> .</h4>
                <h4 class="textWhite text-caption text-md-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon><strong>Network</strong> with industry leaders.</h4>
                <h4 class="textWhite text-caption text-md-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon>Perfect for those with limited time.</h4>
              </v-card-text>
              <h1 class="text-h3 textWhite mb-16"><span class="textYellow">$</span>1200</h1>
              <OrangeBtn value="REGISTER NOW"/>
            </v-card>
          </v-badge>
          </v-col>
          <!-- Card Direita -->
          <v-col sm="12" md="4" col="12"  class="rgt d-flex justify-sm-center justify-center justify-md-start">
            <v-card class="ticketCard" rounded="lg" width="21rem" height="20.6rem">
              <v-card-title class="textWhite text-center mt-2 text-sm-h5 text-h4 font-weight-bold"><u>2 Days Ticket</u></v-card-title>
              <v-card-text class="mt-6">
                <h4 class="textWhite text-caption text-lg-subtitle-2" ><v-icon icon="mdi-check" color="orange" size="small"></v-icon>Access to <strong>all sessions</strong> and <strong>workshops</strong> .</h4>
                <h4 class="textWhite text-caption text-lg-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon>Ideal for diving deeper into the conference.</h4>
                <h4 class="textWhite text-caption text-lg-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon><strong>Flexibility</strong> to choose which days you want.</h4>
              </v-card-text>
              <h1 class="text-h3 textWhite mb-8"><span class="textYellow">$</span>1000</h1>
              <OrangeBtn value="REGISTER NOW"/>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <!-- Apresentação do Schedule-->
    <v-container class="partWithUsSection">
      <h1 class="textDarkBlue mx-auto text-center scheduleTitle lft">Partner With CES</h1>
      <v-row class="my-16 ">
        <v-col class="lft d-flex justify-start justify-md-center justify-sm-center" cols="12"  lg="6">
          <img class="SchImg" :width="576" :src="partnersImg"></img>
        </v-col>
        <v-col class="rgt d-flex justify-space-between align-center flex-column ga-2 " cols="12" lg="6">
          <div class="textDarkBlue d-flex flex-column align-center justify-center mx-6">
            <h1 class="scheduleText mt-4 mb-8 text-center">Join the world’s most innovative technology event and showcase your company to a global audience.</h1>
            <h2 class="w-75 scheduleSubText text-center">By partnering with CES, you’ll gain unparalleled visibility, connect with industry leaders, and position your brand at the forefront of innovation.</h2>
          </div>
          <BlueBtnToOrange :handle-click="goToPartnerPage" value="Become a Partner"/>
        </v-col>
      </v-row>
    </v-container>

    </v-main>
    <Footer/>
  </v-app>

</template>



<style>
.ticketCard{
  background: linear-gradient(180deg, #6590D0 0%, #33496A 100%) !important;
}
.ticketMaster{
  background: linear-gradient(180deg, #26466D 0%, #4A88D3 100%) !important;

}
.feedName{
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.feedTitle{
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.feedText{
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
.textDarkBlue{
  color: var(--color-dark-blue);
}
.textWhite{
  color: var(--color-white);
}
.textYellow{
  color: var(--color-orange);
}
.scheduleText{
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem; /* 106.667% */
}
.scheduleSubText{
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 2rem;
}
.scheduleTitle, .partTitle{
  font-size: 2.25rem;
  font-weight: 600;
  line-height: normal;
}
.speakerTitle{
  font-size: 5rem;
  font-style: bold;
  font-weight: 800;
  line-height: 4rem; /* 46.875% */
  text-align: center;
}
.speakerMasterTitle{
  padding-top: 7rem !important;
  height: 100% !important;
  width: 100% !important;
  flex: 0 0 100%; /* Garante que o tamanho não seja comprimido */
}
.SPcontainer, .scheduleSection, .opinionSection, .partnersSection, .ticketSection, .partWithUsSection{
  margin-top: 15rem !important;
}

.statsSubTitle{
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.statsTitle, .count{
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.875rem; /* 46.875% */
}

.statsBar{
  width: 100% !important;
  margin-top: 40rem !important;
  background-color: #26466D !important;
}
.mainTitles, .box-container{
  padding-top: 6rem !important;
}
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Para evitar rolagem horizontal */
}

.masterImg{
  height: 75vh;
  width: 20rem;
  object-fit: cover;
}

.center{
  background: var(--Initial-Gradient, linear-gradient(180deg, #26466D 0%, #6590D0 50%, #EEF6F2 100%));
}
.afterAnimation{
  z-index: 9999 !important;
  opacity: 0;
}
.masterTitleDate{
  text-align: center;
  font-size: 8rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}
.masterTitleLocal{
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.masterDesc {
  text-align: center;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

@media only screen and (max-width: 700px) {
    .SchImg{
        width: 450px !important;
        display: flex !important;
        justify-content: start !important;
    }
}
@media only screen and (max-width: 762px) {
    .speakerTitle{
      font-size: 4rem;
      font-weight: 700;
      line-height: 3.5rem; /* 46.875% */
    }
    .count,.statsTitle{
      font-size: 3rem !important;
      font-weight: 500 !important;
    }
    .statsSubTitle{
      font-size: 1.5rem !important;
    }
    .masterTitleDate{
      font-size: 6rem;
      font-weight: 800;
    }
    .masterTitleLocal{
      font-size: 2.5rem;
      font-weight: 400;
    }
    .masterDesc {
      font-size: 2rem;
      font-weight: 300;
    }
}
@media only screen and (max-width: 550px) {
    .count,.statsTitle{
      font-size: 2.2rem !important;
      font-weight: 500 !important;
    }
    .statsSubTitle{
      font-size: 1.3rem !important;
    }
    .masterTitleDate{
      font-size: 4rem;
    }
    .masterTitleLocal{
      font-size: 2rem;
    }
    .masterDesc {
      font-size: 1.5rem;
    }
}
</style>
