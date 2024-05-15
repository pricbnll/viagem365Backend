const Usuario = require("../models/Usuario");
const Destino = require("../models/Destino");


class UsuarioController {
  async cadastrar(req, res) {

    try {
      const { nome, sexo, data_nascimento, endereco, cpf, email, senha } = req.body;
      
      if (!nome) {
        return res.status(400).json({ mensagem: "O nome é obrigatório" });
      }
      if (!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
        return res.status(400).json({
          mensagem: "A data de nascimento é obrigatória e não está no formato correto-ANO-MÊS=DIA",
        });
      }

      const cpfValido = validarCPF(cpf);
      if (!cpfValido) {
        return res.status(400).json({ error: "CPF inválido." });
      }
      console.log(cpfValido)

      if (!endereco) {
        return res.status(400).json({ mensagem: "O endereço é obrigatório." });
      }
      if (!email) {
        return res.status(400).json({ mensagem: "O email é obrigatório." });
      }
      if (!senha) {
        return res.status(400).json({ mensagem: "O senha é obrigatório." });
      } 
     
      const usuario = await Usuario.create({
        nome,
        sexo,
        data_nascimento,
        endereco,
        cpf,
        email,
        senha,
      });

      // console.log(usuario)

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
      const locaisAssociados = await Destino.findOne({ where: { usuario_id: id } });
      if (locaisAssociados) {
        return res.status(403).json({ mensagem: "Não é possível excluir o usuário porque existem locais associados a ele." });
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
}

function validarCPF(strCPF) { 
  var Soma;
  var Resto;
  Soma = 0;
if (strCPF == "00000000000") return false;

for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
  return true;
}


  //POTENCIAL!!!! que traz o req.payload : usuarioRoutes.get("/usuarios/alterar_senha", auth,  async (req, res) => {id = req.payload.sub


module.exports = new UsuarioController();
