/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  const max = Math.pow(2,31) - 1;
  const min = Math.pow(-2,31);

  if (x < min || x > max) {
    return 0;
  }

  const isNegative = x < 0;
  let absX = Math.abs(x);
  let reversedNumber = 0;

  while (absX != 0) {
    const digit = absX % 10;
    absX = (absX - digit)/10;
    reversedNumber = reversedNumber * 10 + digit;

    if (reversedNumber > max) {
      return 0;
    }
  }

  if (isNegative) {
    reversedNumber *= -1;
  }

  return reversedNumber;
};

module.exports = reverse;