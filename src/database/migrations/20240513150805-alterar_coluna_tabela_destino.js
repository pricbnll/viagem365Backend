'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('destinos', 'longitude', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('destinos', 'latitude', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('destinos', 'longitude');

    await queryInterface.removeColumn('destinos', 'latitude');
  }
};
