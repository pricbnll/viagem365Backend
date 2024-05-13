const { Router } = require("express");
const usuarioRoutes = require("./usuarios.routes");
const loginRoutes = require("./login.routes");
const destinoRoutes = require("./destinos.routes");

const routes = Router();


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.use("/login", loginRoutes);
routes.use("/usuarios", usuarioRoutes);
routes.use("/local", destinoRoutes);


module.exports = routes;
