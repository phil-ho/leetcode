const reverse = require('./7_Reverse_Integer');

test('reverse 123 to 312', () => {
  expect(reverse(123)).toBe(321);
});

test('reverse -123 to -321', () => {
  expect(reverse(-123)).toBe(-321);
});

test('reverse 120 to 21', () => {
  expect(reverse(120)).toBe(21);
});

test('reverse returns zero for very large numbers outside of range', () => {
  expect(reverse(1534236469)).toBe(0);
  expect(reverse(-2e32)).toBe(0);
});
