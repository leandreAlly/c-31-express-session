const Joi = require('joi');

const MovieSchema = Joi.object({
  title: Joi.string().required(),
  director: Joi.string().required(),
  summary: Joi.string(),
});

const validateMovie = (movieData) => {
  return MovieSchema.validate(movieData);
};

module.exports = validateMovie;
