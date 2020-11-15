import { dayjs, createAxiosClient } from '../common';
import { ScrapboxPages, ScrapboxEntry } from './types';

const SCRAPBOX_API_BASE_URL = 'https://scrapbox.io/api';
const SCRAPBOX_USER_NAME = 'daikiojm';

const getScrapboxEntriesPath = () => `/pages/${SCRAPBOX_USER_NAME}`;

export const getScrapboxEntries = async () => {
  const client = createAxiosClient({
    baseURL: SCRAPBOX_API_BASE_URL,
  });

  const { data } = await client.get<ScrapboxPages>(getScrapboxEntriesPath());

  return data.pages.map((item) => {
    return {
      type: 'scrapbox' as const,
      date: dayjs(item.created * 1000).toISOString(),
      data: item,
    } as ScrapboxEntry;
  });
};
