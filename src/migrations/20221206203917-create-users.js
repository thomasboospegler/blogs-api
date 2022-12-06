'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      displayName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'display_name',
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        unique: true,
        type: Sequelize.STRING,
      },
      image: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
