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

const getPostById = async (req, res) => {
  const { id } = req.params;

  const resultPostSearch = await postService.getPostById(id);
  if (!resultPostSearch) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(resultPostSearch);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  const newPost = await postService.updatePost(post, id);

  return res.status(200).json(newPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  await postService.deletePost(id);

  return res.sendStatus(204);
};

const searchPost = async (req, res) => {
  const { q } = req.query;

  const posts = await postService.searchPost(q);

  return res.status(200).json(posts);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPost,
};
