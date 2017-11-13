import 'mocha';
import { expect } from 'chai';
import * as httpStatus from 'http-status-codes';
import * as request from 'supertest';

import { app } from '../../src/app';

describe('Customers API', () => {

    it('should register a new customer', () => {

        return request(app)
            .post('/api/customers/commands/register')
            .send({
                name: 'John Doe'
            })
            .expect(httpStatus.OK)
            .then((res) => {
                // tslint:disable-next-line:no-unused-expression
                expect(res.body.id).to.exist;
                expect(res.body.name).to.eql('John Doe');
            });
    });

});
