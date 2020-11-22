import { dayjs, dateCompare } from './date';

describe('date utils', () => {
  describe('dateCompare', () => {
    it('should return array sort', () => {
      const a = dayjs('2020-11-21').toISOString();
      const b = dayjs('2020-11-22').toISOString();
      expect(dateCompare(a, b)).toBe(1);
      expect(dateCompare(b, a)).toBe(-1);
    });
  });
});
