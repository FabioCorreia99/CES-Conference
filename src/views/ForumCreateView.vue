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
                      underlined 
                      dense
                      :rules="titleRules" 
                      required>
                    </v-text-field>
                    <!-- text -->
                    <v-textarea 
                    v-model="desc"
                    label="Description"
                    underlined
                    dense
                    :rules="descRules" 
                    required>
                    </v-textarea>
                    <!-- topic tags -->
                    <v-row class="mb-3">
                        <v-col cols="12">
                            <v-combobox
                                v-model="chips"
                                :items="tags"
                                label="Tags"
                                variant="underlined"
                                chips
                                clearable
                                multiple
                                :rules="chipRules"
                            >
                                <template v-slot:selection="{ attrs, tag, select, selected }">
                                    <v-chip
                                        v-bind="attrs"
                                        :model-value="selected"
                                        closable
                                        @click="select"
                                        @click:close="remove(tag)"
                                        variant="elevated"
                                        color="primary"
                                        text-color="black"
                                    >
                                        {{ tag }}
                                    </v-chip>
                                </template>
                            </v-combobox>
                        </v-col>
                    </v-row>

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

import { useUsersStore } from '@/stores/users';
import { useTalksStore } from '@/stores/talks.js';

export default {
    components: {
        BlueBtnToOrange,
        SubmitBtn,
    },
    setup() {
        const router = useRouter();
        const topicsStore = useTopicsStore();
        const usersStore = useUsersStore();

        return { router, topicsStore, usersStore};
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
            isValid: false,
            talkStore: useTalksStore(),
            chips: [],
            chipRules: [
                value => (value && value.length > 0) || "At least one tag is required"
            ],
            tags: [],
        }
    },
    methods: {
        submitForm() {
            const router = this.router;
            const topicsStore = this.topicsStore;
            const usersStore = this.usersStore;

            if (!this.isValid) {
                console.log("Form is not valid!");
                return;
            }

            const userId = usersStore.currentUserId;
            
            topicsStore.addTopic(userId, this.title, this.desc, this.chips);
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

    }, 
    created() {
        this.tags = this.talkStore.filters;
    }
}

</script>

<style scoped>

</style>
