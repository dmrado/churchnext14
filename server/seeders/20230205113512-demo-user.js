'use strict';
const mail_data = require('../config/mail.json')

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [{
            id: 1,
            email: mail_data.auth.user,
            password: mail_data.auth.pass,
            role: "ADMIN",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {})
    }
};
