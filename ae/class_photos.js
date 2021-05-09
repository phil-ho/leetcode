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

	let redShirtsTaller = true;
	let blueShirtsTaller = true;

	for (let i = 0; i < redShirtHeights.length; i++) {
		if (redShirtHeights[i] <= blueShirtHeights[i]) {
			redShirtsTaller = false;
		}

		if (blueShirtHeights[i] <= redShirtHeights[i]) {
			blueShirtsTaller = false;
		}

		if (!redShirtsTaller && !blueShirtsTaller) {
			return false;
		}
	}

  return true;
}
// O(nlogn) Time, O(1) space
