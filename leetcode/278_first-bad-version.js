/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    // inputs
    // n is versions, from 1 to n, sorted

    // outputs
    //  bad is the first bad version

    // constraints
    // 1 <= bad <= n

    // there will always be a bad
    // if there is only 1 version, it must be bad



    // use binary search like method

    // if n === 1 return 1

    // find midpoint
      // is good?
        // search in greater version set
      // is bad?
        // is n-1 good?
          // return this n as first bad version
        // else
          // search in lesser version set
    if (n === 1) {
      return 1;
    }

    let min = 1;
    let max = n;

    while (min <= max) {
      let mid = Math.floor((max + min) / 2);

      if (isBadVersion(mid)) {
        if (!isBadVersion(mid - 1)) {
          return mid;
        }
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }

    return n;
  };
};

module.exports = solution;
