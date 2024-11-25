<template>
    <div>
        <h2>Login Area</h2>
        <nav>
            <RouterLink :to="{ name: 'profileSettings' }">Profile Settings</RouterLink>
            <RouterLink :to="{ name: 'favouritesTalks' }">Favourites Talks</RouterLink>
            <RouterLink :to="{ name: 'personalAgenda' }">Personal Agenda</RouterLink>
        </nav>
        <br>

        <v-sheet class="mx-auto" width="300">
            <v-form @submit.prevent="login">
                <!-- Campo de Nome -->
                <v-text-field v-model="username" label="Nome" :rules="usernameRules" outlined required>
                </v-text-field>

                <!-- Campo de Senha -->
                <v-text-field v-model="password" label="Senha" :rules="passwordRules" type="password" outlined required>
                </v-text-field>

                <!-- Botão de Login -->
                <v-btn class="mt-2" type="submit" block color="primary">
                    Login
                </v-btn>
            </v-form>
        </v-sheet>

        <p v-if="error" style="color: red;">Dados Invalidos</p>


        <router-view />
    </div>
</template>

<script>
export default {
    name: "LoginView",
    data() {
        return {
            username: "",
            password: "",
            error: false,
        }
    },
    methods: {
        login() {
            if (this.username == "user" && this.password == "1234") {
                localStorage.setItem("isAuthenticated", true);
                this.error = false;
                // this.$router.push("page");
                const from = this.$route.query.from || "/";
                this.$router.push(from);
            } else {
                this.error = true;
            }
        }
    },
}
</script>
