import { getQiitaEntries } from '../qiita';
import { getScrapboxEntries } from '../scrapbox';
import { getHatenaBlogEntries } from '../blog';
import { dateCompare, formatDate } from '../../utils';
import { Activity } from './types';

// TODO: pagination
export const getActivities = async () => {
  const allEntries = await Promise.all([
    getQiitaEntries(),
    getScrapboxEntries(),
    getHatenaBlogEntries(),
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
