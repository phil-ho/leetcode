function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function selectionSort(array, start = 0) {
  if (start > array.length - 1) {
    return array;
  }

  let indexOfSmallestValue = start;
  for (let i = start + 1; i < array.length; i++) {
    if (array[i] < array[indexOfSmallestValue]) {
      indexOfSmallestValue = i;
    }
  }

  swap(array, start, indexOfSmallestValue);

  return selectionSort(array, start + 1);
}

module.exports = selectionSort;
// O(n^2) time, O(1) space