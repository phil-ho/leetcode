
function insertionSortHelper(array, position) {
  if (position === 0) {
    return;
  }

  const thisNum = array[position];
  const prevNum = array[position - 1];
  if (thisNum < prevNum) {
    array[position] = prevNum;
    array[position-1] = thisNum;

    insertionSortHelper(array, position - 1);
  }
}

function insertionSort(array) {
  // iterate forward in array
  // for each value in array compare to the one that comes before it
  // if there is no number before it, stop
  // if the current value is less than the one that comes before it, swap places
    // if swapped places, then evaluate the number in its new position against the one that comes before it

  // else, leave number there and continue

  for (let i = 0; i < array.length; i++) {
    insertionSortHelper(array, i);
  }
}


const a = [8,5,2,9,5,6,3];
insertionSort(a);
console.log(a);

// O(n^2)
// O(1) space , sorting in place