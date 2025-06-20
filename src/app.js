const express = require('express');
const calculator = require('./calculator');
const app = express();


app.use(express.json());


app.post('/add', (req, res) => {
  try {
    const { a, b } = req.body;
    const result = calculator.add(a, b);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.post('/subtract', (req, res) => {
  try {
    const { a, b } = req.body;
    const result = calculator.subtract(a, b);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = app;