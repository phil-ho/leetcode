const longestCommonPrefix = require('./14_Longest_Common_Prefix');

test('find the longest common prefix string amonst an array of strings', () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
  expect(longestCommonPrefix(["flower","flow","row","flight","rower", "rowdy", "happy"])).toBe("row");
  expect(longestCommonPrefix(["dog","racecar","car"])).toBe("");
  expect(longestCommonPrefix(["flower","flower","flower"])).toBe("flower");
  expect(longestCommonPrefix(["flower","flowe","flower"])).toBe("flowe");
});
