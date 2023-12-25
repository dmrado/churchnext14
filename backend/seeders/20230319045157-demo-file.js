'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Files', [{
       id: 1,
       userId: 1,
       name: "1679161238586_471-200x250.jpg",
       path: "/storage/1/1679161238586_471-200x250.jpg",
       type: 'IMAGE',
       createdAt: new Date(),
       updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Files', null, {})

  }
};
