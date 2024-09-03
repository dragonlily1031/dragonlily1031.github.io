<template>
  <div class="d-flex">
    <div
      v-for="(item, index) in scheduleInfo"
      :key="index">
      <MtCard
        color="#eeeeee"
        :min-width="200"
        style="margin: 8px">
        <v-img
          :src="item.url"
          height="200"
        ></v-img>
        <v-card-title>{{ item.title }}</v-card-title>

        <v-card-actions>
          <v-btn icon @click="show = !show">
            <v-icon>mdi-keyboard_arrow_down</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </MtCard>
    </div>
  </div>
</template>

<script>
import MtCard from '@/components/MtCard.vue'

export default {
  components: {
    MtCard,
  },
  data: () => ({
    scheduleInfo : [
      {
        title : "Schedule",
        url: "/assets/sea.png",
      },
      {
        title : "Hotel",
        url: "/assets/hotel.png",

      },
      {
        title : "Emergency",
        url: "/assets/usa.png",
      },
    ],
    show: false,
  }),
  computed : {

  },
  methods: {
    onClick: function(event) {
      alert("onClick" + JSON.stringify(event));
    },
  },
}
</script>
