<!-- MtTimeLine.vue -->
<template>
  <MtCard
    flat
    style="overflow: auto; padding-left: 16px"
    :height="timeLineHeight"
    :width="timeLineWidth"
  >
    <v-timeline
      style="margin-bottom: 20px"
      density="compact"
      align="start"
      side="end"
    >
      <v-timeline-item
        v-for="(item, index) in schedule"
        :key="index"
        :dot-color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card :width="timeLineItemWidth">
          <v-card-title :class="['text-h6', `bg-${item.color}`]">
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle :class="['text-caption', `bg-${item.color}`]">
            {{ item.subtitle }}</v-card-subtitle
          >
          <v-card-text class="text-left" style="white-space: pre-wrap">
            {{ item.comment }}
          </v-card-text>
          <div class="d-flex justify-start">
            <MtIconBtn
              :color="item.color"
              icon
              height="30"
              width="30"
              icon-color="#ffffff"
              iconName="mdi-home"
              style="margin: 0px 4px 4px 4px"
              @click="onClick('homePage', item)"
            >
            </MtIconBtn>
            <MtIconBtn
              :color="item.color"
              icon
              height="30"
              width="30"
              icon-color="#ffffff"
              iconName="mdi-map-marker"
              style="margin: 0px 4px 4px 4px"
              @click="onClick('map', item)"
            >
            </MtIconBtn>
            <MtIconBtn
              v-if="showTipsIcon(item)"
              :color="item.color"
              icon
              height="30"
              width="30"
              icon-color="#ffffff"
              iconName="mdi-alert"
              style="margin: 0px 4px 4px 4px"
              @click="onClick('tips', item)"
            >
            </MtIconBtn>
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </MtCard>

  <MtMapDialog ref="MapDialog"></MtMapDialog>
  <MtTipsDialog ref="TipsDialog"></MtTipsDialog>
</template>

<script>
import MtCard from "@/components/MtCard.vue";
import MtIconBtn from "./MtIconBtn.vue";
import MtMapDialog from "@/dialog/MtMapDialog.vue";
import MtTipsDialog from "@/dialog/MtTipsDialog.vue";

export default {
  components: {
    MtCard,
    MtIconBtn,
    MtMapDialog,
    MtTipsDialog,
  },
  props: {
    schedule: { type: Object, required: true },
    timeLineHeight: { type: [Number, String], required: true },
    timeLineWidth: { type: [Number, String], required: true },
  },
  data: () => ({
    //
  }),
  mounted: function () {
    //
  },
  computed: {
    // カード単体の幅
    timeLineItemWidth: function () {
      const timeLineLeftmargin = 100; // タイムラインの左にあるアイコンとかの幅を引く
      return this.timeLineWidth - timeLineLeftmargin;
    },
  },
  methods: {
    onClick: function (actionName, item) {
      if (actionName == "homePage") window.open(item.homepage);

      if (actionName == "map") this.$refs.MapDialog.show(item.map);

      if (actionName == "tips") this.$refs.TipsDialog.show(item.tips);
    },
    showTipsIcon: function (item) {
      if (item.tips != false) return true;
    },
  },
};
</script>
