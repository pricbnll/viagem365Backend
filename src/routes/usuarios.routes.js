const { Router } = require("express");
const { auth } = require("../middleware/auth");
const Usuario = require("../models/Usuario");
const UsuarioController = require("../controllers/UsuarioController");

const usuarioRoutes = new Router();

usuarioRoutes.post("/", UsuarioController.cadastrar
      /*
            #swagger.tags = ['Usuario'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Adiciona um novo Usuário',
                schema: {
                    $nome: "Pricila",
                    sexo: "feminino",
                    $data_nascimento: "1999-09-12",
                    $endereco: "Rua Flor Brancas,3333 - Florianópolis/SC",
                    $cpf: "510.664.250-78",
                    $email: "pri@gmail.com",
                    $senha: "1111"    
}
            }
        }
    */
);



usuarioRoutes.get("/", auth, UsuarioController.listarTodos
     /*
            #swagger.tags = ['Usuario'],
            #swagger.description = 'Listar todos os usuário'
    */
);
usuarioRoutes.put("/:id", auth, UsuarioController.atualizar
     /*
            #swagger.tags = ['Usuario'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Atualizar um novo Usuário',
                schema: {
                    $nome: "Pricila",
                    sexo: "feminino",
                    $data_nascimento: "1980-09-12",
                    $endereco: "Rua Flor Brancas,3333 - Florianópolis/SC",
                    $cpf: "510.664.250-78",
                    $email: "pri@gmail.com",
                    $senha: "1111"    
}
            }
        }
    */
);
usuarioRoutes.delete("/:id", auth, UsuarioController.deletarUm
     /*
            #swagger.tags = ['Usuario'],
            #swagger.description =  'Deletar um usuário especifico',
            
    */
);
usuarioRoutes.delete("/", auth, UsuarioController.deletarTodos
    /*
            #swagger.tags = ['Usuario'],
            #swagger.description = 'Deletar todos os usuário'
    */
);

module.exports = usuarioRoutes;