<!-- MtSchedulePage.vue -->
<template>
  <div v-resize="onResize">
    <MtCard color="#eeeeee" :height="height" :width="width">
      <v-timeline side="end">
        <v-timeline-item
          v-for="(item, index) in items"
          :key="index"
          :width="500"
          :dot-color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <v-card>
            <v-card-title :class="['text-h6', `bg-${item.color}`]">
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle :class="['text-caption', `bg-${item.color}`]">
              {{ item.subtitle }}</v-card-subtitle
            >
            <v-card-text class="text-left">
              {{ item.comment }}
            </v-card-text>
            <div class="d-flex justify-start">
              <v-btn outline="false" @click="onClickHomePage(item.homepage)">
                HOMEPAGE
              </v-btn>
              <v-btn outline="false" :to="item.map"> Google MAP </v-btn>
            </div>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </MtCard>
  </div>
</template>

<script>
import MtCard from "@/components/MtCard.vue";

export default {
  components: {
    MtCard,
  },
  props: {
    //
  },
  data: () => ({
    items: [
      {
        color: "red-lighten-2",
        icon: "mdi-star",
        title: "11:00 LAX",
        subtitle: "到着",
        comment: "",
      },
      {
        color: "purple-lighten-2",
        icon: "mdi-book-variant",
        title: "13:00 Walmart",
        subtitle: "買い物",
        comment:
          "超大型スーパー。LAX空港から車で約20分。\r\n入国手続きなどが早めに終わった場合、水やおやつなどの買い出し\r\n→もし手続きに時間がかかったりしたら、ホテルチェックアウト後に行ってもいい",
      },
      {
        color: "green-lighten-1",
        icon: "mdi-airballoon",
        title: "15:00 Miyako Hybrid Hotel",
        subtitle: "チェックイン",
        comment: "Walmartから車で約10分。",
        homepage: "https://www.miyakohybridhotel.com/miyako-jp/",
      },
      {
        color: "indigo-lighten-2",
        icon: "mdi-layers-triple",
        title: "19:00 - 20:00 In-N-Out Burger",
        comment: "ホテルから車で約10分。ポテトはwell-doneで頼もうね。",
      },
    ],
    height: 0,
    width: 0,
  }),
  mounted: function () {
    this.onResize();
  },
  methods: {
    onResize: function () {
      this.height = window.innerHeight;
      this.width = window.innerWidth * 0.98;
    },
    onClickHomePage: function (homepage) {
      window.open(homepage);
    },
  },
};
</script>
