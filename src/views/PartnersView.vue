<template>
<v-app>
    <header class="position-absolute">
        <Navbar />
    </header>

    <v-main>
        <v-row class="bg-intro mx-0 pt-10 w-100">
            <v-col>
                <h1 class="introTitle my-12">Partners</h1>
                <h6 class="textTitle my-12 w-75">Be the partner that inspires teams to create extraordinary solutions.</h6>
                <div class="d-flex justify-space-around my-1 w-50">

                </div>
            </v-col>
        </v-row>
      
        <!-- Nova Seção Adicionada -->
      <v-container class="about-section mt-10">
        <v-row class="d-flex align-center">
          <!-- Texto informativo -->
          <v-col cols="12">
            <h2 class="about-title">
                Why Partner with CES?
            </h2>
            
            <ul class="bulletPoint">
                <li>
                    <b>Global Exposure:</b> Present your brand to a diverse audience of tech leaders, startups, students, and professionals transitioning into the tech industry.
                </li>
                <li>
                    <b>Networking Opportunities:</b> Gain direct access to decision-makers, including team leads, managers, architects, and developers.
                </li>
                <li>
                    <b>Industry Leadership:</b> Position your organization as a leader in innovation and technology.
                </li>
                <li>
                    <b>Talent Acquisition:</b> Connect with bright minds eager to explore career opportunities with your company.
                </li>
                <li>
                    <b>Engagement with Startups:</b> Collaborate with emerging startups and discover breakthrough projects in the Startup Showcase.
                </li>
            </ul>

          </v-col>

        </v-row>

        <v-row class="mt-16">
            <v-col cols="12">
                
                <div class="titleSubtitleWrapper">
                    <div class="partnerTicketsTitleWrapper">
                        <h1 class="about-title orangeText">
                            Partnership
                        </h1>
                        
                        <h1 class="about-title">
                            Opportunities
                        </h1>
                    </div>

                    <h4 class="blueText">CES offers tailored partnership packages designed to meet your organization’s goals:</h4>
                </div>

            </v-col>
            
        </v-row>

        <v-row class="align-center">
          <!-- Card Esquerda -->
          <v-col sm="12" md="4" col="12" class="d-flex justify-sm-center justify-center justify-md-end">
            <v-card class="ticketCard" rounded="lg" width="20.875rem" height="17.75.6rem">
              <v-card-title class="textWhite text-center mt-2 text-sm-h5 text-h4"><u>Silver Partner</u></v-card-title>
              <v-card-text class="mt-2 ml-6">
                <h4 class="textWhite text-caption text-lg-subtitle-2" > <v-icon icon="mdi-check" color="orange" size="small"></v-icon><strong>4</strong>m2 exhibidor space</h4>
                <h4 class="textWhite text-caption text-lg-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon><strong>2</strong> high chairs, <strong>1</strong> poseur table</h4>
                <h4 class="textWhite text-caption text-lg-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon><strong>Wifi-fi</strong> and <strong>power</strong></h4>
                <h4 class="textWhite text-caption text-lg-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon><strong>Logo visibility</strong> on our Website</h4>
                <h4 class="textWhite text-caption text-lg-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon><strong>4 tickets</strong> to the conference</h4>
                <h4 class="textWhite text-caption text-lg-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon>Access to <strong>15% discounted tickets</strong></h4>
                <h4 class="textWhite text-caption text-lg-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon>Partner <strong>badge</strong> and <strong>banners</strong></h4>
              </v-card-text>
            </v-card>
          </v-col>
          <!-- Card Central -->
          <v-col sm="12" md="4" col="12" class="d-flex justify-center">
            <v-badge content="Popular" offset-x="20" color="orange" text-color="white">
            <v-card class="ticketMaster" rounded="lg" width="21.75rem" height="22.875rem">
              <v-card-title class="textWhite text-center mt-2 text-sm-h5 text-h4"><u>Gold Partner</u></v-card-title>
              <v-card-text class="my-6 ml-6">
                <h4 class="textWhite text-caption text-md-subtitle-2" > <v-icon icon="mdi-check" color="orange" size="small"></v-icon><strong>1 Talk </strong>in the programme</h4>
                <h4 class="textWhite text-caption text-md-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon><strong>6</strong>m2 exhibitor space</h4>
                <h4 class="textWhite text-caption text-md-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon><strong>2</strong> high chairs, <strong>1</strong> poseur table</h4>
                <h4 class="textWhite text-caption text-lg-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon><strong>Wifi-fi</strong> and <strong>power</strong></h4>
                <h4 class="textWhite text-caption text-lg-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon><strong>8 tickets</strong> to the conference</h4>
                <h4 class="textWhite text-caption text-lg-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon>Access to <strong>20% discounted tickets</strong></h4>
                <h4 class="textWhite text-caption text-lg-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon>Partner <strong>badge</strong> and <strong>banners</strong></h4>
              </v-card-text>
            </v-card>
          </v-badge>
          </v-col>
          <!-- Card Direita -->
          <v-col sm="12" md="4" col="12"  class="d-flex justify-sm-center justify-center justify-md-start">
            <v-card class="ticketCard" rounded="lg" width="20.875rem" height="17.75.6rem">
              <v-card-title class="textWhite text-center mt-2 text-sm-h5 text-h4"><u>Bronze Partner</u></v-card-title>
              <v-card-text class="mt-2 ml-6 pb-16">
                <h4 class="textWhite text-caption text-md-subtitle-2" > <v-icon icon="mdi-check" color="orange" size="small"></v-icon><strong>2 tickets </strong>to the conference</h4>
                <h4 class="textWhite text-caption text-md-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon>Access to<strong> 10% discounted tickets</strong></h4>
                <h4 class="textWhite text-caption text-md-subtitle-2"> <v-icon icon="mdi-check" color="orange" size="small"></v-icon>Partner <strong>badge</strong> and <strong>banners</strong></h4>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-16">
            <v-col>
                <h2 class="about-title">
                    Partner Benefits
                </h2>

                <div class="listImageWrapper">
                    
                    <ul class="about-list mt-16">
                        <li>
                            <span class="list-number">01</span> Brand Visibility
                        </li>
                        <li><span class="list-number">02</span> Lead Generation</li>
                        <li>
                            <span class="list-number">03</span> Networking
                        </li>
                        <li>
                            <span class="list-number">04</span> Recognition
                        </li>
                    
                    </ul>

                    <img src="@\assets\media\Partners Image.svg" alt="Images illustrating the partner benefits. A light bulb, a hand-shake, a table full of people, two people working together and a person doing a presentation">
                </div>
                
            </v-col>

        </v-row>

        <v-row class="mt-16">

            <v-col>   
                        
                <h1 class="about-title">
                    Ready to become a Partner?
                </h1>

                <h4 class="blueText mb-8">Join us in shaping the future of technology at CES 2025.</h4>

                <OrangeBtn value="Join us" @click="goToForm"/>
           
            </v-col>

        </v-row>

      </v-container>

    </v-main>
    <Footer />
