<script>
import { ref,onBeforeUnmount } from 'vue';

import { useSpeakersStore } from '../stores/speakers';
import { useTalksStore } from '@/stores/talks.js';

import Navbar from '@/components/Navbar.vue';
import OrangeBtn from '@/components/OrangeBtn.vue';

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;

export default {
  components: {
    Navbar,
    OrangeBtn
  },
  data() {
    return {
      speakersStore: useSpeakersStore(),
      talksStore: useTalksStore(),
      leftImg: new URL("../assets/media/left.png", import.meta.url).href,
      rightImg: new URL("../assets/media/right.png", import.meta.url).href
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
        markers:1,
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
    }, main.value); // <- Scope!
  },
  beforeUnmount() {
    if (ctx) {
      ctx.revert(); // Reverte o contexto do GSAP
    }
  },
}

</script>

<template>
  <v-app>
    <header class="position-absolute">
      <Navbar />
    </header>
    <v-main>
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
              <h1 class=" masterTitleDate">JANUARY 7-9</h1>
              <h1 class="masterTitleLocal">PORTO, PORTUGAL</h1>
            </div>
            <h1 class="afterAnimation masterDesc">CES: Inspiring <b>developers</b>, shaping tomorrow</h1>
            <div class="afterAnimation">
              <OrangeBtn value="Buy Ticket" route="home"/>
            </div>
          </div> 
        </v-col>
        <!-- Imagem Direita -->
        <v-col class="d-flex justify-start right" cols="4">
          <img class="masterImg" :src="rightImg">
        </v-col>
      </v-row>

      <v-row class="body">
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt odio facilis omnis, beatae consectetur dolorum deleniti accusantium quam vero nam numquam quia perspiciatis impedit distinctio, doloribus dolores ea nesciunt?</h1>
        </v-row>
      </v-container>
    </v-main>
  </v-app>

</template>



<style>
.mainTitles{
  padding-top: 6rem !important;
}
.box-container{
  padding-top: 6rem !important;
}
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Para evitar rolagem horizontal */
}
.intro{
  margin-bottom: 50rem !important;
}
span {
  color: white;
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
  color: #EEF6F2;
  text-align: center;
  font-size: 8rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}
.masterTitleLocal{
  color: #EEF6F2;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.masterDesc {
  color: #EEF6F2;
  text-align: center;
  font-family: "Source Sans 3";
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
</style>
