const { User } = require('../models');

const createUser = async (displayName, email, password) => {
  const user = await User.create({ displayName, email, password });
  return user;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

module.exports = {
  createUser,
  getUserByEmail,
  getAllUsers,
};
