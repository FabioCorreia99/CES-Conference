import { defineStore } from "pinia";

export const talksStore = defineStore("talks", {
    state: () => ({
        talks: [],
    }),
    getters: {
        getTalkById: (state) => (id) => state.talks.find(talk => talk.id === id),
        getTalksBySpeaker: (state) => (speaker) => state.talks.filter(talk => talk.speaker === speaker),
        getTalksByFilter: (state) => (filter) => state.talks.filter(talk => talk.filters.include(filter)),
        getTalksByDay: (state) => (day) =>  state.talks.filter(talk => talk.day === day)
    },
    actions: {
        addTalk(title, speaker, desc, topic, room, day, hour) {
            
            const newTalk ={
                id: this.talks.length,
                title,
                speaker,
                desc,
                topic,
                room,
                day,
                hour,
            }
            
            if (this.isValidTalk(newTalk)) {
                this.talks.push(newTalk);
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
    }
})