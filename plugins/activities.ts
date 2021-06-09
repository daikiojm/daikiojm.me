import { Context } from '@nuxt/types';
import { defineNuxtPlugin } from '@nuxtjs/composition-api';

import { getActivities, ActivitiesConfig } from '~/services/activity';

declare module '@nuxt/types' {
  interface Context {
    $getActivities(): ReturnType<typeof getActivities>;
  }
}

export default defineNuxtPlugin((context: Context) => {
  context.$getActivities = () => {
    const hatenaBlogApiKey = context.$config.hatenaBlogApiKey;
    const config: ActivitiesConfig = {
      hatenaBlogApiKey,
    };

    return getActivities(config);
  };
});
