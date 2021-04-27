function tournamentWinner(competitions, results) {

	// i: competitions array has arrays inside like [home, away]
	//    results array has 0 and 1s, where 1 is a win for home, 0 is win for away
	// o: return the name of the winner of the tournament
	// c: none
	// e: none

	// create score object using team names as keys,
	// and their cumulative score as values

	// maxScore = 0;
	// maxTeam = '';

	// iterate through competitions
	//   declare home = competitions[i][0]
	//   declare away = competitions[i][1]
	//   declare homeScore = score[home] || 0;
	//.  declare awayScore = score[away] || 0;
	//   access results for this index i and
	//.  if results[i] === 1 , homeScore += 3
	//.  if results[i] === 0 , awayScore += 3
	//.  score[home] = homeScore
	//.  score[away] = awayScore
	//   if homeScore > maxScore
	        // maxScore = homeScore
	        // maxTeam = home
  //   if awayScore > maxScore
		      // maxScore = awayScore
	        // maxTeam = away

  // return maxTeam
	const score = {};
	let maxScore = 0;
	let maxTeam = '';

	for (let i = 0; i < competitions.length; i++) {
		const home = competitions[i][0];
		const away = competitions[i][1];

		let homeScore = score[home] || 0;
		let awayScore = score[away] || 0;

		if (results[i] === 1) {
			homeScore += 3;
		} else {
			awayScore += 3;
		}

		score[home] = homeScore;
		score[away] = awayScore;

		if (homeScore > maxScore) {
			maxScore = homeScore;
			maxTeam = home;
		}

		if (awayScore > maxScore) {
			maxScore = awayScore;
			maxTeam = away;
		}
	}

	return maxTeam;
}

// O(n) time, O(n) space