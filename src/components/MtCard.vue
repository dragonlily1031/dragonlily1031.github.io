<!-- MtCard.vue -->
<template>
  <v-card
    :color="color"
    :flat="flat"
    :elevation="elevation"
    :height="height"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :min-height="minHeight"
    :min-width="minWidth"
    :width="width"
    :outlined="outlined"
    :to="to"
  >
    <slot />
  </v-card>
</template>

<script>
export default {
  props: {
    color: { type: String, required: false, default: undefined },
    flat: { type: Boolean, required: false, default: false },
    elevation: { type: [Number, String], required: false, default: undefined },
    height: { type: [Number, String], required: false, default: undefined },
    maxHeight: { type: [Number, String], required: false, default: undefined },
    maxWidth: { type: [Number, String], required: false, default: undefined },
    minHeight: { type: [Number, String], required: false, default: undefined },
    minWidth: { type: [Number, String], required: false, default: undefined },
    width: { type: [Number, String], required: false, default: undefined },
    outlined: { type: Boolean, required: false, default: false },
    to: { type: [String, Object], required: false, default: undefined },
  },
  methods: {},
};
</script>
