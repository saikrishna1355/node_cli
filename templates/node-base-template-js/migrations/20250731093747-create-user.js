'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: { type: Sequelize.STRING, allowNull: false },
      user_name: { type: Sequelize.STRING, allowNull: false, unique: true },
      password: { type: Sequelize.STRING, allowNull: false },
      profile_path: { type: Sequelize.STRING, allowNull: true },
      first_name: { type: Sequelize.STRING, allowNull: false },
      middle_name: { type: Sequelize.STRING, allowNull: true },
      last_name: { type: Sequelize.STRING, allowNull: true },
      phone_number: { type: Sequelize.STRING, allowNull: false },
      is_active: {
        type: Sequelize.ENUM('0', '1'),
        defaultValue: '1',
      },
      hash_username: { type: Sequelize.STRING, allowNull: true },
      password_attempt_count: { type: Sequelize.STRING, allowNull: true },
      hash_generated_date: { type: Sequelize.DATE, allowNull: true },
      last_login: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      created_by: { type: Sequelize.INTEGER, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: true },
      updated_by: { type: Sequelize.INTEGER, allowNull: true },
      deleted_at: { type: Sequelize.DATE, allowNull: true },
      deleted_by: { type: Sequelize.INTEGER, allowNull: true },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  },
};
