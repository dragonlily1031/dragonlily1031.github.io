<!-- MtTextField.vue -->
<template>
  <v-text-field
    v-model="bindValue"
    :height="height"
    :label="label"
    :autofocus="autofocus"
    :type="showPassword ? 'text' : 'password'"
    :rules="rules"
    background-color="white"
    variant="outlined"
    hide-details
    dense
    prepend-inner-icon="mdi-lock"
    :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append-inner="showPassword = !showPassword"
  />
</template>

<script>
export default {
  components: {
    //
  },
  props: {
    height: { type: Number, required: false },
    label: { type: String, required: true },
    autofocus: { type: Boolean, default: false },
    value: { type: String, required: false, default: "" },
    rules: { type: Array, default: () => [] },
  },
  computed: {
    bindValue: {
      get: function () {
        return this.value;
      },
      set: function (newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  data: () => ({
    showPassword: false,
  }),
};
</script>

<style scoped></style>
