<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-btn
      elevation="4"
      size="large"
      :color="isHovering ? '#ffffff' : '#EB5050'"
      class="rounded-lg custom-btn"
      v-bind="props"
      @click="handleClick"
      :aria-label="value"
    >
      <span
        :class="{ 'hover-text': isHovering, 'default-text': !isHovering }"
        class="text-lowercase textBtn"
      >
        /{{ value }}
      </span>
    </v-btn>
  </v-hover>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true, // Exige o texto no botão
    },
    handleClick: {
      type: Function,
      required: true, // A função para o evento de clique é obrigatória
    },
  },
};
</script>

<style scoped>
/* Estilo padrão do texto */
.default-text {
  color: #ffffff; /* Texto branco para hover */
}

/* Estilo do texto no hover */
.hover-text {
  color: #eb5050 !important; /* Texto vermelho para o fundo branco */
}

/* Estilo do botão */
.custom-btn {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
