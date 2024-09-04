<!-- MtIconBtn.vue -->
<template>
  <MtButton
    :color="color"
    :height="height"
    :width="width"
    :icon="icon"
    @on-click="onClick"
  >
    <MtIcon :name="iconName" :size="iconSize" :color="iconColor"></MtIcon>
  </MtButton>
</template>

<script>
import MtButton from "@/components/MtButton.vue";
import MtIcon from "@/components/MtIcon.vue";

export default {
  components: {
    MtButton,
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
    onClick: function () {
      this.$emit("backHome");
    },
  },
};
</script>
