<!-- MtLoginPage.vue -->
<template>
  <v-main style="height: 100%" class="mainlogin">
    <div class="d-flex align-center justify-center fill-height">
      <MtCard class="loginWindow pa-6" justify="center">
        <!-- ロゴ -->
        <img :src="logo" />
        <!-- ログインフォーム -->
        <v-form id="login-form" @submit.prevent="login">
          <MtTextField
            v-model="account"
            label="account"
            type="text"
            prepend-icon="mdi-account"
            style="width: 300px"
          />
          <MtPasswordTextField
            v-model="password"
            label="password"
            style="width: 300px; margin-bottom: 10px"
          />
        </v-form>
        <v-alert
          v-if="errReason"
          density="compact"
          type="warning"
          :text="errReason"
          closable
          style="width: 300px"
        ></v-alert>
        <v-btn
          form="login-form"
          :loading="loading"
          type="submit"
          color="success"
          variant="elevated"
          block
          style="width: 300px; margin-bottom: 10px"
        >
          LOGIN
        </v-btn>
      </MtCard>
    </div>
  </v-main>
</template>

<script>
import MtCard from "@/components/MtCard.vue";
import MtTextField from "@/components/MtTextField.vue";
import MtPasswordTextField from "@/components/MtPasswordTextField.vue";

export default {
  components: {
    MtCard,
    MtTextField,
    MtPasswordTextField,
  },
  props: {
    //
  },
  data: () => ({
    height: 0,
    width: 0,
    errReason: "",
    account: "",
    password: "",
    loading: false,
  }),
  mounted: async function () {
    //
  },
  computed: {
    logo: function () {
      return process.env.BASE_URL + "assets/logo.png";
    },
  },
  methods: {
    login: async function () {
      this.loading = true;
      let result = false;
      await this.$mtapi.auth
        .login(this.account, this.password)
        .then((response) => (result = response.data))
        .catch((err) => {
          this.errReason = err.response.data.message;
          alert("error " + JSON.stringify(err.response.data.message));
        });

      if (result) {
        this.$router.push({ name: "home" });
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.mainlogin {
  background: linear-gradient(-225deg, #2cd8d5 0%, #c5c1ff 50%, #ffbac3 100%);
}
.loginWindow {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
}
.login-dialog {
  opacity: 0.9;
}
</style>
