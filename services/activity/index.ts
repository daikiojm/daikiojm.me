import { dayjs } from '../common';
import { getQiitaEntries } from '../qiita';
import { getScrapboxEntries } from '../scrapbox';

const dateCompare = (a: string, b: string) =>
  dayjs(a).isAfter(dayjs(b)) ? -1 : 1;

const formatDate = (date: string) => dayjs(date).format('YYYY/MM/DD');

// TODO: pagination
export const getActivities = async () => {
  const allEntries = await Promise.all([
    getQiitaEntries(),
    getScrapboxEntries(),
  ]);

  return allEntries
    .flat()
    .sort((a, b) => dateCompare(a.date, b.date))
    .map((e) => {
      return {
        ...e,
        date: formatDate(e.date),
      };
    });
};
