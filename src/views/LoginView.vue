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
                        <form @submit.prevent="login" class="login-form">
                            <label for="email" class="login-label">Enter your email</label>
                            <input id="email" type="email" v-model="email" placeholder="Email" class="login-input"
                                required />
                            <input id="password" type="password" v-model="password" placeholder="Password"
                                class="login-input" required />
                            <button type="submit" class="login-button">/continue</button>
                        </form>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>



<script>
import LoginNavbar from "@/components/LoginNavbar.vue";
import { MinusIcon, Square2StackIcon, XMarkIcon } from "@heroicons/vue/24/solid";
import { useUsersStore } from "@/stores/users";

export default {
    name: "LoginView",
    components: {
        LoginNavbar,
        MinusIcon,
        Square2StackIcon,
        XMarkIcon,
    },
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login() {
            const store = useUsersStore();
            const isAuthenticated = store.login(this.email, this.password);
            if (isAuthenticated) {
                const from = this.$route.query.from || "/";
                this.$router.push(from);
            } else {
                alert("Invalid credentials. Please try again.");
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
    ;
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
    text-align: center;
    color: #EEF6F2;
}

.login-form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.login-label {
    font-size: 1rem;
    color: #F2A714;
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

.login-input::placeholder {
    color: #EEF6F2;
    opacity: 0.7;
}

.login-button {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #6590D0;
    color: #EEF6F2;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.login-button:hover {
    background-color: #F2A714;
}

.ascii-logo {
    font-family: monospace;
    color: #EEF6F2;
    font-size: 0.3rem;
    white-space: pre-wrap;
    text-align: left;
}
</style>
