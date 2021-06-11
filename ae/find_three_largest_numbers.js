function findThreeLargestNumbersHelper(list, num) {
  let temp = num;

  for (let i = list.length - 1; i >= 0; i -= 1) {
    if (list[i] === undefined || temp > list[i]) {
      const hold = list[i];
      list[i] = temp;
      temp = hold;
    }
  }
}

function findThreeLargestNumbers(array) {
  const threeLargest = [undefined, undefined, undefined];

  for (let i = 0; i < array.length; i += 1) {
    findThreeLargestNumbersHelper(threeLargest, array[i]);
  }

  return threeLargest;
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
