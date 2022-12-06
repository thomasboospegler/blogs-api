require('dotenv').config();
const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET;
const jwtConfig = { algorithm: 'HS256', expiresIn: '1d' };

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.getUserByEmail(email);
  if (!user || password !== user.password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = jwt.sign({ data: { email } }, secret, jwtConfig);
  return res.status(200).json({ token });
};

const createUser = async (req, res) => {
  const { displayName, email, password } = req.body;
  const user = await userService.createUser(displayName, email, password);
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  res.status(201).json({ token });
}

module.exports = {
  login,
  createUser,
};
