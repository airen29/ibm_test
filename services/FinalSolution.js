const fibonacci = require('fibonacci');
const {generatePrimeNumbers} = require('./NumberHelper.js');
const {subsetsLessThan} = require('./powerSet.js');

/*
*
* Bugged after (6)
*
*

function mySolution(prime, n) {
  let i = 0;
  let j = 0;
  let counter = 0;

  let pomocnePole = [];
  const vysledok = [];

  while (j < prime.length) {
    if (counter === 0) {
      pomocnePole.push(prime[i]);
      counter += prime[i];
    }
    if (counter.toString() === n.toString()) {
      vysledok.push(pomocnePole);
      pomocnePole = [];
      counter = 0;
      i++;
    }
    if (counter.toString() > n.toString()) {
      for (let x = 0; x < parseInt(n, 10) - 3; x++) {
        pomocnePole.pop();
        counter -= prime[j];
      }
      j++;
    }
    if (counter !== 0) {
      pomocnePole.push(prime[j]);
      counter += prime[j];
    }
  }

  return vysledok;
}*/

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
