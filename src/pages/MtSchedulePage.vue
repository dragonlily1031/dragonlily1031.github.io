<!-- MtSchedulePage.vue -->
<template>
  <div v-resize="onResize" style="height: 100%; width: 100%; overflow: hidden">
    <!-- 下地 グレー -->
    <MtCard
      flat
      color="#999999"
      style="overflow: hidden"
      :height="height"
      :width="width"
    >
      <!-- 下地 ホワイト -->
      <MtCard
        style="margin: 6px; overflow: hidden"
        :height="pageHeight"
        :width="pageWidth"
      >
        <!-- スケジュール部分 -->
        <MtToolbar title="Schedule" :elevation="6"></MtToolbar>
        <MtScheduleTabs
          :tabs-and-timeline-height="tabsAndTimelineHeight"
          :page-width="pageWidth"
        ></MtScheduleTabs>
      </MtCard>
    </MtCard>
  </div>

  <MtDialog ref="Dialog"></MtDialog>
</template>

<script>
import MtToolbar from "@/components/MtToolbar.vue";
import MtCard from "@/components/MtCard.vue";
import MtScheduleTabs from "@/components/MtScheduleTabs.vue";
import MtDialog from "@/dialog/MtDialog.vue";

export default {
  components: {
    MtToolbar,
    MtCard,
    MtScheduleTabs,
    MtDialog,
  },
  props: {
    //
  },
  data: () => ({
    height: 0,
    width: 0,
    pageHeight: 0,
    pageWidth: 0,
    tabsAndTimelineHeight: 0,
  }),
  mounted: function () {
    this.onResize();
  },
  computed: {
    //
  },
  methods: {
    onResize: function () {
      this.height = window.innerHeight;
      this.width = window.innerWidth;
      const margin = 12;
      this.pageHeight = window.innerHeight - margin;
      this.pageWidth = window.innerWidth - margin;
      const headerHeight = 64;
      this.tabsAndTimelineHeight = this.pageHeight - headerHeight;
    },
  },
};
</script>
