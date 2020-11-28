import { NuxtConfig } from '@nuxt/types';
import colors from 'vuetify/es5/util/colors';

const nuxtConfig: NuxtConfig = {
  target: 'static',
  head: {
    titleTemplate: '%s - daikiojm.me',
    title: 'daikiojm.me',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    'nuxt-purgecss',
  ],
  purgeCSS: {
    enabled: true,
    paths: ['node_modules/vuetify/src/**/*.ts'],
    whitelist: ['v-application', 'v-application--wrap', 'layout', 'row', 'col'],
    whitelistPatterns: [
      /^v-((?!application).)*$/,
      /^theme--*/,
      /.*-transition/,
      /^justify-*/,
      /^p*-[0-9]/,
      /^m*-auto/,
      /^m*-[0-9]/,
      /^p*-auto/,
      /^text--*/,
      /--text$/,
      /^row-*/,
      /^col-*/,
      /^d-*/,
    ],
    whitelistPatternsChildren: [/^v-((?!application).)*$/, /^theme--*/],
  },
  modules: ['@nuxtjs/pwa', '@nuxtjs/proxy'],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  plugins: ['~/plugins/activities.ts'],
  privateRuntimeConfig: {
    hatenaBlogApiKey: process.env.HATENA_API_KEY,
  },
};

module.exports = nuxtConfig;
