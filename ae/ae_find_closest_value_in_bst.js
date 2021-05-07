function findClosestValueInBst(tree, target) {
  // i: BST tree where values are integers
	// O: closest value (int)
	// c: none
	// e: none
	// only 1 closest val

	// what is closest value?
		// when value is target or
	  // when value's difference is smaller than others
	let closestValue = tree.value;


	let traverse = (tree) => {
		// if value is target return value
		if (tree.value === target) {
			closestValue = tree.value;
			return;
		}

		// is the difference between the value of this tree and the target
		// the smallest we've seen?
			// save value as closest value
		const diff = Math.abs(target - tree.value);

		if (diff < Math.abs(target - closestValue)) {
			closestValue = tree.value;
		}

		// if target less than value
			// go left if left exists
		// if target is greater than value
			// go right if right exists
		if (target < tree.value && tree.left) {
		  traverse(tree.left);
		}
		if (target > tree.value && tree.right) {
			traverse(tree.right);
		}
	}

	traverse(tree);

	return closestValue
}

// O(n) time, O(n)? space