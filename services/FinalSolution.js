const fibonacci = require('fibonacci');
const {generatePrimeNumbers} = require('./NumberHelper.js');

function mySolution(prime, n) {
  let i = 0;
  let j = 0;
  let counter = 0;

  console.log('Prime v mySolution: ' + prime);

  let pomocnePole = [];
  const vysledok = [];

  while (j < prime.length) {
    console.log('Counter = ' + counter + ' a prime = ' + prime[i] + ' prime[j] = ' + prime[j]);
    if (counter === 0) {
      pomocnePole.push(prime[i]);
      counter += prime[i];
    }
    if (counter.toString() === n.toString()) {
      console.error('Nasiel som riesenie! Volam vysledok.push');
      vysledok.push(pomocnePole);
      pomocnePole = [];
      counter = 0;
      i++;
    }
    if (counter.toString() > n.toString()) {
      for (let x = 0; x < 2; x++) {
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
}

function getSolution(n) {
  const sum = 0;
  const riesenie = [];

  const bigNumber = fibonacci.iterate(n);
  const k = bigNumber.number;

  const primeNumber = generatePrimeNumbers(k);

  if (primeNumber.length === 0) {
    return primeNumber.length;
  }
  if (primeNumber.length === 1) {
    return primeNumber[0];
  }

  riesenie.push(mySolution(primeNumber, k));
  console.log(riesenie);
  return sum;
}

module.exports = {
  getSolution
};
