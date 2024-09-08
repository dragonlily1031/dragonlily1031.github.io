<!-- MtEmergencyPage.vue -->
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
        <!-- 緊急時メモ部分 -->
        <MtToolbar title="Emergency" :elevation="6"></MtToolbar>
        <div class="d-flex flex-row">
          <v-tabs v-model="selectIndex" color="primary" direction="vertical">
            <v-tab
              v-for="tip in tips"
              :key="tip.title"
              :prepend-icon="tip.icon"
            >
              {{ tip.title }}</v-tab
            >
          </v-tabs>

          <MtCard
            flat
            style="overflow: auto; padding: 8px"
            :height="tabItemHeight"
            :width="tabItemWidth"
          >
            <v-tabs-window v-model="selectIndex">
              <v-tabs-window-item v-for="tip in tips" :key="tip.title">
                <v-card
                  v-for="item in tip.info"
                  :key="item.title"
                  style="margin-bottom: 8px"
                  elevation="4"
                >
                  <v-card-title
                    v-if="item.title"
                    style="background-color: lightblue"
                  >
                    {{ item.title }}</v-card-title
                  >
                  <v-card-text class="text-left" style="white-space: pre-wrap"
                    >{{ item.text }}
                  </v-card-text>
                  <v-card-actions v-if="item.link">
                    <MtButton
                      height="30"
                      width="120"
                      color="primary"
                      outlined
                      text="情報ページ"
                      append-icon="mdi-open-in-new"
                      @on-click="onClick(item.link)"
                    >
                    </MtButton>
                  </v-card-actions>
                </v-card>
              </v-tabs-window-item>
            </v-tabs-window>
          </MtCard>
        </div>
      </MtCard>
    </MtCard>
  </div>

  <MtDialog ref="Dialog"></MtDialog>
</template>

<script>
import MtToolbar from "@/components/MtToolbar.vue";
import MtCard from "@/components/MtCard.vue";
import MtDialog from "@/dialog/MtDialog.vue";
import MtButton from "@/components/MtButton.vue";

export default {
  components: {
    MtToolbar,
    MtCard,
    MtDialog,
    MtButton,
  },
  props: {
    //
  },
  data: () => ({
    height: 0,
    width: 0,
    pageHeight: 0,
    pageWidth: 0,
    tabItemHeight: 0,
    tabItemWidth: 0,
    selectIndex: null,
    tips: [
      {
        icon: "mdi-hospital-building",
        title: "ケガ・病気",
        info: [
          {
            title: "911",
            text: "アメリカでは警察・消防・救急車ともに911。",
          },
          {
            title: "310-575-4050",
            text: "アメリカで日本語が通じる医療機関。\r\n月～金 9:00-17:00。\r\nホテルから車で30分ほど。",
            link: "http://www.nipponmedical.com/",
          },
        ],
      },
      {
        icon: "mdi-police-station",
        title: "警察",
        info: [
          {
            title: "911",
            text: "アメリカでは警察・消防・救急車ともに911。\r\nリンクはロサンゼルスの主要警察署。",
            link: "https://www.google.com/maps/place/LAPD+Headquarters/@34.051827,-118.243949,14z/data=!4m6!3m5!1s0x80c2c16c4bf0c4fb:0xc74d881754214281!8m2!3d34.0518273!4d-118.2439487!16s%2Fg%2F1hc1l7s65?hl=ja&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
          },
        ],
      },
      {
        icon: "mdi-credit-card",
        title: "クレカ紛失",
        info: [
          {
            title: "866-670-0955",
            text: "VISAの場合。日本語対応",
          },
          {
            title: "800-307-7309",
            text: "Master cardの場合。日本語対応",
          },
        ],
      },
      {
        icon: "mdi-passport",
        title: "パスポート",
        info: [
          {
            text: "まずは現地の警察署に行って「ポリスレポート（紛失・盗難の届出証明書）」の発行を依頼する。\r\nロサンゼルス警察署はリンクから。ホテルから車で30分くらい。",
            link: "https://www.google.com/maps/place/LAPD+Headquarters/@34.051827,-118.243949,14z/data=!4m6!3m5!1s0x80c2c16c4bf0c4fb:0xc74d881754214281!8m2!3d34.0518273!4d-118.2439487!16s%2Fg%2F1hc1l7s65?hl=ja&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
          },
          {
            text: "滞在している国の日本大使館（または総領事館）へ行って「紛失一般旅券等届出書（紛失届）」を作成・申請する。\r\nその後、帰国できる証明になる渡航書を発行してもらおう。はやければ当日から取得できる。\r\nちなみに、別途必要な書類は下記。かならず持っていこう。\r\n● 運転免許証やマイナンバーカード\r\n● 帰りの旅券\r\n● 戸籍謄本1部\r\n● 証明写真2枚（縦45mm x 横35mm）",
            link: "https://jalcard.jal.co.jp/column/overseas/passport2010/",
          },
        ],
      },
      {
        icon: "mdi-airport",
        title: "旅行会社",
        info: [
          {
            title: "+81-3-6704-0774",
            text: "海外からかけるときの番号。\r\n24時間対応のヘルプデスク。\r\nダイアルパット画面から、ダイヤル番号「0」を 1 秒以上長押しして「+」を画面に表示させる。\r\nその後日本の国際番号「81」を入力してから相手の電話番号を入力する。",
          },
          {
            title: "03-6704-0774",
            text: "日本からかけるときの番号。24時間対応のヘルプデスク。",
          },
        ],
      },
      {
        icon: "mdi-cellphone",
        title: "スマホ",
        info: [
          {
            text: "接続設定、つながらない場合などの情報はリンクから。",
            link: "https://www.tabitsu.com/qa",
          },
        ],
      },
      {
        icon: "mdi-store",
        title: "ダイソー",
        info: [
          {
            text: "ホテル近く（徒歩6分）にダイソーがあるので足りないものはそこでそろえよう。",
            link: "https://maps.app.goo.gl/UXFQfhf6mKkbHadd8",
          },
        ],
      },
      {
        icon: "mdi-store",
        title: "スーパー",
        info: [
          {
            text: "ホテル近く（徒歩10分）に大型スーパーがあるので足りないものはそこでそろえよう。",
            link: "https://maps.app.goo.gl/1yMTniY4e1M2e9fh8",
          },
        ],
      },
    ],
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
      this.tabItemHeight = this.pageHeight - headerHeight;
      const tabTitleWidth = "";
      this.tabItemWidth = this.pageWidth - tabTitleWidth;
    },
    onClick: function (link) {
      window.open(link);
    },
  },
};
</script>
