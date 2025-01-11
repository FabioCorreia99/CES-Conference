import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    // Carrega utilizadores do localStorage ou inicializa com o utilizador fictício
    users: [
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
    // Calcular o próximo ID
    nextUserId: (state) => state.users.length,
    isAdmin: (state) => {
      const user = state.users.find((u) => u.id === state.currentUserId); // Caso contrário, retorna o último ID + 1
      return user?.role === "admin"; // Retorna true apenas se o role for 'admin'
    },
  },
  actions: {
    login(email, password) {
      const user = this.users.find(
        (u) => u.Email === email && u.password === password
      );
      if (!user) {
        return false;
      }
      this.authentication = true;
      this.currentUserId = user.id; // Define o utilizador atual
      return true;
    },
    logout() {
      this.authentication = false;
      this.currentUserId = null; // Limpa o utilizador atual
    },
    addUser(email, password) {
      if (this.users.find((u) => u.Email === email)) {
        return false; // Verifica se o utilizador já existe
      }
      this.users.push({
        id: this.nextUserId, // Usa o getter para obter o próximo ID
        Email: email,
        password,
        name: "",
        picture: "",
        ticket: {},
        likedTalks: [],
        role: "user", // Por padrão, novos utilizadores são "user"
      });
      return true;
    },
  },
  // Persiste os dados no localStorage
  persist: {
    key: "users-store", // Nome da chave no localStorage
    storage: localStorage,
    paths: ["users", "authentication", "currentUserId"], // Dados a persistir
  },
});
