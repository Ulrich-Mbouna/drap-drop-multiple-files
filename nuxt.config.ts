// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI
  },
  tailwindcss: {
     exposeConfig: true,
  },
  nitro: {
    storage: {
      fs: {
        driver: 'fs',
        base: './public'
      }
    },
    imports: {
      dirs: ['./server/models']
    }
  },
})
