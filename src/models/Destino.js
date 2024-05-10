const { DataTypes } = require("DataTypes");
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
      coordenadas_geograficas: {
          type: DataTypes.FLOAT
      },
});

module.exports = Destino;