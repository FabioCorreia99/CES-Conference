<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-btn
            elevation="4"
            size="large"
            :color="isHovering ? '#F2A714' : '#6590D0'"
            class="rounded-lg"
            v-bind="props"
            @click="handleClick"
        >
            <span class="text-lowercase textBtn">/{{ value }}</span>
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
/* Estilo do texto do botão */
span {
    color: #EEF6F2 !important;
}
</style>
