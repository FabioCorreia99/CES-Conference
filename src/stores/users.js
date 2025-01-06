import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    // Carrega utilizadores do localStorage ou inicializa com o utilizador fictício
    users: JSON.parse(localStorage.getItem("users")) || [
      {
        id: 0,
        Email: "user",
        password: "1234",
        name: "Test Admin",
        picture: "",
        ticket: {},
        likedTalks: [],
        role: "admin",
      },
      {
        id: 1,
        Email: "test",
        password: "test",
        name: "Test User",
        picture: "../assets/media/speakers/BillGates.jpg",
        ticket: {},
        likedTalks: [],
        role: "user",
      },
    ],
    authentication: false,
    currentUserId: null, // Identificador do utilizador autenticado
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

    // Verifica se o utilizador atual é administrador
    isAdmin: (state) => {
      const user = state.users.find((u) => u.id === state.currentUserId);
      return user?.role === "admin"; // Retorna true apenas se o role for 'admin'
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
      this.currentUserId = user.id; // Define o utilizador atual
      
      return true; // Login bem sucedido
    },
    logout() {
      if (!this.authentication) {
        return false; // Utilizador não autenticado
      }
      this.authentication = false;
      this.currentUserId = null; // Limpa o utilizador atual
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
        role: "user", // Por padrão, novos utilizadores são "user"
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
