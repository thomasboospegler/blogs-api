const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { validatePost } = require('../middlewares');
const { postController } = require('../controllers');

const router = express.Router();

router.post('/', validateJWT, validatePost, postController.createPost);

router.get('/', validateJWT, postController.getAllPosts);

router.get('/:id', validateJWT, postController.getPostById);

module.exports = router;
