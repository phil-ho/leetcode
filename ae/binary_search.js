function binarySearch(array, target, start = 0, stop) {

	let left = start;
	let right = stop ?? array.length - 1;

	while (left <= right) {

		const midPoint = Math.floor((left + right) / 2);

		if (array[midPoint] === target) {
			return midPoint;
		}

		if (target < array[midPoint]) {
			right = midPoint - 1;
		} else {
			left = midPoint + 1;
		}
	}

	return -1;
}

// O(log(n)) time | O(1) space
