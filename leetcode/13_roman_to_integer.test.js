const romanToInt = require('./13_roman_to_integer');

test('convert roman numerals to integer', () => {
  expect(romanToInt('III')).toBe(3);
  expect(romanToInt('IV')).toBe(4);
  expect(romanToInt('IX')).toBe(9);
  expect(romanToInt('LVIII')).toBe(58);
  expect(romanToInt('MCMXCIV')).toBe(1994);
  expect(romanToInt('XXXIII')).toBe(33);
});
