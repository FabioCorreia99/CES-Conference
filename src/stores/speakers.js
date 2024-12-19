import { defineStore } from "pinia";

export const speakersStore = defineStore("speakers", {
    state: () => ({
        speakers: [],

    }),    
    getters: {
        getSpeakerById: (state) => (id) => state.speakers.find(speaker => speaker.id === id),
    },
    actions: {
        addSpeaker(name, brand, desc, picture, talks,) {
            const newSpeaker ={
                id: this.speakers.length,
                name,
                brand,
                desc,
                picture,
                talks,
            }
            this.speakers.push(newSpeaker);
        },
        removeSpeakers(id) {
            this.speakers = this.speakers.filter(speaker => speaker.id != id)      
        }
    }
})