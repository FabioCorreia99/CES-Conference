<template>
    <v-container class="login-navbar d-flex justify-space-between align-center pa-4">
        <!-- Logo -->
        <RouterLink to="/" class="d-flex align-center">
            <img src="../assets/media/Logo.svg" alt="CES logo" class="logo" />
        </RouterLink>

        <!-- Link dinâmico -->
        <div class="d-flex align-center cta">
            <span class="cta-text">
                {{ isLoginPage ? "Don’t have an Account?" : "Already have an account?" }}
            </span>
            <RouterLink
                :to="{ name: isLoginPage ? 'createAccount' : 'login' }"
                class="register-link"
            >
                {{ isLoginPage ? "Register Now" : "Sign in" }}
                <ArrowRightIcon class="arrow-icon" />
            </RouterLink>
        </div>
    </v-container>
</template>

<script>
import { RouterLink } from "vue-router";
import { ArrowRightIcon } from "@heroicons/vue/24/solid";

export default {
    name: "LoginNavbar",
    props: {
        isLoginPage: {
            type: Boolean,
            default: true, // Assume que está na página de login por padrão
        },
    },
    components: {
        RouterLink,
        ArrowRightIcon,
    },
};
</script>

<style scoped>
/* Estilo do Navbar */
.login-navbar {
    background-color: #26466d;
    color: #eef6f2;
}

/* Estilo do Logo */
.logo {
    height: 40px;
    cursor: pointer;
}

/* Estilo da área de CTA */
.cta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.cta-text {
    margin: 0;
    font-size: 1rem;
    color: #eef6f2;
}

/* Estilo do link dinâmico */
.register-link {
    font-weight: bold;
    color: #eef6f2;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
}

.register-link:hover {
    text-decoration: underline;
}

/* Estilo da seta */
.arrow-icon {
    width: 16px;
    height: 16px;
    color: #eef6f2;
}
</style>
