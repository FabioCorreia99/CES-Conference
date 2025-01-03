<template>
    <div class="create-account-page">
        <header>
            <LoginNavbar :isLoginPage="false" />
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
                        <form @submit.prevent="createAccount" class="create-account-form">
                            <label for="email" class="login-label">Enter your email</label>
                            <div class="input-group">
                                <ArrowRightIcon class="input-icon" />
                                <input id="create-email" type="email" v-model="createEmail" placeholder="Email"
                                    class="login-input" required />
                            </div>
                            <label for="password" class="login-label">Enter your password</label>
                            <div class="input-group">
                                <ArrowRightIcon class="input-icon" />
                                <input id="create-password" type="password" v-model="createPassword"
                                    placeholder="Password" class="login-input" required />
                            </div>
                            <div class="form-button">
                                <BlueBtnToOrange :value="'Create Account'" :handleClick="createAccount" />
                            </div>
                            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
                            <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
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
import { MinusIcon, Square2StackIcon, XMarkIcon, ArrowRightIcon } from "@heroicons/vue/24/solid";
import { useUsersStore } from "@/stores/users";

export default {
    name: "CreateAccountView",
    components: {
        LoginNavbar,
        BlueBtnToOrange,
        MinusIcon,
        Square2StackIcon,
        XMarkIcon,
        ArrowRightIcon,
    },
    data() {
        return {
            createEmail: "",
            createPassword: "",
            errorMessage: "",
            successMessage: "",
        };
    },
    methods: {
        createAccount() {
            const store = useUsersStore();

            // Validação de email e password
            if (!this.createEmail || !this.createPassword) {
                this.errorMessage = "Email and password are required.";
                this.successMessage = "";
                return;
            }

            // Verificar se a conta já existe
            const result = store.addUser(this.createEmail, this.createPassword);
            if (!result) {
                this.errorMessage = "This email is already registered.";
                this.successMessage = "";
                return;
            }

            this.errorMessage = "";
            this.successMessage = "Account created successfully!";
        },
    },
};
</script>



<style scoped>
.create-account-page {
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
}

.ascii-logo {
    font-family: monospace;
    color: #EEF6F2;
    font-size: 0.3rem;
    white-space: pre-wrap;
    text-align: left;
}

.welcome-message {
    text-align: left;
    color: #EEF6F2;
    font-size: 1rem;
    line-height: 1.5;
}

/* Formulário e inputs */
.create-account-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

.login-label {
    font-size: 1rem;
    color: #F2A714;
    font-weight: bold;
}

.input-group {
    display: flex;
    align-items: center;
}

.input-icon {
    width: 20px;
    height: 20px;
    color: #F2A714;
}

.login-input {
    flex: 1;
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

/* Botão do formulário */
.form-button {
    display: flex;
    justify-content: flex-start;
    margin-left: 20px; /* Alinha com os inputs */
    width: 100%;
    margin-top: 0.5rem; /* Espaço entre o input e o botão */
}

.error-message {
    color: red;
    font-size: 0.9rem;
    font-weight: bold;
}

.success-message {
    color: green;
    font-size: 0.9rem;
    font-weight: bold;
}

@media (max-width: 768px) {
    .ascii-and-message {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }

    .login-input {
        width: 100%;
    }

    .create-account-form {
        width: 100%;
    }

    .password-button-group {
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
    }

    .password-button-group .login-input {
        flex: 1;
        margin-right: 0;
    }

    .password-button-group button {
        margin-left: 0;
        margin-top: 1rem;
        width: 100%;
    }
}
</style>
