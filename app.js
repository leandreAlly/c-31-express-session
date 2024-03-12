const express = require('express');
const apiRouter = require('./src/routes');

const app = express();

app.use(express.json());

app.use('/api/v1', apiRouter);

app.use('/api/v1', (req, res) => {
  res.status(200).json({ message: 'Welcome to the movie API' });
});

module.exports = app;
