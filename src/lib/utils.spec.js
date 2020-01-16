import { isPaginationVisible } from './utils';

describe('utils', () => {
  describe('isPaginationVisible', () => {
    it('should return if pagination is visible or not', () => {
      expect(isPaginationVisible(1, 10, 1)).toEqual(false);
    });
  });
});
