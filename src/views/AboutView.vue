<template>
  <v-app>
    <header class="position-absolute">
      <Navbar />
    </header>

    <v-main>
      <v-row class="bg-intro mx-0 pt-10 w-100">
        <v-col>
          <h1 class="introTitle my-12">About</h1>
          <h6 class="textTitle my-12 w-75">
            CES® is the world's most impactful tech event — the launchpad for
            groundbreaking ideas and visionary creators.
          </h6>
          <div class="d-flex justify-space-around w-50"></div>
        </v-col>
      </v-row>

      <v-container>
        <v-row class="aboutContainer"></v-row>
      </v-container>

      <!-- Nova Seção Adicionada -->
      <v-container class="about-section mt-10">
        <v-row class="d-flex align-center">
          <!-- Texto informativo -->
          <v-col cols="12" md="6">
            <h2 class="about-title">
              Welcome to CES, the world's largest conference dedicated to
              consumer technology and innovation.
            </h2>
            <p class="about-text">
              The CES (<strong>Consumer Electronics Show</strong>) is globally
              recognized as the premier stage where the most
              <strong>disruptive technologies</strong> are unveiled.
            </p>
            <p class="about-text">
              This event attracts participants from various fields, including
              <strong>startups</strong>, <strong>major corporations</strong>,
              <strong>students</strong>, and
              <strong>professionals</strong> seeking new
              <strong>opportunities</strong> in the tech sector.
            </p>
            <p class="about-text">
              CES is the <strong>meeting point</strong> for those who want to
              dive into the world of <strong>innovation</strong>, connecting
              <strong>ideas</strong>, <strong>people</strong>, and
              <strong>companies</strong> to shape tomorrow.
            </p>
            <h4 class="about-subtitle">What to expect at CES?</h4>
            <ul class="about-list">
              <li>
                <span class="list-number">01</span> Artificial Intelligence and
                Machine Learning
              </li>
              <li><span class="list-number">02</span> Tech Startup Expo</li>
              <li>
                <span class="list-number">03</span> Internet of Things (IoT)
              </li>
              <li><span class="list-number">04</span> Frontend and UI/UX</li>
              <li>
                <span class="list-number">05</span> Leadership and Team
                Management
              </li>
              <li><span class="list-number">06</span> Hackathon</li>
            </ul>
          </v-col>

          <!-- Imagem CES -->
          <v-col cols="12" md="6" class="d-flex justify-center">
            <div class="image-wrapper">
              <img
                src="../assets/media/CES-2024-Las-Vegas 1.png"
                alt="CES Image"
                class="ces-image"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>

      <!-- FAQ's -->
      <v-container class="faq-section mt-10">
        <h2 class="faq-title">FAQs</h2>
        <p class="faq-subtitle">Have questions? We're here to help.</p>

        <div class="d-flex justify-space-around my-1 w-50">
          <v-text-field
            class="mt-2 mb-6"
            rounded="lg"
            label="/Search..."
            prepend-inner-icon="mdi-magnify"
            variant="solo"
          ></v-text-field>
        </div>

        <v-expansion-panels
          class="faq-panels"
          v-model="expandedPanels"
          multiple
          accordion
        >
          <v-expansion-panel
            v-for="faq in filteredFaqs"
            :key="faq.question"
            class="faq-panel mb-4"
            bg-color="rgba(189, 199, 211, 0.3)"
            style="min-height: 70px"
          >
            <v-expansion-panel-title>
              <span class="faq-question">{{ faq.question }}</span>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p class="faq-answer">{{ faq.answer }}</p>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>

      <v-container class="contact-section mt-10">
        <h2 class="contact-title">Contact us</h2>
        <p class="contact-subtitle">
          Feel free to reach out if you have any questions, suggestions or
          simply want to learn more about CES.
        </p>

        <v-row class="align-center">
          <!-- Informações de contato -->
          <v-col cols="12" md="6">
            <p>
              📍 <strong>Event Location:</strong><br />
              3150 Paradise Rd, Las Vegas, NV 89109, Estados Unidos
            </p>
            <p>
              📞 <strong>Phone:</strong><br />
              (+351) 123 456 789
            </p>
            <p>
              📧 <strong>General Email:</strong><br />
              <a href="mailto:info@ces-tech.com">info@ces-tech.com</a>
            </p>
            <p>
              📧 <strong>Participant Support:</strong><br />
              <a href="mailto:support@ces-tech.com">support@ces-tech.com</a>
            </p>
          </v-col>

          <!-- Mapa dinâmico -->
          <v-col cols="12" md="6" class="d-flex justify-center mt-6 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.405605893078!2d-115.15463112359427!3d36.132017972445134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c515a04a5e05%3A0x90e5ef692384c7f9!2s3150%20Paradise%20Rd%2C%20Las%20Vegas%2C%20NV%2089109%2C%20EUA!5e1!3m2!1spt-PT!2spt!4v1737649244412!5m2!1spt-PT!2spt"
              width="100%"
              height="400"
              style="border: 0; border-radius: 10px"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
  <link
    href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css"
    rel="stylesheet"
  />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { ref, computed, watch } from "vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const searchQuery = ref("");
    const expandedPanels = ref([]);
    const faqs = ref([
      {
        question: "How can I purchase tickets for the event?",
        answer:
          'You can purchase tickets directly on our website through the "Buy Ticket" page. Select your ticket type, provide your details, and complete the payment.',
      },
      {
        question: "Is it mandatory to create an account to register?",
        answer:
          "Yes, creating an account is required to register and access features like the personalized schedule and the online forum.",
      },
      {
        question: "What types of tickets are available?",
        answer: "We offer general admission tickets and student passes.",
      },
      {
        question: "Where can I view the event schedule?",
        answer:
          'The complete schedule is available on the "Schedule" page of our website. You can personalize it by adding sessions to your personal calendar.',
      },
      {
        question: "How does the online forum work?",
        answer:
          "The online forum allows participants to interact with the speakers and other users to discuss topics covered in the talks in real time.",
      },
      {
        question: "Where will the event take place?",
        answer:
          'The event will be held at Las Vegas Convention Center in EUM. Details about the address and directions will be available on the "About" page.',
      },
      {
        question: "How long is the event?",
        answer:
          "The event will run for 2 or 3 days, featuring sessions, talks, workshops, and the startup exhibition.",
      },
      {
        question: "What are the main themes of the event?",
        answer:
          "The themes include Artificial Intelligence and Machine Learning, Internet of Things (IoT), Frontend and UI/UX, Leadership and Team Management, and more.",
      },
      {
        question: "Is the event accessible for people with reduced mobility?",
        answer:
          "Yes, the event venue is fully accessible. Please contact us if you need additional assistance.",
      },
    ]);

    // Computed property to filter FAQs
    const filteredFaqs = computed(() => {
      return faqs.value.filter((faq) =>
        faq.question.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    // Watch to reset the expanded panels when search query changes
    watch(searchQuery, () => {
      expandedPanels.value = [];
    });

    return {
      searchQuery,
      faqs,
      filteredFaqs,
      expandedPanels,
    };
  },
};
</script>

<style scoped>
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
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-dark-blue);
}

.list-number {
  font-weight: bold;
  color: var(--color-orange);
  margin-right: 8px;
}

/* Estilização da imagem CES */
.image-wrapper {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.ces-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.faq-title {
  font-weight: bold;
  color: var(--color-dark-blue);
  margin-bottom: 0.5rem;
}

.faq-subtitle {
  color: var(--color-dark-blue);
  margin-bottom: 1.5rem;
}

.faq-panel {
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden;
}

.faq-question {
  font-size: medium;
  font-weight: bold;
  color: var(--color-dark-blue);
}

.faq-answer {
  color: var(--color-dark-blue);
}

.contact-title {
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-dark-blue);
  margin-bottom: 0.5rem;
}

.contact-subtitle {
  font-size: 1rem;
  color: var(--color-dark-blue);
  margin-bottom: 1.5rem;
}

.contact-section p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-dark-blue);
  margin-bottom: 1rem;
}

.contact-section a {
  color: var(--color-dark-blue);
  text-decoration: none;
}

.map-image {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.map-image:hover {
  transform: scale(1.05);
}
</style>
