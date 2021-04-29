<template>
  <v-app>
    <v-main>
      <v-container fill-height fluid>
        <nuxt />
      </v-container>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api';

import Footer from '~/components/Footer.vue';

export default defineComponent({
  components: {
    Footer,
  },
  setup() {
    useMeta({ title: 'Daiki Oijma / @daikiojm' });
  },
  head: {},
});
</script>
