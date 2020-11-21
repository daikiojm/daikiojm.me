import { getActivities } from './services/activity';
import { splitArray } from './utils';

const activityPath = 'activity';
const activityPerPage = 25;

export const dynamicRoutes = async () => {
  const allActivities = await getActivities();
  // const totalPage = Math.ceil(allActivities.length / activityPerPage);
  const activitiesByPage = splitArray(allActivities, activityPerPage);

  return activitiesByPage.map((a, index) => {
    return {
      route: `${activityPath}/${index + 1}`,
      payload: a,
    };
  });
};
