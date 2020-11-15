import { QiitaEntry } from '../qiita/types';
import { ScrapboxEntry } from '../scrapbox/types';

const ActivityCategories = ['qiita', 'github', 'scrapbox', 'blog'] as const;

type ActivityCategory = typeof ActivityCategories[number];
type ActivityEntry = QiitaEntry | ScrapboxEntry;

export type Activity = {
  title: string;
  category: ActivityCategory;
  date: string;
  data: ActivityEntry;
};
