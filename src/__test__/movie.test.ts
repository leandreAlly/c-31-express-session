import request from 'supertest';
import app from '../app';
import {
  movieData,
  movieWithoutDirector,
  movieWithoutTitle,
  signInData,
  signUpData,
} from '../mock/static';
import User from '../models/User';
import { mongoConnect, mongoDisconnect } from '../services/mongo';

jest.setTimeout(10000);

let token: string;

describe('Movie API', () => {
  beforeAll(async () => {
    await mongoConnect();
  });

  afterAll(async () => {
    await User.deleteMany();
    await mongoDisconnect();
  });

  describe('Welcome API message', () => {
    test('it should return 200 and welcome message ', async () => {
      const { body } = await request(app)
        .get('/api/v1')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(body.message).toStrictEqual('Welcome to the movie API');
    });

    test('It should return 200 and list of all movies', async () => {
      const { body } = await request(app).get('/api/v1/movie').expect(200);

      expect(body.message).toStrictEqual('success');
      expect(body.data).toBeDefined();
    });

    test('It should return signup and login', async () => {
      const response = await request(app)
        .post('/api/v1/user/register')
        .send(signUpData)
        .expect(201);

      const responseLogin = await request(app)
        .post('/api/v1/user/login')
        .send(signInData)
        .expect(200);

      token = responseLogin.body.token;
    });

    test('it should return 201 and list of all movies', async () => {
      const { body } = await request(app)
        .post('/api/v1/movie')
        .set('Authorization', `Bearer ${token}`)
        .send(movieData)
        .expect('Content-Type', /json/)
        .expect(201);

      expect(body.message).toStrictEqual('Movie created');
      expect(body.data.title).toStrictEqual(movieData.title);
    });
    test('it should return 400 for empty title', async () => {
      const { body } = await request(app)
        .post('/api/v1/movie')
        .set('Authorization', `Bearer ${token}`)
        .send(movieWithoutTitle)
        .expect('Content-Type', /json/)
        .expect(400);
    });
    test('it should return 400 for empty director', async () => {
      const { body } = await request(app)
        .post('/api/v1/movie')
        .set('Authorization', `Bearer ${token}`)
        .send(movieWithoutDirector)
        .expect('Content-Type', /json/)
        .expect(400);
    });
  });
});
