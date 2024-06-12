export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/image", "nuxt-icon"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  ssr: true,
  runtimeConfig: {
    public: {
      apiBase: "https://shikimori.one",
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          spacing: {
            "1/15": "6.666667%", // 1/15 ширины контейнера
          },
          screens:{
            '1800': '1800px',
            '1500': '1500px',
            '1400': '1400px',
            '1000': '1000px',
            '800': '800px',
            '500': '500px'
          }
        },
      },
    },
  },
});
