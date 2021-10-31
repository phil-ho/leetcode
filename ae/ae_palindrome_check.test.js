const isPalindrome = require('./ae_palindrome_check.js');

test('checks for palindromes', () => {
  // function takes non-empty string
  // single-char strings are palindromes
  expect(isPalindrome('abcdcba')).toBe(true);
  expect(isPalindrome('abba')).toBe(true);
  expect(isPalindrome('1')).toBe(true);
  expect(isPalindrome('12')).toBe(false);
});
