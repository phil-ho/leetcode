/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)
It is possible to make £2 in the following way:
1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?
example usage of `makeChange`:
// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total, coins = [1, 2, 5, 10, 20, 50, 100, 200]) {
  // i: total is the number we want to make given the different values in coins
  // o: number of combinations of coins that will add up to exactly total
  // c:
  // e:

  /* Strat
  - count number of combinations where sum = total
  - we can also optimize by ruling out coins values greater than total
  */

  // if total is zero, return zero
  // create new set of coins by filtering out coins who's values are greater than total
  // find unique combinations
  //    finding unique combinations means running through all combinations
  //    but decreasing the number of possibilities as we go
  if (total === 0) {
    return 0;
  }

  let combinations = 0;

  for (let i = 0; i < coins.length; i++) {
    const coinValue = coins[i];
    const subTotal = total - coinValue;

    if (subTotal === 0) {
      combinations++;
    } else if (subTotal < 0) {
      // nothing
    } else {
      combinations += makeChange(subTotal, coins.slice(i));
    }
  }

  return combinations;
};

console.log(makeChange(1));
console.log(makeChange(2));
console.log(makeChange(3));


