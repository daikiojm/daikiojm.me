import { createAxiosClient } from '../common';
import { QiitaItem, QiitaEntry } from './types';
import { dayjs } from '~/utils';

const QIITA_API_BASE_URL = 'https://qiita.com/api/v2';
const QIITA_USER_NAME = 'daikiojm';
// TODO: pagination
const LIMIT = 100;

const getQiitaEntriesPath = () => `/users/${QIITA_USER_NAME}/items`;

export const getQiitaEntries = async () => {
  const client = createAxiosClient({
    baseURL: QIITA_API_BASE_URL,
  });

  const { data } = await client.get<QiitaItem[]>(getQiitaEntriesPath(), {
    params: { per_page: LIMIT },
  });

  return data.map((item) => {
    return {
      type: 'qiita' as const,
      date: dayjs(item.created_at).toISOString(),
      data: item,
      link: item.url,
    } as QiitaEntry;
  });
};
