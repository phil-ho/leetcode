function sortedSquaredArray(array) {
	// if the array is 1 long, return array with value squared
	if (array.length === 1) {
		return [array[0]**2];
	}

  // if the array is sorted and we know that negative numbers
	// when squared are positive then we can use 2 pointers to traverse
	// the array in order of the result by comparing

	// iterate array using 2 pointers from zero out
	// one pointer moves more negative
	// one pointer moves more positive
	// each iteration we compare the absolute values of the numbers
	// to determine which number to square next

	// we would need to iterate once through the array
	// to find the 2 values closest to zero
	// since array is sorted, we can even do this by binary search

	// look for zero
		// find midpoint of array
		// is this value greater than or less than zero
		// if greater, look again in the smaller half
	  // if smaller, look in the larger half
	let start = 0;
	let end = array.length - 1;

	const findClosestToZero = (start, end) => {
    if (start === end) {
        return start;
    }

    const midpoint = start + Math.floor((end - start) / 2);

    if (array[midpoint] === 0) {
        return midpoint;
    } else if (array[midpoint] > 0) {
				const newEnd = Math.max(midpoint - 1, 0);
        return findClosestToZero(start, newEnd);
    } else {
				const newStart = Math.min(midpoint + 1, array.length - 1)
        return findClosestToZero(newStart, end);
    }
	}

	const startIndex = findClosestToZero(start, end);
	let left;
	let right;

	if (array[startIndex] < 0) {
		left = startIndex;
		right = startIndex + 1;
	} else {
		left = startIndex - 1;
		right = startIndex;
	}

	const sortedAndSquared = [];
	const compareAbs = (left, right) => {
		if (left === undefined) {
			return 1;
		}
		if (right === undefined) {
			return -1;
		}

		if (Math.abs(left) < Math.abs(right)) {
			return -1;
		}

		return 1;
	}

	while(sortedAndSquared.length < array.length) {
		const leftValue = array[left];
		const rightValue = array[right];
		const direction = compareAbs(leftValue, rightValue);
		console.log(leftValue, rightValue, direction);
		if (direction < 0) {
			sortedAndSquared.push(leftValue**2);
			left--;
		} else {
			sortedAndSquared.push(rightValue**2);
			right++;
		}
	}

	console.log(array, sortedAndSquared);
	return sortedAndSquared;
}

// O(n + logn) time, O(n) space