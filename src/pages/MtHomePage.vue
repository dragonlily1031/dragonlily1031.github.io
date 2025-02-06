<!-- MtHomePage.vue -->
<template>
  <v-layout>
    <div style="height: 100%; width: 100%; overflow: hidden">
      <div
        v-if="isInitialized"
        v-resize="onResize"
        style="height: 100%; width: 100%; overflow: hidden"
      >
        <MtToolbar title="Home" isHome></MtToolbar>

        <v-main>
          <!-- 下地 グレー -->
          <MtCard
            color="#eeeeee"
            style="overflow: hidden"
            :height="pageHeight"
            :width="width"
          >
            <!-- メニュー Top -->
            <MtCard
              :elevation="8"
              style="margin: 8px"
              @click="execute(item.title)"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                class="align-end"
                height="200px"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title class="font-weight-bold text-white">
                  schedule
                </v-card-title>
              </v-img>
            </MtCard>

            <!-- メニュー Sub -->
            <div class="d-flex flex-wrap">
              <div v-for="(item, index) in menus" :key="index">
                <MtCard
                  :elevation="8"
                  style="margin: 8px"
                  @click="execute(item.title)"
                >
                  <v-img
                    :src="item.url"
                    class="align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  >
                    <v-card-title class="font-weight-bold text-white">
                      {{ item.title }}
                    </v-card-title>
                  </v-img>
                </MtCard>
              </div>
            </div>
          </MtCard>
        </v-main>
      </div>
    </div>
  </v-layout>
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
    isInitialized: false,
    height: window.innerHeight,
    width: window.innerWidth,
    viewHeight: 0,

    menus: [
      {
        title: "Hotel",
        url: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
      {
        title: "Emergency",
        url: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
    ],
  }),
  created: async function () {
    this.isInitialized = true;
  },
  mounted: async function () {
    this.onResize();
  },
  computed: {
    pageHeight: function () {
      const toolberHeight = 64;
      const pageHeight = this.height - toolberHeight; // 上下12pxずつ余白取ってるらしい
      return pageHeight;
    },
    pageWidth: function () {
      const pageWidth = this.width - 24; // 左右12pxずつ取ってるらしいけど、widthだけなんか余白が違う
      return pageWidth;
    },
  },
  methods: {
    onResize: function (event) {
      // F5
      if (!event) return;

      // window.dispatchEvent(new Event("resize"));から呼び出された時
      if (!event.isTrusted) return;

      this.height = window.innerHeight;
      this.width = window.innerWidth;
      this.viewHeight = this.pageHeight;
    },
    execute: function (title) {
      if (title == "Schedule") this.$router.push({ name: "schedule" });

      if (title == "Hotel")
        window.open("https://www.miyakohybridhotel.com/miyako-jp/");

      if (title == "Emergency") this.$router.push({ name: "emergency" });
    },
  },
};
</script>
