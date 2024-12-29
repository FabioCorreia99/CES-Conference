<template>
    <div class="create-account-page">
        <header>
            <LoginNavbar :isLoginPage="false" />
        </header>
        <!-- Conteúdo do create account -->
    </div>
</template>

<script>
import LoginNavbar from "@/components/LoginNavbar.vue";

export default {
    name: "CreateAccountView",
    components: {
        LoginNavbar,
    },
};
</script>

<style>
.create-account-page {
    background-color: #26466D;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
