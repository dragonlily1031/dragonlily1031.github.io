<!-- MtHomePage.vue -->
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
        <!-- メイン下地 ホワイト -->
        <MtToolbar title="Home" :elevation="6" isHome></MtToolbar>
        <MtCard
          flat
          style="overflow: auto"
          :height="viewHeight"
          :width="pageWidth"
        >
          <!-- メニュー -->
          <div class="d-flex flex-wrap">
            <div v-for="(item, index) in menus" :key="index">
              <MtCard
                :elevation="8"
                :width="150"
                :min-width="150"
                style="margin: 8px"
                @click="execute(item.title)"
              >
                <v-img :src="item.url" height="200"></v-img>
                <v-card-title>{{ item.title }}</v-card-title>
              </MtCard>
            </div>
          </div>
        </MtCard>
      </MtCard>
    </MtCard>
  </div>
</template>

<script>
import MtToolbar from "@/components/MtToolbar.vue";
import MtCard from "@/components/MtCard.vue";

export default {
  components: {
    MtToolbar,
    MtCard,
  },
  props: {
    //
  },
  data: () => ({
    height: 0,
    width: 0,
    pageHeight: 0,
    pageWidth: 0,

    menus: [
      {
        title: "Schedule",
        url: "/assets/sea.png",
      },
      {
        title: "Hotel",
        url: "/assets/hotel.png",
      },
      {
        title: "Emergency",
        url: "/assets/usa.png",
      },
    ],
  }),
  mounted: function () {
    this.onResize();
  },
  computed: {
    viewHeight: function () {
      const toolberHeight = 48;
      return this.pageHeight - toolberHeight;
    },
  },
  methods: {
    onResize: function () {
      this.height = window.innerHeight;
      this.width = window.innerWidth;
      this.pageHeight = window.innerHeight - 12; // 上下6pxずつ取ってる
      this.pageWidth = window.innerWidth - 12; // 左右6pxずつ取ってる
    },
    execute: function (title) {
      if (title == "Schedule") this.$router.push({ name: "schedule" });

      if (title == "Emergency") this.$router.push({ name: "emergency" });
    },
  },
};
</script>
