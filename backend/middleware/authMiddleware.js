const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User  = require('../models/userModel'); // Assuming your Sequelize model is correctly defined in '../models'

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];
      console.log(token);
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded)
      // Get user from the token
      req.user = await User.findByPk(decoded.id, {
        attributes: { exclude: ['password'] }, // Exclude password field
      });

      if (!req.user) {
        throw new Error('User not found');
      }

      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: 'Not authorized' });
    }
  }

  if (!token) {
    res.status(401).json({ error: 'Not authorized, no token' });
  }
});

module.exports = { protect };
