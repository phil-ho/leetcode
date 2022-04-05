const isValid = require('./20_valid_parentheses');

test('determine if the input string is valid', () => {
  expect(isValid("()")).toBe(true);
  expect(isValid("()[]{}")).toBe(true);
  expect(isValid("(]")).toBe(false);
  expect(isValid("([)]")).toBe(false);
  expect(isValid("{[]}")).toBe(true);
  expect(isValid("")).toBe(true);
  expect(isValid()).toBe(false);
  expect(isValid(-1)).toBe(false);
  expect(isValid("{")).toBe(false);
  expect(isValid(22)).toBe(false);
  expect(isValid("]")).toBe(false);
});
