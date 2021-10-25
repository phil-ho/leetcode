function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexOfSmallest = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexOfSmallest]) {
        indexOfSmallest = j;
      }
    }

    swap(array, i, indexOfSmallest);
  }

  return array;
}

module.exports = selectionSort;
// O(n^2) time, O(1) space