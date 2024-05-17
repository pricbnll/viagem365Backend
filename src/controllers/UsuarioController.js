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

      res.status(201).json(usuario);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ mensagem: "Não possível cadastrar o usuário" });
    }
  }
}

function validarCPF(cpf) { 
  // Remover caracteres não numéricos do CPF
  cpf = cpf.replace(/\D/g, '');

  if (cpf.length !== 11) {
      return false;
  }
  // Verificar se todos os dígitos são iguais, o que tornaria o CPF inválido
  if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
  }
  // Calcular os dígitos verificadores
  let soma = 0;
  for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = soma % 11;
  let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

  soma = 0;
  for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = soma % 11;
  let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;
  // Verificar se os dígitos verificadores calculados são iguais aos dígitos verificadores do CPF
  if (parseInt(cpf.charAt(9)) !== digitoVerificador1 || parseInt(cpf.charAt(10)) !== digitoVerificador2) {
      return false;
  }

  return true;
}

module.exports = new UsuarioController();
