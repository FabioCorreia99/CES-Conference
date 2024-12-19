import { defineStore } from "pinia";

export const talksStore = defineStore("talks", {
    state: () => ({
        talks: [],
    }),
    actions: {
        addTalk(talk) {
            
            if (this.isValidTalk(talk)) {
                this.talks.push(talk);
                console.log("Talk added!");
            } else {
                console.log("Invalid talk!");
            }
                       
        },
        removeTalk(talk) {
            const talkIndex = this.talks.indexOf(t => t.id === talk.id);

            if (talkIndex === -1) {
                console.log("Talk not found!");
                return;
            }
            
            this.talks.splice(talkIndex, 1);
        },
        isValidTalk(unverifiedTalk) {
            // Verificar se a talk tem todas as propriedades necessarias ( e se são do tipo correto ) antes de adicionar à array de talks

            if(typeof unverifiedTalk.id !== "number") return false;
            if(typeof unverifiedTalk.speaker !== "string") return false;
            if(typeof unverifiedTalk.title !== "string") return false;
            if(typeof unverifiedTalk.desc !== "string") return false;
            if(typeof unverifiedTalk.topic !== "string") return false;
            if(typeof unverifiedTalk.room !== "string") return false;
            if(typeof unverifiedTalk.day !== "string") return false;
            if(typeof unverifiedTalk.hour !== "string") return false;

            return true;
        }
    },
    getters: {
        getTalkById(id) {
            return this.talks.find(talk => talk.id === id);       
        },
        getTalkBySpeaker(speaker) {
            return this.talks.filter(talk => talk.speaker === speaker);
        },
        getTalksByDay(day) {
            return this.talks.filter(talk => talk.day === day);
        }
    }
})