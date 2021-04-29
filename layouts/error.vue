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
import { defineComponent, useMeta } from '@nuxtjs/composition-api';

const pageNotFound = '404 Not Found';
const otherError = 'An error occurred';

export default defineComponent({
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: () => null,
    },
  },
  head: {},
  setup(props) {
    const title = props.error.statusCode === 404 ? pageNotFound : otherError;

    useMeta({ title });

    return { pageNotFound, otherError };
  },
});
</script>
