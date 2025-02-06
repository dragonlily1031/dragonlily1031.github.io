<!-- MtToolbar.vue -->
<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
    <v-toolbar-title class="font-weight-bold">
      {{ title }}
    </v-toolbar-title>
    <MtIconBtn
      v-if="!isHome"
      icon
      icon-name="mdi-home"
      icon-color="#ffffff"
      height="20"
      width="20"
      class="mr-2"
      @on-click="backHome"
    />
    <MtIconBtn
      icon
      icon-name="mdi-logout"
      icon-color="#ffffff"
      height="20"
      width="20"
      class="mr-2"
      @on-click="logout"
    />
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list :items="items" />
  </v-navigation-drawer>
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
  data: () => ({
    drawer: false,
    items: [
      {
        title: "Foo",
        value: "foo",
      },
      {
        title: "Bar",
        value: "bar",
      },
      {
        title: "Fizz",
        value: "fizz",
      },
      {
        title: "Buzz",
        value: "buzz",
      },
    ],
  }),

  methods: {
    backHome: function () {
      this.$router.push({ name: "home" });
    },
    logout: function () {
      this.$router.push({ name: "login" });
    },
  },
};
</script>
