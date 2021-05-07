function isValidSubsequence(array, sequence) {
	// array and sequence cannot be empty

  // if sequence size is greater than array size return false

	// search going from the edges of the array inwards for sequence numbers

	// arrayStart = 0, arrayEnd = array.length - 1
	// sequenceStart = 0, sequenceEnd = sequence.length - 1

	// iterate through array from edge to middle
		// does element at arrayStart equal sequenceStart
			// if yes, increment sequenceStart pointer
		// does element at arrayEnd equal sequenceEnd
			// if yes, decrement sequenceEnd pointer

		// increment arrayStart
		// decrement arrayEnd

	// we stop when arrayStart = arrayEnd OR sequenceStart === sequenceEnd

	// sequence out of bounds
	if (sequence.length > array.length) {
		return false;
	}

	let arrayStart = 0;
	let arrayEnd = array.length - 1;
	let sequenceStart = 0;
	let sequenceEnd = sequence.length - 1;

	while(arrayStart <= arrayEnd) {
		if (array[arrayStart] === sequence[sequenceStart]) {
			sequenceStart++;
		}
		if (array[arrayEnd] === sequence[sequenceEnd]) {
			sequenceEnd--;
		}

		if (sequenceStart > sequenceEnd) {
			return true;
		}

		arrayStart++;
		arrayEnd--;
	}

	return false;
}
// Time: O(n), Space: O(1)
