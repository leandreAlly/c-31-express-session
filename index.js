const app = require('./app.js');
const { mongoConnect } = require('./src/services/mongo.js');

const startServer = async () => {
  await mongoConnect();

  app.listen(8080, () => {
    console.log('server is listening ..... 8080');
  });
};

startServer();
