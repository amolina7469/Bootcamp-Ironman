const request = require('supertest');

const app = require('../../app');

describe('Api de products', () => {

  describe('GET /api/products', () => {
    let response;
    beforeAll(async () => {
      response = await request(app).get('/api/products').send();
    });

    it('debería responder con status 200', () => {
      expect(response.statusCode).toBe(200);
    });

    it('debería devolver datos en formato JSON', () => {
      expect(response.headers['content-type']).toContain('json');
    });

    it('debería devolver un array', () => {
      expect(response.body).toBeInstanceOf(Array);
    });

  });

});