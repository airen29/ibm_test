function isPrime(n) {
  if (n % 1 || n < 2) {
    return false;
  }

  const q = Math.sqrt(n);

  for (let i = 2; i <= q; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function generatePrimeNumbers(n) {
  let count = 0;
  let i = 2;
  const primes = [];
  const maxCount = n;

  while (count < maxCount) {
    if (isPrime(i)) {
      primes.push(i);
      count++;
    }
    i++;
  }

  return primes;
}

module.exports = {
  generatePrimeNumbers,
  isPrime
};
