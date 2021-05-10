function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // The patterns:
	// for fastest total speed
	// we match up the fastest riders in one group
	// with the slowest riders in the other
	// the key is this is symmetrical, the fastest riders
	// from one group will always be paired with the slowest
	// riders from the other group

	// for slowest total speed
	// we match up the slowest riders from both groups
	// and record the fastest of the pair

	redShirtSpeeds.sort((a, b) => a - b);
	blueShirtSpeeds.sort((a, b) => fastest ? (b - a) : (a - b));

	let totalSpeed = 0;

	for (let i = 0; i < redShirtSpeeds.length; i++) {
		totalSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
	}

  return totalSpeed;
}

let totalSpeed;
totalSpeed = tandemBicycle([3,2,1], [3,2,1], false)
console.log(totalSpeed); //6

totalSpeed = tandemBicycle([10,2,1], [3,5,1], true)
console.log(totalSpeed); //18
