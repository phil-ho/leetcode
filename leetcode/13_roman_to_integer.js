/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanNumeral = {
    'I': 1,
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900,
  };

  const length = s.length;
  let counter = 0;
  let number = 0;
  while(counter < length) {
    const slice = s.slice(counter, counter+2);

    if (romanNumeral[slice]) {
      number += romanNumeral[slice];
      counter += 2;
    } else {
      const singleDigit = s.slice(counter, counter+1);
      number += romanNumeral[singleDigit];
      counter++;
    }
  }

  return number;
};

module.exports = romanToInt;