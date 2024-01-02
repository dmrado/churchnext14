'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Files', [{
       id: 1,
       userId: 1,
       name: "1679161238586_471-200x250.jpg",
       path: "/img/aboutpage/1.webp",
       type: 'IMAGE',
       createdAt: new Date(),
       updatedAt: new Date(),
     }], {});
    await queryInterface.bulkInsert('Files', [{
      id: 2,
      userId: 1,
      name: "1679161238586_471-200x250.jpg",
      path: "/img/aboutpage/2.webp",
      type: 'IMAGE',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Files', [{
      id: 3,
      userId: 1,
      name: "1679161238586_471-200x250.jpg",
      path: "/img/aboutpage/3.webp",
      type: 'IMAGE',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Files', [{
      id: 4,
      userId: 1,
      name: "1679161238586_471-200x250.jpg",
      path: "/img/aboutpage/4.webp",
      type: 'IMAGE',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Files', [{
      id: 5,
      userId: 1,
      name: "1679161238586_471-200x250.jpg",
      path: "/img/aboutpage/5.webp",
      type: 'IMAGE',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Files', null, {})

  }
};
