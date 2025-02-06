import { defineConfig } from "@vue/cli-service";
export default defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  outputDir: "docs",
  assetsDir: "assets",
  devServer: {
    port: 8081,
  },
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        src: "@",
        assets: "@/assets",
        components: "@/components",
        api: "@/api",
        views: "@/views",
        plugins: "@/plugins",
      },
    },
  },
});
