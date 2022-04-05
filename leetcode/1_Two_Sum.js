'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const indexOf = {};
  indexOf[nums[0]] = 0;

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    const otherIndex = indexOf[diff];

    if (otherIndex === undefined) {
      indexOf[num] = i;
    } else {
      return [otherIndex, i];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([11, 15, 9], 20));
console.log(twoSum([3, 2, 4], 6));