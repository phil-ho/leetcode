function sortedSquaredArray(array) {
  // can we get rid of the searching from solution 2?
	// yes!!
	// if we traverse and fill the array from largest to smallest
	// we don't have to find zero

	// iterate through array with 2 pointers on outsides
	// left is 0, right is array.length -1
	// left is going to be the 'largest' negative number
	// right is going to be the largest positive number
	// if left^2 > right^2 use left and move left pointer up
	// if right ^2 > left^2 use right and move right pointer down
	// insert larger value into new array at end

	let left = 0;
	let right = array.length - 1;
	let sortedSquares = new Array(array.length).fill(0);

	for (let i = array.length - 1; i >= 0; i--) {
		if (array[left]**2 > array[right]**2) {
			sortedSquares[i] = array[left]**2;
			left++;
		} else {
			sortedSquares[i] = array[right]**2;
			right--;
		}
	}

	return sortedSquares;
}

// O(n) time, O(n) space