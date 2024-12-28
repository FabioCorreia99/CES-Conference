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
      try {
        const user = this.users.find(
          (u) => u.Email === email && u.password === password
        );
        if (!user) {
          throw new Error(
            "Credenciais inválidas. Por favor, verifique o email e a palavra-passe."
          );
        }
        this.authentication = true; // Autentica o utilizador
        return true; // Login bem-sucedido
      } catch (error) {
        console.error("Falha no login:", error.message);
        return false; // Falha no login
      }
    },
    logout() {
      try {
        if (!this.authentication) {
          throw new Error("O utilizador não está autenticado.");
        }
        this.authentication = false; // Desautentica o utilizador
        return true; // Logout bem-sucedido
      } catch (error) {
        console.error("Falha no logout:", error.message);
        return false; // Falha no logout
      }
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
