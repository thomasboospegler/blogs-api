const { postService } = require('../services');

const createPost = async (req, res) => {
  const { data: { email } } = req.user;
  const postData = req.body;

  const newPost = await postService.createPost(postData, email);
  return res.status(201).json(newPost);
};

const getAllPosts = async (req, res) => {
  const allPosts = await postService.getAllPosts();
  return res.status(200).json(allPosts);
};

module.exports = {
  createPost,
  getAllPosts,
};
