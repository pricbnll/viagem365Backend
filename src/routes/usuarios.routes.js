const { Router } = require("express");
const { auth } = require("../middleware/auth");
const Usuario = require("../models/Usuario");
const UsuarioController = require("../controllers/UsuarioController");
const LoginController = require("../controllers/LoginController");

const usuarioRoutes = new Router();

usuarioRoutes.post("/", LoginController.login);
usuarioRoutes.post("/", UsuarioController.cadastrar)
usuarioRoutes.get("/", UsuarioController.listarTodos);
usuarioRoutes.delete("/", UsuarioController.deletarTodos);



// usuarioRoutes.get("/:id", auth, UsuarioController.listarUm);

// usuarioRoutes.put("/:id", auth, UsuarioController.atualizar);

// usuarioRoutes.delete("/:id", auth, UsuarioController.deletarUm);



module.exports = usuarioRoutes;