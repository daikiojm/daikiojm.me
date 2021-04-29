<template>
  <v-card elevation="1">
    <v-row justify="center" align="center">
      <v-col cols="10" sm="10" md="10" lg="8">
        <div class="d-flex">
          <v-avatar class="mx-auto">
            <img src="https://github.com/daikiojm.png" alt="daikiojm" />
          </v-avatar>
        </div>
        <h2
          class="subtitle-1 pa-0 ma-0 font-weight-regular text-truncate text-center"
        >
          Daiki Oijma / @daikiojm
        </h2>
        <p class="pa-0 ma-0 font-weight-light text-truncate text-center">
          Web Application Developer
        </p>
        <v-divider class="mt-2 mb-4"></v-divider>
        <div class="d-flex justify-center">
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
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Profile',
});
</script>
