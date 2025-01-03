import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    // Carrega utilizadores do localStorage ou inicializa com o utilizador fictício
    users: JSON.parse(localStorage.getItem("users")) || [
      {
        id: 0,
        Email: "user",
        password: "1234",
        name: "Test User",
        picture: "",
        ticket: {},
        likedTalks: [],
      },
    ],
    authentication: false,
  }),
  getters: {
    // Getter para obter um utilizador por ID
    getUserById: (state) => (userId) =>
      state.users.find((user) => user.id === userId),

    // Getter para calcular o próximo ID
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
        return false; // Login falhou
      }

      this.authentication = true;
      return true; // Login bem sucedido
    },
    logout() {
      if (!this.authentication) {
        return false; // Utilizador não autenticado
      }
      this.authentication = false;
      return true; // Logout bem sucedido
    },
    addUser(Email, password) {
      // Verificar se o utilizador já existe
      const existingUser = this.users.find((u) => u.Email === Email);
      if (existingUser) {
        return false; // Conta já existe
      }

      const newUser = {
        id: this.nextUserId, // Usa o getter para obter o próximo ID
        Email,
        password,
        name: "",
        picture: "",
        ticket: {},
        likedTalks: [],
      };

      // Adiciona o novo utilizador e atualiza o localStorage
      this.users.push(newUser);
      this.updateLocalStorage();
      return true;
    },
    // Método para remover um utilizador pelo ID
    removeUser(id) {
      this.users = this.users.filter((user) => user.id !== id); // Remove o utilizador da lista
      this.updateLocalStorage(); // Atualiza o localStorage
    },
    // Método para sincronizar o state com o localStorage
    updateLocalStorage() {
      localStorage.setItem("users", JSON.stringify(this.users));
    },
  },
});
