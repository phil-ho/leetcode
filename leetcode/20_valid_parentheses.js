/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === null || s === undefined) {
    return false;
  }

  if (s === "") {
    return true;
  }

  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const firstChar = s[0];
  if (!brackets[firstChar]) {
    return false;
  }

  let expectedChars = [brackets[firstChar]];

  for (let i = 1; i < s.length; i++) {
    const thisChar = s[i];
    const isOpeningBracket = brackets[thisChar];

    if (isOpeningBracket) {
      expectedChars.push(isOpeningBracket);
    } else if (thisChar === expectedChars[expectedChars.length - 1]) {
      expectedChars.pop();
    } else {
      return false;
    }
  }

  if (expectedChars.length > 0) {
    return false;
  }

  return true;
};

module.exports = isValid;