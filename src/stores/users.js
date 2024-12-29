import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
    authentication: false,
  }),
  getters: {
    // Getter para obter um utilizador por ID
    getUserById: (state) => (userId) =>
      state.users.find((user) => user.id === userId),

    // Getter para calcular o próximo ID (sem operador ternário)
    nextUserId: (state) => {
      if (state.users.length === 0) {
        return 0; // Se o array estiver vazio, retorna 0
      }
      return state.users[state.users.length - 1].id + 1; // Caso contrário, retorna o último ID + 1
    },
  },
  actions: {
    login(email, password) {
      const user = this.users.find(
        (u) => u.Email === email && u.password === password
      );

      if (!user) {
        console.error("Invalid credentials. Please check your email and password.");
        return false; // Login falhou
      }

      this.authentication = true;
      return true; // Login bem sucedido
    },
    logout() {
      if (!this.authentication) {
        console.error("Logout failed: User not authenticated.");
        return false; // Utilizador não autenticado
      }
      this.authentication = false;
      return true; // Logout bem sucedido
    },
    addUser(Email, password) {
      const newUser = {
        id: this.nextUserId, // Usa o getter para obter o próximo ID
        Email,
        password,
        name: "",
        picture: "",
        ticket: {},
        likedTalks: [],
      };
      this.users.push(newUser); // Adiciona o novo utilizador à lista
    },
    // Método para remover um utilizador pelo ID
    removeUser(id) {
      this.users = this.users.filter((user) => user.id !== id); // Remove o utilizador da lista
    },
  },
});
