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
      {
        hid: 'description',
        name: 'description',
        content: 'Daiki Ojima (daikiojm) / Web Application Developer',
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'daikiojm.me' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://daikiojm.me' },
      { hid: 'og:title', property: 'og:title', content: 'daikiojm.me' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Daiki Ojima (daikiojm) / Web Application Developer',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://daikiojm.me/ogp_image.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
    'nuxt-purgecss',
  ],
  generate: {
    interval: 2000,
  },
  purgeCSS: {
    enabled: true,
    paths: ['node_modules/vuetify/src/**/*.ts'],
    whitelist: [
      'v-application',
      'v-application--wrap',
      'layout',
      'row',
      'col',
      'rounded',
    ],
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
      /^rounded-*/,
    ],
    whitelistPatternsChildren: [/^v-((?!application).)*$/, /^theme--*/],
  },
  modules: ['@nuxtjs/pwa', '@nuxtjs/proxy'],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      default: false,
      disable: false,
      options: {},
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
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
