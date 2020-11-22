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
import Vue from 'vue';
import Footer from '~/components/Footer.vue';

export default Vue.extend({
  components: {
    Footer,
  },
  head() {
    return {
      title: 'Daiki Oijma / @daikiojm',
    };
  },
});
</script>
