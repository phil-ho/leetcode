function branchSums(root) {
  const sums = [];
	branchSumsHelper(root, 0, sums);
	return sums;
}

function branchSumsHelper(root, total, sums) {
	if (root === null) {
		return;
	}

	const newTotal = total + root.value;

	if (root.left === null && root.right === null) {
		sums.push(newTotal);
		return;
	}

	branchSumsHelper(root.left, newTotal, sums);
	branchSumsHelper(root.right, newTotal, sums);
}
// O(n) Time, O(n) space
