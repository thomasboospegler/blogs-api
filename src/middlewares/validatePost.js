const { postSchema } = require('./schemas');
const { categoryService } = require('../services');

const validatePost = async (req, res, next) => {
  const postData = req.body;
  const { error } = postSchema.validate(postData);
  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const allCategories = await categoryService.getAllCategories();

  if (!postData.categoryIds.every((id) => allCategories.some((category) => category.id === id))) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

module.exports = validatePost;
