import { defineStore } from "pinia";

export const usersStore = defineStore("users", {
    state: () => ({
        users: [],
    }),
    actions: {
        addUser(user) {
            this.users.push(user);
        },
        removeUser(user) {
            const userIndex = this.users.indexOf(u => u.id === user.id);

            if (userIndex === -1) {
                console.log("User not found!");
                return;
            }
            
            this.users.splice(userIndex, 1);
        }
    },
    getters: {
        getUserById(id) {
            try {
                const user = this.users.find(user => user.id === id);

                if (!user) {
                    throw new Error("User not found");
                }

                return user;

            } catch (error) {
                console.log(error.message); 
                return null;
            }
            
        }
    }
})