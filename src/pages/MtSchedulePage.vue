<!-- MtSchedulePage.vue -->
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
        <MtToolbar title="Schedule" :elevation="6"></MtToolbar>
        <MtCard
          flat
          style="overflow: auto; padding-left: 16px"
          :height="viewHeight"
          :width="pageWidth"
        >
          <v-timeline density="compact" side="end">
            <v-timeline-item
              v-for="(item, index) in items"
              :key="index"
              :width="500"
              :dot-color="item.color"
              :icon="item.icon"
              fill-dot
            >
              <v-card style="">
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
                  <v-btn outline="false" @click="onClickPage(item.homepage)">
                    HOMEPAGE
                  </v-btn>
                  <v-btn outline="false" @click="onClickMap(item.map)">
                    Google MAP
                  </v-btn>
                </div>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </MtCard>
      </MtCard>
    </MtCard>
  </div>

  <MtDialog ref="Dialog"></MtDialog>
</template>

<script>
import MtToolbar from "@/components/MtToolbar.vue";
import MtCard from "@/components/MtCard.vue";
import MtDialog from "@/dialog/MtDialog.vue";

export default {
  components: {
    MtToolbar,
    MtCard,
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

    items: [
      {
        color: "red-lighten-2",
        icon: "mdi-airplane",
        title: "11:00 LAX",
        subtitle: "到着",
        comment: "無事入国審査が通りますように！！",
        homepage: "https://www.miyakohybridhotel.com/miyako-jp/",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52957.07555153077!2d-118.44392417159706!3d33.94582886659878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b0d213b24fb5%3A0x77a87b57698badf1!2z44Ot44K144Oz44K844Or44K55Zu96Zqb56m65riv!5e0!3m2!1sja!2sjp!4v1725466308909!5m2!1sja!2sjp",
      },
      {
        color: "purple-lighten-2",
        icon: "mdi-store",
        title: "13:00 Walmart",
        subtitle: "買い物",
        comment:
          "超大型スーパー。LAX空港から車で約20分。\r\n入国手続きなどが早めに終わった場合、水やおやつなどの買い出し\r\n→もし手続きに時間がかかったりしたら、ホテルチェックアウト後に行ってもいい",
        homepage: "https://www.miyakohybridhotel.com/miyako-jp/",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6628.555103179516!2d-118.35775136786835!3d33.83095221918892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4b2ee0075f5b%3A0x2e1238fda39188bd!2z44Km44Kp44Or44Oe44O844OI44O744K544O844OR44O844K744Oz44K_44O8!5e0!3m2!1sja!2sjp!4v1725466233286!5m2!1sja!2sjp",
      },
      {
        color: "green-lighten-1",
        icon: "mdi-bed",
        title: "15:00 Miyako Hybrid Hotel",
        subtitle: "チェックイン",
        comment: "Walmartから車で約10分。",
        homepage: "https://www.miyakohybridhotel.com/miyako-jp/",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.130484768951!2d-118.31236248935213!3d33.83474542907305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4aa513cf0bfb%3A0x309209b25394d284!2z6YO944OP44Kk44OW44Oq44OD44OJ44Ob44OG44OrIOODiOODvOODqeODs-OCuQ!5e0!3m2!1sja!2sjp!4v1725466079903!5m2!1sja!2sjp",
      },
      {
        color: "indigo-lighten-2",
        icon: "mdi-silverware-fork-knife",
        title: "19:00 - 20:00 In-N-Out Burger",
        comment: "ホテルから車で約10分。ポテトはwell-doneで頼もうね。",
        homepage: "https://www.in-n-out.com/",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106091.71422541628!2d-118.41907876265624!3d33.80286504247772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4af5d6911305%3A0x9059cc42ce212aa!2z44Kk44Oz44O744Ki44Oz44OJ44O744Ki44Km44OI44O744OQ44O844Ks44O8!5e0!3m2!1sja!2sjp!4v1725462836865!5m2!1sja!2sjp",
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
    onClickPage: function (page) {
      window.open(page);
    },
    onClickMap: function (mapPage) {
      this.$refs.Dialog.show("Google Map", mapPage);
    },
  },
};
</script>
