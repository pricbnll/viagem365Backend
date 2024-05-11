const { Router } = require("express");
const usuarioRoutes = require("./usuarios.routes");
const loginRoutes = require("./login.routes");
const destinoRoutes = require("./destinos.routes");

const routes = Router();

routes.use("/login", loginRoutes);
routes.use("/usuarios", usuarioRoutes);
routes.use("/destinos", destinoRoutes);

module.exports = routes