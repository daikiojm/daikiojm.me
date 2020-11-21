<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="1">
        <v-card-text>
          <v-row justify="start">
            <v-col cols="auto">
              <v-avatar>
                <img src="https://github.com/daikiojm.png" alt="daikiojm" />
              </v-avatar>
            </v-col>
            <v-col>
              <h2
                class="subtitle-1 pa-0 ma-0 font-weight-regular text-truncate"
              >
                Daiki Oijma / @daikiojm
              </h2>
              <p class="pa-0 ma-0 font-weight-light text-truncate">
                Web Application Developer
              </p>
            </v-col>
          </v-row>
          <v-divider class="mt-2 mb-2"></v-divider>
          <div class="d-flex">
            <v-btn
              class="pa-1 me-2"
              outlined
              x-small
              fab
              color="blue-grey lighten-3"
              href="https://twitter.com/daikiojm"
              target="_blank"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              class="pa-1 me-2"
              outlined
              x-small
              fab
              color="blue-grey lighten-3"
              href="https://github.com/daikiojm"
              target="_blank"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn
              class="pa-1 me-2"
              outlined
              x-small
              fab
              color="blue-grey lighten-3"
              href="https://www.facebook.com/daiki.ojima.94"
              target="_blank"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
      <nuxt-link to="/activity/1">Activity</nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  components: {},
});
</script>
