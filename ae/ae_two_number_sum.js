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

function twoNumberSum2(array, targetSum) {
  // sort array for order
	const sortedArray = array.slice().sort((a,b) => a - b);
	console.log(sortedArray);
	// use 2 pointers from outside
	let left = 0;
	let right = sortedArray.length - 1;

	// iterate through array
		// if sum is equal to target, return
		// if sum is larger than target move the right pointer in
		// if sum is smaller than target, move the left pointer in
		// if left pointer === right pointer, return empty array because no solution
	while(left !== right) {
		const num1 = sortedArray[left];
		const num2 = sortedArray[right];
		const sum = num1 + num2;
		console.log(targetSum, sum, left, right);

		if (targetSum === sum) {
			return [num1, num2];
		}

		if (targetSum < sum) {
			right--;
		} else {
			left++;
		}
	}

	return [];
}
// Time: O(n)
// Space: O(1)