<template>
  <div v-resize="onResize">
    <MtCard color="#eeeeee" :height="height" :width="width">
      <div class="d-flex flex-wrap">
        <div v-for="(item, index) in scheduleInfo" :key="index">
          <MtCard
            :min-width="200"
            style="margin: 8px"
            @click="onClick(item.title)"
          >
            <v-img :src="item.url" height="200"></v-img>
            <v-card-title>{{ item.title }}</v-card-title>
          </MtCard>
        </div>
      </div>
    </MtCard>
  </div>
</template>

<script>
import MtCard from "@/components/MtCard.vue";

export default {
  components: {
    MtCard,
  },
  data: () => ({
    scheduleInfo: [
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
    height: 0,
    width: 0,
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
      this.width = window.innerWidth * 0.98;
    },
    onClick: function (title) {
      if (title == "Schedule") this.$router.push("/schedule");
    },
  },
};
</script>
