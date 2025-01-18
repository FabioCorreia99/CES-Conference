import { defineStore } from "pinia";
import * as api from "@/api/api"

const BASE_API = 'https://dummyjson.com'
const IMAGE_API = "https://randomuser.me/api/";

export const useSpeakersStore = defineStore("speakers", {
    state: () => ({
        speakers: [],

    }),
    persist: true,
    getters: {
        getSpeakerById: (state) => (id) => state.speakers.find(speaker => speaker.id == id),
    },
    actions: {
        async fetchPersons() {
            if (this.speakers.length == 0) {
                try {
                    // Fetch users from DummyJSON API
                    const data = await api.get(BASE_API, 'users/?limit=100&select=firstName,maidenName,lastName,age,gender,email,birthDate,address,country,university,company');
                    
                    // Fetch images from Random User API
                    const imageResponse = await api.get(IMAGE_API, '?results=100&seed=abg&inc=gender,picture');
                
                    // Combine users with images
                    const combinedSpeakers = data.users.map((user, index) => {
                        // Use the index to get the corresponding image
                        const image = imageResponse.results[index];
                        return {
                            ...user,
                            image: image.picture.large, // ou image.picture.medium, dependendo do que você quiser
                        };
                    });

                // Update the speakers state
                this.speakers = combinedSpeakers;
                
                } catch (error) {
                console.error("Error in store fetching person api:", error);
                throw error;
                }
            }
        }
    }
})