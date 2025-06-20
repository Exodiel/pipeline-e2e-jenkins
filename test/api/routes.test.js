const request = require('supertest');
const app = require('../../src/app'); // Importamos nuestra app Express

describe('API: Calculator Endpoints', () => {
  describe('POST /add', () => {
    it('should return the sum of two numbers', async () => {
      const response = await request(app)
        .post('/add')
        .send({ a: 10, b: 5 });
      
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ result: 15 });
    });

    it('should return a 400 error for invalid input', async () => {
      const response = await request(app)
        .post('/add')
        .send({ a: 'ten', b: 5 });
        
      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('POST /subtract', () => {
    it('should return the difference of two numbers', async () => {
        const response = await request(app)
            .post('/subtract')
            .send({ a: 10, b: 5 });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 5 });
    });
  });
});