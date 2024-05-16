const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");

const Destino = connection.define("destinos", {
    usuario_id: {
        type: DataTypes.INTEGER,
      },
      destino: {
        type: DataTypes.STRING
      },
      descricao: {
        type: DataTypes.STRING
      },
      localidade: {
          type: DataTypes.STRING
      },
      cep: {
          type: DataTypes.INTEGER
      },
      latitude: {
          type: DataTypes.STRING
      },
      longitude: {
        type: DataTypes.STRING
    },
});

module.exports = Destino;