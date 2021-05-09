function classPhotos(redShirtHeights, blueShirtHeights) {

	//i: 2 arrays of numbers (positive ints),
	//   red shirts, blue shirts,
	//o: true or false, if arrays can be arranged so that
	//   one array's numbers are always larger than the other
	//   array's numbers at the same index
	//c: none
	//e: 1 length arrays


	// sort arrays
	// compare each keeping track if either array's numbers
	// are consistently greater than the others
	// .. as soon as its not, mark that as not possible
	// if both not possible, return false

	// otherwise return true

	redShirtHeights.sort((a,b) => a - b);
	blueShirtHeights.sort((a,b) => a - b);

	let front;
	let back;

	if (redShirtHeights[0] < blueShirtHeights[0]) {
		front = redShirtHeights;
		back = blueShirtHeights;
	} else {
		front = blueShirtHeights;
		back = redShirtHeights;
	}

	for (let i = 0; i < back.length; i++) {
		if (front[i] >= back[i]) {
			return false;
		}
	}

  return true;
}
// O(nlogn) Time, O(1) space
