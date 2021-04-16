function isValidSubsequence(array, sequence) {
  // as i understand it, a subsequence of an array is an array
	// that contains some of the numbers from the array, in the same order

	// clarifying questions:
	// given [1,2,3]
	// [1], [2], [1, 2], [1,3] are examples of subsequences?
	// [3, 1] is not a subsequence?
	// it says set of numbers, but does that mean they're unique or
	// can we have repeat numbers?

	// input: an array, and a 2nd array which is or isn't a subsequence of the first array
	// output: boolean value indicating if 2nd array is a subsequence
	// constraints: none
	// edge case: a single number in an array and the array itself are both valid subsequences of the array

	// naive approach
	// declare marker = 0;
	// iterate through sequence
		// iterate through array starting at marker
	    // if sequence[i] === array[i]
	       // marker = i
	       // continue
   // if no match was found, return false since all numbers in the sequence
	 // must exist in the array for it to be a subsequence

	// if we get to the end of sequence, return true

	if (sequence.length > array.length) {
		return false;
	}

	let marker = 0;

	for (let i = 0; i < sequence.length; i++) {
		let matchFound = false;

		for (let j = marker; j < array.length; j++) {
			if (sequence[i] === array[j]) {
				marker = j + 1;
				j = array.length;
				matchFound = true;
			}
		}

		if (matchFound === false) {
			return false;
		}
	}

	return true;
}
// Time: O(m*n), Space: O(1)
