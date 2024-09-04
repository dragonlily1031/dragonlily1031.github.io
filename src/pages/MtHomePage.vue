<!-- MtHomePage.vue -->
<template>
  <div v-resize="onResize" style="height: 100%; width: 100%; overflow: hidden">
    <MtCard
      flat
      color="#eeeeee"
      style="overflow: hidden"
      :height="height"
      :width="width"
    >
      <MtCard style="overflow: hidden" :height="pageHeight" :width="pageWidth">
        <MtToolbar title="Home" :elevation="6" isHome></MtToolbar>
        <MtCard
          flat
          style="overflow: auto"
          :height="viewHeight"
          :width="pageWidth"
        >
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
      this.pageHeight = window.innerHeight - 12;
      this.pageWidth = window.innerWidth - 18;
    },
    execute: function (title) {
      if (title == "Schedule") this.$router.push({ name: "schedule" });
    },
  },
};
</script>
