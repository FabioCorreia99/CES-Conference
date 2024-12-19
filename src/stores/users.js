import { defineStore } from "pinia";

export const usersStore = defineStore("users", {
    state: () => ({
        users: [],
        authentication: false

    }),
    getters: {
        getUserById: (state) => (userId) => state.users.find(user => user.id == userId)
    },
    actions: {
        addUser(Email, password) {
            const newUser ={
                id: this.users.length,
                Email,
                password,
                name: "",
                picture: "",
                ticket: {},
                likedTalks: []
            }
            this.users.push(newUser);
        },
        removeUser(id) {       
            this.users.splice(id, 1);
        }
    }
})