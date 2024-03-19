// import request from 'supertest';

// import { mongoConnect, mongoDisconnect } from './services/mongo';
// import app from './app';
// import User from './models/User';

// declare global {
//   var signIn: () => Promise<string>;
// }

// beforeAll(async () => {
//   await mongoConnect();
// });

// afterAll(async () => {
//   await mongoDisconnect();
// });

// global.signIn = async () => {
//   const name = 'leandre';
//   const email = 'leandre2@gmail.com';
//   const password = 'password';

//   const response = await request(app)
//     .post('/api/v1/user/register')
//     .send({ name, email, password })
//     .expect(201);

//   const responselogin = await request(app)
//     .post('/api/v1/user/login')
//     .send({ email, password })
//     .expect(200);

//   const token = responselogin.body.token;

//   console.log('+++++', token);

//   return token;
// };
