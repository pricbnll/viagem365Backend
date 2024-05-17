const axios = require("axios");
const Destino = require("../models/Destino");
const Usuario = require("../models/Usuario");

class DestinoController {
  async cadastrar(req, res) {
    /*
            #swagger.tags = ['Destino'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Cadastrar um novo destino',
                schema: {
                  $destino : "Mercado Público de Florianópolis",
                  $descricao : "O local é um verdadeiro centro de cultura, gastronomia e comércio. Os boxes e lojas oferecem desde   produtos artesanais, alimentos frescos, até souvenires típicos da região.",
                  $localidade : "Centro de Florianópolis/SC - Brasil",
                  $cep : 88010030,   
                }
            }
        }
    */
    try {
      const usuario_id = req.payload.sub;
      const { destino, descricao, localidade, cep } = req.body;

      if (!destino || !descricao || !localidade || !cep) {
        return res
          .status(400)
          .json({ mensagem: "Todos os campos são obrigatórios." });
      }

      if (String(cep).length !== 8) {
        return res
          .status(400)
          .json({ mensagem: "CEP deve ter exatamente 8 dígitos." });
      }

      const pesquisaCEP = await axios.get(
        `https://cep.awesomeapi.com.br/${cep}`
      );

      if (pesquisaCEP.data.length === 0) {
        return res.status(404).json("CEP inválido");
      }

      const { lat, lng } = pesquisaCEP.data;

      const destinoExistente = await Destino.findOne({
        where: {
          usuario_id,
          destino,
        },
      });

      if (destinoExistente) {
        return res
          .status(400)
          .json({ mensagem: "Este destino já foi cadastrado." });
      }

      const novoDestino = await Destino.create({
        usuario_id,
        destino,
        descricao,
        localidade,
        cep,
        latitude: lat,
        longitude: lng,
      });

      res.status(201).json(novoDestino);
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ mensagem: "Não foi possível cadastrar o destino." });
    }
  }

  async listarDestinosPorUsuario(req, res) {
    /*
            #swagger.tags = ['Destino'],
            #swagger.description ='Listar um destino por usuário'
    */

    const id = req.params;

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

  async listarTodos(req, res) {
    /*
            #swagger.tags = ['Destino'],
            #swagger.description ='Listar todos os destinos'
    */

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
    /*
          #swagger.tags = ['Destino'],
          #swagger.parameters['body'] = {
              in: 'body',
              description: 'Adiciona um novo destino',
              schema: {
                  {
                  $destino : "Mercado Público de Florianópolis",
                  $descricao : "O local é um centro de cultura, gastronomia e comércio. Os boxes e lojas oferecem desde   produtos artesanais, alimentos frescos, até souvenires típicos da região.",
                  $localidade : "Centro de Florianópolis/SC - Brasil",
                  $cep : 88010030,
                  $coordenadas_geograficas : "-27.59587,-48.55225"  
                  }
              }}
   */

    try {
      const { id } = req.params;

      const destino = await Destino.findByPk(id);

      const usuarioLogadoId = req.payload.sub;
      if (!(usuarioLogadoId == destino.usuario_id)) {
        return res
          .status(401)
          .json({ mensagem: "Não autorizado a atualizar este destino." });
      }

      if (!destino) {
        return res.status(404).json({ mensagem: "Destino não encontrado." });
      }
      destino.update(req.body);

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
    /*
            #swagger.tags = ['Destino'],
            #swagger.description ='Deletar um destino por id'
    */

    const { id } = req.params;
    try {
      const destino = await Destino.findByPk(id);

      const usuarioLogadoId = req.payload.sub;
      if (!(usuarioLogadoId == destino.usuario_id)) {
        return res
          .status(401)
          .json({ mensagem: "Não autorizado a deletar este destino." });
      }

      if (!destino) {
        return res.status(404).json({ mensagem: "Destino não encontrado." });
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
    /*
            #swagger.tags = ['Destino'],
            #swagger.description ='Deletar todos os destinos'
    */

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
