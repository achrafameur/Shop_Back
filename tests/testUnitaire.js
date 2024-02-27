// tests/unit/auth.test.js

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Mocking jwt.verify
jest.mock('jsonwebtoken', () => ({
  verify: jest.fn(),
}));

describe('isAuthenticatedUser middleware', () => {
  test('should pass if token is present and valid', async () => {
    const req = { cookies: { token: 'validToken' } };
    const res = {};
    const next = jest.fn();

    jwt.verify.mockReturnValue({ id: 'userId' });
    User.findById = jest.fn().mockResolvedValue({ _id: 'userId' });

    await isAuthenticatedUser(req, res, next);

    expect(req.user).toBeDefined();
    expect(req.user._id).toBe('userId');
    expect(next).toHaveBeenCalled();
  });
});

describe('authorizeRoles middleware', () => {
  test('should pass if user role is allowed', () => {
    const req = { user: { role: 'admin' } };
    const res = {};
    const next = jest.fn();

    authorizeRoles('admin')(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});

