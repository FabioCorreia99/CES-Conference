<script>
import { ref } from 'vue';
import { speakersStore } from '../stores/speakers';
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
    ctx = gsap.context((self) => {
      let tl = gsap.timeline({scrollTrigger: {
        trigger:".box-container",
        start: "center center",
        end: "+=600",
        pin: true,
        scrub: 1,
        markers:1,
          snap: {
            snapTo: 1, // Encaixa no final do ScrollTrigger (progresso 1)
            duration: { min: 1, max: 2 }, // Duração do snap
            ease: "power1.inOut", // Efeito suave ao ajustar
            delay: 0.1, // Espera 0.1s antes de fazer o snap
          },
      }})

      tl.to(".left", { y: "+700" , ease: "power1.out", opacity: 0 });
      tl.to(".right", { y: "-500", ease: "power3.out", opacity: 0 },"<");
      tl.to(".center",{position: "absolute", y:"-100", width: "100vw", height:"100vh", ease: "power2.out"}
      ,">")
      tl.from(".after-animation",{opacity: 0, ease: "power2.out"}
      ,">")
    }, main.value); // <- Scope!
  },
  beforeDestroy () {
    ctx.revert();
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
          <v-col cols="12" class="d-flex justify-space-around mb-6 mt-10 mx-0 box-container">
            <img class="masterImg left" :src="leftImg">
            <div class="masterImg center d-flex justify-center flex-column align-center ga-16">  
              <div class="d-flex justify-center flex-column align-center pa-0 ma-0 after-animation">
                <h1 class=" masterTitleDate">JANUARY 7-9</h1>
                <h1 class="masterTitleLocal">PORTO, PORTUGAL</h1>
              </div>
              <h1 class="after-animation">CES: Inspiring developers, shaping tomorrow</h1>
              <OrangeBtn class="after-animation" value="Buy Ticket" route="home"/>
            </div> 
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

.center{
  background: var(--Initial-Gradient, linear-gradient(180deg, #26466D 0%, #6590D0 50%, #EEF6F2 100%));
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
</style>
