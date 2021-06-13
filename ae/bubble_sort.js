function bubbleSort(array) {
  let n = array.length;
  let continueSorting = true;

  while (continueSorting) {
    continueSorting = false;

    for (let i = 0; i < n - 1; i += 1) {
      const thisNum = array[i];
      const nextNum = array[i + 1];

      if (thisNum > nextNum) {
        array[i] = nextNum;
        array[i + 1] = thisNum;
        continueSorting = true;
      }
    }

    n -= 1;
  }

  return array;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
