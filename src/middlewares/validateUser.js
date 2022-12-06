const { userSchema } = require('./schemas');
const userService = require('../services/user.service');

const validateUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  const { error } = userSchema.validate({ displayName, email, password});
  if (error) return res.status(400).json({ message: error.details[0].message });

  const user = await userService.getUserByEmail(email);
  if (user) return res.status(409).json({ message: 'User already registered' });

  next();
};

module.exports = validateUser;
