<!-- MtTipsDialog.vue -->
<template>
  <MtDialog ref="Dialog" title="Tips" @on-resize="onResize">
    <MtCard
      :height="dialogInnerHeight"
      :width="dialogInnerWidth"
      style="overflow: auto; margin: 0px 8px 0px 8px"
    >
      <v-tabs v-model="selectIndex" color="primary">
        <v-tab v-for="tip in tips" :key="tip.title" :prepend-icon="tip.icon">
          {{ tip.title }}</v-tab
        >
      </v-tabs>

      <v-tabs-window v-model="selectIndex">
        <v-tabs-window-item v-for="tip in tips" :key="tip.title">
          <v-card flat>
            <v-card-text style="white-space: pre-wrap"
              >{{ tip.text }}
            </v-card-text>
            <v-card-actions
              v-for="labelLink in tip.linkInfo"
              :key="labelLink.label"
            >
              <MtButton
                height="30"
                width="150"
                color="primary"
                outlined
                :text="labelLink.label"
                append-icon="mdi-open-in-new"
                @on-click="onClick(labelLink.link)"
              >
              </MtButton>
            </v-card-actions>
          </v-card>
        </v-tabs-window-item>
      </v-tabs-window>
    </MtCard>
  </MtDialog>
</template>

<script>
import MtDialog from "./MtDialog.vue";
import MtCard from "@/components/MtCard.vue";
import MtButton from "@/components/MtButton.vue";

export default {
  components: {
    MtDialog,
    MtCard,
    MtButton,
  },
  props: {
    //
  },
  data: () => ({
    tips: [],
    dialogInnerHeight: 0,
    dialogInnerWidth: 0,
    selectIndex: null,
  }),
  computed: {
    label: function (tip) {
      return tip.linkInfo["label"];
    },
  },

  methods: {
    onResize: function (event) {
      this.dialogInnerHeight = event.cardHeight;
      this.dialogInnerWidth = event.cardwidth;
    },
    show: async function (tips) {
      this.tips = tips;
      await this.$refs.Dialog.show();
    },
    onClick: function (link) {
      window.open(link);
    },
  },
};
</script>
