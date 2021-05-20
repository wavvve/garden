export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Design GARDEN',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Graphic design studio' },
      { hid: 'og:description', name: 'og:description', content: 'Graphic design studio' },
      { hid: 'og:title', name: 'og:title', content: 'Design GARDEN' },
      { hid: 'og:url', name: 'og:url', content: 'https://www.design-garden.co.kr' },
      { hid: 'og:locale', name: 'og:locale', content: 'ko_kr' },
      { hid: 'og:type', name: 'og:type', content: 'Website' },
      { hid: 'og:image', name: 'og:image', content: '/garden-og-image.jpg' },
      { hid: 'og:image:width', name: 'og:image:width', content: '800' },
      { hid: 'og:image:height', name: 'og:image:height', content: '800' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/common.scss'],
  buildModules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: '~/assets/scss/*.scss'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vue-gtag',}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/device',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  target: 'static', // default is 'server'
  ssr: false,
}
