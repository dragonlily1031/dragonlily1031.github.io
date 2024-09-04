<!-- MtDialog.vue -->
<template>
  <div v-resize="onResize" class="text-center pa-4">
    <v-dialog v-model="dialog" :height="height" :width="width" persistent>
      <MtCard
        :title="title"
        :height="height"
        :width="width"
        style="overflow: auto"
      >
        <MtCard
          :height="dialogInnerWidth"
          :width="dialogInnerWidth"
          style="overflow: auto"
        >
          <iframe
            v-if="showMap"
            :src="mapPage"
            height="400"
            width="500"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </MtCard>
        <v-card-actions>
          <v-spacer></v-spacer>
          <MtButton @click="onClose"> CLOSE </MtButton>
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
    height: { type: [Number, String], required: false, default: 600 },
    width: { type: [Number, String], required: false, default: 500 },
  },
  data: () => ({
    dialog: false,
    title: "",
    showMap: false,
    dialogInnerHeight: 0,
    dialogInnerWidth: 0,
  }),
  methods: {
    onResize: function () {
      this.dialogInnerHeight = this.height;
      this.dialogInnerWidth = this.width;
    },
    show: function (title, mapPage) {
      this.title = title;
      if (mapPage) {
        this.mapPage = mapPage;
        this.showMap = true;
      }
      this.dialog = true;
    },
    onClose: function () {
      this.dialog = false;
    },
  },
};
</script>
