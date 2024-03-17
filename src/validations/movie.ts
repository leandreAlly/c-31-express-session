import Joi from 'joi';

const MovieSchema = Joi.object({
  title: Joi.string().required(),
  director: Joi.string().required(),
  summary: Joi.string(),
});

const validateMovie = (movieData: any) => {
  return MovieSchema.validate(movieData);
};

export default validateMovie;
