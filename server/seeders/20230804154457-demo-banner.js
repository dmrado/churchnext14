'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Settings", [{
      setting_name: 'main-banner',
      setting_value: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Settings', null, {})

  }
};
