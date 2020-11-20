import { QiitaEntry } from '../qiita/types';
import { ScrapboxEntry } from '../scrapbox/types';
import { BlogEntry } from '../blog/types';

const ActivityCategories = ['qiita', 'github', 'scrapbox', 'blog'] as const;

type ActivityCategory = typeof ActivityCategories[number];
type ActivityEntry = QiitaEntry | ScrapboxEntry | BlogEntry;

export type Activity = {
  title: string;
  category?: ActivityCategory;
  link?: string;
  date: string;
  data: ActivityEntry;
};
