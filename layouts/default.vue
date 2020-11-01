<template>
  <v-app>
    <v-main>
      <v-container fill-height fluid>
        <nuxt />
      </v-container>
      <v-footer absolute>
        <v-col cols="12" sm="8" md="6">
          <p class="caption blue-grey--text text-justify mb-0">
            <span>Contact:</span> daiki.ojima@gmail.com / DM on Twitter
          </p>
          <p class="caption blue-grey--text text-truncate">
            © 2020 Daiki Ojima
          </p>
        </v-col>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      title: 'daikiojm.me',
    };
  },
});
</script>
