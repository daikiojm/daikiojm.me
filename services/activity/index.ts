import { getQiitaEntries } from '../qiita';
import { getScrapboxEntries } from '../scrapbox';
import { getHatenaBlogEntries } from '../blog';
import { Activity } from './types';
import { dateCompare, formatDate } from '~/utils';

export type ActivitiesConfig = {
  hatenaBlogApiKey: string;
};

export const getActivities = async (config: ActivitiesConfig) => {
  const { hatenaBlogApiKey } = config;

  const allEntries = await Promise.all([
    getQiitaEntries(),
    getScrapboxEntries(),
    getHatenaBlogEntries(hatenaBlogApiKey),
  ]);

  return allEntries
    .flat()
    .sort((a, b) => dateCompare(a.date, b.date))
    .map((e) => {
      return {
        title: e.data.title,
        date: formatDate(e.date),
        category: e.type,
        link: e.link,
      } as Activity;
    });
};
