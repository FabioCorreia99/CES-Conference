<template>
  <v-app>
    
    <header class="position-absolute">
        <Navbar />
    </header>

    <v-main v-if="topic">
        
        <v-row class="bg-intro mx-0 pt-10 w-100">
            <v-col class="mt-12">
                <div class="author">
                    <v-avatar size="x-small" :image="img"></v-avatar>
                    <p>{{ topic.author  }}</p>
                </div>
                <h1 class="introTitle mb-12">{{ topic.title }}</h1>
                <v-row v-if="topic.filters.length >= 1">
                    <v-col cols="12">
                        <v-chip-group :mobile=false multiple filter class="mx-lg-16 chips" selected-class="scheduleSelected" v-if="topic.filters.length >= 1">
                        <v-chip  v-for="filter in topic.filters" :key="filter" class="scheduleDays" rounded="lg" :value="filter" >{{ filter }}</v-chip>
                        </v-chip-group>
                    </v-col>
                </v-row>
                <h6 class="textTitle my-12 w-75">{{ topic.desc }}</h6>   
            </v-col>
        </v-row>
      <v-container class="mt-12">
        <v-row>
          <v-col cols="12" class="mb-4" >
            
          </v-col>
        </v-row>
      </v-container>

    </v-main>
</v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { useTopicsStore } from "@/stores/forum";

export default {
    components: {
        Navbar,
    },
    props: ["topicId"],
    computed: {
        topic() {
            const topicsStore = useTopicsStore();
            let currentTopic = topicsStore.topics.find((topic) => topic.id == this.topicId);
            
            return currentTopic;
        },
        img() {
            if (this.topic && this.topic.image) {
                return new URL(this.topic.image, import.meta.url).href;
            } else {
                console.log("Topic author profile image not found.");
                return "";
            }
        }
    },
    data() {
        return {
            
        }
    },
    
}
</script>

<style scoped>

.author {
    display: flex;
}

</style>
