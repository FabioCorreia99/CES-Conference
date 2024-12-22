<script>

import { speakersStore } from '../stores/speakers';
import Navbar from '@/components/Navbar.vue';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default {
  components: {
    Navbar,
  },
  data() {
    return {
      speakersStore: speakersStore(),
      leftImg: new URL("../assets/media/left.png", import.meta.url).href,
      rightImg: new URL("../assets/media/right.png", import.meta.url).href
    }
  },
  created () {
    try {
      this.speakersStore.fetchPersons();
      console.log(this.speakersStore.speakers);
    } catch (error) {
      alert(error.message)
    }
  },
  mounted () {
    let tl = gsap.timeline({scrollTrigger: {
      trigger:".box-container",
      start: "center center",
      end: "+=300",
      invalidateOnRefresh: true,
      pin: true,
      scrub: 1,
      markers:1
    }})

    tl.to(".left", { y: "+700" , ease: "power1.out", opacity: 0});
    tl.to(".right", { y: "-500", ease: "power3.out", opacity: 0},"<");
    tl.to(".center",{ width: "100vw", height:"100vh", ease: "power2.out",
      scrollTrigger: { 
        trigger:".box-container",
        start: "52% center",
        end: "+=250",
        invalidateOnRefresh: true,
        scrub: 1,
        pin: true,
        markers:1,
        pinSpacing: false,
        snap: {
          snapTo: 1, // Encaixa no final do ScrollTrigger (progresso 1)
          duration: { min: 0.2, max: 1 }, // Duração do snap
          ease: "power1.inOut", // Efeito suave ao ajustar
          delay: 0.1, // Espera 0.1s antes de fazer o snap
        },
      }
    },)
  },
}

</script>

<template>


  <v-app>
    <v-row>
      <!-- Navbar Column -->
      <v-col>
        <header>
            <Navbar />
        </header>
      </v-col>
    </v-row>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" class="d-flex justify-center mb-6 mt-3 box-container">
            <img class="masterImg left" :src="leftImg">
            <img class="masterImg center mx-5">
            <img class="masterImg right" :src="rightImg">
          </v-col>
        </v-row>

        <v-row>
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
span {
  color: white;
}

.masterImg{
  height: 75vh;
  width: 20rem;
  object-fit: cover;
}
</style>
