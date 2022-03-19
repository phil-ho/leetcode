/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  // array always has at least 1 value in it
  // prices are zero or greater

  // brute force way is to compare each number, to each subsequent number and store the greatest positive diff

  // more optimized

  // set aside first price
  // this price is the lowest price
  // max profit is zero

  // iterate subsequent numbers
    // max pofit is this number minus the lowest price, or zero
    // if this number is lower than the lowest price, set as lowest

  // return max profit

  let lowPrice = prices[0];
  let maxGain = 0;

  for (let i = 1; i < prices.length; i++) {
    let diff = prices[i] - lowPrice;
    if (diff > maxGain) {
      maxGain = diff;
    }

    if (lowPrice > prices[i]) {
      lowPrice = prices[i];
    }
  }

  return maxGain;
};

let prices = [7,1,5,3,6,4];
console.log('expect to be 5: ', maxProfit(prices), maxProfit(prices) === 5);

prices = [7,6,4,3,1];
console.log('expect to be 0: ', maxProfit(prices), maxProfit(prices) === 0);

prices = [1];
console.log('expect to be 0: ', maxProfit(prices), maxProfit(prices) === 0);

prices = [0, 0];
console.log('expect to be 0: ', maxProfit(prices), maxProfit(prices) === 0);

prices = [0, 2, 4];
console.log('expect to be 4: ', maxProfit(prices), maxProfit(prices) === 4);