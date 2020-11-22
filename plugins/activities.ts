import { Plugin, Context } from '@nuxt/types';
import { getActivities, ActivitiesConfig } from '~/services/activity';

declare module '@nuxt/types' {
  interface Context {
    $getActivities(): ReturnType<typeof getActivities>;
  }
}

const Activity: Plugin = (context: Context) => {
  context.$getActivities = () => {
    const hatenaBlogApiKey = context.$config.hatenaBlogApiKey;
    const config: ActivitiesConfig = {
      hatenaBlogApiKey,
    };

    return getActivities(config);
  };
};

export default Activity;
