const validateMovie = require('../validations/movie');

const isValid = (req, res, next) => {
  const { error } = validateMovie(req.body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    next();
  } catch (error) {
    console.log('error', error);
  }
};

module.exports = isValid;
