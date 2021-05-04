function nodeDepthsHelper(node, depth) {
	if (node === null) {
		return 0;
	}

	let sum = depth;

	sum += nodeDepthsHelper(node.left, depth + 1);
	sum += nodeDepthsHelper(node.right, depth + 1);

	return sum;
}

function nodeDepths(root) {
  // i: tree or null
	// o: integer that is sum of all its node's depth.
	// c: none
	// e: null tree

	// depth first approach with helper
  // visit all nodes, adding its depth to a sum as it visits
	let sum = 0;

	sum += nodeDepthsHelper(root, 0);

	return sum;
}
// O(n) time, O(height of tree) space
