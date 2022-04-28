/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  // array is sorted so we do binary search

  // search midpoint

  // if midpoint === target
    // return index

  // if midpoint is greater than target
    // search in lower half

  // else
    // search in higher half

  let min = 0;
  let max = nums.length - 1;

  while (min <= max) {
    let midpoint = Math.floor(max + min / 2);

    let mid = nums[midpoint];

    if (mid === target) {
      return midpoint;
    }

    if (mid > target) {
      max = midpoint - 1;
    } else {
      min = midpoint + 1;
    }
  }

  return -1;
};


const test1 = search([-1,0,3,5,9,12], 9);
console.log(`should be 4`, test1);

const test2 = search([-1,0,3,5,9,12], 2);
console.log(`should be -1`, test2);

console.log(`should be -1`,  search([1], 2));

console.log(`should be 0`,  search([1], 1));
