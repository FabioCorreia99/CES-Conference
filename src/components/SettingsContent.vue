<template>
  <div class="settings-container">
    <!-- Campo de E-mail -->
    <h3 class="mb-4">Email</h3>
    <v-text-field
      v-model="email"
      outlined
      class="settings-input"
    ></v-text-field>

    <!-- Campo de Password -->
    <h3 class="mb-4">Password</h3>
    <div class="password-fields">
      <v-text-field
        v-model="currentPassword"
        label="Current Password"
        outlined
        type="password"
        class="settings-input"
      ></v-text-field>
      <v-text-field
        v-model="newPassword"
        label="New Password"
        outlined
        type="password"
        class="settings-input"
      ></v-text-field>
    </div>

    <h3>Delete Account</h3>
    <!-- Botão de Eliminar Conta -->
    <div class="remove-account">
      <RedBtnToWhite :handleClick="deleteAccount" :value="'Delete Account'" />
    </div>

    <!-- Botão de Salvar -->
    <div class="save-section">
      <OrangeBtn @click="saveChanges" :value="'save'" />
    </div>
  </div>
</template>

<script>
import { useUsersStore } from "@/stores/users";
import RedBtnToWhite from "@/components/RedBtnToWhite.vue";
import OrangeBtn from "@/components/OrangeBtn.vue";

export default {
  components: {
    RedBtnToWhite,
    OrangeBtn,
  },
  data() {
    const usersStore = useUsersStore();
    const currentUser = usersStore.getUserById(usersStore.currentUserId);
    return {
      usersStore,
      currentUser,
      email: currentUser?.Email || "",
      currentPassword: "",
      newPassword: "",
    };
  },
  methods: {
    isCurrentPasswordValid() {
      return this.currentUser?.password === this.currentPassword;
    },
    saveChanges() {
      // Validar se a password atual está correta (se for alterada)
      if (this.currentPassword || this.newPassword) {
        if (!this.isCurrentPasswordValid()) {
          alert("Current password is incorrect!");
          return;
        }

        if (!this.newPassword) {
          alert("New password cannot be empty!");
          return;
        }

        // Atualizar a password
        this.currentUser.password = this.newPassword;
      }

      // Atualizar o email
      if (this.email.trim() === "") {
        alert("Email cannot be empty!");
        return;
      }
      this.currentUser.Email = this.email;

      // Persistir alterações no Pinia
      this.usersStore.updateUser(this.currentUser);

      // Resetar os campos de password
      this.currentPassword = "";
      this.newPassword = "";

      alert("Changes saved successfully!");
    },
    deleteAccount() {
      const confirmDelete = confirm(
        "Are you sure you want to delete your account?"
      );
      if (confirmDelete) {
        // Apagar a conta do Pinia
        this.usersStore.users = this.usersStore.users.filter(
          (user) => user.id !== this.currentUser.id
        );

        // Deslogar o utilizador e redirecionar
        this.usersStore.logout();
        this.$router.push("/login");

        alert("Account deleted successfully!");
      }
    },
  },
};
</script>

<style scoped>
.settings-container {
  display: flex;
  flex-direction: column;
  align-items: left;
}

.settings-input {
  margin-bottom: 20px;
  width: 800px;
}

.password-fields {
  width: 60%;
  display: flex;
  gap: 20px;
}

.remove-account {
  margin: 20px 0;
  text-align: left;
}

.save-section {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
