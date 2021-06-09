<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <ThemeSwitcher />
      <Profile />
      <Activity class="mt-6" :activities="items" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  useFetch,
  useContext,
} from '@nuxtjs/composition-api';

import Profile from '~/components/Profile.vue';
import Activity from '~/components/Activity.vue';
import ThemeSwitcher from '~/components/ThemeSwitcher.vue';

import { Activity as ActivityInterface } from '~/services/activity/types';

export default defineComponent({
  components: {
    ThemeSwitcher,
    Profile,
    Activity,
  },
  setup() {
    const { $getActivities } = useContext();

    const activities = ref<ActivityInterface[]>([]);

    useFetch(async () => {
      const result = await $getActivities();
      activities.value = result;
    });

    return {
      items: activities,
    };
  },
});
</script>
