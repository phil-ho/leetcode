'use strict';
/*
Note:

1. The length of both num1 and num2 is < 110.
2. Both num1 and num2 contain only digits 0-9.
3. Both num1 and num2 do not contain any leading zero, except the number 0 itself.
4. You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const num1Length = num1.length;
  const num2Length = num2.length;
  const digits = new Array(num1Length + num2Length).fill(0);

  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  for (let i = num1Length - 1; i >= 0; i--) {
    for (let j = num2Length - 1; j >= 0; j--) {
      const product = num1[i] * num2[j];
      const sum = product + digits[i + j + 1];

      digits[i + j] += Math.floor(sum/10);
      digits[i + j + 1] = sum % 10;
    }
  }

  let answer = digits.join('');

  if (answer[0] === '0') {
    answer = answer.slice(1,answer.length);
  }

  return answer;
};


console.log(multiply("4", "0") == 0);
console.log(multiply("0", "300") == 0);
console.log(multiply("200", "4") == 800);
console.log(multiply("4", "300") == 1200);
console.log(multiply("123", "45") == 5535);