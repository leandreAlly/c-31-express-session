const express = require('express');
const Movie = require('../models/Movie.js');

const routes = express.Router();

routes.post('/movie', async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    director: req.body.director,
    summary: req.body.summary,
  });

  await movie.save();

  res.status(201).json({ message: 'Movie created', data: movie });
});

routes.get('/movie', async (req, res) => {
  const movie = await Movie.find({});

  res.status(200).json({ message: 'success', data: movie });
});

module.exports = routes;
