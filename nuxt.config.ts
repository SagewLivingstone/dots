// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    apiSecret: '1234',
  },
  pinia: {
    storesDirs: ['./stores/**']
  }
})
