import { defineStore } from "pinia";
import { useUsersStore } from '@/stores/users';
import { useTalksStore } from "./talks";
import { useSpeakersStore } from "./speakers";

export const useTopicsStore = defineStore("topics", {
    state: () => ({
        topics: JSON.parse(localStorage.getItem("topics")) || [],
    }),    
    getters: {
        getTopics(state) {
            return state.topics;
        }
    },
    actions: {
        createTopicsFromTalks() {
             
            if (this.topics.length === 0) {
                // If no topics exist, create them
                const talksStore = useTalksStore();
                const talks = talksStore.talks;

                const speakersStore = useSpeakersStore();

                talks.forEach(talk => {
                    const speaker = speakersStore.getSpeakerById(talk.speaker)

                    const newTopic = {
                        id: this.topics.length > 0 ? this.topics[this.topics.length - 1].id + 1 : 0,
                        author: speaker.firstName + ' ' + speaker.lastName,  
                        image: speaker.image,
                        title: talk.title,
                        desc: talk.summary,
                        filters: talk.filters,
                        likes: [],
                        comments: [],
                    };

                    this.topics.push(newTopic);
                });

                this.saveTopics();
            } 

        },
        addTopic(userId, title, desc, filters) {
            const usersStore = useUsersStore();
            const author = usersStore.getUserById(userId).name;
            const image = usersStore.getUserById(userId).picture

            const newTopic ={
                id: this.topics.length > 0 ? this.topics[this.topics.length - 1].id + 1 :  0 ,
                author,
                image,
                title,
                desc,
                filters,
                likes: [],
                comments: [],
            }
            this.topics.push(newTopic);
            this.saveTopics();
        },
        removeTopic(id) {
            this.topics = this.topics.filter(topic => topic.id != id);
            this.saveTopics();      
        },
        saveTopics() {
            localStorage.setItem("topics", JSON.stringify(this.topics));
        },
        toggleLike(topicID, userID) {
            const likedTopic = this.topics.find((topic) => topic.id === topicID);
            
            if (likedTopic) {
                const userIndex = likedTopic.likes.indexOf(userID);

                if (userIndex === -1) {
                    // adicionar like
                    likedTopic.likes.push(userID)
                } else {
                    // remover like
                    likedTopic.likes.splice(userIndex, 1)
                }

                this.saveTopics();
            }
        },
        addComment(topicID, comment) {
            const topic = this.topics.find((Topic) => Topic.id === topicID);

            if (topic) {
                topic.comments.push(comment);
                this.saveTopics();
            } else {
                console.log("topic not found");
            }
            
        }
    },
    persist: true,
})