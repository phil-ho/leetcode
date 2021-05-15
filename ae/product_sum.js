function productSum(array, depth = 1) {
  // i: special array. non-empty array containing integers or other special arrays
	// o: product sum. sum of array times depth of array
	// c: none
	// e:

	// traverse array elements
	// if integer, add to sum
	// if special array, recurse

	// return sum
	let sum = 0;

	for (let i = 0; i < array.length; i++) {
		let thisVal;

		if (Array.isArray(array[i])) {
			thisVal = productSum(array[i], depth + 1);
		} else {
			thisVal = array[i];
		}

		sum += thisVal;
	}

	return sum * depth;
}
// O(n) Time, O(depth) space