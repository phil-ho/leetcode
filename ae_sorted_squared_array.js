function sortedSquaredArray(array) {
  // i: non-empty array of integers sorted in asc order
	// o: new array made of previous array's integers squared, sorted in asc
	// c: none
	// e: none

	// [2] ==> [4]
	// [-2, 1] => [1, 4]

	// iterate through array and create new array with values squared
	// sort 2nd array and return

	return array.map((i) => i ** 2).sort((a,b) => a - b);
}

// naive approach
// O(nlogn) time
// O(n) space