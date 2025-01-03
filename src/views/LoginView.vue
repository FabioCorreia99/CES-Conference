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
                        <MinusIcon class="control-icon" />
                        <Square2StackIcon class="control-icon" />
                        <XMarkIcon class="control-icon" />
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
                        </pre>
                            </div>
                            <div class="welcome-message">
                                <p>Welcome to CES!</p>
                                <p>Let's begin the adventure</p>
                            </div>
                        </div>
                        <form @submit.prevent="login" class="login-form">
                            <label for="email" class="login-label">Enter your account</label>
                            <div class="input-group">
                                <input id="email" type="email" v-model="email" placeholder="Email" class="login-input"
                                    required />
                                <div class="password-button-group">
                                    <input id="password" type="password" v-model="password" placeholder="Password"
                                        class="login-input" required />
                                    <BlueBtnToOrange :value="'login'" :handleClick="login" />
                                </div>
                            </div>
                            <p v-if="loginMessage"
                                v-bind:class="{ 'success-message': isSuccess, 'error-message': !isSuccess }">
                                {{ loginMessage }}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
import LoginNavbar from "@/components/LoginNavbar.vue";
import BlueBtnToOrange from "@/components/BlueBtnToOrange.vue";
import { MinusIcon, Square2StackIcon, XMarkIcon } from "@heroicons/vue/24/solid";

import { useUsersStore } from "@/stores/users";

export default {
    name: "LoginView",
    components: {
        LoginNavbar,
        BlueBtnToOrange,
        MinusIcon,
        Square2StackIcon,
        XMarkIcon,
    },
    data() {
        return {
            email: "",
            password: "",
            loginMessage: "",
            isSuccess: false,
        };
    },
    methods: {
        login() {
            const store = useUsersStore();
            this.loginMessage = "";

            const isAuthenticated = store.login(this.email, this.password);

            if (isAuthenticated) {
                this.loginMessage = "Login successful!";
                this.isSuccess = true;
            } else {
                this.loginMessage = "Invalid email or password. Please try again.";
                this.isSuccess = false;
            }
        },
    },
};
</script>



<style scoped>
.login-page {
    background-color: #26466D;
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
    background-color: #BDC7D3;
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
    color: #26466D;
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
    color: #EEF6F2;
}

.ascii-logo-wrapper {
    flex-shrink: 0;
    /* Impede o redimensionamento do ASCII */
}

.ascii-logo {
    font-family: monospace;
    color: #EEF6F2;
    font-size: 0.3rem;
    white-space: pre-wrap;
    text-align: left
}

.welcome-message {
    text-align: left;
    color: #EEF6F2;
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
    color: #F2A714;
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
    border: 1px solid #EEF6F2;
    border-radius: 5px;
    background: none;
    color: #EEF6F2;
    outline: none;
}

.success-message {
    color: #4CAF50;
    font-weight: bold;
}

.error-message {
    color: #F44336;
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
