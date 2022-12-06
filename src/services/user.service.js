const { User } = require('../models');

const createUser = async (name, email, password) => {
  const user = await User.create({ displayName: name, email, password });
  return user;
};

module.exports = {
  createUser,
};
