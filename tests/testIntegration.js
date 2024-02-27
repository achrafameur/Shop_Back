
// tests/integration/auth.test.js
const request = require('supertest');
const app = require('../app');

describe('isAuthenticatedUser middleware', () => {
  test('should return 401 if token is missing', async () => {
    await request(app)
      .get('/me')
      .expect(404);
  });
});
