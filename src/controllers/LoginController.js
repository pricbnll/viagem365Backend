const Login = require("../models/Usuario");
const { sign } = require("jsonwebtoken");


class LoginController {
  async login(req, res) {
       /*
            #swagger.tags = ['Login'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Login de um novo Usuário',
                schema: {
                    $email: "pri@gmail.com",
                    $senha: "1111"    
                }
            }
        }
    */
    try {
      const email = req.body.email;
      const senha = req.body.senha;

      //----------Regras de validação devem ser implementadas, como evitar o cadastro de pessoas com o mesmo email.   UNIQUE
      
      if (!email) {
        return res.status(400).json({ mensagem: "O email é obrigatório" });
      }
      if (!senha) {
        return res.status(400).json({ mensagem: "O senha é obrigatório" });
      }
    
      const usuario = await Login.findOne({
        where: { email: email, senha: senha },
      });

      if (!usuario) {
        return res.status(404).json({
          error: "Nenhum usuario corresponde a email e senha fornecidos!",
        });
      }

      const payload = { sub: usuario.id, email: usuario.email, nome: usuario.nome, senha: usuario.senha };
      //console.log(payload)
      const token = sign(payload, process.env.SECRET_JWT);
      //console.log(token)
      res.status(200).json({ Token: token });

    } catch (error) {
      return res
        .status(500)
        .json({ error: error, message: "Algo deu errado no login!" });
    }
  }
}

module.exports = new LoginController();
