function minimumWaitingTime(queries) {
	queries.sort((a,b) => a-b); //logn

	let waitingTimes = 0;
  let sum = 0;

	for (let i = 0; i < queries.length - 1; i++) {
    sum += queries[i];
    waitingTimes += sum;
	}

  return waitingTimes;
}

console.log(minimumWaitingTime([3,2,1,2,6]));