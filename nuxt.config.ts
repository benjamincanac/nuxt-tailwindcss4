import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  compatibilityDate: '2024-08-01'
})