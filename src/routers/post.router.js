const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { validatePost } = require('../middlewares');
const { postController } = require('../controllers');

const router = express.Router();

router.post('/', validateJWT, validatePost, postController.createPost);

module.exports = router;
