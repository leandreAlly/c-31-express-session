const mongoose = require('mongoose');

const schema = mongoose.Schema;

const MovieSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Movie', MovieSchema);
