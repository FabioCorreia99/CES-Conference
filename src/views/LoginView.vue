<template>

    <header>
        <Navbar />
    </header>

    <br>


    <h3>Login Area</h3>

    <v-sheet class="mx-auto" width="300">
        <v-form @submit.prevent="login">
            <v-text-field v-model="username" label="Nome" :rules="usernameRules" outlined required>
            </v-text-field>

            <v-text-field v-model="password" label="Senha" :rules="passwordRules" type="password" outlined required>
            </v-text-field>

            <v-btn class="mt-2" type="submit" block color="primary">
                Login
            </v-btn>
        </v-form>
    </v-sheet>

    <p v-if="error" style="color: red;">Dados Invalidos</p>


    <router-view />

</template>

<script>
import Navbar from '@/components/Navbar.vue';

// Funções auxiliares para validação
const required = field => value =>
    value !== null && value !== undefined && value !== "" || `${field} é obrigatório`;

const minLength = (field, length) => value =>
    value && value.length >= length || `${field} deve ter pelo menos ${length} caracteres`;

export default {
    name: "LoginView",
    data() {
        return {
            username: "",
            password: "",
            error: false,
            usernameRules: [required("Nome de utilizador"), minLength("Nome de utilizador", 3)],
            passwordRules: [required("Senha"), minLength("Senha", 6)]
        };
    },
    methods: {
        login() {
            if (this.username === "user" && this.password === "1234") {
                localStorage.setItem("isAuthenticated", true);
                this.error = false;
                const from = this.$route.query.from || "/";
                this.$router.push(from);
            } else {
                this.error = true;
            }
        }
    },
    components: {
        Navbar,
    }
};
</script>
