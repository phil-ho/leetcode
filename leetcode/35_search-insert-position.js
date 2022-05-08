/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // write O log n algorithm to find target's index within nums, or return the index where it should be

  // sorted array, distinct integers

  // iterate over array until find target or num > target
  // return index of found, or of prev index

  // array length must be 1 or more so the prev index >= 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }

    if (nums[i] > target) {
      return i > 0 ? i  : 0;
    }
  }

  return nums.length;
};

module.exports = searchInsert;
