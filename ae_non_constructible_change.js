function nonConstructibleChange(coins) {
  let max = 0;

	// first we have to sort the coins
	coins.sort((a,b) => a - b);

	for (let i = 0; i < coins.length; i++) {
		let value = coins[i];

		if (value > max + 1) {
			return max + 1;
		}

		max += value;
	}

	return max + 1;
}

// O(n) time, O(1) space