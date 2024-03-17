import mongoose from 'mongoose';

mongoose.connection.on('open', () => {
  console.info('Database connected');
});

mongoose.connection.on('close', () => {
  console.info('something went wrong');
});

const mongoConnect = async () => {
  await mongoose.connect(
    'mongodb+srv://leandreAlly:Wi17ipwH4ctmqvEK@testing.2u4ar05.mongodb.net/blog'
  );
};
const mongoDisconnect = async () => {
  await mongoose.disconnect();
};

export { mongoConnect, mongoDisconnect };
