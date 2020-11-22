<template>
  <v-app>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <nuxt-link to="/"> Home page </nuxt-link>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

const pageNotFound = '404 Not Found';
const otherError = 'An error occurred';

export default Vue.extend({
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return { pageNotFound, otherError };
  },
  head() {
    const title = this.error.statusCode === 404 ? pageNotFound : otherError;

    return {
      title,
    };
  },
});
</script>
