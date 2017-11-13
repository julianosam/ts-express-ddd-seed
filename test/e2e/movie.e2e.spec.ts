import 'mocha';
import { expect } from 'chai';
import * as httpStatus from 'http-status-codes';
import * as request from 'supertest';

import { app } from '../../src/app';

describe('Movies API', () => {

  let movieId: string;

  it('should register a new movie', () => {

    return request(app)
      .post('/api/movies/commands/register')
      .set({
        'customer-id': '1'
      })
      .send({
        movie: {
          name: 'Rambo III',
          category: 'Action'
        }
      })
      .expect(httpStatus.OK)
      .then((res: any) => movieId = res.body.id);
  });

  it('should rent movies', () => {

    return request(app)
      .post('/api/movies/commands/rent')
      .set({
        'customer-id': '1'
      })
      .send({
        movieId: `${movieId}`
      })
      .expect(httpStatus.OK);
  });

  it('should not rent a movie thats currently unavalable', () => {

    return request(app)
      .post('/api/movies/commands/rent')
      .set({
        'customer-id': '1'
      })
      .send({
        movieId: `${movieId}`
      })
      .expect(httpStatus.INTERNAL_SERVER_ERROR)
      .then((res: any) => {
        expect(res.text).to.eql('Movie is not available!');
      });
  });
});
