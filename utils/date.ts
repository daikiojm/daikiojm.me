import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ja';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

dayjs.extend(customParseFormat);
dayjs.locale('ja');

export { dayjs, Dayjs };

export const dateCompare = (a: string, b: string) =>
  dayjs(a).isAfter(dayjs(b)) ? -1 : 1;

export const formatDate = (date: string) => dayjs(date).format('YYYY/MM/DD');
