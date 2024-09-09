<!-- MtScheduleTabs.vue -->
<template>
  <v-tabs
    v-if="initialized"
    v-model="selectIndex"
    :height="tabHeight"
    :width="pageWidth"
    show-arrows
    @update:modelValue="selectTab"
  >
    <v-tab v-for="tab in tabItems" :key="tab.key" class="font-weight-bold">
      {{ tab.title }}
    </v-tab>
  </v-tabs>
  <v-window v-if="initialized" v-model="selectIndex">
    <v-window-item v-for="tab in tabItems" :key="tab.key">
      <MtTimeLine
        :time-line-Height="timeLineHeight"
        :time-line-width="pageWidth"
        :schedule="tab.schedule"
      ></MtTimeLine>
    </v-window-item>
  </v-window>
</template>

<script>
import MtTimeLine from "./MtTimeLine.vue";
import { useStorage } from "@vueuse/core";

export default {
  components: {
    MtTimeLine,
  },
  props: {
    tabsAndTimelineHeight: { type: [Number, String], required: true },
    pageWidth: { type: [Number, String], required: true },
  },
  data: () => ({
    initialized: false,
    tabHeight: 30,
    selectIndex: 0,
    tabItems: [
      {
        key: 1,
        title: "Day1",
        schedule: [
          {
            color: "red-lighten-2",
            icon: "mdi-airplane",
            title: "11:00 LAX",
            subtitle: "到着",
            comment:
              "無事入国審査が通りますように！！\r\n着いてひと段落したらまず現金をおろそう。\r\n現金下ろし方、Uber乗り場までの情報は「!」リンクへ",
            homepage: "https://www.flylax.com/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.959979455796!2d-118.40618012504903!3d33.942157423536514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b0d213b24fb5%3A0x77a87b57698badf1!2z44Ot44K144Oz44K844Or44K55Zu96Zqb56m65riv!5e0!3m2!1sja!2sjp!4v1725724658377!5m2!1sja!2sjp",
            tips: [
              {
                title: "現金のおろし方",
                icon: "mdi-atm",
                text: "キャッシュレス化が進む海外への渡航中は、カード払いがメインだけど一部手渡しチップなどもあるから空港のATMで現金を下ろしておこう。",
                linkInfo: [
                  {
                    label: "ATMの使い方",
                    link: "https://www.survive-m.com/gaika/sbw-atm.html",
                  },
                ],
              },
              {
                title: "ターミナル-Uberまで",
                icon: "mdi-taxi",
                text: "Uber、タクシーが停留する乗り場「LAX-it」に近いターミナル1、ターミナル8にはシャトルバスが止まらない。\r\n全体が緑色のシャトルバスがLAX-it行きのシャトルバス。\r\nシャトルバスは、3分～5分間隔で来る。\r\n噂によると超混雑してたら1時間くらい待つことになるかもしれない。。やだなぁ。",
                linkInfo: [
                  {
                    label: "Uber乗車ガイド",
                    link: "https://jacky.top/usa/losangeles/lax-uber",
                  },
                ],
              },
            ],
          },
          {
            color: "purple-lighten-2",
            icon: "mdi-store",
            title: "13:00 Walmart",
            subtitle: "買い物",
            comment:
              "超大型スーパー。LAX空港から車で約20分。\r\n入国手続きなどが早めに終わった場合、水やおやつなどの買い出し\r\n→もし手続きに時間がかかったりしたら、ホテルチェックアウト後に行ってもいい",
            homepage: "https://www.walmart.com/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6628.555103179516!2d-118.35775136786835!3d33.83095221918892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4b2ee0075f5b%3A0x2e1238fda39188bd!2z44Km44Kp44Or44Oe44O844OI44O744K544O844OR44O844K744Oz44K_44O8!5e0!3m2!1sja!2sjp!4v1725466233286!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "green-lighten-1",
            icon: "mdi-bed",
            title: "15:00 Miyako Hybrid Hotel",
            subtitle: "チェックイン",
            comment:
              "Walmartから車で約10分。チェックインを済ませたら、館内を探検してみよう。\r\n1階にはスパ、2階にはジムが併設されている。また、24時間無人販売のミニコンビニがあるのもうれしい。\r\nちなみにお部屋はバスタブもあるしウォシュレット付きなのもポイント高いよね。\r\nもし買い出しに行けなかったら、この19時ごろまでに済ませておきたい。（歩いて10分のところにRalphsというスーパーあり）",
            homepage: "https://www.miyakohybridhotel.com/miyako-jp/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.130484768951!2d-118.31236248935213!3d33.83474542907305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4aa513cf0bfb%3A0x309209b25394d284!2z6YO944OP44Kk44OW44Oq44OD44OJ44Ob44OG44OrIOODiOODvOODqeODs-OCuQ!5e0!3m2!1sja!2sjp!4v1725466079903!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "indigo-lighten-2",
            icon: "mdi-silverware-fork-knife",
            title: "19:00 In-N-Out Burger",
            comment:
              "ホテルから車で約10分。大谷さんも好きだと公言したハンバーガーショップ。\r\nポテトは冷凍とかじゃなく、じゃがいもから店内で調理しているらしい。\r\n\r\nおすすめカスタマイズ\r\n●バーガーのたまねぎははgrilledOnion（生たまねぎじゃなくて焼いてくれる）\r\n●ポテトはwell-done（二度揚げ）か、animal-style（チーズソース付き）",
            homepage: "https://www.in-n-out.com/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106091.71422541628!2d-118.41907876265624!3d33.80286504247772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4af5d6911305%3A0x9059cc42ce212aa!2z44Kk44Oz44O744Ki44Oz44OJ44O744Ki44Km44OI44O744OQ44O844Ks44O8!5e0!3m2!1sja!2sjp!4v1725462836865!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "green-lighten-1",
            icon: "mdi-bed",
            title: "21:00 Miyako Hybrid Hotel",
            subtitle: "帰宅",
            comment:
              "In-N-Out Burgerから車で約10分。明日も早起きだからすぐに寝よう。",
            homepage: "https://www.miyakohybridhotel.com/miyako-jp/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.130484768951!2d-118.31236248935213!3d33.83474542907305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4aa513cf0bfb%3A0x309209b25394d284!2z6YO944OP44Kk44OW44Oq44OD44OJ44Ob44OG44OrIOODiOODvOODqeODs-OCuQ!5e0!3m2!1sja!2sjp!4v1725466079903!5m2!1sja!2sjp",
            tips: [],
          },
        ],
      },
      {
        key: 2,
        title: "Day2",
        schedule: [
          {
            color: "indigo-lighten-2",
            icon: "mdi-silverware-fork-knife",
            title: "8:00 Rae G Cafe",
            subtitle: "朝カフェ",
            comment:
              "ホテルから歩いて5分。サンドイッチとサラダなどのプレート系がおいしそう！\r\nToday's Specialが良コスパらしい。（$13.75）\r\nサンドorパニーニにサラダ+ドリンク+スープ付き",
            homepage: "https://raegcafe.com/users/login",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.0697340143392!2d-118.31251779018886!3d33.8363122289921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4b501516626b%3A0x51939cbd31557b93!2sRae%20G%20Cafe!5e0!3m2!1sja!2sjp!4v1725791541832!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "orange-lighten-2",
            icon: "mdi-library-outline",
            title: "10:00 ECHO PARK",
            subtitle: "朝の散歩",
            comment:
              "ドジャースタジアムから歩いて20分くらいにあるエコパークという公園。\r\n吉祥寺みたいに公園と湖がある。朝の散歩しよう。",
            homepage:
              "https://www.discoverlosangeles.com/visit/hidden-gems-in-echo-park",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52873.772174135745!2d-118.29994151784416!3d34.07949098893759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6e72cab485b%3A0x5d1e51181d0cec80!2z44Ki44Oh44Oq44Kr5ZCI6KGG5Zu9IOOCq-ODquODleOCqeODq-ODi-OCouW3niDjg63jgrXjg7Pjgrzjg6vjgrkg44Ko44Kz44O844O744OR44O844Kv!5e0!3m2!1sja!2sjp!4v1725792000621!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "purple-lighten-2",
            icon: "mdi-store",
            title: "11:00 HOUSE OF INTUITION",
            subtitle: "買い物",
            comment:
              "ドジャースタジアムから歩いて20分くらいにあるショップ。\r\nエコパークという公園付近にある。\r\nたけると自称占い師のオカンへお土産を買っていきたい。\r\nキャンドルと占い系の店はここ！",
            homepage: "https://thehouseofintuition.com/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.652576668788!2d-118.26875029017555!3d34.0784193162381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7173993534f%3A0x87b82e40f0c59881!2sHouse%20of%20Intuition%20Echo%20Park!5e0!3m2!1sja!2sjp!4v1725792222699!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "purple-lighten-2",
            icon: "mdi-store",
            title: "12:30 Dodgers Team store",
            subtitle: "大谷さんグッズたくさん買っちゃおう。",
            comment:
              "Dodgersのグッズショップ。\r\nECHO PARKから歩いて20分。ホテルから車で約30分。\r\n10:00 - 14:30と、開場後にもやっているし球場内にもグッズショップはあるけど、開場後は混みそうだから先に買っておこうかな。",
            homepage: "https://www.mlb.com/dodgers",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.881766462697!2d-118.24333989017585!3d34.07254501654853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6f75c2a1d95%3A0x703de4d26879fbb8!2sDodgers%20Team%20Store!5e0!3m2!1sja!2sjp!4v1725792401896!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "orange-lighten-2",
            icon: "mdi-library-outline",
            title: "19:10 試合開始",
            subtitle: "GO DODGERS!!",
            comment: "注意事項&Tipsは「!」アイコンをタップ",
            homepage: "https://www.mlb.com/dodgers",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8306456316072!2d-118.24456636362636!3d34.073855357466684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6f954005675%3A0x9e94554f839c09df!2z44OJ44K444Oj44O844O744K544K_44K444Ki44Og!5e0!3m2!1sja!2sjp!4v1725792458731!5m2!1sja!2sjp",
            tips: [
              {
                title: "持ち込みOK",
                icon: "mdi-bag-personal-outline",
                text: "30 X 30 X 15以下の透明なバッグ\r\nまたは 12 X 20 X 5以下のクラッチorウエストバッグ（透明でなくてもいい）",
                linkInfo: [],
              },
              {
                title: "持ち込みNG",
                icon: "mdi-bag-personal-off-outline",
                text: "カメラ（小さめカメラはOK）、タバコ（電子も）、傘",
                linkInfo: [],
              },
              {
                title: "持ち込みを却下されたら",
                icon: "mdi-alert-octagram",
                text: "モービルロッカー・トラックへ預ける（有料）。\r\nセンターフィールドゲート近くにある",
                linkInfo: [
                  {
                    label: "参考ホームページ",
                    link: "https://stadium-experiences.com/?usa_venue=7491-2",
                  },
                ],
              },
              {
                title: "!!アウトレットの情報!!",
                icon: "mdi-basket",
                text: "開場から2回裏終了時まで。\r\n開催されていれば、レフトフィールドゲート横にあるエレベータタワー後ろの階段を上がったところにあるらしい。\r\n階層的にはフィールドレベルとロッジレベルの中間にある。\r\nショップというか倉庫。\r\n毎年売れ残りなどの商品がシーズン後半にMax70％オフで買えるみたいだよ。\r\nただ不定期だから、やってたらラッキー。",
                linkInfo: [
                  {
                    label: "参考ホームページ",
                    link: "https://mlb.cheaptravelz.com/dodgers/?stadium=7410",
                  },
                ],
              },
            ],
          },
          {
            color: "green-lighten-1",
            icon: "mdi-bed",
            title: "21:00ごろ 試合終了-帰宅",
            subtitle: "大谷さんグッズたくさん買っちゃおう。",
            comment:
              "荷物を預けていたら、取りに行くのを忘れずに。\r\nウーバー乗り場はサンセットゲート近くのLOT11（ボール型の外灯 目印11）にあるよ。\r\n乗り場のLine1 - 4の番号と、列番号の看板のどこかに車が到着するから、確認しよう。",
            homepage: "https://www.miyakohybridhotel.com/miyako-jp/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.130484768951!2d-118.31236248935213!3d33.83474542907305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4aa513cf0bfb%3A0x309209b25394d284!2z6YO944OP44Kk44OW44Oq44OD44OJ44Ob44OG44OrIOODiOODvOODqeODs-OCuQ!5e0!3m2!1sja!2sjp!4v1725466079903!5m2!1sja!2sjp",
            tips: [],
          },
        ],
      },
      {
        key: 3,
        title: "Day3",
        schedule: [
          {
            color: "orange-lighten-2",
            icon: "mdi-library-outline",
            title: "8:00 Lake Hollywood Park",
            subtitle: "HOLLYWOODサインが間近にある公園",
            comment:
              "ホテルから車で40分。入場無料で入れる公園。間近に見えるHOLLYWOODサインと記念撮影しよう。\r\nただ公園以外には何もないので水分を忘れずに。\r\nできればスーパーかなんかで買ったお菓子を持っていってピクニックしたいところ。",
            homepage: "https://4travel.jp/travelogue/11606708",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.7578233751437!2d-118.330713363609!3d34.126949154615986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bfe2e6ba6721%3A0x9c0445d217b4938f!2z44Os44Kk44Kv44O744OP44Oq44Km44OD44OJ44O744OR44O844Kv!5e0!3m2!1sja!2sjp!4v1725799606878!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "orange-lighten-2",
            icon: "mdi-library-outline",
            title: "10:00 Chinese Theatre",
            subtitle: "ハリウッドスターたちに会える！？",
            comment:
              "Lake Hollywood Parkから車で15分。\r\nハリウッドスターたちの手形や足形などがみられる。\r\n映画は見ないけど、館内もちょっと観光していこう。",
            homepage: "https://travel-noted.jp/posts/16011",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6607.462272894261!2d-118.34355149017432!3d34.10202751499037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7da01c280c3%3A0xf73982db60c65ffb!2z44Kw44Ot44O844Oe44Oz44K644O744OB44Oj44Kk44OL44O844K644O744K344Ki44K_44O8!5e0!3m2!1sja!2sjp!4v1725802089294!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "indigo-lighten-2",
            icon: "mdi-silverware-fork-knife",
            title: "11:30 Joe's Pizza",
            subtitle: "念願のペパロニピザ食べられる！？",
            comment:
              "Chinese Theatreから大通りを徒歩で15分。\r\nニューヨーク発の大人気ピザ屋。店内ではスライスピザ1枚が3〜5ドルで買える。\r\nただ座席はカウンター10席くらいとテーブルが数個くらい、と少ないのですっと食べてすっと帰るスタイル。\r\nニューヨークの店舗ではスパイダーマンで使われたらしい。",
            homepage: "https://www.joespizza.com/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.758020802548!2d-118.3339183901743!3d34.10133891502669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf3b9ea4aa9d%3A0xce4c21c1e8e0d44c!2sJoe&#39;s%20Pizza%20-%20Hollywood%20Blvd!5e0!3m2!1sja!2sjp!4v1725802007292!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "orange-lighten-2",
            icon: "mdi-library-outline",
            title: "13:00 Hollywood Museum",
            subtitle: "オスカー賞が受賞できる！？",
            comment:
              "Joe's Pizzaから徒歩で大通りを15分。10:00-17:00。2021年に建てられたハリウッドの新名所。入場料は$25。\r\nハリウッド映画の歴史やセット、小物などが展示されている。\r\n自分のオスカー賞受賞ビデオが作れるっていうんだから行くよね？（料金は$15）",
            homepage: "https://thehollywoodmuseum.com/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.7747305593325!2d-118.34094809017431!3d34.1009109150494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf238e7f546b%3A0xf81b30cbef003056!2z44OP44Oq44Km44OD44OJ5Y2a54mp6aSo!5e0!3m2!1sja!2sjp!4v1725803161269!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "indigo-lighten-2",
            icon: "mdi-silverware-fork-knife",
            title: "17:00 The Original Farmers Market",
            subtitle: "新鮮な野菜と、地元に人気のタコス",
            comment:
              "Ovation Hollywoodから車で10分。10:00-20:00。\r\n青果店や精肉店、お菓子屋ハンバーガー、メキシコ料理の屋台が連なる。\r\n中でも行きたいのはTrejo's Tacos。15センチくらいのタコスなので、2個くらいいけちゃうかも？\r\nあと「local Ice」っていうアイスクリーム店にもできたら行きたい。。",
            homepage: "https://farmersmarketla.com/japanese",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.758020802548!2d-118.3339183901743!3d34.10133891502669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf3b9ea4aa9d%3A0xce4c21c1e8e0d44c!2sJoe&#39;s%20Pizza%20-%20Hollywood%20Blvd!5e0!3m2!1sja!2sjp!4v1725802007292!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "purple-lighten-2",
            icon: "mdi-store",
            title: "19:00 Grove",
            subtitle: "買い物",
            comment:
              "The Original Farmers Marketの隣にあるGroveというデパート?みたいなところ。10:00-21:00。\r\nここに入っているSephora（セフォラ）っていうコスメストアと、Sprinkle cupcakesだけ絶対行きたい！！",
            homepage: "https://www.ovationhollywood.com/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.905172314777!2d-118.36212446362694!3d34.07194505756921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b92fc2d303c3%3A0xc3906f8fff88db6e!2z44K244O744Kw44Ot44O844OW!5e0!3m2!1sja!2sjp!4v1725806288328!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "green-lighten-1",
            icon: "mdi-bed",
            title: "22:00ごろ ホテル",
            subtitle: "",
            comment: "Groveから車で約30分ほど。",
            homepage: "https://thegrovela.com/shopping/sephora/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.130484768951!2d-118.31236248935213!3d33.83474542907305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4aa513cf0bfb%3A0x309209b25394d284!2z6YO944OP44Kk44OW44Oq44OD44OJ44Ob44OG44OrIOODiOODvOODqeODs-OCuQ!5e0!3m2!1sja!2sjp!4v1725466079903!5m2!1sja!2sjp",
            tips: [],
          },
        ],
      },
      {
        key: 4,
        title: "Day4",
        schedule: [
          {
            color: "orange-lighten-2",
            icon: "mdi-library-outline",
            title: "8:00 Santa Monica Pier",
            subtitle: "有名すぎるビーチ",
            comment:
              "横浜みたいな遊園地（パシフィックパーク）や、有名なルート66の看板がある。\r\n桟橋を歩いたり、看板と記念撮影しよう。\r\nちなみにパシフィックパークは12:00からなのでやってないが、むしろ少し空いているといいなと思って朝にした。",
            homepage:
              "https://www.tripadvisor.com/Attraction_Review-g32490-d2228781-Reviews-Hermosa_Beach_Pier-Hermosa_Beach_California.html",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.095522536547!2d-118.40687879018758!3d33.861429027672585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b37973bb9c2b%3A0x56ad9de58bc4aee4!2sHermosa%20Beach%20Pier!5e0!3m2!1sja!2sjp!4v1725792593159!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "purple-lighten-2",
            icon: "mdi-store",
            title: "10:00 Target",
            subtitle: "雑貨、服など",
            comment:
              "Santa Monica Pierから徒歩で大通りを15分。7:00-22:00。\r\n値段はリーズナブルで、ロサンゼルスにちなんだお土産グッズがたくさんあるので要チェック。",
            homepage: "https://www.target.com/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.1004175614717!2d-118.49720478057863!3d34.01563327915276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a5e21575ca2b%3A0x78567f8677bc279f!2sTarget!5e0!3m2!1sja!2sjp!4v1725817921672!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "purple-lighten-2",
            icon: "mdi-store",
            title: "11:00 Trader Joe's",
            subtitle: "定番のお土産屋Trader Joe's",
            comment:
              "Targetの向かい側にある。\r\nエコバックや調味料がお土産として大人気。ばらまく用のお土産を買うならココ。\r\n\r\n時間があれば、ここからすぐのところにあるお店がひしめくサード・ストリート・プロムナードでウィンドウショッピングを楽しもう。\r\nロサンゼルスで人気の服や雑貨、カフェ、レストランがたくさんあるぞ。",
            homepage: "https://www.traderjoes.com/home",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52914.230109882046!2d-118.53881831805808!3d34.014633037822335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a52631704b07%3A0x56b68e406cfdc4f4!2sTrader%20Joe&#39;s!5e0!3m2!1sja!2sjp!4v1725818025796!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "indigo-lighten-2",
            icon: "mdi-silverware-fork-knife",
            title: "13:00 The Albright",
            subtitle: "ビーチを眺めながら新鮮なシーフードを",
            comment:
              "Trader Joe'sから歩いて15分。カウンターで注文して、自分で料理を持っていくスタイルのカジュアルめのお店。\r\nホームページに写真付きでメニューが載っているので見てみてほしい。\r\n地ビール（$7~）と一緒にムール貝の酒蒸し（$20）や、イカフライ（$15.5）、蒸しカキ（$19）などを頼もう。",
            homepage: "https://www.thealbright.com/#home-pacific-section",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.3288237847896!2d-118.50120066364735!3d34.0097695609029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d0caa22337%3A0x6a4f17f7dc28c6b5!2sThe%20Albright!5e0!3m2!1sja!2sjp!4v1725818080902!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "orange-lighten-2",
            icon: "mdi-library-outline",
            title: "16:00 Venice Beach",
            subtitle: "有名なスケートパークやマッスルパークがあるビーチ",
            comment:
              "The Albrightから、ベニスビーチに向かって散歩しよう。徒歩約40分。\r\nちょっと長いかもしれないけど、いい景色だよ。\r\nまた、ベニス周辺のおすすめショップは「！」ボタンをクリック！",
            homepage:
              "https://tripnote.jp/los-angeles/osusume-sightseeing-course-in-venice-beach",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.2130900534316!2d-118.47552509999998!3d33.98706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bab79cb7dde5%3A0x635f1fdc6f199ffe!2z44OZ44OL44K5IOODk-ODvOODgSDjgrnjgrHjg7zjg4jjg5Hjg7zjgq8!5e0!3m2!1sja!2sjp!4v1725818228938!5m2!1sja!2sjp",
            tips: [
              {
                title: "Animal House",
                icon: "mdi-store",
                text: "ベニスビーチからすぐのところ。アメリカの古着や小物などを手ごろな値段で売っている。靴や新品のものもあるので時間があればチェックしてみよう。",
                linkInfo: [
                  {
                    label: "MAP",
                    link: "https://maps.app.goo.gl/xyuywFjcbNbZbX6K9",
                  },
                  {
                    label: "ホームページ",
                    link: "https://www.animalhousevenice.com/collections/animal-house",
                  },
                ],
              },
              {
                title: "Abbot Kinney Blvd",
                icon: "mdi-store",
                text: "ベニスビーチから歩いて20分のところになってしまうけど、そこは「Abbot Kinney Blvd」と呼ばれるおしゃれストリート。\r\nそのストリート沿いにあるお店はどれもおしゃれ。気になったところに入ってみよう。",
                linkInfo: [
                  {
                    label: "MAP",
                    link: "https://maps.app.goo.gl/yEDNMSBRJLqHnQqH7",
                  },
                  {
                    label: "ホームページ",
                    link: "https://www.abbotkinneyblvd.com/",
                  },
                ],
              },
            ],
          },
          {
            color: "orange-lighten-2",
            icon: "mdi-library-outline",
            title: "18:00 Hermosa Beach Pier",
            subtitle: "サンセットビーチを見たい",
            comment:
              "ベニスビーチから車で40分。日の入りが18時ごろなので、それまでには着きたい。\r\nハモサビーチピア（海を見る用の桟橋みたいなの）で夕陽をみよう。\r\nきっととっても美しいよ。",
            homepage:
              "https://www.tripadvisor.com/Attraction_Review-g32490-d2228781-Reviews-Hermosa_Beach_Pier-Hermosa_Beach_California.html",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.095522536547!2d-118.40687879018758!3d33.861429027672585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b37973bb9c2b%3A0x56ad9de58bc4aee4!2sHermosa%20Beach%20Pier!5e0!3m2!1sja!2sjp!4v1725792593159!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "indigo-lighten-2",
            icon: "mdi-silverware-fork-knife",
            title: "19:30 The LightHouse Cafe",
            subtitle: "気分はライアンとエマ",
            comment:
              "ハモサビーチピアから歩いてすぐ(mapでは1分)。ラ・ラ・ランドの舞台になったカフェバー。\r\n並んでるかもしれないから一度見に行ってみよう。\r\n20:30～ Dick The Citizenっていう人たちが90年代オルタナティブ音楽をやってくれるみたいだよ。\r\n比較的どれも安価で、ビールがどれも$9、メイン料理も$16 - $19だよ。",
            homepage: "https://www.thelighthousecafe.net/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.0800086504423!2d-118.40563696369568!3d33.86182886881582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b378fd7df941%3A0x2a35c2d79987eba1!2sThe%20Lighthouse%20Cafe!5e0!3m2!1sja!2sjp!4v1725792742082!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "green-lighten-1",
            icon: "mdi-bed",
            title: "22:00ごろ ホテル",
            subtitle: "",
            comment: "The LightHouse Cafeから車で約20分ほど。",
            homepage: "https://www.miyakohybridhotel.com/miyako-jp/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.130484768951!2d-118.31236248935213!3d33.83474542907305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4aa513cf0bfb%3A0x309209b25394d284!2z6YO944OP44Kk44OW44Oq44OD44OJ44Ob44OG44OrIOODiOODvOODqeODs-OCuQ!5e0!3m2!1sja!2sjp!4v1725466079903!5m2!1sja!2sjp",
            tips: [],
          },
        ],
      },
      {
        key: 5,
        title: "Day5",
        schedule: [
          {
            color: "purple-lighten-2",
            icon: "mdi-store",
            title: "6:00 Ralphs",
            subtitle: "朝食を買いに行こう",
            comment:
              "ホテルから約10分。5:00-1:00。\r\n朝食を買いに行こう。\r\n医薬品～生鮮食品、ベーカリーまで併設されている。\r\nできればパンケーキみたいのが売ってるといいんだけど。\r\n頑張って早起きしよう。飛行機で寝ればいいし！",
            homepage: "https://www.target.com/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.1004175614717!2d-118.49720478057863!3d34.01563327915276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a5e21575ca2b%3A0x78567f8677bc279f!2sTarget!5e0!3m2!1sja!2sjp!4v1725817921672!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "green-lighten-1",
            icon: "mdi-bed",
            title: "8:40 ホテル チェックアウト",
            subtitle: "4日間どうもありがとう",
            comment:
              "チェックアウト時間は12時までなので余裕をもってチェックアウトできる。",
            homepage: "https://www.miyakohybridhotel.com/miyako-jp/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.130484768951!2d-118.31236248935213!3d33.83474542907305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4aa513cf0bfb%3A0x309209b25394d284!2z6YO944OP44Kk44OW44Oq44OD44OJ44Ob44OG44OrIOODiOODvOODqeODs-OCuQ!5e0!3m2!1sja!2sjp!4v1725466079903!5m2!1sja!2sjp",
            tips: [],
          },
          {
            color: "red-lighten-2",
            icon: "mdi-airplane",
            title: "9:30 LAX",
            subtitle: "日本へGO!!",
            comment:
              "ホテルから車で20分くらい。\r\n飛行機の離陸時間は12:45なので、3時間前くらいには着いておきたいかな。",
            homepage: "https://www.flylax.com/",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.959979455796!2d-118.40618012504903!3d33.942157423536514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b0d213b24fb5%3A0x77a87b57698badf1!2z44Ot44K144Oz44K844Or44K55Zu96Zqb56m65riv!5e0!3m2!1sja!2sjp!4v1725724658377!5m2!1sja!2sjp",
            tips: [],
          },
        ],
      },
    ],
  }),
  computed: {
    timeLineHeight: function () {
      return this.tabsAndTimelineHeight - this.tabHeight;
    },
  },
  created: function () {
    // ローカルストレージから取得
    const storedValue = useStorage("selectedIndex");
    if (storedValue) this.selectIndex = storedValue;

    this.initialized = true;
  },
  methods: {
    selectTab: function (selectedIndex) {
      this.selectIndex = selectedIndex;
      if (!this.initialized) {
        return;
      }

      // ローカルストレージに登録
      useStorage("selectedIndex", selectedIndex);
    },
  },
};
</script>
