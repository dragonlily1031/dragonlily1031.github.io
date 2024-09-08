<!-- MtToolbar.vue -->
<template>
  <v-toolbar
    :color="color"
    :dense="dense"
    :elevation="elevation"
    style="margin-bottom: 8px"
  >
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <MtIconBtn
      v-if="!isHome"
      icon
      icon-name="mdi-home"
      icon-color="#ffffff"
      height="30"
      width="30"
      class="ml-1"
      @on-click="backHome"
    ></MtIconBtn>
  </v-toolbar>
</template>

<script>
import MtIconBtn from "@/components/MtIconBtn.vue";

export default {
  components: {
    MtIconBtn,
  },
  props: {
    color: { type: String, required: false, default: "deep-purple-lighten-1" },
    elevation: { type: [Number, String], required: false, default: undefined },
    dense: { type: Boolean, required: false, default: false },
    title: { type: String, required: false, default: undefined },
    isHome: { type: Boolean, required: false, default: false },
  },
  methods: {
    backHome: function () {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
