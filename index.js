const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

mongoose
  .connect(
    'mongodb+srv://leandreAlly:Nowt0rUvjbeB7JiU@testing.2u4ar05.mongodb.net/blog'
  )
  .then(() => {
    console.log('Database Connected!');

    app.use(express.json());
    app.use('/api/v1', routes);

    app.listen(8080, () => {
      console.log('server is listening ..... 8080');
    });
  })
  .catch((error) => {
    console.error('DBError:', error);
  });
