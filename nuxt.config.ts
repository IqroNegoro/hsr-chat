// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css', crossorigin: "anonymous"
        }
      ],
      meta: [
        {
          name: "author",
          content: "Nadila Vira Gabriella"
        },
        {
          name: "charset",
          content: "utf-8"
        },
        {
          name: "description",
          content: "Create your own custom momotalk chat with Honkai Star Rail character!"
        },
        {
          name: "keywords",
          content: "honkai, honkai star rail, hsr, march 7th, danheng, firefly, clara, svarog"
        },
        {
          property: "og:description",
          content: "Create your own custom momotalk chat with your lovely student!"
        },
        {
          property: "og:site:name",
          content: "HSR Chat"
        },
        {
          property: "og:title",
          content: "HSR Chat",
        },
        {
          property: "og:url",
          content: "https://momotalk.netlify.app/"
        },
        { 
          property: 'og:type', 
          content: 'website'
        },
      ]
    }
  },

  compatibilityDate: "2024-07-03",
})