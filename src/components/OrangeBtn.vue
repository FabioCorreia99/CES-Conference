<template>
  <v-hover v-bind="$attrs" v-slot="{ isHovering, props }">
    <v-btn
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
