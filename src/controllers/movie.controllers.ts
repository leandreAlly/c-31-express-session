import { Request, Response } from 'express';
import Movie from '../models/Movie';

const httpCreateMovie = async (req: Request, res: Response) => {
  const movie = new Movie({
    title: req.body.title,
    director: req.body.director,
    summary: req.body.summary,
  });

  // console.log('verify Request', req.user);

  await movie.save();
  res.status(201).json({ message: 'Movie created', data: movie });
};

const httpGetMovies = async (req: Request, res: Response) => {
  const movie = await Movie.find({});

  res.status(200).json({ message: 'success', data: movie });
};

export { httpCreateMovie, httpGetMovies };
