import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ja';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

dayjs.extend(customParseFormat);
dayjs.locale('ja');

export { dayjs, Dayjs };

export const sleep = async (ms: number) =>
  await new Promise((resolve) => setTimeout(resolve, ms));
