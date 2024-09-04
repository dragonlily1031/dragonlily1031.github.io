<!-- MtButton.vue -->
<template>
  <v-btn
    :color="color"
    :height="height"
    :min-width="minWidth"
    :width="width"
    :outlined="outlined"
    :to="to"
    :icon="icon"
    @click="$emit('onClick')"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    color: { type: String, required: true },
    height: { type: [Number, String], required: true },
    width: { type: [Number, String], required: true },
    outlined: { type: Boolean, required: false, default: false },
    icon: { type: Boolean, required: false, default: false },
    to: { type: [String, Object], required: false, default: undefined },
  },
  methods: {},
};
</script>
