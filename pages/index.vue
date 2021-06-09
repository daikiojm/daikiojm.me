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
  defineComponent,
  useStatic,
  useContext,
} from '@nuxtjs/composition-api';

import Profile from '~/components/Profile.vue';
import Activity from '~/components/Activity.vue';
import ThemeSwitcher from '~/components/ThemeSwitcher.vue';

export default defineComponent({
  components: {
    ThemeSwitcher,
    Profile,
    Activity,
  },
  setup() {
    const { $getActivities } = useContext();
    const activities = useStatic(
      () => $getActivities(),
      undefined,
      'activities'
    );
    const items =
      activities && activities.value && activities.value.length > 0
        ? activities
        : [];

    return {
      items,
    };
  },
});
</script>
