const { Router } = require("express");
const { auth } = require("../middleware/auth");
const DestinoController = require("../controllers/DestinoController");

const destinoRoutes = new Router();

destinoRoutes.post("/", auth, DestinoController.cadastrar);
destinoRoutes.get("/", auth, DestinoController.listarTodos);
destinoRoutes.get("/:usuario_id", auth, DestinoController.listarDestinosPorUsuario)
destinoRoutes.put("/:id", auth, DestinoController.atualizar); 
destinoRoutes.delete("/:id", auth, DestinoController.deletarUm);
destinoRoutes.delete("/", auth, DestinoController.deletarTodos);

module.exports = destinoRoutes;
