import { NuxtConfig } from '@nuxt/types';
import colors from 'vuetify/es5/util/colors';
import { dynamicRoutes } from './dynamic-routes';

const nuxtConfig: NuxtConfig = {
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
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
    '@nuxtjs/composition-api',
  ],
  modules: ['@nuxtjs/pwa', '@nuxt/content', '@nuxtjs/proxy'],
  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
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
  // dynamic page genarate configuration
  // @see https://ja.nuxtjs.org/docs/2.x/configuration-glossary/configuration-generate/#routes
  generate: {
    interval: 10,
    fallback: true,
    routes: dynamicRoutes,
  },
};

module.exports = nuxtConfig;
