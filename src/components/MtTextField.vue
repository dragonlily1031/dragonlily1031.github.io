<!-- MtTextField.vue -->
<template>
  <v-text-field
    v-model="bindValue"
    :height="height"
    :label="label"
    :disabled="disabled"
    :readonly="readonly"
    :autofocus="autofocus"
    :type="type"
    :rules="rules"
    background-color="white"
    variant="outlined"
    hide-details
    dense
  >
    <template v-slot:prepend-inner>
      <MtIcon v-if="prependIcon" :name="prependIcon" />
    </template>
    <template v-slot:append-inner>
      <MtIconBtn
        v-if="appendIcon"
        icon
        :icon-name="appendIcon"
        :height="20"
        :width="20"
        @click="$emit('click:append', $event)"
      />
    </template>
  </v-text-field>
</template>

<script>
import MtIcon from "@/components/MtIcon.vue";
import MtIconBtn from "@/components/MtIconBtn.vue";

export default {
  components: {
    MtIcon,
    MtIconBtn,
  },
  props: {
    height: { type: Number, required: false },
    label: { type: String, required: true },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    value: { type: String, required: false, default: "" },
    outlined: { type: Boolean, default: false },
    type: { type: String, required: true },
    rules: { type: Array, default: () => [] },
    prependIcon: { type: String, required: false },
    appendIcon: { type: String, required: false },
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
  mounted: async function () {
    //
  },
};
</script>

<style scoped></style>
