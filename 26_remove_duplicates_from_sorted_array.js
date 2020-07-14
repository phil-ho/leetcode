/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let prevNum = nums[0];
  let originalLength = nums.length;
  let index = 1;

  while (index < nums.length) {
    const thisNum = nums[index];
    if (thisNum === prevNum) {
      nums.splice(index, 1);
    } else {
      prevNum = nums[index];
      index++;
    }
  }

  return nums.length;
};

module.exports = removeDuplicates;
