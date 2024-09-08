<!-- MtMapDialog.vue -->
<template>
  <MtDialog
    ref="Dialog"
    title="Map"
    height="550"
    width="600"
    @on-resize="onResize"
  >
    <MtCard
      :height="dialogInnerHeight"
      :width="dialogInnerWidth"
      style="overflow: auto; margin: 0px 8px 0px 8px"
    >
      <iframe
        :src="mapPage"
        :height="dialogInnerHeight"
        :width="dialogInnerWidth"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </MtCard>
  </MtDialog>
</template>

<script>
import MtDialog from "./MtDialog.vue";
import MtCard from "@/components/MtCard.vue";

export default {
  components: {
    MtDialog,
    MtCard,
  },
  props: {
    //
  },
  data: () => ({
    dialogInnerHeight: 0,
    dialogInnerWidth: 0,
    mapPage: "",
  }),
  methods: {
    onResize: function (event) {
      this.dialogInnerHeight = event.cardHeight;
      this.dialogInnerWidth = event.cardwidth;
    },
    show: async function (mapPage) {
      this.mapPage = mapPage;
      await this.$refs.Dialog.show();
    },
  },
};
</script>
