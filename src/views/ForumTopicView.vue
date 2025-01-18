<template>
  <v-app>
    
    <header class="position-absolute">
        <Navbar />
    </header>

    <v-main v-if="topic">
        <!-- Topic header -->
        <v-row class="bg-intro mx-0 pt-10 w-100">
            <v-col class="mt-12">
                <div class="author">
                    <v-avatar size="x-small" :image="img"></v-avatar>
                    <p>{{ topic.author  }}</p>
                </div>
                <h1 class="introTitle mb-1">{{ topic.title }}</h1>
                <v-row v-if="topic.filters.length >= 1">
                    <v-col cols="12">
                        <v-chip-group :mobile=false multiple filter class="chips" selected-class="scheduleSelected" v-if="topic.filters.length >= 1">
                        <v-chip  v-for="filter in topic.filters" :key="filter" class="scheduleDays" rounded="lg" :value="filter" >{{ filter }}</v-chip>
                        </v-chip-group>
                    </v-col>
                </v-row>
                <h6 class="textTitle my-12 w-75">{{ topic.desc }}</h6>   
            </v-col>
        </v-row>
     
        <!-- Comments & like -->
        <v-row no-gutters class="commentsContainer mx-0 pt-10 w-100">
            <!-- new comment -->
            <v-col cols="12" class="d-flex mb-2">
                <v-textarea 
                    v-model="comment"
                    label="/Leave a comment"
                    underlined
                    auto-grow
                    clearable
                    counter
                    dense
                    row-height="15"
                    rows="1"
                    :rules="commentRules"
                    required
                    class="pr-6">
                </v-textarea>
                <SubmitBtn value="Post" @submit="submitComment"/>
            </v-col>
            <!-- topic comments -->
            <v-col cols="12" class="mb-2">
                <CommentsCard 
                    v-for="(comment, index) in topic.comments"
                    :key="index"
                    :comment="comment.comment"
                    :author="comment.author"
                    class="mb-3"
                />
            </v-col>
        </v-row>
 

    </v-main>

    <!-- No caso de não encontrar o topico -->
    <v-main v-else>
        <v-row class="bg-intro mx-0 pt-10 w-100">
            <v-col class="mt-12">
                <h1 class="introTitle mb-1">Topic not found!</h1>
                <h6 class="textTitle my-12 w-75">Please go back to the last page</h6>   
            </v-col>
        </v-row>
    </v-main>

</v-app>

<link href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css" rel="stylesheet">
</template>

<script>
import CommentsCard from "@/components/CommentsCard.vue";
import Navbar from "@/components/Navbar.vue";
import SubmitBtn from '@/components/SubmitBtn.vue';

import { useTopicsStore } from "@/stores/forum";
import { useUsersStore } from "@/stores/users";

export default {
    components: {
        Navbar,
        SubmitBtn,
        CommentsCard,
    },
    props: ["topicId"],
    computed: {
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
        const topicsStore = useTopicsStore();
        const usersStore = useUsersStore();

        return {
            topicsStore,
            usersStore,
            comment: "",
            commentRules: [
            value => {
                    if (value?.length >= 3 && value?.length <= 250) {
                        return true
                    } else {
                        return "Comment must have between 3 and 500 characters."
                    }
                }
            ],
            topic: topicsStore.topics.find((topic) => topic.id == this.topicId),
        }
    },
    methods: {
        submitComment() {
            const userId = this.usersStore.currentUserId;

            if (this.topic) {
                if (userId) {

                    const newComment = {
                    comment: this.comment,
                    author: this.usersStore.getUserById(userId),
                    }
                    
                    console.log(newComment.author);

                    this.topicsStore.addComment(this.topic.id, newComment);
                    console.log(`New comment added: ${this.comment}`);
                
                    this.comment = "";

                }
            }
        },

    }, 
    
}
</script>

<style scoped>

.author {
    display: flex;
}
.introTitle {
    font-size: 32px;
}
.commentsContainer {
    padding: 0 8rem;
}
</style>
