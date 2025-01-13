<template>
<v-app>
    
    <header class="position-absolute">
        <Navbar />
    </header>

    <v-main>
        
        <v-row class="bg-intro mx-0 pt-10 w-100">
            <v-col>
                <h1 class="introTitle my-12">Forum</h1>
                <h6 class="textTitle my-12 w-75">Be part of the action - share your thoughts, and engage with a global community of tech enthusiasts, all in one place.</h6>

                <div class="d-flex justify-center align-center my-1 w-50">
                    <v-text-field
                        class="mt-9 mb-0"
                        rounded="lg"
                        label="/Search..."
                        prepend-inner-icon="mdi-magnify"
                        variant="solo"
                        v-model="search"
                    ></v-text-field>

                    <div class="d-flex mx-3">
                        
                        <v-col cols="auto">

                            <v-hover v-slot="{ isHovering, props }">
                                <v-btn 
                                    @click="toggleCreate"
                                    elevation="4" 
                                    size="large" 
                                    :color="isHovering ?  '#EEF6F2' : '#F2A714'"
                                    class="rounded-lg Orangebtn"
                                    v-bind="props"
                                    ><span 
                                        class="text-lowercase text-button"
                                        :class="{ 'on-hover': isHovering }"
                                        v-bind="props"
                                        >/Create New Topic
                                    </span>
                                </v-btn>
                            </v-hover>

                        </v-col>  
                 
                    </div>

                </div>
                    
            </v-col>
        </v-row>
      <v-container class="mt-12" v-if="!showCreate">
        <v-row>
            <v-col cols="12">
                <v-chip-group :mobile=false multiple filter class="mx-lg-16 chips" selected-class="scheduleSelected" v-model="topicSelected" >
                <v-chip  v-for="filter in talksStore.filters" :key="filter" class="scheduleDays" rounded="lg" :value="filter" >{{ filter }}</v-chip>
                </v-chip-group>
            </v-col>
        </v-row>
        
        <v-row>
          <v-col v-for="(topic, index) in filteredTopics" :key="topic.id" cols="12" class="mb-4" >
            <TopicCard 
                :id="topic.id"
                :title="topic.title"
                :author="topic.author"
                :image="topic.image"
                :likes="topic.likes"
                :comments="topic.comments.length" 
            />
          </v-col>
        </v-row>
      </v-container>

      <!-- Create Topic View  -->
      <v-container v-if="showCreate">
        <router-view @close-form="closeCreate"/>
      </v-container>

      <!-- Topic Page View -->
      <router-view v-if="!showCreate" />

    </v-main>
</v-app>

<link href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css" rel="stylesheet">
</template>

<script>
import BlueBtnToOrange from "@/components/BlueBtnToOrange.vue";
import Navbar from "@/components/Navbar.vue";
import OrangeBtn from "@/components/OrangeBtn.vue";
import TopicCard from "@/components/TopicCard.vue";

import { useTopicsStore } from "@/stores/forum";
import { useTalksStore } from '@/stores/talks.js';

export default {
    components: {
        Navbar,
        OrangeBtn,
        BlueBtnToOrange,
        TopicCard,
    },
    data() {
        return {
            topics: [],
            showCreate: false,
            search: "",
            talksStore: useTalksStore(),
            topicsStore: useTopicsStore(),
            topicSelected: [],
        }
    },
    computed: {
        filteredTopics() {
            const input = this.search.toLowerCase();

            return this.topicsStore.topics.filter((topic) => topic.title.toLowerCase().includes(input));
        }
    },
    methods: {
        toggleCreate() {
            this.showCreate = !this.showCreate;
            
            if (this.showCreate) {
                this.$router.push({name: "forumCreate"});
            } else {
                this.$router.push({name: "forum"});
            }
            
        },
        closeCreate() {
            this.showCreate = false;
            this.$router.push({name: "forum"});
        },

    }

}
</script>

<style>

span{
    color: var(--color-white) !important;
}
.on-hover {
    color: #F2A714 !important; /* Aplica o estilo ao texto */
}

</style>
