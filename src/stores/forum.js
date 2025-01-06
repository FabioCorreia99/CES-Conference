import { defineStore } from "pinia";
import { useUsersStore } from '@/stores/users';

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
        addTopic(userId, title, desc, filters) {
            const usersStore = useUsersStore();
            const author = usersStore.getUserById(userId).id; // depois trocar para o nome
            
            const newTopic ={
                id: this.topics.length > 0 ? this.topics[this.topics.length - 1].id + 1 :  0 ,
                author,
                title,
                desc,
                filters,
                likes: 0,
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
        toggleLike(topicID) {
            const likedTopic = this.topics.find((topic) => topic.id === topicID);

            if (likedTopic) {
                likedTopic.likes = topic.likes > 0 ? 0 : 1; // Arranjar maneira de verificar se o user já deu like
                this.saveTopics();
            }
        },
        addComent(topicID, comment) {
            const topic = this.topics.find((Topic) => Topic.id === topicID);

            if (topic) {
                topic.comments.push(comment);
                this.saveTopics();
            }
        }
    }
})