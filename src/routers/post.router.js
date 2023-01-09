const express = require('express');
const validateJWT = require('../auth/validateJWT');
const validatePermission = require('../auth/validatePermission');
const { validatePost, validatePostEdit } = require('../middlewares');
const { postController } = require('../controllers');

const router = express.Router();

router.post('/', validateJWT, validatePost, postController.createPost);

router.get('/search', validateJWT, postController.searchPost);

router.get('/', validateJWT, postController.getAllPosts);

router.get('/:id', validateJWT, postController.getPostById);

router.put('/:id', validateJWT, validatePermission, validatePostEdit, postController.updatePost);

router.delete('/:id', validateJWT, validatePermission, postController.deletePost);

module.exports = router;
