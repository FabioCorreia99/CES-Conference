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
        picture: new URL(
          "../assets/media/speakers/BillGates.jpg",
          import.meta.url
        ).href,
        ticket: {},
        likedTalks: [1,4,2],
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
    isAuthenticated: (state) => state.authentication,
    getUserLogged: (state) => state.users.find((user) => user.id === state.currentUserId),
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
    updateUser(updatedUser) {
      const index = this.users.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        Object.assign(this.users[index], updatedUser); // Atualiza o utilizador
      }
    },
    addLikedTalk(idTalk){
      //dados do user
      let userLogged = this.getUserLogged;
      // Sem validação pois ja é feita antes(no meu caso Fabio, mudar se usarem)
      userLogged.likedTalks.push(idTalk);      
      //update
      this.updateUser(userLogged);
    },
    removeLikedTalk(idTalk){
      //dados do user
      let userLogged = this.getUserLogged;
      // Sem validação pois ja é feita antes(no meu caso Fabio, mudar se usarem)
      userLogged.likedTalks = userLogged.likedTalks.filter(liked => liked != idTalk)
      // update
      this.updateUser(userLogged);
    },
  },
  // Persiste os dados no localStorage
  persist: {
    key: "users-store", // Nome da chave no localStorage
    storage: localStorage,
    paths: ["users", "authentication", "currentUserId"], // Dados a persistir
  },
});
