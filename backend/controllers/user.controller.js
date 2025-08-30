const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const BlacklistTokenModel = require('../models/blacklistToken.model');

// Register User
module.exports.registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const isUserAlready = await userModel.findOne({email});
    if(isUserAlready){
      return res.status(400).json({message: 'user already exist'});
    }

    // Create user
    const user = await userService.createUser({
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
      email,
      password,
    });

    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
  } catch (err) {
    next(err);
  }
};

// Login User
module.exports.loginUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
      return res.status(404).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = user.generateAuthToken();
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ token, user });
  } catch (err) {
    next(err);
  }
};

// Get Profile
module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};

// Logout User
module.exports.logoutUser = async (req, res, next) => {
  try {
    res.clearCookie('token');
    const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1];

    if (token) {
      await BlacklistTokenModel.create({ token });
    }

    res.status(200).json({ message: 'Logout successful' });
  } catch (err) {
    next(err);
  }
};
