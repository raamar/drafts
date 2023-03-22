// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [["defineStore", "definePiniaStore"]],
      },
    ],
    ["@vueuse/nuxt"],
  ],
  app: {
    head: {
      title: "Drafts",
      meta: [{ name: "description", content: "Drafts" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap",
        },
      ]
    },
  },
  extends: ["./backend"],

  ssr: false,
});
