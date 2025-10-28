'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [{
      email: 'admin@test.com',
      user_name: 'admin',
      password: await bcrypt.hash('Password@123', 10),
      profile_path: null,
      first_name: 'Admin',
      middle_name: null,
      last_name: 'Test',
      phone_number: '9876543210',
      is_active: '1',
      hash_username: null,
      password_attempt_count: null,
      hash_generated_date: null,
      last_login: new Date(),
      created_at: new Date(),
      created_by: 1,
      updated_at: null,
      updated_by: null,
      deleted_at: null,
      deleted_by: null,
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', { user_name: 'admin' });
  }
};
