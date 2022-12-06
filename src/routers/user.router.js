const express = require('express');
const validateUser = require('../middlewares/validateUser');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/', validateUser, userController.createUser);
