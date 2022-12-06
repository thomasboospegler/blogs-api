const { User } = require('../models');

const createUser = async (name, email, password) => {
  const user = await User.create({ displayName: name, email, password });
  return user;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  createUser,
  getUserByEmail,
};
