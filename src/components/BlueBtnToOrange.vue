<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-btn
            :to='{ name: route, params:{speakerId: id} }'
            elevation="4"
            size="large"
            :color="isHovering ? '#F2A714': '#6590D0'"
            class="rounded-lg"
            v-bind="props"
            >
            <span
                class="text-lowercase textBtn"
                v-bind="props"
                >/{{ value }}
            </span>
        </v-btn>
    </v-hover>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true,
        },
        route: {
            type: String,
            default: "home"
        },
        id: {
            type: Number,
        }
    },
}
</script>

<style>
span {
    color: #EEF6F2 !important; /* Mantém o texto branco */
}

@media only screen and (min-width: 600px) and (max-width: 700px) {
    .textBtn {
        font-size: 0.7rem;
    }
}
</style>
