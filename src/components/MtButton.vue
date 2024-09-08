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
    :append-icon="appendIcon"
    @click="$emit('onClick')"
  >
    {{ text }}
    <template v-slot:append>
      <MtIcon color="primary"></MtIcon>
    </template>
  </v-btn>
</template>

<script>
import MtIcon from "@/components/MtIcon.vue";

export default {
  components: {
    MtIcon,
  },
  props: {
    color: { type: String, required: true },
    text: { type: String, required: true },
    appendIcon: { type: String, required: false },
    height: { type: [Number, String], required: true },
    width: { type: [Number, String], required: true },
    outlined: { type: Boolean, required: false, default: false },
    icon: { type: Boolean, required: false, default: false },
    to: { type: [String, Object], required: false, default: undefined },
  },
  methods: {},
};
</script>
