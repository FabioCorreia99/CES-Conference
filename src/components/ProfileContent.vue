<template>
  <div class="profile-container">
    <h3 class="profile-title">Profile Picture</h3>

    <!-- Foto de Perfil -->
    <div class="profile-picture-section mb-10">
      <!-- Adicionada margem aqui -->
      <v-avatar size="120">
        <img :src="profile.picture || defaultPicture" alt="Profile Picture" />
      </v-avatar>
      <div class="profile-buttons">
        <!-- Botão Customizado -->
        <BlueBtnToOrange @click="triggerFileUpload" :value="'change picture'" />

        <!-- Botão Padrão para Delete -->
        <RedBtnToWhite @click="deletePicture" :value="'delete picture'" />
      </div>
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        style="display: none"
        @change="uploadPicture"
      />
    </div>

    <!-- Nome de Perfil -->
    <v-text-field
      v-model="profile.name"
      label="Profile name"
      outlined
      class="profile-input"
    ></v-text-field>

    <!-- About Me -->
    <v-textarea
      v-model="profile.about"
      label="About me"
      outlined
      rows="4"
      class="profile-textarea"
    ></v-textarea>

    <!-- Botão Salvar -->
    <div class="save-section">
      <OrangeBtn @click="saveChanges" :value="'save'" />
    </div>
  </div>
</template>

<script>
import BlueBtnToOrange from "@/components/BlueBtnToOrange.vue";
import RedBtnToWhite from "@/components/RedBtnToWhite.vue";
import OrangeBtn from "@/components/OrangeBtn.vue";

export default {
  props: ["profile", "defaultPicture"],
  components: {
    BlueBtnToOrange,
    RedBtnToWhite,
    OrangeBtn,
  },
  methods: {
    triggerFileUpload() {
      this.$refs.fileInput.click();
    },
    uploadPicture(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profile.picture = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    deletePicture() {
      this.profile.picture = null;
    },
    saveChanges() {
      this.$emit("save", this.profile);
    },
  },
};
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-title {
  margin-bottom: 20px;
}

.profile-picture-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-input,
.profile-textarea {
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

.save-section {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
