<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-hover
        v-for="(item, index) in items"
        v-slot="{ hover }"
        :key="index"
        open-delay="20"
        close-delay="20"
      >
        <v-card
          elevation="1"
          class="ma-3 pa-4"
          :class="{ 'grey lighten-5': hover }"
        >
          <div class="d-flex justify-space-between">
            <p class="text-caption grey--text mb-0">{{ item.date }}</p>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  x-small
                  link
                  color="teal accent-4"
                  target="_blank"
                  :href="item.link"
                  v-bind="attrs"
                  v-on="on"
                  ><v-icon>mdi-launch</v-icon></v-btn
                >
              </template>
              <span>開く</span>
            </v-tooltip>
          </div>
          <p class="mb-0">{{ item.title }}</p>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {},
  asyncData({ payload }) {
    if (payload) {
      return { items: payload };
    } else {
      console.log('not get');
      return { items: [] };
    }
  },
});
</script>
