"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("destinos", "coordenadas_geograficas");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("destinos", "coordenadas_geograficas", {
      allowNull: false,
      type: Sequelize.STRING,
    });
  },
};
