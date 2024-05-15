const { QueryInterface, Sequelize } = require("sequelize");
const Usuario = require("../../models/Usuario");


module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await Usuario.bulkCreate([
            {
                nome: "Pricila",
                sexo: "feminino",
                data_nascimento: "1999-09-12",
                endereco: "Rua Flor Brancas,3333 - Florianópolis/SC",
                cpf: "272.385.220-20",
                email: "priC@gmail.com",
                senha: "1111"
            },
            {
                nome: "Paulo",
                sexo: "masculino",
                data_nascimento: "1980-10-11",
                endereco: "Rua Madeiras,22 - Florianópolis/SC",
                cpf: "628.675.230-79",
                email: "paulo.p@gmail.com",
                senha: "2222" 
            }
        ])
    },

    down: async (QueryInterface, Sequelize) => {
        await Usuario.destroy({
            where: {
                email: [
                    "pri@gmail.com", 
                    "paulo@gmail.com"
                ] 
            }
        })
    }
}