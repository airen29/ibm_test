const express = require('express');
const fibonacci = require('fibonacci');
const NumberHelper = require('./services/NumberHelper.js');
const {getSolution} = require('./services/FinalSolution.js');

const app = express();
const port = process.env.PORT || 3000;

const bigNumber = fibonacci.iterate(6);
console.log(bigNumber.number);

// Prime Numbers (generate first 100)
const primes = NumberHelper.generatePrimeNumbers(100);
console.log(primes);

// Server Part
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.get('/sum/:number/', (req, res) => getSolution(req, res));

app.use((req, res) =>
  res.status(404).send({url: req.originalUrl + ' not found'})
);

app.listen(port, () =>
  console.log('Server started on IP: 127.0.0.1:' + port)
);
