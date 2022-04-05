const removeDuplicates = require('./26_remove_duplicates_from_sorted_array');

test('26. remove duplicates from sorted array', () => {
  expect(removeDuplicates([])).toBe(0);
  expect(removeDuplicates([1,1,2])).toBe(2);
  expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5);
  expect(removeDuplicates([1,2,3])).toBe(3);
});
