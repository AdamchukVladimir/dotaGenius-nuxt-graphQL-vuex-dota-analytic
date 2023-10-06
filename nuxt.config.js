export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dotaGenius',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/bulma@0.9.3/css/bulma.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/fontawesome.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/global-styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  target: 'server',
  ssr: true,
  server: {
    port: 10000,
    host: process.env.NODE_ENV === `production` ? `0.0.0.0` : `localhost`,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/fontawesome'],
  fontawesome: {
    icons: {
      solid: true,
      regular: [],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    ['cookie-universal-nuxt', { parseJSON: false }],
    'nuxt-socket-io',
  ],
  io: {
    // module options
    sockets: [
      {
        default: true,
        name: 'WebSocketBackend',
        url: 'https://dota-webservice.onrender.com/',
      },
    ],
    server: {
      /* CORS options */
      cors: {
        credentials: true,
        origin: [
          // whitelisted origins
          'https://dota-webservice.onrender.com/',
        ],
      },
    },
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api.stratz.com/graphql',
        authenticationType: 'Bearer',
        tokenName: 'apollo-token',
        ///
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  router: {
    middleware: ['set-cookie'],
    routes: [
      {
        name: 'index',
        path: '/',
        component: '~/pages/index.vue',
      },
      {
        name: 'history',
        path: '/history',
        component: '~/pages/history.vue',
      },
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
