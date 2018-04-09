const fibonacci = require('fibonacci');
const {generatePrimeNumbers} = require('./NumberHelper.js');
const {subsetsLessThan} = require('./powerSet.js');

function getSolution(n) {
  const i = n;

  const riesenie = [];
  const bigNumber = fibonacci.iterate(i);
  const k = bigNumber.number;

  const primeNumber = generatePrimeNumbers(k);
  
  if (primeNumber.length === 0) {
      return primeNumber.length;
    }
    if (primeNumber.length === 1) {
      return primeNumber[0];
    }

  riesenie.push(subsetsLessThan(primeNumber, k));
    console.log(riesenie);

  return riesenie;
}

module.exports = {
  getSolution
};
