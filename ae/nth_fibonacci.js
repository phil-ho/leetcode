function getNthFib(n, memo = {}) {
  // Write your code here.
	// Fib(1) = 0
	// Fib(2) = 1
	// Fib(n) = Fib(n-1) + Fib(n-2)
	if (n === 1) {
		return 0;
	}

	if (n === 2) {
		return 1;
	}

	if (memo[n] !== undefined) {
		return memo[n];
	} else {
		memo[n] = getNthFib(n-1, memo) + getNthFib(n-2, memo);
	}

	return memo[n];
}
// O(n) time, O(n) space
