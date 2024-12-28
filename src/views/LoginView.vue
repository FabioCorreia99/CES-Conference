<template>
    <header>
        <Navbar />
    </header>

    <br><br><br>


    <v-sheet class="mx-auto" width="300">
        <v-form @submit.prevent="login">
            <v-text-field v-model="email" label="Email" :rules="emailRules" outlined required>
            </v-text-field>

            <v-text-field v-model="password" label="Senha" :rules="passwordRules" type="password" outlined required>
            </v-text-field>

            <v-btn class="mt-2" type="submit" block color="primary">
                Login
            </v-btn>
        </v-form>
    </v-sheet>

    <p v-if="error" style="color: red;">Dados Inválidos</p>

    <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { useUsersStore } from "@/stores/users";

// Funções auxiliares para validação
const required = (field) => (value) =>
    value !== null && value !== undefined && value !== "" || `${field} é obrigatório`;

const minLength = (field, length) => (value) =>
    value && value.length >= length || `${field} deve ter pelo menos ${length} caracteres`;

export default {
    name: "LoginView",
    data() {
        return {
            email: "",
            password: "",
            error: false,
            emailRules: [required("Email"), minLength("Email", 5)],
            passwordRules: [required("Senha"), minLength("Senha", 6)],
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
                this.error = true;
            }
        },
    },
    components: {
        Navbar,
    },
};
</script>
