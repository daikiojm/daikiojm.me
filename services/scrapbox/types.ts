type User = {
  id: string;
};

export type ScrapboxPage = {
  id: string;
  title: string;
  image: string | null;
  descriptions: string[];
  user: User[];
  pin: number;
  views: number;
  linked: number;
  commitId: string;
  created: number;
  updated: number;
  accessed: number;
  snapshotCreated: number | null;
};

export type ScrapboxPages = {
  projectName: string;
  skip: number;
  limit: number;
  count: number;
  pages: ScrapboxPage[];
};

export type ScrapboxEntry = {
  type: 'scrapbox';
  date: string;
  data: ScrapboxPage;
  link: string;
};
