const { postService } = require('../services');

const createPost = async (req, res) => {
  const { data: { email } } = req.user;
  const postData = req.body;

  const newPost = await postService.createPost(postData, email);
  return res.status(201).json(newPost);
};

module.exports = {
  createPost,
};
