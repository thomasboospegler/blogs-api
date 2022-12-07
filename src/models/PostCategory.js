module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
    modelName: 'PostCategory',
  });
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostCategory;
};
