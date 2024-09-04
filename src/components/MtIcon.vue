<!-- MtIcon.vue -->
<template>
  <v-icon :size="size" :color="color">{{ name }}</v-icon>
</template>

<script>
export default {
  props: {
    color: { type: String, required: true },
    name: { type: String, required: true },
    size: { type: [Number, String], required: false },
  },
  methods: {},
};
</script>
