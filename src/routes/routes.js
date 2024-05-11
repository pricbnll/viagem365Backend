const { Router } = require("express");
const usuarioRoutes = require("./usuarios.routes");
const destinoRoutes = require("./destinos.routes");

const routes = Router();

routes.use("/login", usuarioRoutes);
routes.use("/usuarios", usuarioRoutes);
routes.use("/destinos", destinoRoutes);

module.exports = routes;