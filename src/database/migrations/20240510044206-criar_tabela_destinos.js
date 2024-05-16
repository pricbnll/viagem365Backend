'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('destinos',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        usuario_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
          references: {
            model:'usuarios',
            key:'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        destino: {
          allowNull: false,
          type: Sequelize.STRING
        },
        descricao: {
          allowNull: false,
          type: Sequelize.STRING
        },
        localidade: {
            allowNull: false,
            type: Sequelize.STRING
        },
        cep: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        coordenadas_geograficas: {
            allowNull: false,
            type: Sequelize.FLOAT
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('destinos');
  }
};