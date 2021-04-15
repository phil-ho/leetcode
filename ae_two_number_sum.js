function twoNumberSum(array, targetSum) {
	const history = {};

  for (i = 0; i < array.length; i++){
		const thisNumber = array[i];
		const diff = targetSum - thisNumber;

		if (history[diff] === undefined) {
			history[thisNumber] = i;
		} else {
			return [thisNumber, diff];
		}
	}

	return [];
}
// Time: O(n), Space: O(n)
