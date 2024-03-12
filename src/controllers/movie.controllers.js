const Movie = require('../models/Movie.js');

const httpCreateMovie = async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    director: req.body.director,
    summary: req.body.summary,
  });

  await movie.save();

  res.status(201).json({ message: 'Movie created', data: movie });
};

const httpGetMovies = async (req, res) => {
  const movie = await Movie.find({});

  res.status(200).json({ message: 'success', data: movie });
};

module.exports = { httpCreateMovie, httpGetMovies };
