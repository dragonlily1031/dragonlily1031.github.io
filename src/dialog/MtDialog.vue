<!-- MtDialog.vue -->
<template>
  <div>
    <v-dialog
      v-model="dialog"
      :width="dialogWidth"
      transition="slide-x-transition"
      persistent
    >
      <MtCard
        v-if="dialog"
        v-resize="onResize"
        :title="title"
        :height="dialogHeight"
      >
        <slot />
        <v-card-actions>
          <v-spacer></v-spacer>
          <MtButton text="CLOSE" @on-click="onClose"></MtButton>
        </v-card-actions>
      </MtCard>
    </v-dialog>
  </div>
</template>

<script>
import MtCard from "@/components/MtCard.vue";
import MtButton from "@/components/MtButton.vue";

export default {
  components: {
    MtCard,
    MtButton,
  },
  props: {
    title: { type: String, required: true },
    height: { type: [Number, String], required: false, default: undefined },
    width: { type: [Number, String], required: false, default: undefined },
  },
  data: () => ({
    dialog: false,
    dialogHeight: 0,
    dialogWidth: 0,
    resultFunction: null,
  }),
  methods: {
    onResize: function () {
      this.dialogHeight = this.height ? this.height : window.innerHeight * 8;
      this.dialogWidth = this.width ? this.width : window.innerWidth * 95;
      let cardHeight = this.dialogHeight - 105; // タイトルとcloseボタンの高さ
      this.$emit("on-resize", {
        cardHeight: cardHeight,
        cardWidth: this.dialogWidth,
      });
    },
    show: function () {
      this.dialog = true;
      //return new Promise((resolve) => (this.resultFunction = resolve));
    },
    onClose: function () {
      this.dialog = false;
    },
  },
};
</script>
