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
                cpf: "510.664.250-78",
                email: "pri@gmail.com",
                senha: "1111"
            },
            {
                nome: "Paulo",
                sexo: "masculino",
                data_nascimento: "1980-10-11",
                endereco: "Rua Madeiras,22 - Florianópolis/SC",
                cpf: "895.256.930-07",
                email: "paulo@gmail.com",
                senha: "2222" 
            }
        ])
    },

    down: async (QueryInterface, Sequelize) => {
        await Usuario.destroy({
            email: [
                "pri@gmail.com", 
                "paulo@gmail.com"
            ] 
        })
    }
}