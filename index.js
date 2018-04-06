const express = require('express');
// Const NumberHelper = require('./services/NumberHelper.js');
const {getSolution} = require('./services/FinalSolution.js');

const app = express();
const port = process.env.PORT || 3000;

// Server Part
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.get('/sum/:number/', req => getSolution(req.params.number));

app.use((req, res) =>
  res.status(404).send({url: req.originalUrl + ' not found'})
);

app.listen(port, () =>
  console.log('Server started on IP: 127.0.0.1:' + port)
);
