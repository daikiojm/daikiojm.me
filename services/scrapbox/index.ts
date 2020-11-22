import { createAxiosClient } from '../common';
import { ScrapboxPages, ScrapboxEntry } from './types';
import { dayjs } from '~/utils';

const SCRAPBOX_API_BASE_URL = 'https://scrapbox.io';
const SCRAPBOX_USER_NAME = 'daikiojm';

const getScrapboxApiUrl = () => `${SCRAPBOX_API_BASE_URL}/api`;
const getScrapboxEntriesPath = () => `/pages/${SCRAPBOX_USER_NAME}`;
const getScrapboxEntryUrl = (title: string) =>
  `${SCRAPBOX_API_BASE_URL}/${SCRAPBOX_USER_NAME}/${encodeURIComponent(title)}`;

export const getScrapboxEntries = async () => {
  const client = createAxiosClient({
    baseURL: getScrapboxApiUrl(),
  });

  const { data } = await client.get<ScrapboxPages>(getScrapboxEntriesPath());

  return data.pages.map((item) => {
    return {
      type: 'scrapbox' as const,
      date: dayjs(item.created * 1000).toISOString(),
      data: item,
      link: getScrapboxEntryUrl(item.title),
    } as ScrapboxEntry;
  });
};
