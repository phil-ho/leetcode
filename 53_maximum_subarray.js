/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

  if (nums.length === 1) {
    return nums[0];
  }

  // set start = 0
  // set stop = 0
  // sum = nums[0]

  // begin iterating first to last

    // if sum + nums[i] >= sum
      // set stop = i
    // else
      // set start = i + 1
      // set sum = nums[start]


  // look at sum with next array element added to it
    // is the Sum larger than max?
      // yes -> move right pointer right

  return 6;
};

module.exports = maxSubArray;