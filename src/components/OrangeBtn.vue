<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-btn
      v-if="route"
      :to="{ name: route }"
      elevation="4"
      size="large"
      :color="isHovering ? '#EEF6F2' : '#F2A714'"
      class="rounded-lg Orangebtn"
      v-bind="props"
    >
      <span class="text-lowercase text-button" :class="{ 'on-hover': isHovering }" v-bind="props">
        /{{ value }}
      </span>
    </v-btn>

    <v-btn
      v-else
      elevation="4"
      size="large"
      :color="isHovering ? '#EEF6F2' : '#F2A714'"
      class="rounded-lg Orangebtn"
      v-bind="props"
      @click="$emit('click')"
    >
      <span class="text-lowercase text-button" :class="{ 'on-hover': isHovering }" v-bind="props">
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
      required: true,
    },
    route: {
      type: String,
      default: "",
    },
  },
  emits: ["click"],
};
</script>

<style scoped>
span {
  color: var(--color-white) !important;
}
.on-hover {
  color: #f2a714 !important;
}
</style>
