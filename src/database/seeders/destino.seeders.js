
const { QueryInterface, Sequelize } = require("sequelize");
const Destino = require("../../models/Destino");

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await Destino.bulkCreate([
            {
                usuario_id: 102,
                destino : "Mercado Público de Florianópolis",
                descricao : "O local é um verdadeiro centro de cultura, gastronomia e comércio. Os boxes e lojas oferecem desde   produtos artesanais, alimentos frescos, até souvenires típicos da região.",
                localidade : "Centro de Florianópolis/SC - Brasil",
                cep : 88010030,
                latitude : "-27.59587",
                longitude: "48.54972"
            },
            
            {
                usuario_id: 102,
                destino : "Dunas da Joaquina na Lagoa da Conceição",
                descricao: "As Dunas da Joaquina são uma impressionante formação natural localizada entre a Lagoa da Conceição e o mar. São famosas para a prática do “sandboard”, esporte em que as pessoas descem as dunas em pranchas.",
                localidade : "Lagoa da Conceição de Florianópolis/SC - Brasil",
                cep : 88048424,
                latitude : "27.4705",
                longitude: "48.3886"
            },
            
            {
                usuario_id:103,
                destino : "Ponte Hercílio Luz",
                descricao : "Símbolo da engenharia brasileira. Inaugurada em 1926, foi a primeira ligação rodoviária entre a ilha e o continente. A ponte é iluminada, o que a torna uma paisagem incrível de ser observada à noite, durante passeios e momentos de descanso.",
                localidade : "Centro de Florianópolis/SC - Brasil",
                cep : 88015601,
                latitude : "-27.593889",
                longitude: "-48.566111"
            }
        ])
    },

    down: async (queryInterface, Sequelize) => {
        await Destino.bulkDelete({
            where: {
                destino: [
                    "Mercado Público de Florianópolis", 
                    "Dunas da Joaquina na Lagoa da Conceição", 
                    "Ponte Hercílio Luz"
                ]
            }
        });
    }
};