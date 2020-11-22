import { splitArray } from './array';

describe('array utils', () => {
  describe('splitArray', () => {
    it('should split array', () => {
      const a = [0, 1, 2, 3, 4, 5];
      expect(splitArray(a, 2)).toEqual([
        [0, 1],
        [2, 3],
        [4, 5],
      ]);
    });
  });
});
