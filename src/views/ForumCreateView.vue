<template>

    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <h1 class="text-h4 mb-6">Create a New Topic</h1>

                <v-form ref="createTopicForm" v-model="isValid" @submit.prevent="submitForm">
                    <!-- title -->
                     <v-text-field 
                      v-model="title"
                      label="Title" 
                      outlined 
                      dense
                      :rules="titleRules" 
                      required>
                    </v-text-field>
                    <!-- text -->
                    <v-textarea 
                    v-model="desc"
                    label="Description"
                    outlined
                    dense
                    :rules="descRules" 
                    required>
                    </v-textarea>
                    <!-- topic tags -->
                    <v-text-field 
                      v-model="filters"
                      label="Tags" 
                      outlined 
                      dense
                      required>
                    </v-text-field>

                    <SubmitBtn value="submit"/>

                    <BlueBtnToOrange value="cancel" :handleClick="cancelForm"/>

                </v-form>

            </v-col>
        </v-row>
    </v-container>

</template>

<script>
import { useRouter } from 'vue-router';
import { useTopicsStore } from "@/stores/forum"
import BlueBtnToOrange from '@/components/BlueBtnToOrange.vue';
import SubmitBtn from '@/components/SubmitBtn.vue';

export default {
    components: {
        BlueBtnToOrange,
        SubmitBtn,
    },
    setup() {
        const router = useRouter();
        const topicsStore = useTopicsStore();

        return { router, topicsStore };
    },
    data() {
        return {
            title: "",
            titleRules: [
                value => {
                    if (value?.length >= 3) {
                        return true
                    } else {
                        return "Title must have at least 3 characters."
                    }
                }
            ],
            desc: "",
            descRules: [
            value => {
                    if (value?.length >= 3 && value?.length <= 500) {
                        return true
                    } else {
                        return "Description must be between 3 and 500 characters."
                    }
                }
            ],
            tags: "",
            isValid: false,
        }
    },
    methods: {
        submitForm() {
            const router = this.router;
            const topicsStore = this.topicsStore;

            if (!this.isValid) {
                console.log("Form is not valid!");
                return;
            }

            const userId = 1; // TROCAR POR ID DO USER
            topicsStore.addTopic(userId, this.title, this.desc, this.tags.split(","));
            console.log(`New topic added: ${this.title}`);
            
            this.$emit("close-form");
            router.push("/forum");
        },
        cancelForm() {
            this.title = "";
            this.desc = "";
            this.filters = "";
            this.isValid = false;
            
            this.$emit("close-form");
            this.router.go(-1);
        }

    }
}

</script>

<style lang="scss" scoped></style>
