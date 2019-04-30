import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin';
import pkg from './package';

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'pt',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/LoadingIndicator.vue',

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/toasts.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // proxy para evitar erros de cors ao usar o adonis como backend
    '@nuxtjs/proxy',
    // modulo de auth do nuxt para interagir com o adonis no backend
    '@nuxtjs/auth',
    // modulo para carregar fontes sem bloquear o carregamento da pagina
    'nuxt-webfontloader',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true,
    prefix: '/api/',
  },
  /*
  ** Configuracao de proxy do axios
  */
  proxy: {
    '/api/': { target: 'http://127.0.0.1:3333', pathRewrite: { '^/api/': '' } },
  },
  /*
  ** Configuracao do modulo de auth do nuxt
  */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'token' },
          user: { url: 'user', method: 'get', propertyName: false },
          logout: false,
        },
      },
    },
  },
  /**
  **Loader de fontes
  */
  webfontloader: {
    google: {
      families: ['Exo+2:400,700', 'Roboto:300,400,500,700|Material+Icons'],
    },
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl'],
      },
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
