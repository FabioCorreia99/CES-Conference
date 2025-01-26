<template>
  <div class="profile-container">
    <h3 class="mb-4">Personal Agenda</h3>

    <div class="profile-picture-section mb-10">
      <v-avatar size="120" class="mb-10">
        <img
          :src="profile.picture || defaultPicture"
          alt="Profile Picture"
          class="profile-picture"
        />
      </v-avatar>
      <div class="profile-buttons">
        <BlueBtnToOrange
          :handleClick="triggerFileUpload"
          :value="'change picture'"
        />

        <RedBtnToWhite :handleClick="deletePicture" :value="'delete picture'" />
      </div>
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        style="display: none"
        @change="uploadPicture"
      />
    </div>

    <h3 class="mb-4">Nick name</h3>
    <v-text-field
      v-model="profile.name"
      outlined
      class="profile-input"
      rounded="lg"
      variant="solo"
    ></v-text-field>

    <h3 class="mb-4">About me</h3>
    <v-textarea
      v-model="profile.about"
      outlined
      rows="4"
      class="profile-textarea"
      rounded="lg"
      variant="solo"
    ></v-textarea>

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
  align-items: left;
}

.profile-picture-section {
  display: flex;
  flex-direction: column;
  align-items: left;
}

.profile-input,
.profile-textarea {
  width: 800px;
  max-width: 100%;
  margin-bottom: 20px;
}

.profile-buttons {
  display: flex;
  gap: 15px;
}

.profile-picture {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Garante proporção da imagem */
  border-radius: 50%; /* Torna a imagem circular */
}

.save-section {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
