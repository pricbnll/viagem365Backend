const Destino = require("../models/Destino");
const Usuario = require("../models/Usuario");

class DestinoController {
  async cadastrar(req, res) {
    try {
      const usuario_id = req.body.usuario_id; //{id = req.payload.sub}
      const destino = req.body.destino;
      const descricao = req.body.descricao;
      const localidade = req.body.localidade;
      const cep = req.body.cep;
      const coordenadas_geograficas = req.body.coordenadas_geograficas;

      if (
        !usuario_id ||
        !destino ||
        !descricao ||
        !localidade ||
        !cep ||
        !coordenadas_geograficas
      ) {
        return res
          .status(400)
          .json({ mensagem: "Todos os campos são obrigatórios." });
      }

      if (String(cep).length !== 8) {
        return res
          .status(400)
          .json({ mensagem: "CEP deve ter exatamente 8 dígitos." });
      }

      const novoDestino = await Destino.create({
        usuario_id: usuario_id,
        destino: destino,
        descricao: descricao,
        localidade: localidade,
        cep: cep,
        coordenadas_geograficas: coordenadas_geograficas,
      });

      console.log(novoDestino);

      res.status(201).json(novoDestino);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ mensagem: "Não possível cadastrar o destino." });
    }
  }


  //----ver com id payload 
  // destinationRoute.get("/:destino_id", auth, async (req, res) => {
  //   try {
  //     const user_id = req.payload.sub;
  //     const destino_id = req.params.destino_id;
  
  //     const destino = await Destino.findOne({
  //       where: {
  //         id: destino_id,
  //         user_id: user_id,
  //       },
  //     });




  async listarDestinosPorUsuario(req, res) {
    const { id } = req.params;

    try {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado." });
      }

      const destinosPorUsuario = await Destino.findAll({
        where: { usuario_id: id },
      });

      res.status(200).json(destinosPorUsuario);
    } catch (error) {
      console.error("Erro ao buscar destinos do usuário:", error);
      res.status(500).json({ mensagem: "Erro ao buscar destinos do usuário." });
    }
  }

  async listarUm(req, res) {
    try {
      const { id } = req.params;

      const destino = await Destino.findByPk(id);

      if (!destino) {
        return res.status(404).json({ message: "Destino não encontrado!" });
      }

      res.json(destino);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: "Não possível listar o destino especifico",
        error: error,
      });
    }
  }

  async listarTodos(req, res) {
    try {
      const destino = await Destino.findAll();
      res.status(201).json(destino);
    } catch (error) {
      res
        .status(500)
        .json({ mensagem: "Não foi possível listar todos os destinos." });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;

      const destino = await Destino.findByPk(id);

      if (!destino) {
        return res.status(404).json({ mensagem: "Destino não encontrado." });
      }
      destino.update(req.body);

      console.log();
      await destino.save();

      res.status(200).json(destino);
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ mensagem: "Não foi possível atualizar o cadastro do destino" });
    }
  }

  async deletarUm(req, res) {
    const { id } = req.params;
    try {
      const destino = await Destino.findByPk(id);
      if (!destino) {
        return res.status(404).json({ mensagem: "destino não encontrado." });
      }

      await Destino.destroy({
        where: {
          id: id,
        },
      });

      res.status(204).json();
    } catch (error) {
      console.error("Erro ao deletar destino:", error);
      res.status(500).json({ mensagem: "Erro ao deletar destino." });
    }
  }

  async deletarTodos(req, res) {
    try {
      await Destino.destroy({
        where: {},
      });

      res
        .status(200)
        .json({ mensagem: "Todos os destinos foram deletados com sucesso." });
    } catch (error) {
      res.status(500).json({ mensagem: "Erro ao deletar destinos." });
    }
  }
}

module.exports = new DestinoController();

// //adiciona mascara de cep
// function MascaraCep(cep){
//     if(mascaraInteiro(cep)==false){
//     event.returnValue = false;
// }
// return formataCampo(cep, '00.000-000', event);
// }

// Funcionalidade Destino:
// Cada usuário pode cadastrar um ou mais locais de natureza, fornecendo informações detalhadas sobre cada destino.
// Informações como nome do destino, descrição, localidade, coordenadas geográficas, e outras devem ser capturadas.
// Regras específicas devem ser implementadas, como não permitir a deleção de um usuário que tenha locais associados.
