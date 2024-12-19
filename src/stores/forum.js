import { defineStore } from "pinia";

export const topicsStore = defineStore("topics", {
    state: () => ({
        topics: [],

    }),    
    getters: {
    },
    actions: {
        addTopic(userId, title, desc, filters) {
            const newTopic ={
                id: this.topics.length,
                userId,
                title,
                desc,
                filters,
                likes: 0,
                comments: []
            }
            this.topics.push(newTopic);
        },
        removeSpeakers(id) {
            this.topics = this.topics.filter(topic => topic.id != id)      
        }
    }
})