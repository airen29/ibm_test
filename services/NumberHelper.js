function isPrime(n) {
  if (n % 1 || n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function generatePrimeNumbers(n) {
  const primes = [];

  for (let i = 2; i <= n; ++i) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

function sumPrimes(n) {
  let sum = 0;

  // Add the primes
  const primes = generatePrimeNumbers(n);
  for (let p = 0; p < primes.length; p++) {
    sum += primes[p];
  }

  return sum;
}

function findTheSame(primeNumber, sum) {
  const pom = [];
  let counter = 0;

  while (counter < sum) {
    pom.push(primeNumber);
    counter += primeNumber;
    if (counter.toString() === sum.toString()) {
      return pom;
    }
  }
  return -1;
}

module.exports = {
  generatePrimeNumbers,
  isPrime,
  sumPrimes,
  findTheSame
};
