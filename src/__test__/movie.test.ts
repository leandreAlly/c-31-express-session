import request from 'supertest';
import { mongoConnect, mongoDisconnect } from '../services/mongo';
import app from '../app';
import {
  movieData,
  movieWithoutDirector,
  movieWithoutTitle,
} from '../mock/static';

jest.setTimeout(10000);

describe('Movie API', () => {
  beforeAll(async () => {
    await mongoConnect();
  });

  afterAll(async () => {
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

    test('it should return 201 and list of all movies', async () => {
      const { body } = await request(app)
        .post('/api/v1/movie')
        .send(movieData)
        .expect('Content-Type', /json/)
        .expect(201);

      expect(body.message).toStrictEqual('Movie created');
      expect(body.data.title).toStrictEqual(movieData.title);
    });
    test('it should return 400 for empty title', async () => {
      const { body } = await request(app)
        .post('/api/v1/movie')
        .send(movieWithoutTitle)
        .expect('Content-Type', /json/)
        .expect(400);
    });
    test('it should return 400 for empty director', async () => {
      const { body } = await request(app)
        .post('/api/v1/movie')
        .send(movieWithoutDirector)
        .expect('Content-Type', /json/)
        .expect(400);
    });
  });
});
