function isPalindrome(
  string,
  start = 0,
  stop = string.length - 1,
) {
  if (start >= stop) {
    return true;
  }

  if (string[start] === string[stop]) {
    return isPalindrome(string, start + 1, stop - 1);
  } else {
    return false;
  }

  return false;
}

module.exports = isPalindrome;
// O(n) time, O(n) space