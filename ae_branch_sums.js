// input a root tree node
// output an array with the branch's values summed up
// no constraints
// root can be null
function branchSums(root) {
  // inspect root
	// if root is null, return []

	// create array
	// traverse children
		// concat result from recursive call to branchSums(child) to array

	// if array has length
		// add this root's value to the array values
	// else
		// push this roots value into

	//return array

	if (root === null) {
		return [];
	}

	let sums = [];
	sums = sums.concat(branchSums(root.left));
	sums = sums.concat(branchSums(root.right));

	if (sums.length > 0) {
		sums = sums.map((num) => num + root.value);
	} else {
		sums.push(root.value);
	}

	return sums;
}