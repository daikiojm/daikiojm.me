import axios from 'axios';
import { parseStringPromise, ParserOptions } from 'xml2js';
import { HatenaBlogFeed, BlogEntry } from './types';
import { dayjs, sleep } from '~/utils';

const HATENA_BLOG_API_BASE_URL = 'https://blog.hatena.ne.jp';
const HATENA_ID = 'daikiojm';
const BLOG_ID = 'daikiojm.hatenablog.com';

const getHatenaBlogEntriesPath = () =>
  `${HATENA_BLOG_API_BASE_URL}/${HATENA_ID}/${BLOG_ID}/atom/entry`;

const getHatenaBlogEntry = async (apiKey: string, nextUrl?: string) => {
  const { data } = await axios.get<string>(
    nextUrl || getHatenaBlogEntriesPath(),
    {
      auth: {
        username: HATENA_ID,
        password: apiKey,
      },
      responseType: 'document',
    }
  );

  const options: ParserOptions = {
    async: true,
    explicitArray: false,
  };

  const { feed } = (await parseStringPromise(data, options)) as HatenaBlogFeed;
  const next = feed.link.find((l) => l.$.rel === 'next')?.$?.href || '';
  const entry =
    feed.entry && feed.entry.length > 0
      ? feed.entry.map((e) => {
          const link =
            e.link && e.link.length > 0
              ? e.link.find((l) => l.$.rel === 'alternate')?.$?.href || ''
              : '';

          return {
            type: 'blog' as const,
            date: dayjs(e.published).toISOString(),
            data: e,
            link,
          } as BlogEntry;
        })
      : [];

  return { entry, next };
};

export const getHatenaBlogEntries = async (apiKey: string) => {
  const entries: BlogEntry[] = [];
  let nextUrl = '';

  while (true) {
    const { entry, next } = await getHatenaBlogEntry(apiKey, nextUrl);
    await sleep(20);

    if (entry && entry.length > 0) {
      entries.push(...entry);
    }
    if (next) {
      nextUrl = next;
    } else {
      break;
    }
  }

  return entries;
};
