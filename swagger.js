const swaggerAutogen =require('swagger-autogen')();
const {config} = require('dotenv')
config()

const doc ={
    info:{
        title:"Viagem 365",
        description: "O Viagem365 é uma plataforma que visa promover viagens sustentáveis e experiências positivas para os usuários, fornecendo acesso a informações sobre destinos turísticos, praias, atrações naturais e atividades recreativas.",
        version: "1.0.0"
    },
    host: `localhost:${process.env.PORT_API}`,
    security: [{"apiKeyAuth":[]}],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apikey',
            in:'header',
            name: 'authorization',
            description: 'Token de Autenticação'
        }
    }
};

const outputFile = './src/routes/swagger.json';
const routes = ['./src/server.js'];

swaggerAutogen(outputFile, routes,doc);
