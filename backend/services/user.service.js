const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');

// Service to create user
async function createUser({ fullname, email, password }) {
  if (!fullname?.firstname || !email || !password) {
    throw new Error('All required fields must be provided');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user
  const user = await userModel.create({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname,
    },
    email,
    password: hashedPassword,
  });

  return user;
}

// Export as object
module.exports = { createUser };

