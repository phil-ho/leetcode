const selectionSort = require('./ae_selection_sort');

test('sorts in asc order', () => {
  const array = [8, 5, 2, 9, 5, 6, 3];
  const result = [2, 3, 5, 5, 6, 8, 9];
  expect(selectionSort(array)).toEqual(result);
  expect(selectionSort([-1, -2, -3])).toEqual([-3, -2, -1]);
  expect(selectionSort([2, -2, 0])).toEqual([-2, 0, 2]);
});

test('sorts arrays of different lengths', () => {
  expect(selectionSort([9, 1])).toEqual([1, 9]);
  expect(selectionSort([0])).toEqual([0]);
  expect(selectionSort([])).toEqual([]);
});
