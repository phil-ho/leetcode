function fastestTotalSpeed(red, blue) {
	// slowestRed = 0, fastestRed = red.length - 1;
	// slowestBlue = 0, fastestBlue = blue.length - 1;
	// totalSpeed = 0;

	// iterate n times,
	  // compare fastestRed to fastestBlue
	  // take fastest rider and match with slowest from other group
		// add fastest's speed to the totalSpeed
	  // decrement the fastest pointer
	  // increment the slowest pointer

	// return totalSpeed
  let totalSpeed = 0;
  let slowestRed = 0;
  let fastestRed = red.length - 1;
  let slowestBlue = 0;
  let fastestBlue = blue.length - 1;

  for (let i = 0; i < red.length; i++) {
    let fastestSpeed;
    if (red[fastestRed] >= blue[fastestBlue]) {
      fastestSpeed = red[fastestRed--];
    } else {
      fastestSpeed = blue[fastestBlue--];
    }

    let slowestSpeed;
    if (red[slowestRed] <= blue[slowestBlue]) {
      slowestSpeed = red[slowestRed++];
    } else {
      slowestSpeed = blue[slowestBlue++];
    }

    totalSpeed += fastestSpeed;
  }

  return totalSpeed;
}

function slowestTotalSpeed(red, blue) {
	// totalSpeed = 0;
	// iterate n times from 0
	  // compare red rider at n to blue rider at n
	  // take fastest of the 2 and add to totalSpeed
	// return totalSpeed

	let totalSpeed = 0;
	for (let i = 0; i < red.length; i++) {
		totalSpeed += (red[i] >= blue[i]) ? red[i] : blue[i];
	}

	return totalSpeed;
}

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  if (redShirtSpeeds.length === 0) {
		return 0;
	}

	redShirtSpeeds.sort((a, b) => a - b);
	blueShirtSpeeds.sort((a, b) => a - b);

	if (fastest) {
		return fastestTotalSpeed(redShirtSpeeds, blueShirtSpeeds);
	} else {
		return slowestTotalSpeed(redShirtSpeeds, blueShirtSpeeds);
	}
}

let totalSpeed;
totalSpeed = tandemBicycle([3,2,1], [3,2,1], false)
console.log(totalSpeed); //6

totalSpeed = tandemBicycle([10,2,1], [3,5,1], true)
console.log(totalSpeed); //18
