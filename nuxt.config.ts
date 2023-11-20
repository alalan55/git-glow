// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/main.scss"],
  modules: ["@nuxtjs/color-mode", "@vueuse/nuxt"],
  runtimeConfig: {
    github_token: process.env.NUXT_GIT_HUB_TOKEN,
    public: {
      github_token: process.env.NUXT_GIT_HUB_TOKEN,
      base_url: process.env.NUXT_BASE_URL,
    },
  },
});
