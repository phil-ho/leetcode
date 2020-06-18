/**
 * @param {string[]} strs
 * @return {string}
 */

function isCommonPrefix(strs, position) {
  const prefix = strs[0].slice(0, position);
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].slice(0, position) !== prefix) {
      return false;
    }
  }
  return true;
}

var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) {
    return "";
  }

  let minPosition = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    minPosition = Math.min(minPosition, word.length);
  }

  let low = 1;
  let high = minPosition;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (isCommonPrefix(strs, middle)) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return strs[0].substring(0, (low + high) / 2);
};

module.exports = longestCommonPrefix;