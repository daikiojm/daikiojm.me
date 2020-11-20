import { NuxtRuntimeConfig } from '@nuxt/types/config/runtime';
import { dayjs } from '../common';
import { getQiitaEntries } from '../qiita';
import { getScrapboxEntries } from '../scrapbox';
import { getHatenaBlogEntries } from '../blog';
import { Activity } from './types';

const dateCompare = (a: string, b: string) =>
  dayjs(a).isAfter(dayjs(b)) ? -1 : 1;

const formatDate = (date: string) => dayjs(date).format('YYYY/MM/DD');

// TODO: pagination
export const getActivities = async ($config: NuxtRuntimeConfig) => {
  const allEntries = await Promise.all([
    getQiitaEntries(),
    getScrapboxEntries(),
    getHatenaBlogEntries($config),
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
