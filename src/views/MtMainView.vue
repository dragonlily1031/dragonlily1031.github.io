<!-- MtMainView.vue -->
<template>
  <div style="height: 100%; width: 100%; overflow: hidden">
    <div
      v-if="initialized"
      v-resize="onResize"
      style="height: 100%; width: 100%; overflow: hidden"
    >
      <v-main style="background-color: #eeeeee">
        <v-container fluid>
          <transition name="12r" mode="ont-in">
            <keep-alive>
              <router-view
                :key="$route.fullPath"
                :height="pageHeight"
                :width="pageWidth"
                :window-method="execute"
              >
              </router-view>
            </keep-alive>
          </transition>
        </v-container>
      </v-main>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    //
  },
  data: () => ({
    initialized: false,
    height: window.innerHeight,
    width: window.innerWidth,
  }),
  mounted: function () {
    this.onResize();
  },
  created: function () {
    if (!window.name) window.name = "main";

    alert("window " + window.name);
    this.initialized = true;
  },
  computed: {
    pageHeight: function () {
      const margin = 12;
      return this.height - margin;
    },
    pageWidth: function () {
      const margin = 12;
      return this.width - margin;
    },
  },
  methods: {
    onResize: function (event) {
      if (!event) return;

      this.height = window.innerHeight;
      this.width = window.innerWidth;
    },
    execute: function (methodName, item) {
      alert("execute");
      if (methodName == "Schedule") {
        this.$router.push({ name: item.title });
      }
    },
  },
};
</script>
