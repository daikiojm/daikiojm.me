<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card v-for="(item, index) in items" :key="index" elevation="1">
        <p class="px-4 pt-4 mx-4">{{ item.data.title }}</p>
        <p class="text-caption grey--text px-4 pb-4 mx-4">{{ item.date }}</p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue';
import { getActivities } from '../services/activity';

export default Vue.extend({
  components: {},
  async asyncData() {
    const activities = await getActivities();

    return { items: activities };
  },
});
</script>
