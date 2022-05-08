const searchInsert = require('./35_search-insert-position');

test('return the index of target or where it should be in sorted array', () => {

  expect(searchInsert([1,3,5,6], 5)).toBe(2);
  expect(searchInsert([1,3,5,6], 2)).toBe(1);
  expect(searchInsert([1,3,5,6], 7)).toBe(4);
  expect(searchInsert([7], 5)).toBe(0);
});
