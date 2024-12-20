import { defineStore } from "pinia";
import * as api from "@/api/api"

const BASE_API = "https://randomuser.me/api/"

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
                id: this.speakers.length > 0 ? this.speakers[this.speakers.length - 1].id + 1 :  0 ,
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
        },
        async fetchPersons() {
            try {
              const data = await api.get(BASE_API, '?results=100&seed=abc');
              console.log(data);
              this.speakers = data.results;
            } catch (error) {
              console.error("Error in store fetching person api:", error);
              throw error;
            }
          }
    }
})