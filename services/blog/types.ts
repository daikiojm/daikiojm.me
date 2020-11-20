type Author = {
  name: string;
};

type Link = {
  $: {
    rel: string;
    href: string;
    type?: string;
  };
};

export type HatenaBlogEntry = {
  id: string;
  link: Link[];
  author: Author;
  title: string;
  updated: string;
  published: string;
  summary: string;
  content: string;
  category: string[];
};

export type HatenaBlogFeed = {
  feed: {
    link: Link[];
    title: string;
    subtitle: string;
    updated: string;
    author: Author;
    generator: string;
    id: string;
    entry: HatenaBlogEntry[];
  };
};

export type BlogEntry = {
  type: 'blog';
  date: string;
  data: HatenaBlogEntry;
  link: string;
};
