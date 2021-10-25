function selectionSortHelper(start, array) {
  let smallest = start;

  for (let i = start + 1; i < array.length; i++) {
    let smallestValue = array[smallest];
    let thisValue = array[i];

    if (thisValue < smallestValue) {
      smallest = i;
    }
  }

  let firstValue = array[start];
  let smallestValue = array[smallest];
  array[start] = smallestValue;
  array[smallest] = firstValue;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    selectionSortHelper(i, array);
  }

  return array;
}

module.exports = selectionSort;
