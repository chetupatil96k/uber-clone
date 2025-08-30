const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// 📌 Register route
router.post(
  '/register',
  [
    body('email').isEmail().withMessage("Invalid email"),
    body('fullname.firstname')
      .isLength({ min: 3 })
      .withMessage('First name must be at least 3 characters long'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ],
  userController.registerUser
);

// 📌 Login route
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password is invalid'),
  ],
  userController.loginUser
);

// 📌 Profile route (protected)
router.get('/profile', authMiddleware.authUser, userController.getUserProfile);

// 📌 Logout route (protected)
router.post('/logout', authMiddleware.authUser, userController.logoutUser);

module.exports = router;
