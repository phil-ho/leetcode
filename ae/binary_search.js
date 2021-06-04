function binarySearch(array, target, start = 0, stop) {
  if (stop === undefined) {
    stop = array.length - 1;
  }

  if (start > stop) {
    return -1;
  }

  const midPoint = Math.floor((start + stop) / 2);

  if (array[midPoint] === target) {
    return midPoint;
  }

  if (target < array[midPoint]) {
    return binarySearch(array, target, start, midPoint - 1);
  } else {
    return binarySearch(array, target, midPoint + 1, stop);
  }
}

// O(log(n)) time | O(log(n) space)
