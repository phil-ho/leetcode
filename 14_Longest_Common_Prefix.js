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
  return findCommonPrefix(strs, 0);
};

module.exports = longestCommonPrefix;