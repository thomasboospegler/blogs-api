require('dotenv').config();
const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET;
const jwtConfig = { algorithm: 'HS256', expiresIn: '1d' };

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userService.createUser(name, email, password);
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  res.status(201).json({ token });
}

module.exports = {
  createUser,
};
