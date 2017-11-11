import 'mocha';
import { expect } from 'chai';
import * as httpStatus from 'http-status-codes';
import * as request from 'supertest';

import { app } from '../../src/app';

describe('Movies API', () => {

  it('should register a new movie', () => {

    return request(app)
      .post('/api/movies/commands/register')
      .set({
        'customer-id': 'admin-1'
      })
      .send({
        movie: {
          name: 'Rambo III',
          category: 'Action'
        }
      })
      .expect(httpStatus.OK)
      .then((res) => {

      })
  });


  it('should rent movies', () => {

    return request(app)
      .post('/api/movies/commands/rent')
      .set({
        'customer-id': 'customer-1'
      })
      .send({
        movieId: 'rambo-iii'
      })
      .expect(httpStatus.OK)
      .then((res) => {

      })
  });


});
