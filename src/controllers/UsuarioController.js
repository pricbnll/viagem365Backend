const Usuario = require("../models/Usuario");

class UsuarioController {
  async cadastrar(req, res) {
    try {
      const nome = req.body.nome;
      const sexo = req.body.sexo;
      const data_nascimento = req.body.data_nascimento;
      const endereco = req.body.endereco;
      const cpf = req.body.cpf;
      const email = req.body.email;
      const senha = req.body.senha;

    
      if (!nome) {
        return res.status(400).json({ mensagem: "O nome é obrigatório" });
      }
      if (!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
        return res.status(400).json({
          mensagem: "A data de nascimento é obrigatória e não está no formato correto-ANO-MÊS=DIA",
        });
      }

      //----------------------Regras de validação devem ser implementadas, como evitar o cadastro de pessoas com o mesmo CPF 
     
      if (!cpf) {
        return res.status(400).json({ error: "CPF é obrigatório" });
      }
      if (!endereco) {
        return res.status(400).json({ mensagem: "O endereco é obrigatório" });
      }
      if (!email) {
        return res.status(400).json({ mensagem: "O email é obrigatório" });
      }
      if (!senha) {
        return res.status(400).json({ mensagem: "O senha é obrigatório" });
      } 
     
      const usuario = await Usuario.create({
        nome: nome,
        sexo: sexo,
        data_nascimento: data_nascimento,
        endereco: endereco,
        cpf: cpf,
        email: email,
        senha: senha,
      });

      console.log(usuario)

      res.status(201).json(usuario);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ mensagem: "Não possível cadastrar o usuário" });
    }
  }

  async listarTodos(req, res) {
    try {
      const usuario = await Usuario.findAll();
      res.status(201).json(usuario);
    } catch (error) {
      res
        .status(500)
        .json({ mensagem: "Não foi possível listar todos os usuários" });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;

      const usuario = await Usuario.findByPk(id);

      if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
      }
      usuario.update(req.body);

      await usuario.save();

      res.status(200).json(usuario);
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ mensagem: "Não foi possível atualizar o cadastro do usuário" });
    }
  }


  async deletarUm(req, res) {
    const { id } = req.params;
    try {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado." });
      }
    
      await Usuario.destroy({
        where: {
          id: id,
        },
      });

      res.status(204).json();
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      res.status(500).json({ mensagem: "Erro ao deletar usuário." });
    }
  }

  async deletarTodos(req, res) {
    try {
      await Usuario.destroy({
        where: {}, 
      });

      res
        .status(200)
        .json({ mensagem: "Todos os usuários foram deletados com sucesso." });
    } catch (error) {
      res.status(500).json({ mensagem: "Erro ao deletar usuários." });
    }
  }


  //POTENCIAL!!!! que traz o req.payload : usuarioRoutes.get("/usuarios/alterar_senha", auth,  async (req, res) => {id = req.payload.sub


}
module.exports = new UsuarioController();
