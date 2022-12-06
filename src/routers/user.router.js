const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { validateUser } = require('../middlewares');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/', validateUser, userController.createUser);

router.get('/', validateJWT, userController.getAllUsers);

module.exports = router;
