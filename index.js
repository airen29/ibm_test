const express = require('express');
const {getSolution} = require('./services/FinalSolution.js');
const {generatePrimeNumbers} = require('./services/NumberHelper.js');

const app = express();
const port = process.env.PORT || 3000;

// Server Part
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.get('/sum/:number/', (req, res) => {
 const solution = getSolution(req.params.number);
 res.status(200).send(solution);
});

app.get('/primes/', (req, res) => {
  res.status(404).send({message: 'Url /primes/ not found, try /primes/50'});
});

app.get('/primes/:number/', (req, res) => {
  const prime = generatePrimeNumbers(req.params.number);
  const reqPrimes = {
    input: req.params.number,
    result: prime
  };

  res.status(200).send(reqPrimes);
});

app.use((req, res) =>
  res.status(404).send({url: req.originalUrl + ' not found'})
);

app.listen(port, () =>
  console.log('Server started on IP: 127.0.0.1:' + port + '\n' + 'Call http://localhost:' + port + '/primes/:number/')
);
