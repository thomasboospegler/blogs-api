const express = require('express');
const { validateUser } = require('../middlewares');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/', validateUser, userController.createUser);

module.exports = router;
