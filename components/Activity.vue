<template>
  <v-card elevation="1">
    <div class="mx-auto pt-3">
      <p class="mb-0 grey--text text-center">Activities</p>
    </div>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="10" md="10" lg="8">
        <v-hover
          v-for="(item, index) in activities"
          v-slot="{ hover }"
          :key="index"
          open-delay="20"
          close-delay="20"
        >
          <div class="my-3 py-4" :class="{ 'grey lighten-5': hover }">
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
            <v-divider class="mt-2 mb-2"></v-divider>
          </div>
        </v-hover>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Activity } from '~/services/activity/types';

export default Vue.extend({
  name: 'Activity',
  props: {
    activities: {
      type: Array as PropType<Activity[]>,
      default: () => [],
    },
  },
});
</script>