</v-app>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import OrangeBtn from '@/components/OrangeBtn.vue';

export default {
    components: {
        Navbar,
        OrangeBtn,
        Footer,
    },
    methods: {
        goToForm() {
            this.$router.push({name: "PartnersForm"});
        }
    },
}
</script>

<style scoped>

.listImageWrapper {
    display: flex;
    max-width: 1200px;
    justify-content: space-between;
}

.titleSubtitleWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.partnerTicketsTitleWrapper {
    display: flex;
    gap: 0.25rem;
}

.orangeText {
    color: var(--color-orange) !important;
}

.blueText {
    color: var(--color-dark-blue);
}

.bulletPoint {
    margin-left: 1rem;
    color: var(--color-dark-blue);
    font-size: 1rem;
    line-height: 1.6;
}

.bulletPoint li {
    font-weight: 300;
    margin-top: 10px;
}

.about-section {
  margin-top: 50px;
}

.about-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--color-dark-blue);
}

.about-text {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-dark-blue);
}

.about-subtitle {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
  color: var(--color-dark-blue);
}

.about-list {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.about-list li {
  margin-bottom: 10px;
  font-size: 1.5rem;
  line-height: 1.5;
  color: var(--color-dark-blue);
}

.list-number {
  font-weight: bold;
  font-size: 2rem;
  color: var(--color-orange);
  margin-right: 8px;
}

</style>