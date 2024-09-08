<!-- MtIconBtn.vue -->
<template>
  <v-btn
    :color="color"
    :height="height"
    :width="width"
    :icon="icon"
    @click="$emit('onClick')"
  >
    <MtIcon :name="iconName" :size="iconSize" :color="iconColor"></MtIcon>
  </v-btn>
</template>

<script>
import MtIcon from "@/components/MtIcon.vue";

export default {
  components: {
    MtIcon,
  },
  props: {
    color: { type: String, required: false, default: "primary" },
    height: { type: [Number, String], required: true },
    width: { type: [Number, String], required: true },
    outlined: { type: Boolean, required: false, default: false },
    icon: { type: Boolean, required: false, default: false },
    to: { type: [String, Object], required: false, default: undefined },
    iconName: { type: String, required: true },
    iconSize: { type: Number, required: true },
    iconColor: { type: String, required: false, default: "primary" },
  },
  methods: {
    //
  },
};
</script>
