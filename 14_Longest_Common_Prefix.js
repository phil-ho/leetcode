/**
 * @param {string[]} strs
 * @return {string}
 */

function findCommonPrefix(words, position) {
  debugger;
  const groups = {};
  const prefixes = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let prefix;
    if (position <= word.length) {
      prefix = word.slice(0, position);

      if (groups[prefix]) {
        groups[prefix].push(word);
      } else {
        groups[prefix] = [word];
      }
    }
  }

  for (const prefix in groups) {
    if (groups[prefix].length > 1) {
      prefixes.push(prefix);
      prefixes.push(findCommonPrefix(groups[prefix], position + 1));
    }
  }

  let max = 0;
  let longestPrefix = "";
  for (let j = 0; j < prefixes.length; j++) {
    const prefix = prefixes[j];
    if (prefix.length > max) {
      max = prefix.length;
      longestPrefix = prefix;
    }
  }

  return longestPrefix;
}

var longestCommonPrefix = function(strs) {
  if (strs === undefined || strs.length === 0) {
    return "";
  }

  let position = 1;
  let prefix = "";
  let repeat = true;
  while (repeat) {
    prefix = strs[0].slice(0, position);

    for (let i = 0; i < strs.length; i++) {
      if (position > strs[i].length) {
        return prefix.slice(0, position - 1);
      }
      const slice = strs[i].slice(0,position);
      if (slice !== prefix) {
        return prefix.slice(0, position - 1);
      }
    }
    position++;
  }

};

module.exports = longestCommonPrefix;