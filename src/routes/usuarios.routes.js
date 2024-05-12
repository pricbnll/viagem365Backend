const { Router } = require("express");
const { auth } = require("../middleware/auth");
const Usuario = require("../models/Usuario");
const UsuarioController = require("../controllers/UsuarioController");

const usuarioRoutes = new Router();

usuarioRoutes.post("/", UsuarioController.cadastrar);



usuarioRoutes.get("/", auth, UsuarioController.listarTodos);
usuarioRoutes.put("/:id", auth, UsuarioController.atualizar);
usuarioRoutes.delete("/:id", auth, UsuarioController.deletarUm);
usuarioRoutes.delete("/", auth, UsuarioController.deletarTodos);

module.exports = usuarioRoutes;