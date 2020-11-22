<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <Profile></Profile>
      <Activity class="mt-6" :activities="items"></Activity>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue';
import Profile from '~/components/Profile.vue';
import Activity from '~/components/Activity.vue';

export default Vue.extend({
  components: {
    Profile,
    Activity,
  },
  async asyncData(context) {
    const activities = await context.$getActivities();
    return { items: activities && activities.length > 0 ? activities : [] };
  },
});
</script>
