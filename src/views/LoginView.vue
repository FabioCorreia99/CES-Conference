<template>
  <div class="login-page">
    <header>
      <LoginNavbar :isLoginPage="true" />
    </header>

    <v-container class="fill-height d-flex justify-center align-center pa-0">
      <!-- Terminal -->
      <div class="terminal">
        <!-- Barra Superior -->
        <div class="terminal-header">
          <div class="terminal-controls">
            <v-icon class="control-icon">mdi-minus</v-icon>
            <v-icon class="control-icon">mdi-window-restore</v-icon>
            <v-icon class="control-icon">mdi-close</v-icon>
          </div>
        </div>
        <!-- Corpo do Terminal -->
        <div class="terminal-body">
          <!-- Conteúdo do terminal -->
          <div class="terminal-content">
            <div class="ascii-and-message">
              <div class="ascii-logo-wrapper">
                <pre class="ascii-logo">
          ░░░░░░░░░░░░░░░░░░           ░░░░░░░░░░░░░░░░░░░░░░░░░░░          ░░░░░░░░░░░░░░░
       ░░░░░░░░░░░░░░░░░░░░░░░░        ░░░░░░░░░░░░░░░░░░░░░░░░░░░       ░░░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░      ░░░░░░░░░░░░░░░░░░░░░░░░░░░     ░░░░░░░░░░░░░░░░░░░░░░░░░
   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░     ░░░░░░░░░░░░░░░░░░░░░░░░░░░    ░░░░░░░░░░░     ░░░░░░░░░░░░
  ░░░░░░░░░░            ░░░░░░░░░░░    ░░░░░░░░░                     ░░░░░░░░░           ░░░░░░░░░░
 ░░░░░░░░░               ░░░░░░░░░░    ░░░░░░░░░                     ░░░░░░░░░            ░░░░░░░░░
░░░░░░░░░░                ░░░░░░░░░░   ░░░░░░░░░                     ░░░░░░░░░░           ░░░░░░░░
░░░░░░░░░                              ░░░░░░░░░                      ░░░░░░░░░░░░░░░░
░░░░░░░░░                              ░░░░░░░░░░░░░░░░░░░░░░░░░      ░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░                              ░░░░░░░░░░░░░░░░░░░░░░░░░        ░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░                              ░░░░░░░░░░░░░░░░░░░░░░░░░           ░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░                              ░░░░░░░░░░░░░░░░░░░░░░░░░                 ░░░░░░░░░░░░░░░░░░░
░░░░░░░░░                              ░░░░░░░░░                          ░░░           ░░░░░░░░░░░░
░░░░░░░░░░                ░░░░░░░░░    ░░░░░░░░░                    ░░░░░░░░░              ░░░░░░░░░
 ░░░░░░░░░░              ░░░░░░░░░░░   ░░░░░░░░░                    ░░░░░░░░░░             ░░░░░░░░░
  ░░░░░░░░░░░          ░░░░░░░░░░░░    ░░░░░░░░░                     ░░░░░░░░░░░          ░░░░░░░░░░
   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░      ░░░░░░░░░░░░░░░░░░░░░░░░░░░    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
     ░░░░░░░░░░░░░░░░░░░░░░░░░░░       ░░░░░░░░░░░░░░░░░░░░░░░░░░░     ░░░░░░░░░░░░░░░░░░░░░░░░░░░
       ░░░░░░░░░░░░░░░░░░░░░░          ░░░░░░░░░░░░░░░░░░░░░░░░░░░       ░░░░░░░░░░░░░░░░░░░░░░░
           ░░░░░░░░░░░░░░              ░░░░░░░░░░░░░░░░░░░░░░░░░░░            ░░░░░░░░░░░░░
                        </pre
                >
              </div>
              <div class="welcome-message">
                <p>Welcome to CES!</p>
                <p>Let's begin the adventure</p>
              </div>
            </div>
            <form @submit.prevent="login" class="login-form">
              <label for="email" class="login-label">Enter your account</label>
              <div class="input-group">
                <input
                  id="email"
                  type="email"
                  v-model="email"
                  placeholder="Email"
                  class="login-input"
                  required
                />
                <div class="password-button-group">
                  <input
                    id="password"
                    type="password"
                    v-model="password"
                    placeholder="Password"
                    class="login-input"
                    required
                  />
                  <BlueBtnToOrange :value="'login'" :handleClick="login" />
                </div>
              </div>
              <p v-if="errorMessage" class="error-message">
                {{ errorMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import LoginNavbar from "@/components/LoginNavbar.vue";
import Footer from "@/components/Footer.vue";
import BlueBtnToOrange from "@/components/BlueBtnToOrange.vue";
import { useUsersStore } from "@/stores/users";

export default {
  name: "LoginView",
  components: {
    LoginNavbar,
    Footer,
    BlueBtnToOrange,
  },
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    login() {
      const store = useUsersStore();
      this.errorMessage = ""; // Certifique-se de limpar a mensagem antes de cada tentativa

      const isAuthenticated = store.login(this.email, this.password);

      if (isAuthenticated) {
        alert("Logged in successfully!");
        this.$router.push("/"); // Redireciona para a página principal
      } else {
        this.errorMessage = "Invalid email or password. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  background-color: #26466d;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.terminal {
  width: 1120px;
  height: 635px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
}

/* Barra Superior Terminal */
.terminal-header {
  background-color: #bdc7d3;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;
}

.terminal-controls {
  display: flex;
  gap: 10px;
}

.control-icon {
  width: 20px;
  height: 20px;
  color: #26466d;
}

/* Corpo do Terminal */
.terminal-body {
  background-color: rgba(101, 144, 208, 0.2);
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Conteúdo do terminal */
.terminal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.ascii-and-message {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  color: #eef6f2;
}

.ascii-logo-wrapper {
  flex-shrink: 0;
  /* Impede o redimensionamento do ASCII */
}

.ascii-logo {
  font-family: monospace;
  color: #eef6f2;
  font-size: 0.3rem;
  white-space: pre-wrap;
  text-align: left;
}

.welcome-message {
  text-align: left;
  color: #eef6f2;
  font-size: 1rem;
  line-height: 1.5;
}

/* Formulário e inputs */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  /* Adapta-se a ecrãs menores */
}

.login-label {
  font-size: 1rem;
  color: #f2a714;
  font-weight: bold;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.password-button-group {
  display: flex;
  align-items: center;
  gap: 1rem;
  /* Espaçamento entre o botão e a caixa de texto */
}

.login-input {
  width: 408px;
  height: 39px;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #eef6f2;
  border-radius: 5px;
  background: none;
  color: #eef6f2;
  outline: none;
}

.error-message {
  color: #f44336;
  font-weight: bold;
}

@media (max-width: 768px) {
  .ascii-and-message {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .login-input {
    width: 100%;
  }

  .password-button-group {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>
