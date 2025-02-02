// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxthq/studio',
    '@nuxt/content',
    '@nuxtjs/tailwindcss', 
  ],
  studio: {enabled: true},
})
